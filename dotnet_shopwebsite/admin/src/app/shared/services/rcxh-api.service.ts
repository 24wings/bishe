import { Injectable } from '@angular/core';
import { MyHttpService } from 'src/app/shared/services/my-http.service';

@Injectable()
export class RcxhApiService {
    dvo = {
        userManage: "Wings.Projects.Hk.DVO.Rbac.OrgManage"
    }

    api = {
        auth: {
            login: '/api/Rcxh/Auth/login/'
        }

    }

    constructor(private http: MyHttpService) { }

    public login(username, password) {
        return this.http.Post(this.api.auth.login, { username, password });
    }




}