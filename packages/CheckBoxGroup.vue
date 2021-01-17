<template>
  <div class="ak-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'akCheckboxGroup',
  provide() {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
