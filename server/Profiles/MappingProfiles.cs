using AutoMapper;
using server.Data.DTOs;
using server.Data.Entities;

namespace server.Profiles;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Basket, BasketDto>().ReverseMap();
        CreateMap<BasketItem, BasketItemDto>().ReverseMap();
        CreateMap<Product, ProductDto>().ReverseMap();
    }
}