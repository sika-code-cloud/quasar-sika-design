<template>
  <q-btn-group class="v-button-group" stretch spread >
    <q-btn color="primary" glossy label="First" />
    <q-btn color="primary" glossy label="Second" />
    <q-btn color="primary" glossy label="Third" />
    <q-btn color="primary" glossy label="Fourth" />
  </q-btn-group>
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
.v-button-group {
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
