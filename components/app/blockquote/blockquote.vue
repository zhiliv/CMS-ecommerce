<template>
  <blockquote :class="classes" :style="style">
    <slot></slot>
  </blockquote>
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
blockquote {
  margin: 0 0 1rem;
}
</style>
