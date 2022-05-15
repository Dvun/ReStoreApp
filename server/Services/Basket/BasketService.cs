using AutoMapper;
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

    
    // public Task AddItemToBasket(int productId, int quantity)
    // {
    //     throw new NotImplementedException();
    // }

    
    public async Task<BasketDto> GetBasket()
    {
        var basket = await RetrieveBasket();
        return new BasketDto()
        {
            Id = basket.Id,
            BuyerId = basket.BuyerId,
            BasketItemDto = basket.BasketItems.Select(item => new BasketItemDto
            {
                ProductId = item.ProductId,
                Name = item.Product.Name,
                Price = item.Product.Price,
                PictureUrl = item.Product.PictureUrl,
                Type = item.Product.Type,
                Brand = item.Product.Brand,
                Quantity = item.Quantity
            }).ToList()
        };
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