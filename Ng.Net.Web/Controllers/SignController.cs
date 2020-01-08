/*
 * @Author: CollapseNav
 * @Date: 2019-12-30 17:56:21
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 19:56:20
 * @Description: 
 */
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
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
        public IActionResult SignIn(SignData data)
        {
            if (!_app.SignIn(data.ConvertUserInfo()))
                return Unauthorized();

            var claims = new[]{
                    new Claim(JwtRegisteredClaimNames.Sub,data.userAccount)
                };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("It's a .net core spa test."));
            var tokens = new JwtSecurityToken(
                issuer: "DotnetTest",
                audience: "AngualrApp",
                claims: claims,
                notBefore: DateTime.Now,
                expires: DateTime.Now.AddDays(20),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(tokens),
                expiration = tokens.ValidTo,
            });
        }
    }
}

