<template>
  <q-banner class="bg-primary text-white v-banner">
    Unfortunately, the credit card did not go through, please try again.
    <template v-slot:action>
      <q-btn flat color="white" label="Dismiss" />
      <q-btn flat color="white" label="Update Credit Card" />
      <q-avatar
        color="primary"
        class="v-avatar"
        text-color="white">
        <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
      </q-avatar>
    </template>
  </q-banner>
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
.v-banner {
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
