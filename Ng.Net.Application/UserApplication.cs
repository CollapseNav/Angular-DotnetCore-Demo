/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 20:02:06
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-03 16:44:41
 * @Description: 
 */
using System;
using System.Linq;
using Ng.Net.Application.Interface;
using Ng.Net.Repository;
using Ng.Net.Repository.Domain;
using Ng.Net.Repository.Interface;

namespace Ng.Net.Application
{
    public class UserApplication : IUserApplication
    {
        private readonly IRepository<UserInfo> _rep;

        public UserApplication(IRepository<UserInfo> rep)
        {
            _rep = rep;
        }


        public UserInfo GetUserInfo(string userid) => _rep.FindByID(userid);

        /// <summary>
        /// this func should not be here
        /// but i do not want to write a new class or a new interface
        /// :)
        /// </summary>
        /// <returns></returns>
        public IQueryable<UserInfo> GetAllUser() => _rep.FindAll();

        private UserInfo GetUserInfobyUserAccount(string userAccount) => _rep.FindSingle(model => model.UserAccount == userAccount);

        private UserInfo GetUserInfobyUserName(string userName) => _rep.FindSingle(model => model.UserName == userName);

        public bool IsAccountExist(string userAccount) => _rep.IsExist(entity => entity.UserAccount == userAccount);

        public bool IsUserNameExist(string userName) => _rep.IsExist(entity => entity.UserName == userName);

        public bool SignInbyAccount(UserInfo entity) => _rep.IsExist(model => model.UserAccount == entity.UserAccount && model.PassWord == entity.PassWord);

        public bool SignInbyName(UserInfo entity) => _rep.IsExist(model => model.UserName == entity.UserName && model.PassWord == entity.PassWord);

        public bool SignIn(UserInfo entity) => string.IsNullOrEmpty(entity.UserAccount) ? SignInbyName(entity) : SignInbyAccount(entity);

        public bool SignUp(UserInfo entity)
        {
            try
            {
                _rep.Add(entity);
            }
            catch
            {
                return false;
            }
            return true;
        }

        public bool UpdateUserInfo(UserInfo entity)
        {
            try
            {
                _rep.Update(w => w.UserAccount == entity.UserAccount, u => new UserInfo { UserName = entity.UserName, PhoneNumber = entity.PhoneNumber, Gender = entity.Gender });
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}
