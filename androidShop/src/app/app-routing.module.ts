import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: "", redirectTo: "/android-shop", pathMatch: "full" },
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'android-shop', loadChildren: './pages/pre/android-shop/android-shop.module#AndroidShopPageModule' },
  { path: 'buy/buy-login', loadChildren: './pages/buy/buy-login/buy-login.module#BuyLoginPageModule' },
  { path: 'buy/buy-signup', loadChildren: './pages/buy/buy-signup/buy-signup.module#BuySignupPageModule' },
  { path: 'buy/buy-home', loadChildren: './pages/buy/buy-home/buy-home.module#BuyHomePageModule' },
  { path: 'buy/buy-product-detail/:productId', loadChildren: './pages/buy/buy-product-detail/buy-product-detail.module#BuyProductDetailPageModule' },
  { path: 'buy/buy-order', loadChildren: './pages/buy/buy-order/buy-order.module#BuyOrderPageModule' },
  { path: 'buy/tabs', loadChildren: './pages/buy/tabs/tabs.module#TabsPageModule' },
  { path: 'sell-home', loadChildren: './pages/sell/sell-home/sell-home.module#SellHomePageModule' },
  { path: 'product-manage', loadChildren: './pages/sell/product-manage/product-manage.module#ProductManagePageModule' },
  { path: 'product-add', loadChildren: './pages/sell/product-add/product-add.module#ProductAddPageModule' },

 

];
@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
