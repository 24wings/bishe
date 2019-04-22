import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/CartService';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-old-order',
  templateUrl: './old-order.page.html',
  styleUrls: ['./old-order.page.scss'],
})
export class OldOrderPage implements OnInit {
  products: any[] = [];
  constructor(private cartService: CartService, public alertController: AlertController) {
    this.products = this.cartService.products;

  }


  countProductPrice() {
    var sum = 0;
    var prices = this.products.map(p => p.ReservePrice);
    console.log(prices);
    prices.forEach(p => sum += p);
    return sum;
  }


  ngOnInit() {
  }

}
