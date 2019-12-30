using System;
using Ng.Net.Repository.Domain;

namespace Ng.Net.Application.Interface
{
    public interface IUserApplication
    {
        bool IsAccountExist(string userAccount);

        bool IsUserNameExist(string userName);

        bool SignUp(UserInfo entity);

        bool SignInbyName(UserInfo entity);

        bool SignInbyAccount(UserInfo entity);

        UserInfo GetUserInfobyUserAccount(string userAccount);

        UserInfo GetUserInfobyUserName(string userName);

        bool UpdateUserInfo(UserInfo entity);

    }
}
