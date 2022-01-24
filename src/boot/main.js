import Vue from 'vue'
import '@/mock/index'
import '@/assets/js/sc-common.js'
import numeral from 'vue-numeral-filter'

import ElementUI from 'element-ui'

import '@/components/dynamicform/custom-component' // 注册自定义组件
import '@/components/dynamicform/styles/iconfont/iconfont.css'
import '@/components/dynamicform/styles/animate.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/components/dynamicform/styles/reset.css'

Vue.use(numeral, { locale: 'en-gb' })
Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false
