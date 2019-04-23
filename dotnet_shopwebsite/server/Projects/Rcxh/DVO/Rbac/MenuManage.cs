using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Wings.Base.Common.Attrivute;
using Wings.Projects.Rcxh.RBAC.Entity;

namespace Wings.Projects.Rcxh.DVO.Rbac
{
    /// <summary>
    /// 组织管理
    /// </summary>
    [DataSource(key = "id", url = "/api/Hk/menu")]
    [TreeListView(title = "菜单管理", parentIdExpr = "parentId", keyExpr = "id")]
    public class MenuManage
    {
        /// <summary>
        /// 组织id
        /// </summary> 
        /// <value></value>
        [Key]
        public int id { get; set; }
        /// <summary>
        /// 组织名称
        /// </summary>
        /// <value></value>
        [Col(caption = "菜单文本")]
        [Item(label = "菜单文本")]
        public string text { get; set; }
        /// <summary>
        /// 组织id
        /// </summary>
        /// <value></value>

        public int? parentId { get; set; } = 0;
        /// <summary>
        /// 地址
        /// </summary>
        /// <value></value>
        [Col(caption = "地址")]
        [Item(label = "地址")]
        public string link { get; set; }


    }
}