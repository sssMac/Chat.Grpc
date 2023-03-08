using ChatGrpc;
using Grpc.Core;

namespace Chat.Grpc.Server.Services
{
	public class ChatService : ChatGrpc.ChatService.ChatServiceBase
	{
		private readonly ILogger<ChatService> _logger;
		private List<>
		public ChatService(ILogger<ChatService> logger)
		{
			_logger = logger;
		}

		public override Task<JoinResponse> Join(User user, ServerCallContext context)
		{
			
		}

		public override Task<Empty> SendMsg(ChatMessage chatMessage, ServerCallContext context)
		{

		}

		public override Task<ChatMessage> ReceiveMsg(Empty _, ServerCallContext context)
		{

		}

		public override Task<UserList> GetAllUsers(Empty _, ServerCallContext context)
		{

		}
	}
}
