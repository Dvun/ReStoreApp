using Microsoft.AspNetCore.Mvc;
using server.Data.DTOs;
using server.Services.Basket;

namespace server.Controllers;

public class BasketController : BaseApiController
{
    private readonly IBasketService _basketService;
    public BasketController(IBasketService basketService)
    {
        _basketService = basketService;
    }


    [HttpGet]
    public async Task<ActionResult<BasketDto>> GetBasket()
    {
        var basket = await _basketService.GetBasket();
        if (basket == null) return NotFound();
        return basket;
    }


    // [HttpPost]
    // public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
    // {
    //     var basket = await RetrieveBasket() ?? CreateBasket();
    //     var product = await _context.Products.FindAsync(productId);
    //     if (product == null) return NotFound();
    //     basket.AddItem(product, quantity);
    //     var result = await _context.SaveChangesAsync() > 0;
    //     if (result) return StatusCode(201);
    //     return BadRequest(new ProblemDetails(){Title = "Problem saving product to basket!"});
    // }
    //
    //
    // [HttpDelete]
    // public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
    // {
    //     var basket = await RetrieveBasket();
    //     if (basket == null) return NotFound();
    //     basket.RemoveItem(productId, quantity);
    //     var result = await _context.SaveChangesAsync() > 0;
    //     if (result) return Ok();
    //     return BadRequest(new ProblemDetails {Title = "Problem removing item from the basket!"});
    // }


    
}