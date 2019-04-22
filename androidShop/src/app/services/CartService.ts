import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
    /**产品 */
    set products(ps: any[]) {
        if (ps == null || ps == undefined) ps = [];
        localStorage.setItem("products", JSON.stringify(ps));
    }

    get products() {
        return localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    }


}