import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";

import { AuthService, AppInfoService } from "../../services";
import { DxButtonModule } from "devextreme-angular/ui/button";
import { DxCheckBoxModule } from "devextreme-angular/ui/check-box";
import { DxTextBoxModule } from "devextreme-angular/ui/text-box";
import { DxValidatorModule } from "devextreme-angular/ui/validator";
import { DxValidationGroupModule } from "devextreme-angular/ui/validation-group";
import { SharedModule } from "../../shared.module";
import { RcxhApiService } from '../../services/rcxh-api.service';
@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent {
  login = "admin";
  password = "8888";

  constructor(
    private authService: AuthService,
    public appInfo: AppInfoService,
    private rcxhApi: RcxhApiService,
    private router: Router
  ) { }

  async onLoginClick(args) {
    var rtn = await this.rcxhApi.login(this.login, this.password);
    if (rtn) {
      if (rtn.user.id && rtn.user.roleType == 1) {
        sessionStorage.setItem("userId", rtn.user.id);
        this.router.navigateByUrl("/shop");
      } else {
        this.router.navigateByUrl("/rcxh/admin/page/Wings.Projects.Rcxh.DVO.Rbac.OrgManage");
        this.authService.logIn(this.login, this.password);
      }
      // localStorage.setItem("token", rtn.token);



      args.validationGroup.reset();
    }


  }
}
@NgModule({
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    RouterModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationGroupModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
