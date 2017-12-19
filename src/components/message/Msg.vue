<template>
  <el-alert
    :title="content.title"
    :type="content.type"
    :description="content.description"
    show-icon>
  </el-alert>
</template>

<script>
  export default {
    props: {
      content: {
        type: Object
      }
    },
    components: {},
    data () {
      return {}
    }
  }
</script>