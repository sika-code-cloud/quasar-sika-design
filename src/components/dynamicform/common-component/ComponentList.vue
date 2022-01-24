<template>
  <div @dragstart="handleDragStart" class="component-list q-pa-sm q-gutter-sm">
    <!--    <div v-for="(item, index) in componentList" :key="index" class="list" draggable-->
    <!--         :data-index="index">-->
    <!--      <q-icon :name="item.icon" style="font-size: 1rem; margin-right: 4px;" />-->
    <!--      <span>{{ item.label }}</span>-->
    <!--    </div>-->
    <q-btn v-for="(item, index) in componentList"
           :key="index"
           size="sm"
           color="primary"
           class="list"
           draggable
           unelevated
           :icon="item.icon"
           :label="item.label"
           :data-index="index">
    </q-btn>
  </div>
</template>

<script>
import componentList from '../custom-component/component-list'

export default {
  data() {
    return {
      componentList
    }
  },
  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData('index', e.target.dataset.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .list {
    height: 35px;
    width: 46%;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }
}
</style>
