using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wings.Base.Common.Attrivute;
using Wings.Base.Common.DTO;
using Wings.Projects.Rcxh.Controllers;
using Wings.Projects.Rcxh.RBAC.Entity;

namespace Wings.Projects.Rcxh.RBAC.Controllers
{
    /// <summary>
    /// 组织管理
    /// </summary>
    [Route("/api/Hk/newsTag")]
    public class NewsTagController : CurdController<NewsTag>
    {
        private RcxhContext db { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="_db"></param>
        public NewsTagController(RcxhContext _db) : base(_db)
        {
            db = _db;
        }
        /// <summary>
        /// 查询数据
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public object load(DataSourceLoadOptions options)
        {
            options.Sort = new[] { new SortingInfo { Selector = "orderBy", Desc = true } };

            return this.load(options, this.db.newsTag);
        }
        /// <summary>
        /// 增加数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public object insert([FromForm]DevExtremInput input)
        {
            return this.insert(input, new NewsTag(), this.db.newsTag);
        }

        /// <summary>
        /// 移除数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpDelete]
        public object remove(DevExtremInput input)
        {
            return this.remove(input.key, this.db.newsTag);
        }
        /// <summary>
        /// 更新数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPut]
        public object update([FromForm] DevExtremInput input)
        {
            return this.update(input, this.db.newsTag);
        }
    }
}