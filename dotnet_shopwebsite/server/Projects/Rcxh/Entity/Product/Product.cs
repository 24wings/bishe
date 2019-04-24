using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wings.Projects.Rcxh.Entity.Product {
    /// <summary>
    /// 菜单
    /// </summary>
    [Table ("product")]
    public class Product {
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
        public string name { get; set; }
        /// <summary>
        /// 图片
        /// </summary>
        /// <value></value>
        public string images { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        /// <value></value>
        public DateTime createTime { get; set; } = DateTime.Now;
        /// <summary>
        /// 状态
        /// </summary>
        /// <value></value>
        public ProductStatus status { get; set; } = ProductStatus.Submit;
        /// <summary>
        /// 简述
        /// </summary>
        /// <value></value>
        public string summary { get; set; }
        /// <summary>
        /// 价格
        /// </summary>
        /// <value></value>
        public decimal price { get; set; }
        /// <summary>
        /// 产品标签Id
        /// </summary>
        /// <value></value>
        public int? productTagId { get; set; }

        /// <summary>
        /// 产品标签
        /// </summary>
        /// <value></value>
        [NotMapped]
        public ProductTag productTag { get; set; }

    }
    /// <summary>
    /// 产品状态
    /// </summary>
    /// 
    public enum ProductStatus {
        /// <summary>
        /// 已提交
        /// </summary>
        Submit,
        /// <summary>
        /// 有效
        /// </summary>
        Active,
        /// <summary>
        /// 作废
        /// </summary>
        Fail

    }
}