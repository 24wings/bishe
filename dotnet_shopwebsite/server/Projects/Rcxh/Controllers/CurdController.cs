using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using DevExtreme.AspNet.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Wings.Base.Common.Attrivute;
using Wings.Base.Common.DTO;

namespace Wings.Projects.Rcxh.Controllers
{
    /// <summary>
    /// 自动化CRUD
    /// </summary>
    public abstract class CurdController<T> where T : class
    {
        /// <summary>
        /// 
        /// </summary>
        /// <value></value>
        private RcxhContext db { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="_db"></param>
        public CurdController(RcxhContext _db) { db = _db; }
        /// <summary>
        /// 查询数据
        /// </summary>
        /// <param name="options"></param>
        /// <param name="table"></param>
        /// <returns></returns>
        protected DevExtreme.AspNet.Data.ResponseModel.LoadResult load(DataSourceLoadOptionsBase options, DbSet<T> table)
        {
            return DataSourceLoader.Load(table, options);
        }

        /// <summary>
        /// 插入数据
        /// </summary>
        /// <param name="bodyData"></param>
        /// <param name="instance"></param>
        /// <param name="table"></param>
        /// <returns></returns>
        protected bool insert(DevExtremInput bodyData, T instance, DbSet<T> table)
        {



            JsonConvert.PopulateObject(bodyData.values, instance);
            //Validate(order);
            // if (!ModelState.IsValid)
            //     return false;
            table.Add(instance);
            this.db.SaveChanges();
            return true;
        }

        /// <summary>
        /// 删除记录
        /// </summary>
        /// <param name="key"></param>
        /// <param name="table"></param>
        /// <returns></returns>
        public bool remove(int key, DbSet<T> table)
        {

            var order = table.Find(key);
            table.Remove(order);
            this.db.SaveChanges();
            return true;
        }
        /// <summary>
        /// 更新记录
        /// </summary>
        /// <param name="bodyData"></param>
        /// <param name="table"></param>
        /// <returns></returns>
        protected bool update(DevExtremInput bodyData, DbSet<T> table)
        {
            var order = table.Find(bodyData.key);
            JsonConvert.PopulateObject(bodyData.values, order);
            this.db.SaveChanges();
            return true;

        }
    }
}