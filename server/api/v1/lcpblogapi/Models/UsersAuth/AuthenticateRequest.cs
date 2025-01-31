namespace lcpblogapi.Models.UsersAuth;
using System.ComponentModel.DataAnnotations;

public class AuthenticateRequest
{
    public string? Username { get; set; }
    public string? Email { get; set; }

    [Required]
    public string Password { get; set; } = null!;
}