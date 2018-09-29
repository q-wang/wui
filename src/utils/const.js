/** 常量文件 */
import { fetch } from './fetch'

const COLDWALLET = '/cold_wallet'
const SIGN = '/sign'
const URL_HOT_ADMIN = '/admin'

/** ***** 冷钱包模块-start ******* **/

// 提交签名
export const signCommit = (data, callback) => fetch(SIGN + '/sign_tx', {
  callback,
  reqBody: data
}, 'POST')
// 创建地址
export const createdAddress = (data, callback) => fetch(COLDWALLET + '/batch_create_keys', {
  callback,
  reqBody: data
}, 'POST')

export const unsignedList = (data, callback) => fetch(URL_HOT_ADMIN + '/unsigned/list/' + data, {
  callback
}, 'POST')
