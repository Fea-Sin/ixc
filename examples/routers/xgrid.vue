<template>
  <div>
    <XRow class="test-row">
      <XCol class="test-col" span="12">col-12</XCol>
      <XCol class="test-col" span="12">col-12</XCol>
    </XRow>
    <XRow class="test-row">
      <XCol class="test-col" span="8">col-8</XCol>
      <XCol class="test-col" span="8">col-8</XCol>
      <XCol class="test-col" span="8">col-8</XCol>
    </XRow>
    <h3>测试 gutter</h3>
    <XRow class="test-row" :gutter="16">
      <XCol class="test-col" span="6">col-6</XCol>
      <XCol class="test-col" span="6">col-6</XCol>
      <XCol class="test-col" span="6">col-6</XCol>
      <XCol class="test-col" span="6">col-6</XCol>
    </XRow>
    <h3>测试栅格顺序</h3>
    <XRow class="test-row" type="flex">
      <XCol class="test-col" span="6" order="4">1|order-4</XCol>
      <XCol class="test-col" span="6" order="3">2|order-3</XCol>
      <XCol class="test-col" span="6" order="2">3|order-2</XCol>
      <XCol class="test-col" span="6" order="1">4|order-1</XCol>
    </XRow>
    <h3>通过设置 offset 属性，将列进行左右偏移，偏移栅格数为 offset 的值</h3>
    <XRow class="test-row">
      <XCol class="test-col" span="8">col-8</XCol>
      <XCol class="test-col" span="8" offset="8">col-8 | offset-8</XCol>
    </XRow>
    <XRow class="r">
      <XCol class="c" span="6" offset="8">col-6 | offset-8</XCol>
      <XCol class="c" span="4" offset="6">col-4 | offset-6</XCol>
    </XRow>
    <h3>子元素向左排列</h3>
    <XRow class="r" type="flex" justify="start">
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
    </XRow>
    <h3>子元素向右排列</h3>
    <XRow class="r" type="flex" justify="end">
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
    </XRow>
    <h3>子元素居中排列</h3>
    <XRow class="r" type="flex" justify="center">
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
    </XRow>
    <h3>子元素等宽排列</h3>
    <XRow class="r" type="flex" justify="space-between">
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
    </XRow>
    <h3>子元素分散排列</h3>
    <XRow class="r" type="flex" justify="space-around">
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
      <XCol class="c" span="4">col-4</XCol>
    </XRow>
    <h3>顶部对齐</h3>
    <XRow type="flex" align="top">
      <XCol span="4"><p style="height: 80px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 30px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 100px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 60px; background-color: #4fafd7;">col-4</p></XCol>
    </XRow>
    <h3>底部对齐</h3>
    <XRow type="flex" align="bottom">
      <XCol span="4"><p style="height: 80px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 30px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 100px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 60px; background-color: #4fafd7;">col-4</p></XCol>
    </XRow>
    <h3>居中对齐</h3>
    <XRow type="flex" align="middle">
      <XCol span="4"><p style="height: 80px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 30px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 100px; background-color: #4fafd7;">col-4</p></XCol>
      <XCol span="4"><p style="height: 60px; background-color: #4fafd7;">col-4</p></XCol>
    </XRow>
    <h3>响应式布局</h3>
    <XRow class="r">
      <XCol class="c" :xs="2" :sm="4" :md="6" :lg="8">col-4</XCol>
      <XCol class="c" :xs="20" :sm="16" :md="12" :lg="8">col-4</XCol>
      <XCol class="c" :xs="2" :sm="4" :md="6" :lg="8">col-4</XCol>
    </XRow>
    <h3>其他属性的响应式</h3>
    <XRow class="r">
      <XCol class="c" :xs="{span: 5, offset: 1}" :lg="{span: 6, offset: 2}">col</XCol>
      <XCol class="c" :xs="{span: 11, offset: 1}" :lg="{span: 6, offset: 2}">col</XCol>
      <XCol class="c" :xs="{span: 5, offset: 1}" :lg="{span: 6, offset: 2}">col</XCol>
    </XRow>

  </div>
</template>

<style lang="less" scoped>
.test-row, .r {
  border: 0px solid red;
  line-height: 35px;
  margin: 5px 0;
}
.test-col, .c {
  border: 1px solid red;
}
</style>
