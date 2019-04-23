using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Wings.Base.Common.Attrivute;
using Wings.Projects.Rcxh.RBAC.Entity;

namespace Wings.Projects.Rcxh.DVO.Rbac {
    /// <summary>
    /// 组织管理
    /// </summary>
    [DataSource (key = "id", url = "/api/Hk/role")]
    [View (title = "组织管理")]
    public class RoleManage {
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
        [Col (caption = "角色名称")]
        [Item (label = "角色名称")]
        public string roleName { get; set; }
        /// <summary>
        /// 组织id
        /// </summary>
        /// <value></value>
        [Col (caption = "创建时间", dataType = ColDataType.date)]
        [Item (label = "创建时间", editorType = EditorType.dxDateBox)]
        public DateTime? createTime { get; set; }
        /// <summary>
        /// 角色所在组织
        /// </summary>
        /// <value></value>

        public OrgManage orgId { get; set; }
        /// <summary>
        /// 菜单列表
        /// </summary>
        /// <value></value>
        [Col (caption = "菜单", calculateDisplayValue = "()=>{return function(item){return item.text}}")]
        [Item (label = "菜单", editorType = EditorType.wsRefTree)]
        [DxTreeView (displayExpr = nameof (Menu.text), selectionMode = "multiple", key = nameof (Menu.id), url = "/api/Hk/menu")]
        [DxDropbox (displayExpr = nameof (Menu.text))]

        public List<Menu> menus { get; set; } = new List<Menu> ();

    }
}