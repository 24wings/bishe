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

namespace Wings.Projects.Rcxh.Controllers
{
    /// <summary>
    /// 组织管理
    /// </summary>
    [Route("/api/Hk/order")]
    public class OrderController : CurdController<Order>
    {
        private RcxhContext db { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="_db"></param>
        public OrderController(RcxhContext _db) : base(_db)
        {
            db = _db;
        }
        /// <summary>
        /// 查询数据
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public object load([FromQuery] DataSourceLoadOptions options)
        {
            var query = from p in this.db.orders select p;
            return DataSourceLoader.Load(query, options);
        }
        /// <summary>
        /// 增加数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPost]
        public object insert(DevExtremInput input)
        {
            var p = new Order();
            JsonConvert.PopulateObject(input.values, p);
            this.db.orders.Add(p);
            this.db.SaveChanges();
            return true;
        }
        /// <summary>
        /// send
        /// </summary>
        /// <param name="orderId"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public object send(int orderId)
        {
            var order = this.db.orders.Find(orderId);
            if (order != null)
            {
                order.status = OrderStatus.Send;
                this.db.SaveChanges();
                return CommonRtn.Success(null, "成功");
            }
            else
            {
                return CommonRtn.Error("未知的订单");
            }
        }

        /// <summary>
        /// 移除数据
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpDelete]
        public object remove(DevExtremInput input)
        {
            return this.remove(input.key, this.db.orders);
        }

        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [HttpPut]
        public object update([FromForm] DevExtremInput input)
        {
            return this.update(input, this.db.orders);

        }
        /// <summary>
        /// 支付订单
        /// </summary>
        /// <param name="orderId"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public object payOrder(int orderId)
        {
            var order = this.db.orders.Find(orderId);
            if (order != null)
            {
                order.status = OrderStatus.Pay;
                this.db.SaveChanges();
                return CommonRtn.Success(null, "购买成功");
            }
            else
            {
                return CommonRtn.Error("购买失败");

            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public object loadPay([FromQuery] DataSourceLoadOptions options)
        {
            var query = from p in this.db.orders where p.status == OrderStatus.Pay select p;
            return DataSourceLoader.Load(query, options);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public object loadSubmit([FromQuery] DataSourceLoadOptions options)
        {
            var query = from p in this.db.orders where p.status == OrderStatus.Submit select p;
            return DataSourceLoader.Load(query, options);
        }
        /// <summary>
        /// 加载历史订单, 已支付,已发货
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public object loadHistory([FromQuery] DataSourceLoadOptions options)
        {
            var query = from p in this.db.orders where p.status == OrderStatus.Pay || p.status == OrderStatus.Send select p;
            return DataSourceLoader.Load(query, options);

        }
    }
}