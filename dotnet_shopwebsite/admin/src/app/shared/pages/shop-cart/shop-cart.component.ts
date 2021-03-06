import { Component } from '@angular/core';
import * as AspNetData from "devextreme-aspnet-data-nojquery";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { myOrderView } from 'src/app/struct/product/order';
import notify from "devextreme/ui/notify";
import { confirm } from "devextreme/ui/dialog";
import { MyHttpService } from '../../services/my-http.service';
enum View {
    Guest,
    User
}
@Component({
    selector: "shop-cart",
    templateUrl: "./shop-cart.component.html",
    styleUrls: ["./shop-cart.component.css"]
})
export class ShopCartComponent {
    selectedDVO = myOrderView
    constructor(private router: Router, private myHttp: MyHttpService) { }
    state = View.Guest;
    View = View;
    selectedTag;
    productTags: any[] = [];
    products: any[] = []
    tagStore = AspNetData.createStore({
        key: "id",
        loadUrl: environment.ip + "/api/Hk/product-tag/load",

    });

    productStore = AspNetData.createStore({
        key: "id",
        loadUrl: environment.ip + "/api/Hk/product/load",
    });





    async ngOnInit() {
        await this.listProductTags();
        await this.listProducts(this.productTags[0]);
        this.getUserInfo();
    }

    async getUserInfo() {
        if (sessionStorage.getItem("userId")) {
            this.state = View.User;
        }
    }

    async listProductTags() {
        let data = await this.tagStore.load();
        this.productTags = data;

    }

    async listProducts(p: { id: number }) {
        this.selectedTag = p;
        this.products = await this.productStore.load({ filter: ["productTagId", "=", p.id] });


    }
    cartNum = 0;


    cartProducts = [];

    addCart() {


    }
    goShopCart() {
        if (this.state == View.Guest) {
            this.router.navigateByUrl("/login-form");
        } else {

        }
    }

    async doAction($event) {
        var result = await confirm("确定购买?", "确认");
        if (result) {
            await this.myHttp.Get("/api/Hk/order/payOrder?orderId=" + $event.data.id);
            var dto = this.selectedDVO;
            this.selectedDVO = null;
            setTimeout(() => {
                this.selectedDVO = dto;
            }, 200);
            console.log($event)

        }

    }


}