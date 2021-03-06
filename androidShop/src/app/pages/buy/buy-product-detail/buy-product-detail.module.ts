import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuyProductDetailPage } from './buy-product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BuyProductDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuyProductDetailPage]
})
export class BuyProductDetailPageModule {}
