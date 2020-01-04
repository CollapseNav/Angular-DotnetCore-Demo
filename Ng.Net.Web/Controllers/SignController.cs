/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 17:56:21
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2019-12-31 20:53:46
 * @Description: 
 */
using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Ng.Net.Application.Interface;
using Ng.Net.Application.ReceiveData;
using Ng.Net.Repository.Domain;

namespace Ng.Net.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SignController : ControllerBase
    {
        private readonly IUserApplication _app;

        public SignController(IUserApplication app) => _app = app;

        [HttpPost, Route("[action]")]
        public bool SignUp(SignData data)
        {
            return _app.SignUp(data.ConvertUserInfo());
        }

        [HttpPost, Route("[action]")]
        public bool SignIn(SignData data)
        { return _app.SignIn(data.ConvertUserInfo()); }
    }
}
