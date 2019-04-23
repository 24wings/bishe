using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wings.Projects.Rcxh.RBAC.Entity {
    /// <summary>
    /// 菜单
    /// </summary>
    [Table ("news_tag")]
    public class NewsTag {
        /// <summary>
        /// 主键
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
        public DateTime? createTime { get; set; } = DateTime.Now;
        /// <summary>
        /// 排序
        /// </summary>
        /// <value></value>
        public int orderBy { get; set; } = 0;

    }
}