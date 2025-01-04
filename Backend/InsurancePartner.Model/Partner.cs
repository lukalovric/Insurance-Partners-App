using System.ComponentModel.DataAnnotations;

namespace InsurancePartner.Model
{
    public class Partner
    {
        public int Id { get; set; }
        [Required, MinLength(2), MaxLength(255)]
        public string FirstName { get; set; }
        [Required, MinLength(2), MaxLength(255)]
        public string LastName { get; set; }
        public string Address { get; set; }
        [Required, StringLength(20)]
        public string PartnerNumber { get; set; }
        public string CroatianPIN { get; set; }
        [Required]
        public int PartnerTypeId { get; set; }
        public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
        [Required, MaxLength(255)]
        public string CreateByUser { get; set; }
        [Required]
        public bool IsForeign { get; set; }
        [MinLength(10), MaxLength(20)]
        public string ExternalCode { get; set; }
        [Required, RegularExpression("^[MFN]$")]
        public string Gender { get; set; }
    }

}
