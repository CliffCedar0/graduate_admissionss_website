<template>
  <div class="home">
    <ContentBase>
      <el-calendar v-model="value" />
      这里是首页
    </ContentBase>
  </div>
</template>

<script>
import ContentBase from '../components/ContentBase.vue'

export default {
  name: 'HomeView',
  components: {
    ContentBase
  }
}
</script>
