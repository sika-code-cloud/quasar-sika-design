<template>
  <q-btn-dropdown
    class="glossy v-button-dropdown"
    color="primary"
    label="Account Settings"
  >
    <div class="row no-wrap q-pa-md">
      <div class="column">
        <div class="text-h6 q-mb-md">Settings</div>
        <q-toggle v-model="mobileData" label="Use Mobile Data" />
        <q-toggle v-model="bluetooth" label="Bluetooth" />
      </div>

      <q-separator vertical inset class="q-mx-lg" />

      <div class="column items-center">
        <q-avatar size="72px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>

        <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

        <q-btn
          color="primary"
          label="Logout"
          push
          size="sm"
          v-close-popup
        />
      </div>
    </div>
  </q-btn-dropdown>
</template>

<script>
export default {
  props: {
    propValue: {
      type: String,
      default: ''
    },
    element: {
      type: Object
    }
  },
  data () {
    return {
      mobileData: true,
      bluetooth: false
    }
  },
  created() {
    // console.log(this.element.attr)
  }
}
</script>

<style lang="scss" scoped>
.v-button-dropdown {
  transition: .1s;
  height: 100%;
  font-size: 14px;

  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: 0;
  }

  &:hover {
    background-color: #ecf5ff;
    color: #3a8ee6;
  }
}
</style>
