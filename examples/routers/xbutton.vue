<template>
  <div>
    <XButton>Default</XButton>
    <h3>长按钮</h3>
    <div style="width: 300px;">
      <XButton long>SUBMIT</XButton>
    </div>
    <h3>不可用状态</h3>
    <XButton disabled>hello world</XButton>
    <h3>加载中状态</h3>
    <XButton loading>Loading</XButton>
    <XButton :loading="loading" @click="toLoading">
      <span v-if="!loading">Click me!</span>
      <span v-else>Loading...</span>
    </XButton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    toLoading () {
      this.loading = true
    }
  }
}
</script>

<style lang="less" scoped>
h3 {
  margin: 10px 0;
}
</style>


