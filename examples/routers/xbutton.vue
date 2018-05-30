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
    <h3>按钮大小</h3>
    <XButton size="small">Default</XButton>
    <XButton>Default</XButton>
    <XButton size="large">Default</XButton>
    <h3>特殊按钮</h3>
    <XButton type="priOne">HELLO WORLD</XButton>
    <XButton type="priOne" size="large">HELLO WORLD</XButton>
    <h3>组合1</h3>
    <div style="width: 300px;">
      <XButton type="priOne" long size="large">SUBMIT</XButton>
    </div>
    <h3>组合2</h3>
    <div style="width: 300px;">
      <XButton
        type="priOne"
        long
        size="large"
        loading>SUBMIT</XButton>
    </div>
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


