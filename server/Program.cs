using server.Data;
using server.Middlewares;
using server.services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddServiceCollection(builder.Configuration);



var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
if (app.Environment.IsDevelopment())
{
    DbInitializer.Initialize(app);
    app.UseSwagger();
    app.UseSwaggerUI();
}


// app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(opt => opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));
app.MapControllers();
app.Run();