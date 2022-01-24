export const buttonComponentData = {
  component: 'v-button',
  label: '按钮',
  propValue: '按钮',
  type: 'quasar',
  icon: 'radio_button_checked',
  prop: {
    loading: false,
    percentage: 0,
    darkPercentage: false,
    label: '按钮',
    icon: undefined,
    iconRight: undefined,
    stack: false,
    stretch: false,
    type: 'button',
    to: undefined,
    append: false,
    disable: false,
    outline: false,
    flat: false,
    unelevated: false,
    rounded: false,
    push: false,
    glossy: false,
    color: 'primary',
    textColor: undefined,
    dense: false,
    round: false
  },
  style: {
    width: 122,
    height: 38,
    borderWidth: 1,
    borderColor: '',
    borderRadius: '',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '',
    letterSpacing: 0,
    textAlign: '',
    color: '',
    backgroundColor: ''
  }
}
export const iconComponentData = {
  component: 'v-icon',
  label: '图标',
  propValue: '图标',
  type: 'quasar',
  icon: 'ion-md-images',
  prop: {
    left: false,
    right: false,
    icon: 'ion-md-images'
  },
  style: {
    fontSize: 50,
    color: 'primary',
    backgroundColor: ''
  }
}
// 编辑器左侧组件列表
const list = [buttonComponentData,
  iconComponentData,
  {
    component: 'v-button-group',
    label: '按钮组',
    propValue: '按钮组',
    type: 'quasar',
    icon: 'radio_button_checked',
    attr: {
      flat: false,
      glossy: false,
      rounded: false,
      unelevated: true,
      round: false,
      push: true
    },
    style: {
      width: 100,
      height: 35,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-button-dropdown',
    label: '按下拉',
    propValue: '按下拉',
    type: 'quasar',
    icon: 'radio_button_checked',
    attr: {
      flat: false,
      glossy: false,
      rounded: false,
      unelevated: true,
      round: false,
      push: true
    },
    style: {
      width: 150,
      height: 35,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-avatar',
    label: '头像',
    propValue: '头像',
    type: 'quasar',
    icon: 'insert_emoticon',
    attr: {},
    style: {
      width: 60,
      height: 60,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-badge',
    label: '标记',
    propValue: '标记',
    type: 'quasar',
    icon: 'turned_in',
    attr: {},
    style: {
      width: 6,
      height: 6,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-banner',
    label: '横幅',
    propValue: '横幅',
    type: 'quasar',
    icon: 'table_rows',
    attr: {},
    style: {
      width: 600,
      height: 100,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-bar',
    label: '横栏',
    propValue: '横栏',
    type: 'quasar',
    icon: 'local_bar',
    attr: {},
    style: {
      width: 600,
      height: 40,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-breadcrumbs',
    label: '面包屑',
    propValue: '面包屑',
    type: 'quasar',
    icon: 'bakery_dining',
    attr: {},
    style: {
      width: 500,
      height: 35,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-card',
    label: '卡片',
    propValue: '卡片',
    type: 'quasar',
    icon: 'credit_card',
    attr: {},
    style: {
      width: 500,
      height: 300,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-carousel',
    label: '转盘',
    propValue: '转盘',
    type: 'quasar',
    icon: 'view_carousel',
    attr: {},
    style: {
      width: 600,
      height: 600,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-chat-message',
    label: '聊天',
    propValue: '聊天',
    type: 'quasar',
    icon: 'upcoming',
    attr: {},
    style: {
      width: 600,
      height: 450,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-chip',
    label: '碎片',
    propValue: '碎片',
    type: 'quasar',
    icon: 'developer_board',
    attr: {},
    style: {
      width: 200,
      height: 35,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-circular-progress',
    label: '循环',
    propValue: '循环进度',
    type: 'quasar',
    icon: 'rotate_right',
    attr: {},
    style: {
      width: 60,
      height: 60,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-color',
    label: '颜色',
    propValue: '颜色选择器',
    type: 'quasar',
    icon: 'palette',
    attr: {},
    style: {
      width: 350,
      height: 500,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-dialog',
    label: '弹窗',
    propValue: '对话框',
    type: 'quasar',
    icon: 'open_in_new',
    attr: {},
    style: {
      width: 100,
      height: 35,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'v-text',
    label: '文字',
    propValue: '双击编辑文字',
    icon: 'text_fields',
    attr: {},
    style: {
      width: 200,
      height: 22,
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: ''
    }
  },
  {
    component: 'v-button',
    label: '按钮',
    propValue: '按钮',
    icon: 'radio_button_checked',
    attr: {},
    style: {
      width: 100,
      height: 34,
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: ''
    }
  },
  {
    component: 'Picture',
    label: '图片',
    icon: 'crop_original',
    propValue: require('@/assets/title.jpg'),
    attr: {},
    style: {
      width: 300,
      height: 200,
      borderRadius: ''
    }
  },
  {
    component: 'rect-shape',
    label: '矩形',
    propValue: '&nbsp;',
    icon: 'crop_square',
    attr: {},
    style: {
      width: 200,
      height: 200,
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      borderColor: '#000',
      borderWidth: 1,
      backgroundColor: '',
      borderStyle: 'solid',
      verticalAlign: 'middle'
    }
  }
]

export default list
