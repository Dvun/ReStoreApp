using Microsoft.EntityFrameworkCore;
using server.Entities;

namespace server.Data;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options){}
    
    public DbSet<Product> Products { set; get; }
    public DbSet<Basket> Baskets { set; get; }
    public DbSet<BasketItem> BasketItems { set; get; }
}