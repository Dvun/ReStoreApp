using server.Data.DTOs;

namespace server.Services.Basket;

public interface IBasketService
{
    Task AddItemToBasket(int productId, int quantity);
    Task<BasketDto> GetBasket();
}