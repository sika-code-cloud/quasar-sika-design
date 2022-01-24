<template>
  <q-circular-progress
    indeterminate
    size="40px"
    :thickness="0.4"
    font-size="50px"
    color="lime"
    track-color="grey-3"
    center-color="grey-8"
    class="q-circular-progress"
  />
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
  data() {
    return {}
  },
  created() {
    // console.log(this.element.attr)
  }
}
</script>

<style lang="scss" scoped>
.q-circular-progress {
  transition: .1s;
  height: 100%;
  width: 100%;

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
