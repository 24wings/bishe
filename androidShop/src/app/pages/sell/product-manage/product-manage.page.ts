import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.page.html',
  styleUrls: ['./product-manage.page.scss'],
})
export class ProductManagePage implements OnInit {
  products: { Id: number, PictUrl: string, Title: string, ZkFinalPrice: number, ReservePrice: number }[] = [];
  data = [];
  constructor(public appService: HttpClient, public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.getProducts()
  }
  //获取首页推荐列表
  async getProducts() {
    this.data = await this.appService.get("/assets/data/products.json").toPromise() as any;
    this.products = this.data;
  }

}
