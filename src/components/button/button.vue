<template>
  <button
    :type="htmlType"
    :class="classes"
    :disabled="disabled"
    @click="handleClick">
    <XIcon
      class="ix-load-loop"
      type="load-c"
      v-if="loading"></XIcon>
    <XIcon :type="icon" v-if="icon && !loading"></XIcon>
    <span v-if="showSlot" ref="slot"><slot></slot></span>
  </button>
</template>

<script>
import XIcon from '../icon'
import { oneOf } from '../../utils/assist'

const prefixCls = 'ix-btn'

export default {
  name: 'XButton',
  components: { XIcon },
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['default', 'priOne'])
      }
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: 'button',
      validator (value) {
        return oneOf(value, ['button', 'submit', 'reset'])
      }
    },
    icon: String,
    long: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showSlot: true
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${prefixCls}-long`]: this.long,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-loading`]: this.loading != null && this.loading
        }
      ]
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  mounted () {
    this.showSlot = this.$slots.default !== undefined
  }
}
</script>

