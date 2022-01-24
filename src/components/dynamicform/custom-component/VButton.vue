<template>
  <q-btn
    :label="element.prop.label"
    :loading="element.prop.loading"
    :percentage="element.prop.percentage"
    :dark-percentage="element.prop.darkPercentage"
    :icon="element.prop.icon"
    :iconRight="element.prop.iconRight"
    :no-caps="element.prop.noCaps"
    :no-wrap="element.prop.noWrap"
    :align="element.prop.align"
    :stack="element.prop.stack"
    :stretch="element.prop.stretch"
    :type="element.prop.type"
    :tabindex="element.prop.tabindex"
    :to="element.prop.to"
    :replace="element.prop.replace"
    :append="element.prop.append"
    :disable="element.prop.disable"
    :size="element.prop.size"
    :outline="element.prop.outline"
    :flat="element.prop.flat"
    :unelevated="element.prop.unelevated"
    :rounded="element.prop.rounded"
    :push="element.prop.push"
    :glossy="element.prop.glossy"
    :fab-mini="element.prop.fabMini"
    :padding="element.prop.padding"
    :color="element.prop.color"
    :text-color="element.prop.textColor"
    :dense="element.prop.dense"
    :round="element.prop.round"
    class="v-button"
  >
  </q-btn>
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
.v-button {
  transition: .1s;
  font-weight: 500;
  width: 100%;
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
