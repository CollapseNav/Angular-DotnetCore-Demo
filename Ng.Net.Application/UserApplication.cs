using System;
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

        public UserInfo GetUserInfobyUserAccount(string userAccount) => _rep.FindSingle(model => model.UserAccount == userAccount);

        public UserInfo GetUserInfobyUserName(string userName) => _rep.FindSingle(model => model.UserName == userName);

        public bool IsAccountExist(string userAccount) => _rep.IsExist(entity => entity.UserAccount == userAccount);

        public bool IsUserNameExist(string userName) => _rep.IsExist(entity => entity.UserName == userName);

        public bool SignInbyAccount(UserInfo entity) => _rep.IsExist(model => model.UserAccount == entity.UserAccount);

        public bool SignInbyName(UserInfo entity) => _rep.IsExist(model => model.UserName == entity.UserName);

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
