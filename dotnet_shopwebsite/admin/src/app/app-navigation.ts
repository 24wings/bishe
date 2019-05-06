export const navigation = [
  {
    text: "系统设置",
    //path: '/admin/rbac',
    icon: "preferences",
    items: [
      { text: "组织管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.OrgManage", icon: "group" },
      { text: "用户管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.UserManage", icon: 'user' },
      { text: "菜单管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.MenuManage", icon: "menu" },
      { text: "角色管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.RoleManage", icon: 'card' },
    ]

  },
  {
    text: "新闻管理",
    icon: "home",
    items: [
      { text: "分类管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.News.NewsTagManage", icon: 'card' },
      { text: "新闻管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.News.NewsManage", icon: 'card' },

      // { text: "标签", path: "/admin/blog/post-tag" }
    ]
  },

  {
    text: "产品管理",
    icon: "home",
    items: [
      { text: "分类管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Product.ProductTagManage", icon: 'card' },
      { text: "产品管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Product.ProductManage", icon: 'card' },
      { text: "订单管理", path: "/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Product.OrderManage", icon: 'card' },
    ]
  },
  {
    text: "游客",
    icon: "home",
    items: [
      { text: "新闻", path: "/rcxh/admin/news", icon: 'card' },
      { text: "商城", path: "/rcxh/admin/shop", icon: 'card' },
      // { text: "文章", path: "/rcxh/admin/article", icon: 'card' },
    ]
  }




];
