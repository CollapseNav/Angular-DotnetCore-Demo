/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 22:15:28
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-29 15:35:31
 * @Description: 
 */
using Ng.Net.Repository.Domain;

namespace Ng.Net.Application.ReceiveData
{
    public class SignData
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
