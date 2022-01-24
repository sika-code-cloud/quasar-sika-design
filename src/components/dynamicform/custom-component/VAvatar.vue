<template>
  <q-avatar
    color="primary"
    class="v-avatar"
    text-color="white">
    <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
  </q-avatar>
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
.v-avatar {
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
