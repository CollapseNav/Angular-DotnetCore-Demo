using System.ComponentModel.DataAnnotations;
using Ng.Net.Repository.Core;

namespace Ng.Net.Repository.Domain
{
    public class UserInfo : BaseEntity
    {
        [Required, MaxLength(40)]
        public string UserAccount { get; set; }

        [MaxLength(18)]
        public string UserName { get; set; }

        [Required, MaxLength(30)]
        public string PassWord { get; set; }

        [MaxLength(11)]
        public string PhoneNumber { get; set; }

        [MaxLength(1)]
        public string Gender { get; set; }

    }
}
