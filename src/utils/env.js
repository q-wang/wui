/**
 * 配置编译环境和线上环境之间的切换
 */
let baseUrl = '' // 接口域名
let env = process.env.SERVER_ENV
let appkey = 'FFFF0N00000000005DEE'
let pckey = 'FFFF0N0N000000005DEE'

if (env === 'dev') { // 开发环境，接口地址为测试环境地址
  baseUrl = 'http://47.104.94.74:7002/ealge/user/1.0.0'
  appkey = 'FFFF0N0N000000005DEE'
} else if (env === 'test') { // 测试环境
  baseUrl = ''
  appkey = 'FFFF0N0N000000005DEE'
} else if (env === 'pre') { // 预生产环境
  appkey = 'FFFF0N0N000000005DEE'
} else if (env === 'prod') { // 生产环境
  baseUrl = 'https://otc.flashotc.com'
  appkey = 'FFFF0N00000000006120'
  pckey = 'FFFF0N00000000006120'
}

export { baseUrl, appkey, pckey }
