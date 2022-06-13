<template>
  <dd :class="classes" :style="style">
    <slot></slot>
  </dd>
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
dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
</style>
