using System;
using Microsoft.AspNetCore.Mvc;
using Ng.Net.Application.Interface;
using System.Linq;
using Ng.Net.Repository.Domain;
using System.Collections.Generic;

namespace Ng.Net.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserApplication _app;

        public UserController(IUserApplication app) => _app = app;

        [HttpGet, Route("[action]")]
        public UserInfo GetUser(string userid)
        {
            return _app.GetUserInfo(userid);
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
    }
}
