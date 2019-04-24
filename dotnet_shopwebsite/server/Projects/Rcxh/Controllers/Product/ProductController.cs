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
using Wings.Projects.Rcxh.Entity.Product;
using Wings.Projects.Rcxh.RBAC.Entity;

namespace Wings.Projects.Rcxh.Controllers {
    /// <summary>
    /// 组织管理
    /// </summary>
    [Route ("/api/Hk/product")]
    public class ProductController : CurdController<Product> {
        private RcxhContext db { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="_db"></param>
        public ProductController (RcxhContext _db) : base (_db) {
            db = _db;
        }
        /// <summary>
        /// 查询数据
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        [HttpGet ("[action]")]
        public object load ([FromQuery] DataSourceLoadOptions options) {
            var query = from p in this.db.products select new Product {
                id = p.id,
                name = p.name,
                productTag = (from t in this.db.productTags where t.id == p.productTagId select t).FirstOrDefault (),
                price = p.price,
                summary = p.summary,
                status = p.status,
                images = p.images,
                productTagId = p.productTagId

            };
            return DataSourceLoader.Load (query, options);
        }
        /// <summary>
        /// 增加数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public object insert (DevExtremInput input) {
            var p = new Product ();
            JsonConvert.PopulateObject (input.values, p);
            this.db.products.Add (p);
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
            return this.remove (input.key, this.db.products);
        }

        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPut]
        public object update ([FromForm] DevExtremInput input) {
            return this.update (input, this.db.products);

        }
    }
}