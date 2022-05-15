using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Profiles;
using server.Services.Basket;

namespace server.Services;

public static class ExtensionServices
{
    public static IServiceCollection AddServiceCollection(this IServiceCollection services, IConfiguration config)
    {
        services.AddControllers();
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        services.AddDbContext<StoreContext>(opt =>
        {
            opt.UseNpgsql(config.GetConnectionString("DefaultConnection"));
        });
        services.AddHttpContextAccessor();
        services.AddAutoMapper(typeof(MappingProfiles));
        services.AddScoped<IBasketService, BasketService>();
        services.AddCors();



        return services;
    }
}