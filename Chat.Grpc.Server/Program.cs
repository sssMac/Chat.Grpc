using System.Net;
using Chat.Grpc.Server.Services;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddGrpc();
builder.Services.AddCors();

var app = builder.Build();

app.UseRouting();
//app.UseHttpsRedirection();
app.UseGrpcWeb();
app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true)
                .AllowCredentials());
app.UseEndpoints(endpoints =>
{
	endpoints.MapGrpcService<ChatService>().EnableGrpcWeb();
});

app.Run();
