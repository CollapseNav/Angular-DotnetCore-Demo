/*
 * @Author: CollapseNav
 * @Date: 2020-01-03 20:05:15
 * @LastEditors  : CollapseNav
 * @LastEditTime : 2020-01-08 23:54:26
 * @Description:
 */
export class UserInfo {
  constructor(public id: string,
    public userAccount: string,
    public userName: string,
    public gender: string,
    public password: string,
    public createDate: Date,
    public phoneNumber: string, ) { }

}
