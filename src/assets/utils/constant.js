/*
* Description:系统常量
* Author:zcl
* Update:
*/
import { utils } from './utils'

class Constant {
  // 性别
  SexV = {
    男: 1,
    女: 2
  };

  options = {
    sex: utils.objToArr(this.SexV),
  }

  constructor () {
    this.SexK = utils.reverse(this.SexV)
  }

}
const constant = new Constant()
export default constant