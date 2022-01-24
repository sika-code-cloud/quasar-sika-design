<!-- TODO: 这个页面后续将用 JSX 重构 -->
<template>
  <div>
    <q-list padding dense v-if="listDataKeysForChecked && listDataKeysForChecked.length>0">
      <q-item-label header>选择</q-item-label>
      <q-item tag="label" clickable :active="curComponent[type][key]"
              v-for="({key,label,component}, index) in listDataKeysForChecked" :key="index">
        <q-item-section>
          <q-item-label>{{ label }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-checkbox v-model="curComponent[type][key]" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list padding dense v-if="listDataKeysForToggle && listDataKeysForToggle.length>0">
      <q-item-label header>切换</q-item-label>
      <q-item tag="label" clickable :active="curComponent[type][key]"
              v-for="({key,label,component}, index) in listDataKeysForToggle" :key="index">
        <q-item-section>
          <q-item-label>{{ label }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="curComponent[type][key]" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list padding dense v-if="listDataKeysForColor && listDataKeysForColor.length>0">
      <q-item-label header>颜色</q-item-label>
      <q-item tag="label" v-for="({key,label,component}, index) in listDataKeysForColor" :key="index">
        <q-item-section>
          <q-item-label>{{ label }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn color="red" dense unelevated icon-right="palette"
                 size="sm">
            <q-menu :auto-close="false" transition-show="scale" transition-hide="scale" :offset="[10, 10]">
              <q-color v-model="curComponent[type][key]" :default-value="curComponent[type][key]"
                       style="max-width: 250px" @input="changeColor($event, key)" />
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list padding dense v-if="listDataKeysForInput && listDataKeysForInput.length>0">
      <q-item-label header>输入</q-item-label>
      <div v-for="({key,label,component}, index)  in listDataKeysForInput" :key="index">
        <q-item tag="label">
          <q-item-section>
            <q-item-label class="q-pb-sm">{{ label }}</q-item-label>
            <q-item-label>
              <q-input outlined v-model="curComponent[type][key]" :dense="true" :type="component" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-space />
      </div>
    </q-list>
    <q-list padding dense v-if="listDataKeysForIcon && listDataKeysForIcon.length>0">
      <q-item-label header>图标</q-item-label>
      <q-item tag="label" v-for="({key,label,component}, index) in listDataKeysForIcon" :key="index">
        <q-item-section>
          <q-item-label>{{ label }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn color="primary" dense unelevated icon-right="ion-ios-image"
                 size="sm">
          </q-btn>
          <q-menu persistent :auto-close="false" transition-show="scale" transition-hide="scale" :offset="[10, 10]">
            <q-card style="max-width: 250px; max-height: 450px">
              <q-card-section style="max-height: 70vh" class="q-pt-sm q-px-none">
                <IconContainer :attrKey="key" />
              </q-card-section>
              <q-separator />
            </q-card>
          </q-menu>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>

import IconContainer from '@/components/common/icon/IconContainer'
import attrNameData from '../utils/attrNameData'
// import ColorChecked from 'components/dynamicform/common-component/ColorChecked'

export default {
  components: { IconContainer },
  created() {
  },
  props: {
    type: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    },
    keys: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      leftIconShow: false,
      excludes: ['Picture', 'Group'], // 这些组件不显示内容
      textAlignOptions: [
        {
          label: '左对齐',
          value: 'left'
        },
        {
          label: '居中',
          value: 'center'
        },
        {
          label: '右对齐',
          value: 'right'
        }
      ],
      borderStyleOptions: [
        {
          label: '实线',
          value: 'solid'
        },
        {
          label: '虚线',
          value: 'dashed'
        }
      ],
      verticalAlignOptions: [
        {
          label: '上对齐',
          value: 'top'
        },
        {
          label: '居中对齐',
          value: 'middle'
        },
        {
          label: '下对齐',
          value: 'bottom'
        }
      ],
      selectKey: ['textAlign', 'borderStyle', 'verticalAlign'],
      attrNameData
    }
  },
  methods: {
    changeColor(val, key) {
      console.log('val:，key', val, key)
      // let color = val.color
      // if (val.attribute) {
      //   color = val.attribute
      // }
      // console.log(' this.curComponent.style[key]', this.curComponent.style[key])
      // this.curComponent.style[key] = color
      // console.log(' this.curComponent.style[key]', this.curComponent.style[key])
    },
    changeFlat(event, key) {
      // const flat = this.curComponent.attr[key]
      // const flat = 'flat'
      // console.log('flat:', this.curComponent.attr[flat])
    }
  },
  computed: {
    listDataKeysForColor() {
      return this.listDataKeys.filter(item => item.component === 'color')
    },
    listDataKeysForInput() {
      return this.listDataKeys.filter(item => item.component === 'input' ||
        item.component === 'number' ||
        item.component === undefined ||
        item.component === '')
    },
    listDataKeysForToggle() {
      return this.listDataKeys.filter(item => item.component === 'toggle')
    },
    listDataKeysForChecked() {
      return this.listDataKeys.filter(item => item.component === 'checkbox')
    },
    listDataKeysForIcon() {
      return this.listDataKeys.filter(item => item.component === 'icon')
    },
    listDataKeys() {
      if (this.keys) {
        return this.listData.filter(item => this.keys.includes(item.key))
      }
      return []
    },
    curComponent() {
      return this.$store.state.curComponent
    }
  }
}
</script>

<style lang="scss" scoped>
.attr-list {
  overflow: auto;
  padding: 20px;
  padding-top: 0;
  height: 100%;
}
</style>
