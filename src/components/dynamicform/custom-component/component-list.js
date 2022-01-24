// 公共样式
import quasarComponentList from './quasar/quasar-component-list'

export const commonStyle = {
  rotate: 0,
  opacity: 1
}

export const commonAttr = {
  type: 'quasar', // 默认使用quasar
  animations: [],
  events: {},
  groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
  isLock: false // 是否锁定组件
}

// 编辑器左侧组件列表
const list = quasarComponentList

for (let i = 0, len = list.length; i < len; i++) {
  const item = list[i]
  item.style = { ...commonStyle, ...item.style }
  list[i] = { ...commonAttr, ...item }
}

export default list
