<template>
  <q-item-label class="q-gutter-sm">
    <span
      style="width: 20px; height: 20px"
      :key="index"
      v-for="(item, index) in styleSettingsData.themeColorSetting"
      @click="changeThemeColor(index)"
    >
      <q-btn
        :style="item.style"
        text-color="white"
        flat
        icon="done"
        dense
        v-if="checked(index)"
        style="width: 18px; height: 18px"
        size="xs"
      />
      <q-btn
        :style="item.style"
        text-color="white"
        flat
        dense
        v-else
        style="width: 18px; height: 18px"
        size="xs"
      />
    </span>
  </q-item-label>
</template>
<script>
import LAYOUT_DATA from '@/mock/data/layout/layoutData'

export default {
  name: 'ColorChecked',
  props: {
    value: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: 'color'
    }
  },
  data() {
    return {
      styleSettingsData: LAYOUT_DATA.getStyleSettingsData(),
      color: this.value,
      checkedIndex: 0
    }
  },
  created() {
    this.checked(0)
  },
  methods: {
    checked(index) {
      console.log('index', index, this.color)
      const themeColorSetting = this.styleSettingsData.themeColorSetting
      const item = themeColorSetting[index]
      if (this.color) {
        return this.color === item.attribute || item.color === this.color
      }
      return item.checked
    },
    changeThemeColor(index) {
      const themeColorSetting = this.styleSettingsData.themeColorSetting
      for (
        let i = 0;
        i < themeColorSetting.length;
        ++i
      ) {
        themeColorSetting[i].checked = false
      }
      themeColorSetting[index].checked = true
      this.color = themeColorSetting[index].color
      this.$emit('change', themeColorSetting[index])
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>
