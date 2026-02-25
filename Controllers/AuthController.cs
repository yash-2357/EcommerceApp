using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ChairShop.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ChairShop.Controllers {
  [ApiController]
  [Route("api/[controller]")]
  public class AuthController : ControllerBase {

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDTO credentials) {
      if(credentials.UserName != "yash" || credentials.Password != "12345678") {
        return Unauthorized("Invalid credentials");
      }

      var token = GenerateJwtToken(credentials);

      return Ok(new { token });
    }

    private object GenerateJwtToken(LoginDTO credentials) {
      var claims = new[] {
        new Claim(ClaimTypes.Name, credentials.UserName),
        new Claim(ClaimTypes.Role, "Admin")
      };

      var key = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes("THIS_IS_MY_SUPER_SECRET_KEY_1234567890"));

      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

      var token = new JwtSecurityToken(
        issuer: "myApp",
        audience: "myApp",
        claims: claims,
        expires: DateTime.Now.AddMinutes(30),
        signingCredentials: creds);

      return new JwtSecurityTokenHandler().WriteToken(token); ;
    }
  }
}
