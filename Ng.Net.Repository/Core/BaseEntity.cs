using System;
using System.ComponentModel.DataAnnotations;

namespace Ng.Net.Repository.Core
{
    public class BaseEntity
    {
        [Key, Required, MaxLength(40)]
        public string Id { get; set; }

        [DataType(DataType.DateTime), Required]
        public DateTime CreateDate { get; set; }
    }
}
