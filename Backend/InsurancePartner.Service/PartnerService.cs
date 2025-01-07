using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsurancePartner.Model;
using InsurancePartner.Service.Common;
using InsurancePartner.Repository.Common;

namespace InsurancePartner.Service
{
    public class PartnerService : IPartnerService
    {
        private readonly IPartnerRepository _partnerRepository;

        public PartnerService(IPartnerRepository partnerRepository)
        {
            _partnerRepository = partnerRepository;
        }

        public Task<IEnumerable<Partner>> GetAllPartnersAsync()
        {
            return _partnerRepository.GetAllPartnersAsync();
        }

        public Task<Partner> GetPartnerByIdAsync(int id)
        {
            return _partnerRepository.GetPartnerByIdAsync(id);
        }

        public Task<int> CreatePartnerAsync(Partner partner)
        {
            return _partnerRepository.CreatePartnerAsync(partner);
        }
    }
}
