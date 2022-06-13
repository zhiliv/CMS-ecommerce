<template>
  <mark :class="[classes]" :style="styles">
    <slot></slot>
  </mark>
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
mark,
.mark {
  padding: 0.1875em;
  background-color: var(--bs-highlight-bg);
}
</style>
