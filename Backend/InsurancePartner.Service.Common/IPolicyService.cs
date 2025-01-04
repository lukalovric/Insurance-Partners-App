using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsurancePartner.Model;

namespace InsurancePartner.Service.Common
{
    public interface IPolicyService
    {
        Task<int> CreatePolicyAsync(Policy policy);

    }
}
