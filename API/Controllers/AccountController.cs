using System.Security.Cryptography;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using API.DTOs;


namespace API.Controllers;

public class AccountController(AppDbContext context) : BaseApiController
{
    [HttpPost("register")]
    public async Task<ActionResult<AppUser>> Register(RegisterRequest request)
    {
        using var hmac = new HMACSHA512();

        var user = new AppUser
        {
            DisplayName = request.DisplayName,
            Email = request.Email,
            PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(request.Password)),
            PasswordSalt = hmac.Key
        };

        context.Users.Add(user);
        await context.SaveChangesAsync();

        return user;
    }
}