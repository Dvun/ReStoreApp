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
        return await _basketService.GetBasket();
    }


    [HttpPost]
    public async Task AddItemToBasket(int productId, int quantity)
    {
        await _basketService.AddItemToBasket(productId, quantity);
    }
    
    
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