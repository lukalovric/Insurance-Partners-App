using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InsurancePartner.Model
{
    public class Policy
    {
        public int Id { get; set; }
        [Required, MinLength(10), MaxLength(15)]
        public string PolicyNumber { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public int PartnerId { get; set; }
    }
}
