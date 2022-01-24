<template>
  <q-card class="v-card" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>Title</q-item-label>
        <q-item-label caption>
          Subhead
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="col-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </q-card-section>
    </q-card-section>
  </q-card>
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
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  created() {
    // console.log(this.element.attr)
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  transition: .1s;
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
