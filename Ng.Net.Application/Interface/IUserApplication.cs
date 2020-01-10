/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 19:49:47
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-10 17:14:04
 * @Description: 
 */
using System;
using Ng.Net.Repository.Domain;
using System.Linq;

namespace Ng.Net.Application.Interface
{
    /// <summary>
    /// All In One!!!!!!!!!!
    /// </summary>
    public interface IUserApplication
    {
        bool IsAccountExist(string userAccount);

        bool IsUserNameExist(string userName);

        bool SignUp(UserInfo entity);

        bool SignInbyName(UserInfo entity);

        bool SignInbyAccount(UserInfo entity);

        bool SignIn(UserInfo entity);

        bool UpdateUserInfo(UserInfo entity);

        IQueryable<UserInfo> GetAllUser();

        UserInfo GetUserInfo(string userid);

        UserInfo GetUserInfoByUserAccount(string userAccount);

        bool DeleteUser(UserInfo entity);

    }
}
