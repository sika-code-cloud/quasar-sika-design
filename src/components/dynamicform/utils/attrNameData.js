export const propNameData = [
  /** input */
  {
    key: 'label',
    label: '按钮文本',
    component: 'input'
  },
  {
    key: 'icon',
    label: '图标',
    component: 'icon'
  },
  {
    key: 'iconRight',
    label: '右边图标',
    component: 'icon'
  },
  {
    key: 'align',
    label: '内容对齐',
    component: 'input'
  },
  {
    key: 'type',
    label: '按钮类型',
    component: 'input'
  },
  {
    key: 'to',
    label: '路由',
    component: 'input'
  },
  {
    key: 'size',
    label: '大小',
    component: 'number'
  },
  /** input */

  /** toggle */
  {
    key: 'loading',
    label: '加载状态',
    component: 'toggle'
  },
  {
    key: 'stretch',
    label: '自动匹配高度',
    component: 'toggle'
  },
  {
    key: 'disable',
    label: '禁用',
    component: 'toggle'
  },
  /** toggle */
  /** checkbox */
  {
    key: 'outline',
    label: '轮廓线',
    component: 'checkbox'
  },
  {
    key: 'flat',
    label: '扁平',
    component: 'checkbox'
  },
  {
    key: 'unelevated',
    label: '移除阴影',
    component: 'checkbox'
  },
  {
    key: 'rounded',
    label: '圆角',
    component: 'checkbox'
  },
  {
    key: 'push',
    label: '推设计',
    component: 'checkbox'
  }, {
    key: 'glossy',
    label: '光泽效果',
    component: 'checkbox'
  },
  {
    key: 'fab',
    label: '自动匹配',
    component: 'checkbox'
  },
  {
    key: 'padding',
    label: '自定义填充',
    component: 'checkbox'
  },
  {
    key: 'round',
    label: '圆形',
    component: 'checkbox'
  },
  /** checkbox */
  /** color */
  {
    key: 'color',
    label: '背景颜色',
    component: 'color'
  },
  {
    key: 'textColor',
    label: '文本颜色',
    component: 'color'
  }
  /** color */
]

export const styleNameData = [
  {
    key: 'left',
    label: 'x 坐标',
    component: 'number'
  },
  {
    key: 'top',
    label: 'y 坐标',
    component: 'number'
  },
  {
    key: 'width',
    label: '宽',
    component: 'number'
  },
  {
    key: 'height',
    label: '高',
    component: 'input'
  },
  {
    key: 'color',
    label: '颜色',
    component: 'color'
  },
  {
    key: 'backgroundColor',
    label: '背景色',
    component: 'color'
  },
  {
    key: 'borderWidth',
    label: 'number'
  },
  {
    key: 'borderStyle',
    label: '边框风格',
    component: 'input'
  },
  {
    key: 'borderColor',
    label: '边框颜色',
    component: 'color'
  },
  {
    key: 'borderRadius',
    label: '边框半径',
    component: 'number'
  },
  {
    key: 'fontSize',
    label: '字体大小',
    component: 'number'
  },
  {
    key: 'fontWeight',
    label: '字体粗细',
    component: 'number'
  },
  {
    key: 'lineHeight',
    label: '行高',
    component: 'number'
  },
  {
    key: 'letterSpacing',
    label: '字间距',
    component: 'number'
  },
  {
    key: 'textAlign',
    label: '左右对齐',
    component: 'input'
  },
  {
    key: 'verticalAlign',
    label: '上下对齐',
    component: 'input'
  },
  {
    key: 'opacity',
    label: '透明度',
    component: 'number'
  }
]
export const attrNameData = {
  quasar: {
    styleNameData: styleNameData,
    propNameData: propNameData
  }
}

export default attrNameData
