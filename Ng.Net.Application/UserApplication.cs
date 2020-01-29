/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 20:02:06
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-29 15:36:46
 * @Description: it can work (now)
 */
using System.Linq;
using Ng.Net.Application.Interface;
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

        public UserInfo GetUserInfoByUserAccount(string userAccount) => _rep.FindSingle(model => model.UserAccount == userAccount);

        public bool DeleteUser(UserInfo entity)
        {
            try
            {
                _rep.Delete(model => model.UserAccount == entity.UserAccount);
            }
            catch
            {
                return false;
            }
            return true;
        }

        /// <summary>
        /// this func should not be here
        /// but i don't want to write a new file
        /// :)
        /// </summary>
        public IQueryable<UserInfo> GetAllUser() => _rep.FindAll();

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
                _rep.Update(w => w.UserAccount == entity.UserAccount, u => new UserInfo { UserName = entity.UserName, PhoneNumber = entity.PhoneNumber });
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}
