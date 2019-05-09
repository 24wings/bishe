import { NgModule, ModuleWithProviders } from "@angular/core";
import {
  DxDataGridModule,
  DxTreeListModule,
  DxPopupModule,
  DxSwitchModule,
  DxButtonModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxHtmlEditorModule,
  DxTemplateModule,
  DxTagBoxModule,
  DxMenuModule,
  DxCheckBoxModule,
  DxNavBarModule,
  DxToolbarModule,
  DxButtonGroupModule,
  DxFormModule,
  DxRadioGroupModule,
  DxTreeViewModule,
  DxDropDownBoxModule,
  DxFileUploaderModule,
  DxLookupModule
} from "devextreme-angular";
import { CommonModule } from "@angular/common";
import { SqlMapService } from "./services/sqlmap.service";
import { SingleCardModule } from "../layouts/single-card/single-card.component";
import { WsViewComponent } from "./components/ws-view/ws-view.component";
import { WsEditorComponent } from "./components/ws-editor/ws-editor.component";
import { StringColComponent } from "./components/cols/string-col/string-col.component";
import { DxiButtonModule } from "devextreme-angular/ui/nested/button-dxi";
import { DxiItemModule } from "devextreme-angular/ui/nested/item-dxi";
import { FormsModule } from "@angular/forms";
import { DynamicColComponent } from "./components/cols/dynamic-col.component";
import { DynamicCellComponent } from "./components/cells/dynamic-cell.component";
import { DynamicColDirective } from "./components/cols/dynamic-col.directive";
import { DynamicCellDirective } from "./components/cells/dynamic-cell.directive";
// import { cellComponentRegister } from "./components/cells/cell.component.register";
import { WsSearchBarComponent } from "./components/ws-search-bar/ws-search-bar.component";
import { DxValidatorModule } from "devextreme-angular/ui/validator";
import { DxValidationGroupModule } from "devextreme-angular/ui/validation-group";
import { MyHttpService } from './services/my-http.service';
import { RcxhApiService } from './services/rcxh-api.service';
import { WsRefTreeComponent } from './components/cells/ws-ref-tree/ws-ref-tree.component';
import { WsImageCellComponent } from './components/cells/ws-image-cell/ws-image-cell.component';
import { ArticleComponent } from './pages/article/article.component';
import { HistoryOrderComponent } from './pages/history-order/history-order.component';


const components = [WsRefTreeComponent, WsImageCellComponent, ArticleComponent, HistoryOrderComponent]
@NgModule({
  imports: [
    CommonModule,
    DxTagBoxModule,
    DxTextAreaModule,
    DxDataGridModule,
    DxTreeListModule,
    DxPopupModule,
    DxSwitchModule,
    DxButtonModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxHtmlEditorModule,
    DxTemplateModule,
    SingleCardModule,
    DxMenuModule,
    DxCheckBoxModule,
    DxNavBarModule,
    DxToolbarModule,
    DxiButtonModule,
    DxButtonGroupModule,
    DxiItemModule,
    FormsModule,
    DxFormModule,
    DxRadioGroupModule,
    DxTreeViewModule,
    DxDropDownBoxModule,
    DxValidationGroupModule,
    DxValidatorModule,
    DxFileUploaderModule,
    DxLookupModule
  ],
  exports: [
    DxTagBoxModule,
    DxDataGridModule,
    DxTreeListModule,
    DxPopupModule,
    DxSwitchModule,
    DxButtonModule,
    CommonModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxHtmlEditorModule,
    DxTemplateModule,
    SingleCardModule,
    DxMenuModule,
    DxCheckBoxModule,
    DxNavBarModule,
    DxToolbarModule,
    WsViewComponent,
    WsEditorComponent,
    StringColComponent,
    DxiButtonModule,
    DxButtonGroupModule,
    DxiItemModule,
    FormsModule,
    DxFormModule,
    DynamicColComponent,
    DynamicCellComponent,
    DxRadioGroupModule,
    DxTreeViewModule,
    DxDropDownBoxModule,
    DxValidationGroupModule,
    DxValidatorModule,
    DxFileUploaderModule,
    DxLookupModule,
    ...components

  ],
  declarations: [
    WsViewComponent,
    WsEditorComponent,
    StringColComponent,
    DynamicColComponent,
    DynamicCellComponent,
    DynamicColDirective,
    DynamicCellDirective,
    WsSearchBarComponent,
    ...components

  ],
  providers: [SqlMapService, RcxhApiService],
  entryComponents: [WsRefTreeComponent, WsImageCellComponent]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SqlMapService, MyHttpService]
    };
  }
}
