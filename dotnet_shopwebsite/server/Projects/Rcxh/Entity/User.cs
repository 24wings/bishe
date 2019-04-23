﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Wings.Base.Common.Entity;

namespace Wings.Projects.Rcxh.RBAC.Entity {
    /// <summary>
    /// 用户管理
    /// </summary>
    [Table ("user")]
    public class User {
        /// <summary>
        /// 主键
        /// </summary>
        /// <value></value>
        [Key]
        [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        /// <summary>
        /// 昵称
        /// </summary>
        /// <value></value>
        public string nickname { get; set; }
        /// <summary>
        /// 姓名
        /// </summary>
        /// <value></value>
        [Column (TypeName = "varchar(45)")]
        public string username { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        /// <value></value>
        [Column (TypeName = "varchar(45)")]
        public string password { get; set; }

        /// <summary>
        /// 组织Id
        /// </summary>
        /// <value></value>
        public int? orgId { get; set; }
        public DateTime? createTime { get; set; } = DateTime.Now;
        /// <summary>
        /// 用户组织
        /// </summary>
        /// <value></value>
        [NotMapped]

        public Org org { get; set; }

    }

}