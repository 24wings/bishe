import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() { }

  public get title() {
    return '销售管理系统';
  }
}
