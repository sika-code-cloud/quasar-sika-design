import user from './user/index'
import layouts from './layouts'
import dashboard from './dashboard'

// /**
//  * @param {object} mergeObj 合并的语言对象，被拷贝
//  * @param {string} currLang 当前语言包名称
//  * @param {object} airObj 为空磨具对象，在此赋值，最后返回
//  * @returns 当前语言包相应的message
//  */
function getLanguageMessage(mergeObj, currLang, airObj = {}) {
  for (const key in mergeObj) {
    if (Object.hasOwnProperty.call(mergeObj, key)) {
      const ele = mergeObj[key]
      // ele是对象，并且里面的属性含有currLang(当前语言类型)的值
      if (ele && ele[currLang]) {
        // 当前语言相应值---a:{lang1:'ena',lang2:'cna'} => a:ena
        const langVal = ele[currLang]
        airObj[key] = langVal
      } else if (ele && ele.zhCn && !ele.enUs) {
        // ele是对象，并且里面的中文有值，英文无值，--- 默认英文值为中文的key
        airObj[key] = key
      } else {
        getLanguageMessage(ele, currLang, airObj[key] = {})
      }

      // 若为对象的最后一个key，则返回结果
      const keyList = Object.keys(mergeObj)
      if (key === keyList[keyList.length - 1]) {
        return airObj
      }
    }
  }
}

// 将所有需要导入的模块，分解在此
const mergeObj = { ...user, ...layouts, ...dashboard }
// 语言包list
const languageList = ['zhCn', 'enUs']
// 初始化语言包message
const languageMessage = {}

// 为语言包message赋值
for (const lang of languageList) {
  languageMessage[lang] = getLanguageMessage(mergeObj, lang)
}

export default languageMessage