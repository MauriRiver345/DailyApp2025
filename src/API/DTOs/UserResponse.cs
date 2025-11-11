using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;

namespace API.DTOs
{
    public class UserResponse
    {
        public required string Id { get; set; }

        public required string Email { get; set; }

        public required string DisplayName { get; set; }

        public string? ImageUrl { get; set; }

        public required string Token { get; set; }
    }
}