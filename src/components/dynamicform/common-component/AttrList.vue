<template>
  <div class="attr-list">
    <div style="font-size: 20px">样式</div>
    <AttrListTemplate :keys="styleKeysData.keys" :list-data="styleKeysData.listData" :type="styleKeysData.type" />
    <div style="font-size: 20px">拓展</div>
    <AttrListTemplate :keys="propKeysData.keys" :list-data="propKeysData.listData" :type="propKeysData.type"/>
  </div>
</template>

<script>
import AttrListTemplate from './AttrListTemplate'
import attrNameData from '../utils/attrNameData'
// import ColorChecked from 'components/dynamicform/common-component/ColorChecked'

export default {
  components: { AttrListTemplate },
  created() {
    console.log('curComponent:', this.curComponent)
  },
  data() {
    return {
      attrNameData
    }
  },
  methods: {},
  computed: {
    propKeysData() {
      if (this.curComponent) {
        return {
          type: 'prop',
          keys: Object.keys(this.curComponent.prop),
          listData: this.attrNameData[this.curComponent.type].propNameData
        }
      }
      return {}
    },
    styleKeysData() {
      if (this.curComponent) {
        return {
          type: 'style',
          keys: Object.keys(this.curComponent.style),
          listData: this.attrNameData[this.curComponent.type].styleNameData
        }
      }
      return {}
    },
    curComponent() {
      return this.$store.state.curComponent
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
