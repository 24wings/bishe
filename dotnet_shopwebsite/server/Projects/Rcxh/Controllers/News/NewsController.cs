using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using DevExtreme.AspNet.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wings.Base.Common.Attrivute;
using Wings.Base.Common.DTO;
using Wings.Projects.Rcxh.Controllers;
using Wings.Projects.Rcxh.Entity.News;
using Wings.Projects.Rcxh.RBAC.Entity;

namespace Wings.Projects.Rcxh.RBAC.Controllers {
    /// <summary>
    /// 组织管理
    /// </summary>
    [Route ("/api/Hk/news")]
    public class NewsController : CurdController<News> {
        private RcxhContext db { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="_db"></param>
        public NewsController (RcxhContext _db) : base (_db) {
            db = _db;
        }
        /// <summary>
        /// 查询数据
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        [HttpGet]
        public object load (DataSourceLoadOptionsBase options) {
            return this.load (options, this.db.news);
        }
        /// <summary>
        /// 增加数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public object insert (DevExtremInput input) {
            return this.insert (input, new News (), this.db.news);
        }

        /// <summary>
        /// 移除数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpDelete]
        public object remove (DevExtremInput input) {
            return this.remove (input.key, this.db.news);
        }
        /// <summary>
        /// 更新数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPut]
        public object update ([FromForm] DevExtremInput input) {
            return this.update (input, this.db.news);
        }
    }
}