
import { View, TreeListView } from "src/app/shared/dto/View";
import { DxiDataGridColumn } from "devextreme-angular/ui/nested/base/data-grid-column-dxi";
import DevExpress from "devextreme/bundles/dx.all";
import LocalStore from "devextreme/data/local_store";
import { EditorType } from "../editor-type";
import DataSource from "devextreme/data/data_source";
import * as AspNetData from "devextreme-aspnet-data-nojquery";
import { environment } from 'src/environments/environment';
type EditorOptions = DevExpress.ui.dxTextBoxOptions;

export let myOrderView: View = {
    title: "我的订单",
    dvoFullName: "Wings.Projects.Rcxh.DVO.Product.MyOrderManage",
    allowCreate: false,
    allowDelete: false,
    allowEdit: false,
    dataSource: new DataSource({
        store: AspNetData.createStore({
            key: "id",
            loadUrl: environment.ip + "/api/Hk/order/loadSubmit",
            insertUrl: environment.ip + "/api/Hk/order",
            updateUrl: environment.ip + "/api/Hk/order",
            deleteUrl: environment.ip + "/api/Hk/order",
        })
    }),
    viewType: "Table",
    cols: [
        {
            dataField: "productName",
            caption: "产品名称",
            dataType: "string"
        } as DxiDataGridColumn,
        {
            dataField: "productTag",
            caption: "产品分类",
            displayExpr: "name",
            calculateDisplayValue: function (item) {
                return item.productTag ? item.productTag.name : "";
            }
        },

        {
            dataField: "productImages",
            caption: "产品图片",
            dataType: "string",
            cellTemplate: "Picture"
        } as DxiDataGridColumn,
        {
            dataField: "price",
            caption: "单价",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "num",
            caption: "数量",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "shouldPayAmount",
            caption: "应付金额",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "status",
            caption: "订单状态",
            lookup: {
                dataSource: [ // contains the same values as the "status" field provides
                    { label: '已提交', value: 0 },
                    { label: '已支付', value: 1 },
                    { label: '下架', value: 2 },
                    { label: '已发货', value: 3 },
                    // ...
                ]
            }

        } as any,
        {
            dataField: "summary",
            caption: "简述",
            dataType: "string"
        } as DxiDataGridColumn,
        {
            dataField: "createTime",
            caption: "发布时间",
            dataType: "datetime"
        } as DxiDataGridColumn,

    ],
    items: [
        {
            dataField: "name",
            label: { text: "产品名字" },
            dataType: "string"
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "productTagId",
            label: { text: "产品分类" },
            // dataType: "number",
            editorType: "dxLookup",
            editorOptions: {
                dxLookup: {
                    displayExpr: "name",
                    valueExpr: "id",
                    dataSource: AspNetData.createStore({
                        key: "id",
                        loadUrl: environment.ip + "/api/Hk/product-tag/load",
                    })
                }
            }
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "images",
            label: { text: "产品图片" },
            editorType: "wsImage" as any
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "price",
            label: { text: "价格" },
            dataType: "number",
            // editorOptions: { mode: "password" } as EditorOptions
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "status",
            caption: "状态",
            editorType: "dxSelectBox",
            editorOptions: {
                displayExpr: "label",
                valueExpr: "value",
                dataSource: [ // contains the same values as the "status" field provides
                    { label: '已提交', value: 0 },
                    { label: '上架', value: 1 },
                    { label: '下架', value: 2 }
                    // ...
                ]
            }
        }

    ]
};

export let historyOrderView: View = {
    title: "我的订单",
    dvoFullName: "Wings.Projects.Rcxh.DVO.Product.MyOrderManage",
    allowCreate: false,
    allowDelete: false,
    allowEdit: false,
    dataSource: new DataSource({
        store: AspNetData.createStore({
            key: "id",
            loadUrl: environment.ip + "/api/Hk/order/loadHistory",
            insertUrl: environment.ip + "/api/Hk/order",
            updateUrl: environment.ip + "/api/Hk/order",
            deleteUrl: environment.ip + "/api/Hk/order",
        })
    }),
    viewType: "Table",
    cols: [
        {
            dataField: "productName",
            caption: "产品名称",
            dataType: "string"
        } as DxiDataGridColumn,
        {
            dataField: "productTag",
            caption: "产品分类",
            displayExpr: "name",
            calculateDisplayValue: function (item) {
                return item.productTag ? item.productTag.name : "";
            }
        },

        {
            dataField: "productImages",
            caption: "产品图片",
            dataType: "string",
            cellTemplate: "Picture"
        } as DxiDataGridColumn,
        {
            dataField: "price",
            caption: "单价",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "num",
            caption: "数量",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "shouldPayAmount",
            caption: "应付金额",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "status",
            caption: "订单状态",
            lookup: {
                dataSource: [ // contains the same values as the "status" field provides
                    { label: '已提交', value: 0 },
                    { label: '已支付', value: 1 },
                    { label: '下架', value: 2 },
                    { label: '已发货', value: 3 },
                    // ...
                ]
            }

        } as any,
        {
            dataField: "summary",
            caption: "简述",
            dataType: "string"
        } as DxiDataGridColumn,
        {
            dataField: "createTime",
            caption: "发布时间",
            dataType: "datetime"
        } as DxiDataGridColumn,

    ],
    items: [
        {
            dataField: "name",
            label: { text: "产品名字" },
            dataType: "string"
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "productTagId",
            label: { text: "产品分类" },
            // dataType: "number",
            editorType: "dxLookup",
            editorOptions: {
                dxLookup: {
                    displayExpr: "name",
                    valueExpr: "id",
                    dataSource: AspNetData.createStore({
                        key: "id",
                        loadUrl: environment.ip + "/api/Hk/product-tag/load",
                    })
                }
            }
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "images",
            label: { text: "产品图片" },
            editorType: "wsImage" as any
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "price",
            label: { text: "价格" },
            dataType: "number",
            // editorOptions: { mode: "password" } as EditorOptions
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "status",
            caption: "状态",
            editorType: "dxSelectBox",
            editorOptions: {
                displayExpr: "label",
                valueExpr: "value",
                dataSource: [ // contains the same values as the "status" field provides
                    { label: '已提交', value: 0 },
                    { label: '上架', value: 1 },
                    { label: '下架', value: 2 }
                    // ...
                ]
            }
        }

    ]
};


export let ordersView: View = {
    title: "我的订单",
    dvoFullName: "Wings.Projects.Rcxh.DVO.Product.OrderManage",
    allowCreate: false,
    allowDelete: false,
    dataSource: new DataSource({
        store: AspNetData.createStore({
            key: "id",
            loadUrl: environment.ip + "/api/Hk/order/load",
            insertUrl: environment.ip + "/api/Hk/order",
            updateUrl: environment.ip + "/api/Hk/order",
            deleteUrl: environment.ip + "/api/Hk/order",
        })
    }),
    viewType: "Table",
    cols: [
        {
            dataField: "productName",
            caption: "产品名称",
            dataType: "string"
        } as DxiDataGridColumn,
        {
            dataField: "productTag",
            caption: "产品分类",
            displayExpr: "name",
            calculateDisplayValue: function (item) {
                return item.productTag ? item.productTag.name : "";
            }
        },

        {
            dataField: "productImages",
            caption: "产品图片",
            dataType: "string",
            cellTemplate: "Picture"
        } as DxiDataGridColumn,
        {
            dataField: "price",
            caption: "单价",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "num",
            caption: "数量",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "shouldPayAmount",
            caption: "应付金额",
            dataType: "number",

        } as DxiDataGridColumn,
        {
            dataField: "status",
            caption: "订单状态",
            lookup: {
                dataSource: [ // contains the same values as the "status" field provides
                    { label: '已提交', value: 0 },
                    { label: '已支付', value: 1 },
                    { label: '下架', value: 2 },
                    { label: '已发货', value: 3 },
                    // ...
                ]
            }

        } as any,
        {
            dataField: "summary",
            caption: "简述",
            dataType: "string"
        } as DxiDataGridColumn,
        {
            dataField: "createTime",
            caption: "发布时间",
            dataType: "datetime"
        } as DxiDataGridColumn,

    ],
    items: [
        {
            dataField: "name",
            label: { text: "产品名字" },
            dataType: "string"
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "productTagId",
            label: { text: "产品分类" },
            // dataType: "number",
            editorType: "dxLookup",
            editorOptions: {
                dxLookup: {
                    displayExpr: "name",
                    valueExpr: "id",
                    dataSource: AspNetData.createStore({
                        key: "id",
                        loadUrl: environment.ip + "/api/Hk/product-tag/load",
                    })
                }
            }
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "images",
            label: { text: "产品图片" },
            editorType: "wsImage" as any
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "price",
            label: { text: "价格" },
            dataType: "number",
            // editorOptions: { mode: "password" } as EditorOptions
        } as DevExpress.ui.dxFormSimpleItem,
        {
            dataField: "status",
            caption: "状态",
            editorType: "dxSelectBox",
            editorOptions: {
                displayExpr: "label",
                valueExpr: "value",
                dataSource: [ // contains the same values as the "status" field provides
                    { label: '已提交', value: 0 },
                    { label: '上架', value: 1 },
                    { label: '下架', value: 2 }
                    // ...
                ]
            }
        }

    ]
};




enum ProductStatus {
    /// <summary>
    /// 已提交
    /// </summary>
    Submit,
    /// <summary>
    /// 有效
    /// </summary>
    Active,
    /// <summary>
    /// 作废
    /// </summary>
    Fail

}
