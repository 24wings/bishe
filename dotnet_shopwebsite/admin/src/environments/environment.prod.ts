export enum DataMode {
  /**本地模拟数据 */
  LocalStorage
}
export const environment = {
  ip: "http://47.103.26.101:5001",
  production: false,
  get dvoUrl() {
    return this.ip + "/api/RBAC/Demo/";
  },
  dataMode: DataMode.LocalStorage
};
