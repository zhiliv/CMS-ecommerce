<template>
  <p :class="[classes]" :style="styles">
    <slot></slot>
  </p>
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
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
