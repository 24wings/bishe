import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-home',
  templateUrl: './buy-home.page.html',
  styleUrls: ['./buy-home.page.scss'],
})
export class BuyHomePage implements OnInit {
  products: { Id: number, PictUrl: string, Title: string, ZkFinalPrice: number, ReservePrice: number }[] = [];
  data = [];

  ngOnInit() {
    this.products = this.data;
  }
  slides: Array<any> = [];
  categories: Array<any> = [];


  spinner1: boolean = true;

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }

  constructor(public appService: HttpClient, public navCtrl: NavController, private router: Router) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }
  //获取幻灯片
  getSlides() {
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    // this.appService.get("/assets/data/products.json", params).toPromise().then(rs => {
    //   console.debug(rs);
    //   this.slides = rs.data;
    //   this.spinner1 = false;
    // })
  }
  //获取分类
  getCategories() {
    // this.appService.get("/assets/", { appTag: 'dress' }, rs => {
    //   console.debug(rs);
    //   this.categories = rs.data;
    // })
  }
  //获取首页推荐列表
  async getProducts() {
    this.data = await this.appService.get("/assets/data/products.json").toPromise() as any;
    this.products = this.data;
  }
  //商品详情
  goDetails(item) {
    this.router.navigateByUrl("/buy/buy-product-detail/" + item.Id);
  }
  search(keyword) {
    console.log(keyword);
    this.products = this.data.filter(item => new RegExp(keyword).test(item.Title));
  }
}
