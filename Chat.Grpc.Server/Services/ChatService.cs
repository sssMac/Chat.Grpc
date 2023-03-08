using ChatGrpc;
using Grpc.Core;

namespace Chat.Grpc.Server.Services
{
	public class ChatService : ChatGrpc.ChatService.ChatServiceBase
	{
		private readonly ILogger<ChatService> _logger;
		private UserList _users;
		private List<IServerStreamWriter<ChatMessage>> _obsevers;
		public ChatService(ILogger<ChatService> logger)
		{
			_logger = logger;
			_users = new UserList();
			_obsevers = new List<IServerStreamWriter<ChatMessage>>();
		}

		public override Task<JoinResponse> Join(User user, ServerCallContext context)
		{
			var existUser = _users.Users.Any(x => x.Id == user.Id);

			if (!existUser)
			{
				_users.Users.Add(user);
				_logger.LogInformation($"{user.Name} joined to chat!");

				return Task.FromResult(new JoinResponse
				{
					Msg = $"{user.Name} joined to chat!"
				});
			}
			else
			{
				_logger.LogInformation($"{user.Name} is exist!");
				return Task.FromResult(new JoinResponse
				{
					Error = 1,
					Msg = $"User is exist!"
				});
			}
		}

		public override Task<Empty> SendMsg(ChatMessage chatMessage, ServerCallContext context)
		{
			_obsevers.ForEach(async observer =>
			{
				await observer.WriteAsync(chatMessage);
			});

			return Task.FromResult(new Empty { });
		}

		public override Task<Empty> ReceiveMsg(Empty _, IServerStreamWriter<ChatMessage> responseStream, ServerCallContext context)
		{
			_obsevers.Add(responseStream);
			return Task.FromResult(new Empty { });
		}

		public override Task<UserList> GetAllUsers(Empty _,  ServerCallContext context)
		{

			return Task.FromResult(_users);
		}
	}
}
