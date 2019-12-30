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
        public bool SignUp(SignUpData data)
        {
            return _app.SignUp(data.ConvertUserInfo());
        }
    }
}
