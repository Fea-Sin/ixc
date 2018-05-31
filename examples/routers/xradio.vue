<template>
  <div>
    <h3>单独使用, 使用 v-model 可以双向绑定数据</h3>
    <XRadio v-model="single">Radio</XRadio><br>
    {{ single }}
    <h3>组合使用</h3>
    <XRadioGroup v-model="phone">
      <XRadio label="apple">
        <XIcon type="social-apple"></XIcon>
        <span>Apple</span>
      </XRadio>
      <XRadio label="android">
        <XIcon type="social-android"></XIcon>
        <span>Android</span>
      </XRadio>
      <XRadio label="windows">
        <XIcon type="social-windows"></XIcon>
        <span>windows</span>
      </XRadio>
    </XRadioGroup><br>
    {{ phone }}
    <div>
      <XRadioGroup v-model="animal">
        <XRadio label="金班蝶"></XRadio>
        <XRadio label="爪哇犀牛"></XRadio>
        <XRadio label="印度黑羚"></XRadio>
      </XRadioGroup><br>
      {{ animal }}
    </div>
    <div>
      <h3>不可用</h3>
      <XRadio v-model="disabledSingle" disabled>不可用</XRadio>
      <XRadioGroup v-model="animal">
        <XRadio label="金班蝶" disabled></XRadio>
        <XRadio label="爪哇犀牛"></XRadio>
        <XRadio label="印度黑羚"></XRadio>
      </XRadioGroup><br>
      {{ animal }}
    </div>

    <div>
      <h3>按钮样式</h3>
      <XRadioGroup v-model="button1" type="button">
        <XRadio label="北京"></XRadio>
        <XRadio label="上海" disabled></XRadio>
        <XRadio label="深圳"></XRadio>
        <XRadio label="杭州"></XRadio>
      </XRadioGroup><br>
      {{ button1 }}
    </div>
    <div>
      <XRadioGroup v-model="button2" type="button">
        <XRadio label="北京" disabled></XRadio>
        <XRadio label="上海" disabled></XRadio>
        <XRadio label="深圳" disabled></XRadio>
        <XRadio label="杭州" disabled></XRadio>
      </XRadioGroup>
    </div>

    <div>
      <h3>尺寸</h3>
      <div>
        <XRadio size="small" v-model="size1">Radio</XRadio><br>
        {{ size1 }}
      </div>
      <div>
        <XRadio size="large" v-model="size2">Radio</XRadio><br>
        {{size2}}
      </div>
      <div>
        <XRadioGroup
          v-model="button3"
          type="button"
          size="large">
          <XRadio label="北京"></XRadio>
          <XRadio label="上海"></XRadio>
          <XRadio label="深圳"></XRadio>
          <XRadio label="杭州"></XRadio>
        </XRadioGroup><br><br>
        <XRadioGroup
          v-model="button3"
          type="button">
          <XRadio label="北京"></XRadio>
          <XRadio label="上海"></XRadio>
          <XRadio label="深圳"></XRadio>
          <XRadio label="杭州"></XRadio>
        </XRadioGroup><br><br>
        <XRadioGroup
          v-model="button3"
          type="button"
          size="small">
          <XRadio label="北京"></XRadio>
          <XRadio label="上海"></XRadio>
          <XRadio label="深圳"></XRadio>
          <XRadio label="杭州"></XRadio>
        </XRadioGroup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      single: false,
      phone: 'apple',
      animal: '爪哇犀牛',
      disabledSingle: true,
      button1: '北京',
      button2: '北京',
      size1: false,
      size2: false,
      button3: '北京'
    }
  }
}
</script>

