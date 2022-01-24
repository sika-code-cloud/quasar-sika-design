<template>
  <div>
    <div>
      <q-tabs
        v-model="iconType"
        dense
        inline-label
        mobile-arrows
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="ThemifyIcon" label="Themify">
          <q-badge class="q-ml-sm">{{ SikaIcon.ThemifyIcon.length }}</q-badge>
        </q-tab>
        <q-tab name="EvaIcon" label="Eva">
          <q-badge class="q-ml-sm">{{ SikaIcon.EvaIcon.length }}</q-badge>
        </q-tab>
        <q-tab name="Iconv4Icon" label="Iconv4">
          <q-badge class="q-ml-sm">{{ SikaIcon.Iconv4Icon.length }}</q-badge>
        </q-tab>
        <q-tab name="BootstrapIcon" label="Bootstrap">
          <q-badge class="q-ml-sm">{{ SikaIcon.BootstrapIcon.length }}</q-badge>
        </q-tab>
        <q-tab name="MaterialIcon" label="Material">
          <q-badge class="q-ml-sm">{{ SikaIcon.MaterialIcon.length }}</q-badge>
        </q-tab>
        <q-tab name="MdiV6Icon" label="Mdi_V6">
          <q-badge class="q-ml-sm">{{ SikaIcon.MdiV6Icon.length }}</q-badge>
        </q-tab>
      </q-tabs>
      <div class="q-ma-md">
        <span class="text-primary">搜索：</span>
        <div style="max-width: 200px" class="inline-block">
          <q-input v-model="checkIcon" outlined dense
                   debounce="500" />
        </div>
      </div>
    </div>
    <q-tab-panels v-model="iconType"
                  animated
                  swipeable
                  infinite
                  transition-prev="jump-up"
                  transition-next="jump-down"
                  @before-transition="beforeTransition"
                  @transition="transition"
    >
      <q-tab-panel name="ThemifyIcon" class="q-px-sm" style="min-height: 50vh">
        <IconViewTemplate v-model="ThemifyIcon" :allIcon="SikaIcon.ThemifyIcon" :attrKey="attrKey"
                          :iconName="checkIcon" />
      </q-tab-panel>
      <q-tab-panel name="EvaIcon" class="q-px-sm" style="min-height: 50vh">
        <IconViewTemplate v-model="EvaIcon" :allIcon="SikaIcon.EvaIcon" :attrKey="attrKey" :iconName="checkIcon" />
      </q-tab-panel>
      <q-tab-panel name="Iconv4Icon" class="q-px-sm" style="min-height: 50vh">
        <IconViewTemplate v-model="Iconv4Icon" :allIcon="SikaIcon.Iconv4Icon" :attrKey="attrKey"
                          :iconName="checkIcon" />
      </q-tab-panel>
      <q-tab-panel name="BootstrapIcon" class="q-px-sm" style="min-height: 50vh">
        <IconViewTemplate v-model="BootstrapIcon" :allIcon="SikaIcon.BootstrapIcon" :attrKey="attrKey"
                          :iconName="checkIcon" />
      </q-tab-panel>
      <q-tab-panel name="MaterialIcon" class="q-px-sm" style="min-height: 50vh">
        <div class="q-gutter-sm inline-block q-pb-md row justify-center q-px-md">
          <span class="col text-primary">样式：</span>
          <q-btn dense icon="o_account_box" unelevated label="outline" color="primary"
                 @click="replaceName('o_')"></q-btn>
          <q-btn dense icon="account_box" unelevated label="filled" color="primary"
                 @click="replaceName('')"></q-btn>
          <q-btn dense icon="r_account_box" unelevated label="rounded" color="primary"
                 @click="replaceName('r_')"></q-btn>
          <q-btn dense icon="s_account_box" unelevated label="sharp" color="primary"
                 @click="replaceName('s_')"></q-btn>
        </div>
        <IconViewTemplate v-model="MaterialIcon" :allIcon="SikaIcon.MaterialIcon" :attrKey="attrKey"
                          :iconName="checkIcon" />
      </q-tab-panel>
      <q-tab-panel name="MdiV6Icon" class="q-px-sm" style="min-height: 50vh">
        <IconViewTemplate v-model="MdiV6Icon" :allIcon="SikaIcon.MdiV6Icon" :attrKey="attrKey" :iconName="checkIcon" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import SIKA_ICON from '@/mock/data/icon/sika-icon'
import IconViewTemplate from './IconViewTemplate'
import _ from 'lodash'

const size = 500
export default {
  name: 'IconView',
  props: {
    attrKey: {
      type: String
    }
  },
  data() {
    return {
      times: [],
      SikaIcon: SIKA_ICON,
      IconData: [],
      MaterialIcon: [],
      MdiV6Icon: [],
      ThemifyIcon: [],
      EvaIcon: [],
      BootstrapIcon: [],
      Iconv4Icon: [],
      iconType: 'ThemifyIcon',
      indexObj: {
        MaterialIcon: {
          value: size
        },
        MdiV6Icon: {
          value: size
        },
        ThemifyIcon: {
          value: size
        },
        EvaIcon: {
          value: size
        },
        BootstrapIcon: {
          value: size
        },
        Iconv4Icon: {
          value: size
        }
      },
      checkIcon: ''
    }
  },
  components: {
    IconViewTemplate
  },
  methods: {
    onResize(size) {
      console.log('----------', size)
    },
    beforeTransition(newVal, oldVal) {
      this.push(newVal, oldVal)
    },
    transition(newVal, oldVal) {

    },
    getOther(iconsData, indexObjLabel) {
      if (indexObjLabel) {
        this.indexObj[indexObjLabel].value = iconsData.length
      }
      return iconsData.slice(0, iconsData.length)
    },
    getSimple(iconsData, indexObjLabel) {
      if (indexObjLabel) {
        this.indexObj[indexObjLabel].value = size
      }
      return iconsData.slice(0, size)
    },
    async push(newVal, oldVal) {
      this[newVal] = this.getSimple(SIKA_ICON[newVal], newVal)
      this.times[newVal] = setTimeout(() => {
        this[newVal] = this.getOther(SIKA_ICON[newVal], newVal)
        clearTimeout(this.times[newVal])
      }, 1000)
    },
    replaceName(val) {
      const data = []
      _.forEach(SIKA_ICON[this.iconType], function(value) {
        data.push(val + value)
      })
      this[this.iconType] = data
    }
  },
  created() {
    Object.freeze(SIKA_ICON)
    this.ThemifyIcon = this.getSimple(SIKA_ICON.EvaIcon)
    // for (let i = 0; i < SIKA_ICON.Iconv4Icon.length; ++i) {
    //   this.Iconv4IconFormat.push(_.kebabCase(SIKA_ICON.Iconv4Icon[i]))
    // }
    // console.log(this.element.attr)
  },
  computed: {}

}
</script>

<style scoped>

</style>
