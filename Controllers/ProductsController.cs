using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChairShop.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(Roles = "Admin")]
  public class ProductsController : ControllerBase {

    [HttpGet("products")]
    public IActionResult GetProducts() {
      string[] products =
        {
            "Office Chair",
            "Dining Chair",
            "Recliner",
            "Rocking Chair",
            "Folding Chair",
            "Gaming Chair",
            "Armchair",
            "Bar Stool"
        };

      return Ok(products);
    }
  }
}
