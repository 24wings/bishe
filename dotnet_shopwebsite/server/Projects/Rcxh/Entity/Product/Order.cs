using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wings.Projects.Rcxh.Entity.Product
{
    /// <summary>
    /// 订单
    /// </summary>
    [Table("order")]
    public class Order
    {
        /// <summary>
        /// Id
        /// </summary>
        /// <value></value>
        [Key]
        public int id { get; set; }
        /// <summary>
        /// 名字在
        /// </summary>
        /// <value></value>
        public string productName { get; set; }
        /// <summary>
        /// 图片
        /// </summary>
        /// <value></value>
        public string productImages { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        /// <value></value>
        public DateTime createTime { get; set; } = DateTime.Now;
        /// <summary>
        /// 状态
        /// </summary>
        /// <value></value>
        public OrderStatus status { get; set; } = OrderStatus.Submit;
        /// <summary>
        /// 备注
        /// </summary>
        /// <value></value>
        public string summary { get; set; }
        /// <summary>
        /// 单价
        /// </summary>
        /// <value></value>
        public decimal price { get; set; }
        /// <summary>
        /// 数量
        /// </summary>
        /// <value></value>
        public int num { get; set; } = 1;
        /// <summary>
        /// 应付金额
        /// </summary>
        /// <value></value>
        public decimal shouldPayAmount { get; set; }
        /// <summary>
        /// 实付金额
        /// </summary>
        /// <value></value>
        public decimal realPayAmount { get; set; }
        /// <summary>
        /// 订单发起人
        /// </summary>
        /// <value></value>
        public int userId { get; set; }

    }
    /// <summary>
    /// 订单状态
    /// </summary>
    public enum OrderStatus
    {
        /// <summary>
        /// 已提交
        /// </summary>
        Submit,
        /// <summary>
        /// 有效
        /// </summary>
        Pay,
        /// <summary>
        /// 作废
        /// </summary>
        Fail,
        Send,

    }
}