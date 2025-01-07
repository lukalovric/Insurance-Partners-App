using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsurancePartner.Model;

namespace InsurancePartner.Repository.Common
{
    public interface IPolicyRepository
    {
        Task<int> CreatePolicyAsync(Policy policy);
        Task<bool> HasSpecialMarkAsync(int PartnerId);

    }
}
