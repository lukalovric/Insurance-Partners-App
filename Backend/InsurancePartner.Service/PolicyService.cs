using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsurancePartner.Model;
using InsurancePartner.Repository.Common;
using InsurancePartner.Service.Common;

namespace InsurancePartner.Service
{
    public class PolicyService : IPolicyService
    {
        private readonly IPolicyRepository _policyRepository;

        public PolicyService(IPolicyRepository policyRepository)
        {
            _policyRepository = policyRepository;
        }

        public Task<int> CreatePolicyAsync(Policy policy)
        {
            return _policyRepository.CreatePolicyAsync(policy);
        }
        public Task<bool> HasSpecialMarkAsync(int partnerId)
        {
            return _policyRepository.HasSpecialMarkAsync(partnerId);
        }
    }
}
