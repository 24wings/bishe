import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-buy-product-detail',
  templateUrl: './buy-product-detail.page.html',
  styleUrls: ['./buy-product-detail.page.scss'],
})
export class BuyProductDetailPage implements OnInit {
  p: { Id: number, PictUrl: string, Title: string, ZkFinalPrice: number, ReservePrice: number };
  constructor(private http: HttpClient, private route: ActivatedRoute, private cartService: CartService) {
    this.getProduct(this.route.snapshot.params["productId"]);
  }

  async  ngOnInit() {
    this.productNum = this.cartService.products.length;

  }

  async getProduct(id) {
    var data = await this.http.get("/assets/data/products.json").toPromise() as any[];
    this.p = data.find(item => item.Id == id);
  }


  addCart(p) {
    var products = this.cartService.products;
    this.cartService.products = products.concat(Object.assign(this.p));
    this.productNum = this.cartService.products.length;
  }

  productNum = 0;

}
