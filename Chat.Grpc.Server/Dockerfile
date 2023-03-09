#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Chat.Grpc.Server/Chat.Grpc.Server.csproj", "Chat.Grpc.Server/"]
RUN dotnet restore "Chat.Grpc.Server/Chat.Grpc.Server.csproj"
COPY . .
WORKDIR "/src/Chat.Grpc.Server"
RUN dotnet build "Chat.Grpc.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Chat.Grpc.Server.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Chat.Grpc.Server.dll"]