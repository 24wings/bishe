import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as AspNetData from "devextreme-aspnet-data-nojquery";
import { environment } from 'src/environments/environment';
import DataSource from "devextreme/data/data_source";
import { MyHttpService } from '../../services/my-http.service';
enum View {
    List,
    Detail
}
@Component({
    selector: "artilce-com",
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent {
    constructor(private router: Router, private myHttp: MyHttpService) { }
    state = View.List;
    View = View;
    selectedTag;
    productTags: any[] = [];
    products: any[] = []


    async ngOnInit() {
        this.listArticles()
        this.getUserInfo();
    }

    async getUserInfo() {
        if (sessionStorage.getItem("userId")) {
            // this.state = View.User;
        }
    }
    articleDataSource = AspNetData.createStore({ key: "id", loadUrl: environment.ip + "/api/Hk/news/load" })

    async listArticles() {
        var data = await this.articleDataSource.load();
        this.articles = data;
    }


    cartNum = 0;


    cartProducts = [];

    addCart() {


    }
    goShopCart() {
        this.router.navigateByUrl("/shop-cart");
    }
    orders: any[] = [];


    articles: any[] = []

    logout() {
        sessionStorage.removeItem("userId");
        location.reload();
    }

}