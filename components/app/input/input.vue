<!-- eslint-disable vue/no-mutating-props -->
<template>
  <input :value="value" :class="classes" type="text" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  props: {
    /* Установка класса form-control */
    formControl: {
      type: String,
      default: 'true',
      validator(value) {
        return value === 'false' || value === null || value === 'true'
      },
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    classes() {
      const { formControl } = this
      return {
        'form-control': !!formControl,
      }
    },
  },
}
</script>

<style>
  input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
</style>
