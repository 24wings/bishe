import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  paramList = [];

  constructor(public navCtrl: NavController, private router: Router, public modalController: ModalController) { }

  ngOnInit() {
  }

  submit() {

    this.navCtrl.back();
  }
  async openAddParamModal() {
    let modal = await this.modalController.create({ component: ProductPraramModal, componentProps: {} });
    modal.present();

    const { data } = await modal.onDidDismiss();
    this.addPraram(data);
  }

  addPraram(data) {
    this.paramList.push(data);
    debugger;
  }

}


@Component({
  selector: "product-param", template: `
<ion-content>
<ion-searchbar *ngIf="!selectedPraram" [value]="keyword" (ionChange)="search(input.value)" #input></ion-searchbar>
<ion-list *ngIf="!selectedPraram">
  <ion-item *ngFor="let param of paramList" (click)="selectParam(param)">
    <ion-label>{{param.name}}</ion-label>
  </ion-item>
</ion-list>
<ion-item  *ngIf="selectedPraram">
<ion-label>{{selectedPraram.name}}</ion-label>
<ion-input placeholder="参数值"  (ionChange)="selectedPraram.value=value.value" #value></ion-input>
</ion-item>
<ion-button expand="full" *ngIf="selectedPraram" (click)="submit()">
<ion-icon slot="start" name="star" ></ion-icon>
添加参数
</ion-button>
</ion-content>
` })
export class ProductPraramModal {
  data = [
    { name: "厂商", value: '' },
    { name: "重量", value: '' },
    { name: "体积", },
    { name: "颜色", },
    { name: "包物流", },
    { name: "保质期", },
  ]
  paramList = [];
  keyword = "";
  search($event) {
    console.log($event);
    this.paramList = this.data.filter(item => new RegExp($event).test(item.name));
  }
  selectedPraram = null;


  constructor(navParams: NavParams, private modalController: ModalController) {
    this.paramList = Object.assign(this.data)
    // componentProps can also be accessed at construction time using NavParams
  }
  selectParam($event) {
    this.selectedPraram = $event;
  }
  submit() {
    this.modalController.dismiss(this.selectedPraram)

  }
}