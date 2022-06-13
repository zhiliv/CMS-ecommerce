<template>
  <small :class="[classes]" :style="styles">
    <slot></slot>
  </small>
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

small, .small {
  font-size: 0.875em;
}
</style>
