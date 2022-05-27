using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Data.DTOs;

namespace server.Services.Basket;

public class BasketService : IBasketService
{
    private readonly StoreContext _context;
    private readonly IMapper _mapper;
    private readonly IHttpContextAccessor _httpContextAccessor;
    public BasketService(StoreContext context, IMapper mapper, IHttpContextAccessor httpContextAccessor)
    {
        _context = context;
        _mapper = mapper;
        _httpContextAccessor = httpContextAccessor;
    }

    
    public async Task AddItemToBasket(int productId, int quantity)
    {
        var basket = await RetrieveBasket() ?? CreateBasket();
        var product = await _context.Products.FindAsync(productId);
        if (product == null) throw new KeyNotFoundException();
        basket.AddItem(product, quantity);
        var result = await _context.SaveChangesAsync() > 0;
        throw new ApplicationException("Problem saving product to basket!");
    }

    
    public async Task<BasketDto> GetBasket()
    {
        var basket = await RetrieveBasket();
        if (basket == null) throw new KeyNotFoundException();
        return _mapper.Map<BasketDto>(basket);
        // return new BasketDto()
        // {
        //     Id = basket.Id,
        //     BuyerId = basket.BuyerId,
        //     BasketItemDto = basket.BasketItems.Select(item => new BasketItemDto
        //     {
        //         ProductId = item.ProductId,
        //         Name = item.Product.Name,
        //         Price = item.Product.Price,
        //         PictureUrl = item.Product.PictureUrl,
        //         Type = item.Product.Type,
        //         Brand = item.Product.Brand,
        //         Quantity = item.Quantity
        //     }).ToList()
        // };
    }
    
    
    private async Task<Data.Entities.Basket> RetrieveBasket()
    {
        return await _context.Baskets
            .Include(i => i.BasketItems)
            .ThenInclude(p => p.Product)
            .FirstOrDefaultAsync(x => x.BuyerId == _httpContextAccessor.HttpContext.Request.Cookies["buyerId"]);
    }

    private Data.Entities.Basket CreateBasket()
    {
        var buyerId = Guid.NewGuid().ToString();
        var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTimeOffset.Now.AddDays(30) };
        _httpContextAccessor.HttpContext.Response.Cookies.Append("buyerId", buyerId, cookieOptions);
        var basket = new Data.Entities.Basket() {BuyerId = buyerId};
        _context.Baskets.Add(basket);
        return basket;
    }
}