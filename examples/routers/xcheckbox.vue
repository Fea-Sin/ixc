<template>
  <div>
    <div>
      <h3>单独使用</h3>
      <XCheckbox v-model="single">XCheckbox</XCheckbox><br>
      {{ single }}
    </div>
    <div>
      <h3>组合使用</h3>
      <XCheckboxGroup v-model="social">
        <XCheckbox label="twitter">
          <XIcon type="social-twitter"></XIcon>
          <span>Twitter</span>
        </XCheckbox>
        <XCheckbox label="facebook">
          <XIcon type="social-facebook"></XIcon>
          <span>Facebook</span>
        </XCheckbox>
        <XCheckbox label="github">
          <XIcon type="social-github"></XIcon>
          <span>Github</span>
        </XCheckbox>
        <XCheckbox label="snapchat">
          <XIcon type="social-snapchat"></XIcon>
          <span>Snapchat</span>
        </XCheckbox>
      </XCheckboxGroup><br>
      {{ social }}
    </div>
    <div>
      <XCheckboxGroup v-model="fruit">
        <XCheckbox label="香蕉"></XCheckbox>
        <XCheckbox label="苹果"></XCheckbox>
        <XCheckbox label="西瓜"></XCheckbox>
      </XCheckboxGroup><br>
      {{ fruit }}
    </div>
    <div>
      <h3>不可用</h3>
      <XCheckbox v-model="disabledSingle" disabled>XCheckbox</XCheckbox><br>
      {{ disabledSingle }}<br>
      <XCheckboxGroup v-model="fruit">
        <XCheckbox label="香蕉" disabled></XCheckbox>
        <XCheckbox label="苹果" disabled></XCheckbox>
        <XCheckbox label="西瓜"></XCheckbox>
      </XCheckboxGroup><br>
    </div>
    <div>
      <h3>与其他组件通信</h3>
      <XCheckbox v-model="checked" :disabled="disabled">
        <span v-if="checked">Checked</span>
        <span v-else>Unchecked</span>
        -
        <span v-if="!disabled">Unable</span>
        <span v-else>Disabled</span>
      </XCheckbox><br>
      <XButton type="priOne" @click="checked = !checked">
        选中与否
      </XButton>
      <XButton type="priOne" @click="disabled = !disabled">
        是否可用
      </XButton>
    </div>
    <div>
      <h3>大小</h3>
      <XCheckbox size="small">XCheckbox-s</XCheckbox><br><br>
      <XCheckbox size="large">XCheckbox-l</XCheckbox><br><br>
      <XCheckboxGroup v-model="fruit" size="small">
        <XCheckbox label="香蕉"></XCheckbox>
        <XCheckbox label="苹果" disabled></XCheckbox>
        <XCheckbox label="西瓜"></XCheckbox>
      </XCheckboxGroup><br><br>
      <XCheckboxGroup v-model="fruit" size="large">
        <XCheckbox label="香蕉"></XCheckbox>
        <XCheckbox label="苹果" disabled></XCheckbox>
        <XCheckbox label="西瓜"></XCheckbox>
      </XCheckboxGroup>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      single: false,
      social: ['facebook', 'github'],
      fruit: ['苹果'],
      disabledSingle: true,
      checked: true,
      disabled: false
    }
  }
}
</script>


