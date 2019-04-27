export enum DataMode {
  /**本地模拟数据 */
  LocalStorage
}
export const environment = {
  ip: "http://115.29.64.6:5000",
  production: false,
  get dvoUrl() {
    return this.ip + "/api/RBAC/Demo/";
  },
  dataMode: DataMode.LocalStorage
};
