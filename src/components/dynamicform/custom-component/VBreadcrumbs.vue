<template>
  <q-breadcrumbs class="text-brown v-breadcrumbs">
    <template v-slot:separator>
      <q-icon
        size="1.5em"
        name="chevron_right"
        color="primary"
      />
    </template>

    <q-breadcrumbs-el label="Home" icon="home" />
    <q-breadcrumbs-el label="Components" icon="widgets" />
    <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
  </q-breadcrumbs>
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

<style lang="scss">
.v-breadcrumbs {
  transition: .1s;
  width: 100%;
  height: 100%;
  .q-gutter-y-sm, .q-gutter-sm {
    margin-top: 0;
    margin-left: 0;
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
