<template>
  <q-bar class="v-bar bg-black text-white">
    <q-btn dense flat icon="airplay" />
    <div class="text-weight-bold">
      App
    </div>
    <div class="cursor-pointer gt-md">File</div>
    <div class="cursor-pointer gt-md">Edit</div>
    <div class="cursor-pointer gt-md">View</div>
    <div class="cursor-pointer gt-md">Window</div>
    <div class="cursor-pointer gt-md">Help</div>
    <q-space />
    <q-btn dense flat icon="airplay" class="gt-xs" />
    <q-btn dense flat icon="battery_charging_full" />
    <q-btn dense flat icon="wifi" />
    <div>9:41</div>
    <q-btn dense flat icon="search" />
    <q-btn dense flat icon="list" />
  </q-bar>
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
  created() {
    // console.log(this.element)
  }
}
</script>

<style lang="scss" scoped>
.v-bar {
  transition: .1s;
  width: 100%;
  height: 100%;

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
