<template>
  <div>
    <div class="q-pa-md">
      <q-toggle
        v-model="padding"
        label="Padding"
        color="purple"
        class="text-weight-bold"
      />

      <q-toggle
        v-model="vertical"
        label="Vertical"
        color="purple"
      />

      <q-toggle
        v-model="arrows"
        label="Arrows"
        color="purple"
      />

      <q-toggle
        v-model="navigation"
        label="Navigation"
        color="purple"
      />

      <div class="row items-center q-mb-md">
        <div>Navigation position:</div>
        <q-option-group
          v-model="navPos"
          :options="navigationPositions"
          color="purple"
          inline
        />
      </div>

      <q-carousel
        v-model="slide"
        swipeable
        animated
        :padding="padding"
        :vertical="vertical"
        :arrows="arrows"
        :navigation="navigation"
        :navigation-position="navPos"
        class="bg-purple text-white rounded-borders"
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>
  </div>
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
      slide: 1,
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,

      navPos: 'bottom',
      navigationPositions: [
        {
          value: 'top',
          label: 'top'
        },
        {
          value: 'right',
          label: 'right'
        },
        {
          value: 'bottom',
          label: 'bottom (default)'
        },
        {
          value: 'left',
          label: 'left'
        }
      ]
    }
  },
  watch: {
    vertical(val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
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
