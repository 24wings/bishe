using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Wings.Base.Common.Attrivute;
namespace Wings.Projects.Rcxh.DVO.Rbac {
    /// <summary>
    /// 组织管理
    /// </summary>
    [DataSource (key = "id", url = "/api/Hk/user")]
    [View (title = "用户管理")]
    // [Table ("User")] 
    public class UserManage {
        /// <summary>
        /// 组织id
        /// </summary>
        /// <value></value>
        [Key]
        public int id { get; set; }
        /// <summary>
        /// 昵称
        /// </summary>
        /// <value></value>
        [Col (caption = "昵称", dataType = ColDataType.String)]
        [Item (label = "昵称")]
        public string nickname { get; set; }
        /// <summary>
        /// 组织名称
        /// </summary>
        /// <value></value>
        [Col (caption = "用户名")]
        [Item (label = "用户名")]
        public string username { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        /// <value></value>
        [Col (caption = "密码")]
        [Item (label = "密码")]
        public int? password { get; set; }

    }
}