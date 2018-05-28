<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentUpward } from '../../utils/assist'

const prefixCls = 'ix-col'

export default {
  name: 'XCol',
  props: {
    span: [Number, String],
    order: [Number, String],
    offset: [Number, String],
    push: [Number, String],
    pull: [Number, String],
    className: String,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    classes () {
      let classList = [
        `${prefixCls}`,
        {
          [`${prefixCls}-span-${this.span}`]: this.span,
          [`${prefixCls}-order-${this.order}`]: this.order,
          [`${prefixCls}-offset-${this.offset}`]: this.offset,
          [`${prefixCls}-push-${this.push}`]: this.push,
          [`${prefixCls}-pull-${this.pull}`]: this.pull,
          [`${this.className}`]: !!this.className
        }
      ]

      // 为啥 字面量数组 会报错；将数组赋值给变量 却不会报错  ----> forEach
      let arrModel = ['xs', 'sm', 'md', 'lg']
      arrModel.forEach(size => {
          if (typeof this[size] === 'number') {
              classList.push(`${prefixCls}-span-${size}-${this[size]}`);
          } else if (typeof this[size] === 'object') {
              let props = this[size];
              Object.keys(props).forEach(prop => {
                  classList.push(
                      prop !== 'span'
                          ? `${prefixCls}-${size}-${prop}-${props[prop]}`
                          : `${prefixCls}-span-${size}-${props[prop]}`
                  );
              });
          }
      })

      return classList
    },
    styles () {
      let style = {}
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }

      return style
    }
  },
  methods: {
    updateGutter () {
      const XRow = findComponentUpward(this, 'XRow')
      if (XRow) {
        XRow.updateGutter(XRow.gutter)
      }
    }
  },
  mounted () {
    this.updateGutter()
  },
  beforeDestroy () {
    this.updateGutter()
  }
}
</script>

