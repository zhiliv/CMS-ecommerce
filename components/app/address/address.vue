<template>
  <address :style="styles" :class="classes">
    <slot></slot>
  </address>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    styles: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
</style>
