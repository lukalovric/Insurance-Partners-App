using Microsoft.AspNetCore.Mvc;
using InsurancePartner.Model;
using InsurancePartner.Service.Common;

namespace InsurancePartner.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PartnerController : ControllerBase
    {
        private readonly IPartnerService _partnerService;

        public PartnerController(IPartnerService partnerService)
        {
            _partnerService = partnerService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPartners()
        {
            var partners = await _partnerService.GetAllPartnersAsync();
            return Ok(partners);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPartnerById(int id)
        {
            var partner = await _partnerService.GetPartnerByIdAsync(id);
            if (partner == null) return NotFound();
            return Ok(partner);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePartner([FromBody] Partner partner)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var newId = await _partnerService.CreatePartnerAsync(partner);
            partner.Id = newId;

            return CreatedAtAction(nameof(GetPartnerById), new { id = newId }, partner);
        }
    }
}
