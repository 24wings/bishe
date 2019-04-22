import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'buy-home',
        children: [
          {
            path: '',
            loadChildren: '../buy-home/buy-home.module#BuyHomePageModule'
          }
        ]
      },
      {
        path: 'old-order',
        children: [
          {
            path: '',
            loadChildren: '../old-order/old-order.module#OldOrderPageModule'
          }
        ]
      },
      {
        path: 'person',
        children: [
          {
            path: '',
            loadChildren: '../person/person.module#PersonPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/buy/tabs/buy-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/buy/tabs/tabs/buy-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
