<template>
  <abbr :title="title" :style="styles" :class="classes">
    <slot></slot>
  </abbr>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String} title - всплывающее сообщение
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
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}
</style>
