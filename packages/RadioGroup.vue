<template>
  <div class="ak-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'akRadioGroup',
  components: {},
  props: {
    // 组件接收到了value值，我们需要触发这个组件的input事件
    //  provide 与inject 用来做祖孙之间组件通讯
  },
  provide() {
    return {
      RadioGroup: this
    }
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
