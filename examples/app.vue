<template>
  <div class="container">
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/xicon">XIcon</router-link>
        </li>
        <li>
          <router-link to="/xgrid">XGrid</router-link>
        </li>
        <li>
          <router-link to="/xbutton">XButton</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
@import '../src/styles/index.less';
</style>

<style lang="less" scoped>
.container {

  .nav {
    margin-bottom: 10px;
    border: 10px solid #e444a4;
    padding: 10px;
  }

  ul, li {
    list-style: none;
  }
  li {
    display: inline-block;
    padding: 0 3px;
  }
}
</style>



