using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Profiles;

namespace server.services;

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
        services.AddAutoMapper(typeof(MappingProfiles));
        services.AddCors();



        return services;
    }
}