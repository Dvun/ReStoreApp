using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Entities;

namespace server.Controllers;

public class ProductController : BaseApiController
{
    private readonly StoreContext _context;
    public ProductController(StoreContext context)
    {
        _context = context;
    }


    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
        return await _context.Products.ToListAsync();
    }

    
    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(int id)
    {
        return await _context.Products.FindAsync(id);
    }
}