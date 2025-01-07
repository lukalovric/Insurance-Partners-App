using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InsurancePartner.Model;

namespace InsurancePartner.Repository.Common
{
    public interface IPartnerRepository
    {
        Task<IEnumerable<Partner>> GetAllPartnersAsync();
        Task<Partner> GetPartnerByIdAsync(int id);
        Task<int> CreatePartnerAsync(Partner partner);
    }
}
