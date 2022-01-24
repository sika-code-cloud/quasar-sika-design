<template>
  <q-icon
    :left="element.prop.left"
    :right="element.prop.right"
    :name="element.prop.icon"
    color="primary"
    class="v-icon"
  >
  </q-icon>
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
  methods: {},
  created() {
    // console.log(this.element.attr)
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.v-icon {
  transition: .1s;

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
