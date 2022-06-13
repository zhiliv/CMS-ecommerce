<template>
  <sub :class="[classes]" :style="styles">
    <slot></slot>
  </sub>
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
sub {
  bottom: -0.25em;
}

sub {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
</style>
