using Microsoft.AspNetCore.Mvc;
using InsurancePartner.Service.Common;
using InsurancePartner.Model;

namespace InsurancePartner.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PolicyController : ControllerBase
    {
        private readonly IPolicyService _policyService;

        public PolicyController(IPolicyService policyService)
        {
            _policyService = policyService;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePolicy([FromBody] Policy policy)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var newId = await _policyService.CreatePolicyAsync(policy);
            policy.Id = newId;

            return Ok(policy);
        }
    }
}
