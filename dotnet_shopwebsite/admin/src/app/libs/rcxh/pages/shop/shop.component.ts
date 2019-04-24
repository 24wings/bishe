import { Component } from '@angular/core';
import * as AspNetData from "devextreme-aspnet-data-nojquery";
import { environment } from 'src/environments/environment';
@Component({
    selector: "shop-component",
    templateUrl: "./shop.component.html",
    styleUrls: ["./shop.component.css"]
})
export class ShopComponent {
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
        await this.listProducts(this.productTags[0])
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






}