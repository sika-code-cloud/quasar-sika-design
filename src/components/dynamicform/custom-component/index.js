/* eslint-disable */
import Vue from 'vue'
const components = [
  'VBreadcrumbs',
  'VText',
  'VBadge',
  'VBanner',
  'VAvatar',
  'VButton',
  'VIcon',
  'VButtonGroup',
  'VButtonDropdown',
  'VBar',
  'VCard',
  'VCarousel',
  'VChatMessage',
  'VChip',
  'VCircularProgress',
  'VColor',
  'VDialog',
  'Picture',
  'Group',
  'RectShape'
]
components.forEach(key => {
  console.log('key:', key)
  Vue.component(key, () => import(`./${key}`))
})
