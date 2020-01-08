using System;
using Ng.Net.Repository.Domain;

namespace Ng.Net.Application.ReceiveData
{
    public class EditData
    {
        // public string id { get; set; }
        public string userAccount { get; set; }
        public string userName { get; set; }
        // public string gender { get; set; }
        // public string password { get; set; }
        // public string createDate { get; set; }
        public string phoneNumber { get; set; }

        public UserInfo GetUserInfo()
        {
            return new UserInfo { UserAccount = userAccount, UserName = userName, PhoneNumber = phoneNumber };
        }
    }
}
