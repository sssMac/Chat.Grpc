using System.Net;
using Chat.Grpc.Server.Services;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Server.Kestrel.Core;

var builder = WebApplication.CreateBuilder(args);


builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
	options.ForwardedHeaders =
		ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
});
builder.Services.AddGrpc();
builder.Services.AddCors();

var app = builder.Build();

app.UseRouting();
app.UseForwardedHeaders();
app.UseGrpcWeb();

app.UseEndpoints(endpoints =>
{
	endpoints.MapGrpcService<ChatService>().EnableGrpcWeb();
});

app.Run();
