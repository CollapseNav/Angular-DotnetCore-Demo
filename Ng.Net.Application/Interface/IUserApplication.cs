/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 19:49:47
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-03 16:42:47
 * @Description: 
 */
using System;
using Ng.Net.Repository.Domain;
using System.Linq;

namespace Ng.Net.Application.Interface
{
    public interface IUserApplication
    {
        bool IsAccountExist(string userAccount);

        bool IsUserNameExist(string userName);

        bool SignUp(UserInfo entity);

        bool SignInbyName(UserInfo entity);

        bool SignInbyAccount(UserInfo entity);

        bool SignIn(UserInfo entity);

        UserInfo GetUserInfo(string userid);

        bool UpdateUserInfo(UserInfo entity);

        IQueryable<UserInfo> GetAllUser();

    }
}
