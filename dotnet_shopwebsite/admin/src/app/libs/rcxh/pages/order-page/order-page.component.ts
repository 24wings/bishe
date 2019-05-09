import { Component } from '@angular/core';
import { ordersView } from 'src/app/struct/product/order';
import { confirm } from "devextreme/ui/dialog";
import notify from "devextreme/ui/notify";
import { MyHttpService } from 'src/app/shared/services/my-http.service';
@Component({
    selector: "order-page",
    templateUrl: './order-page.component.html'
})
export class OrderPageComponent {
    view = ordersView;
    constructor(private myHttp: MyHttpService) { }
    async doAction($event: { data: any }) {
        console.log($event);

        if ($event.data.status == 1) {
            var result = await confirm("确认发货?", "提示")
            if (result) {
                await this.myHttp.Get("/api/Hk/order/send?orderId=" + $event.data.id)
                var view = this.view;
                this.view = null;
                setTimeout(() => {
                    this.view = view;
                }, 400);
                notify("发货成功", "success");
            }

        } else {
            if ($event.data.status == 0) {
                notify("用户尚未支付", "info");
            } else {
                notify("你已经发货了", "info");
            }

        }
    }
} 