using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using JWT.Algorithms;
using JWT.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Wings.Base.Common.Attrivute;
using Wings.Base.Common.DTO;

namespace Wings.Projects.Rcxh.Controllers
{
    /// <summary>
    /// 配置
    /// </summary>
    public class Config
    {
        /// <summary>
        /// 密钥
        /// </summary>
        /// <value></value>
        public static string secret { get; set; } = "my-secret";
    }
    /// <summary>
    /// token实例
    /// </summary>
    public class TokenInstance
    {
        /// <summary>
        /// 用户id
        /// </summary>
        /// <value></value>
        public int userId { get; set; }
    }
    /// <summary>
    /// 登录输入
    /// </summary>
    public class LoginInput
    {
        /// <summary>
        /// 用户名
        /// </summary>
        /// <value></value>
        public string username { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        /// <value></value>
        public string password { get; set; }
    }
    /// <summary>
    /// 自动化管理控制器
    /// </summary>
    [ApiController]
    [Route("/api/Rcxh/Auth")]
    public class AuthController : Controller
    {

        private RcxhContext db { get; set; }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="_db"></param>
        public AuthController(RcxhContext _db) { db = _db; }
        /// <summary>
        /// 登录
        /// </summary>
        /// <param name="input"></param>
        [HttpPost("[action]")]
        public object login(LoginInput input)
        {
            var user = (from u in this.db.users where u.username == input.username select u).FirstOrDefault();
            if (user != null)
            {
                if (user.password == input.password)
                {
                    var token = new JwtBuilder()
                        .WithAlgorithm(new HMACSHA256Algorithm())
                        .WithSecret(Config.secret)
                        .AddClaim("userId", user.id)
                        .Build();

                    return CommonRtn.Success("token", token);
                }
                else
                {
                    return CommonRtn.Error("密码错误");
                }
            }
            else
            {
                return CommonRtn.Error("用户不存在");
            }

        }

    }
}