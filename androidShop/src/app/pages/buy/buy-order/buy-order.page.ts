import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/CartService';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.page.html',
  styleUrls: ['./buy-order.page.scss'],
})
export class BuyOrderPage implements OnInit {
  products: any[] = [];
  constructor(private cartService: CartService, public alertController: AlertController) {
    this.products = this.cartService.products;

  }

  ngOnInit() {

  }

  countProductPrice() {
    var sum = 0;
    var prices = this.products.map(p => p.ReservePrice);
    console.log(prices);
    prices.forEach(p => sum += p);
    return sum;
  }

  pay() {
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '确认购买!',
      message: '仔细阅读购买协议',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: '确认',
          handler: () => {
            this.cartService.products = [];
            this.products = this.cartService.products;
          }
        }
      ]
    });
    alert.present();

  }


}
