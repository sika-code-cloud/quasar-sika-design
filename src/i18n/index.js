// import enUS from './en-us'
// import zhCN from './zh-cn'
import languageMessage from './merge-language/index'

const { zhCn, enUs } = languageMessage
console.log(zhCn, enUs)
export default {
  'zh-cn': zhCn,
  'en-us': enUs
}
