using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Middlewares;
using server.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddServiceCollection(builder.Configuration);



var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
if (app.Environment.IsDevelopment())
{
    using (var scope = app.Services.CreateScope())
    {
        var dataContext = scope.ServiceProvider.GetRequiredService<StoreContext>();
        dataContext.Database.Migrate();
    }
    DbInitializer.Initialize(app);
    app.UseSwagger();
    app.UseSwaggerUI();
}


// app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(opt => opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));
app.MapControllers();
app.Run();