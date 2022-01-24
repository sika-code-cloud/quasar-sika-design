<template>
  <q-chip
    class="v-chip"
    removable
    v-model="vanilla"
    color="primary"
    text-color="white"
    icon="cake"
    :label="vanillaLabel"
    :title="vanillaLabel"
  ></q-chip>
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
    return {
      vanilla: true,
      vanillaLabel: 'I want vanilla flavoured ice cream'
    }
  },
  created() {
    // console.log(this.element.attr)
  }
}
</script>

<style lang="scss" scoped>
.v-chip {
  transition: .1s;
  margin: 0;

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
