using System;
using Ng.Net.Repository.Domain;

namespace Ng.Net.Application.ReceiveData
{
    public class SignUpData
    {
        public string userAccount { get; set; }

        public string userName { get; set; }

        public string passWord { get; set; }

        public UserInfo ConvertUserInfo()
        {
            return new UserInfo { UserAccount = userAccount, UserName = userName, PassWord = passWord };
        }
    }
}
