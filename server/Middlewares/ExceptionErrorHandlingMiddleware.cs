using System.Net;
using System.Text.Json;

namespace server.Middlewares;

public class ExceptionErrorHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionErrorHandlingMiddleware> _logger;

    public ExceptionErrorHandlingMiddleware(RequestDelegate next, ILogger<ExceptionErrorHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task Invoke(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception error)
        {
            var response = httpContext.Response;
            response.ContentType = "application/json";

            switch (error)
            {
                case ApplicationException e:
                    response.StatusCode = (int)HttpStatusCode.BadRequest;
                    break;

                case KeyNotFoundException e:
                    response.StatusCode = (int)HttpStatusCode.NotFound;
                    break;

                default:
                    response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    break;
            }

            var result = JsonSerializer.Serialize(new { errMessage = error?.Message });
            await response.WriteAsync(result);
        }
    }
}