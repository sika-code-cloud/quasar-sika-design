<template>
  <div class="home">
    <!-- 使用topology组件 -->
    <topology/>
  </div>
</template>
<script>

import topology from 'topology-vue'
// 需要导入topology-vue.css
import 'topology-vue/topology-vue.css'

export default {
  name: 'FlowChart',
  components: {
    topology
  }
}
</script>
<style lang="scss">
@import '//at.alicdn.com/t/font_2030495_pwo1zu1ka1.css';
@import '//at.alicdn.com/t/font_1331132_qhyav2o6mp.css';

.home {
  height: 100vh;
}
</style>
