using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wings.Projects.Rcxh.Entity.News
{
    /// <summary>
    /// 新闻
    /// </summary>
    [Table("news")]
    public class News
    {
        /// <summary>
        /// 主键
        /// </summary>
        /// <value></value>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        /// <summary>
        /// 标题
        /// </summary>
        /// <value></value>
        public string title { get; set; }
        /// <summary>
        /// 作者
        /// </summary>
        /// <value></value>
        public string author { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        /// <value></value>
        public DateTime? createTime { get; set; } = DateTime.Now;
        /// <summary>
        /// 内容
        /// </summary>
        /// <value></value>
        public string content { get; set; }

        /// <summary>
        /// 分类Id
        /// </summary>
        /// <value></value>
        public int? tagId { get; set; }
        /// <summary>
        /// 新闻状态
        /// /// </summary>
        public NewsStatus? status { get; set; } = NewsStatus.Submitted;
    }
    /// <summary>
    /// 新闻状态
    /// </summary>

    public enum NewsStatus
    {
        /// <summary>
        /// 已提交
        /// </summary>

        Submitted,
        /// <summary>
        /// 有效
        /// </summary>

        Active,
        /// <summary>
        /// 禁用
        /// </summary>

        Disabled
    }

}