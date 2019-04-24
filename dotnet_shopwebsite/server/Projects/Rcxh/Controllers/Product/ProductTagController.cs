using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Wings.Base.Common.Attrivute;
using Wings.Base.Common.DTO;
using Wings.Projects.Rcxh.Controllers;
using Wings.Projects.Rcxh.Entity;
using Wings.Projects.Rcxh.Entity.Product;
using Wings.Projects.Rcxh.RBAC.Entity;

namespace Wings.Projects.Rcxh.Controllers {
    /// <summary>
    /// 组织管理
    /// </summary>
    [Route ("/api/Hk/product-tag")]
    public class ProductTagController : CurdController<ProductTag> {
        private RcxhContext db { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="_db"></param>
        public ProductTagController (RcxhContext _db) : base (_db) {
            db = _db;
        }
        /// <summary>
        /// 查询数据
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        [HttpGet ("[action]")]
        public object load ([FromQuery] DataSourceLoadOptions options) {

            return DataSourceLoader.Load (this.db.productTags, options);
        }
        /// <summary>
        /// 增加数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public object insert (DevExtremInput input) {
            var p = new ProductTag ();
            JsonConvert.PopulateObject (input.values, p);
            this.db.productTags.Add (p);
            this.db.SaveChanges ();
            return true;
        }

        /// <summary>
        /// 移除数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpDelete]
        public object remove (DevExtremInput input) {
            return this.remove (input.key, this.db.productTags);
        }

        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPut]
        public object update ([FromForm] DevExtremInput input) {
            return this.update (input, this.db.productTags);

        }

        /// <summary>
        /// 查询有效的产品标签
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        [HttpGet ("[action]")]
        public object loadActiveProductTags ([FromQuery] DataSourceLoadOptions options) {
            options.Filter.Add (new String[] { "and" });
            options.Filter.Add (new object[] { "status", "=", 1 });
            return DataSourceLoader.Load (this.db.productTags, options);
        }
    }
}