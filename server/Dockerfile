FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine
WORKDIR /app
COPY . /app
EXPOSE 8080
ENV PATH="${PATH}:/root/.dotnet/tools"
RUN dotnet tool install --global dotnet-ef && dotnet restore && dotnet build