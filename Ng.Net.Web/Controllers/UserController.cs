using System;
using Microsoft.AspNetCore.Mvc;
using Ng.Net.Application.Interface;
using System.Linq;
using Ng.Net.Repository.Domain;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Ng.Net.Application.ReceiveData;

namespace Ng.Net.Web.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserApplication _app;

        public UserController(IUserApplication app) => _app = app;

        [HttpGet, Route("[action]")]
        public UserInfo GetUser(string userAccount)
        {
            return _app.GetUserInfoByUserAccount(userAccount);
        }

        [HttpGet, Route("[action]")]
        public IEnumerable<UserInfo> GetUsers()
        {
            return _app.GetAllUser();
        }

        [HttpGet, Route("[action]")]
        public string GetUserName()
        {
            return "";
        }

        [HttpPost, Route("[action]")]
        public bool EditUser(EditData data) => _app.UpdateUserInfo(data.GetUserInfo());
    }
}
