using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wings.Projects.Rcxh.Entity {
    /// <summary>
    /// 产品标签
    /// </summary>
    [Table ("product_tag")]
    public class ProductTag {

        /// <summary>
        /// ID
        /// </summary>
        /// <value></value>
        [Key]
        public int id { get; set; }
        /// <summary>
        /// 分类名称
        /// </summary>
        /// <value></value>
        public string name { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        /// <value></value>
        public DateTime createTime { get; set; } = DateTime.Now;
        /// <summary>
        /// 排序
        /// </summary>
        /// <value></value>
        public int orderNo { get; set; } = 0;
        /// <summary>
        /// 分类
        /// </summary>
        public ProductTagStatus status { get; set; }

    }

    /// <summary>
    /// 产品状态
    /// </summary>
    public enum ProductTagStatus {
        /// <summary>
        /// 提交
        /// </summary>
        Submitted,
        /// <summary>
        /// 有效
        /// </summary>
        Active,
        /// <summary>
        /// 下架
        /// </summary>
        Disabled
    }
}