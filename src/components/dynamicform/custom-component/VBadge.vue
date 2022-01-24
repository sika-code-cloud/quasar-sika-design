<template>
  <q-badge color="red" class="v-badge" rounded floating />
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
.v-badge {
  transition: .1s;
  width: 100%;
  height: 100%;
  .q-badge--floating {
    top: 0;
    right: 0;
  }
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
