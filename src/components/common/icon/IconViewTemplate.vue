<template>
  <div class="full-width row justify-center q-gutter-xs">
    <q-intersection
      v-for="(icon, index) in filterIcons" :key="index"
      transition="scale"
      class="text-center"
      style="height: 35px;width: 35px"
    >
      <q-icon @click="copyIconName(icon)" class="text-primary cursor-pointer" :name="icon" size="2em">
        <q-tooltip content-class="bg-primary" :offset="[10, 10]">{{ icon }}</q-tooltip>
      </q-icon>
    </q-intersection>
  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'

export default {
  name: 'IconViewTemplate',
  props: {
    value: {
      type: Array,
      required: true
    },
    allIcon: {
      type: Array,
      required: true
    },
    iconName: {
      type: String
    },
    attrKey: {
      type: String
    }
  },
  methods: {
    copyIconName(value) {
      copyToClipboard(value)
        .then(() => {
          this.showNotif(value)
          if (this.curComponent) {
            console.log('attrKey,value', this.attrKey, this.curComponent.prop[this.attrKey])
            this.curComponent.prop[this.attrKey] = value
          }
        })
        .catch(() => {
          // 失败
        })
    },
    showNotif(val) {
      this.$q.notify({
        message: '【' + val + '】复制成功',
        color: 'primary',
        icon: val,
        position: 'top'
      })
    }
  },
  data() {
    return {}
  },
  computed: {
    filterIcons() {
      if (this.iconName || this.iconName.trim() !== '') {
        return this.allIcon.filter(item => item.indexOf(this.iconName.trim()) !== -1)
      }
      return this.value
    },
    curComponent() {
      return this.$store.state.curComponent
    }
  }
}
</script>

<style scoped>

</style>
