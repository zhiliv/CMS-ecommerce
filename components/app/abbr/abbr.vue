<template>
  <abbr
    :style="styles"
    :class="[outClass, classes]"
    v-bind="$attrs"
    @dblclick="$emit('dblclick', $event)"
    @click="$emit('click', $event)"
    @change="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @keydown="$emit('keydown', $event)"
    @keypress="$emit('keypress', $event)"
    @keyup="$emit('keyup', $event)"
    @load="$emit('load', $event)"
    @mousedown="$emit('mousedown', $event)"
    @mousemove="$emit('mousemove', $event)"
    @mouseout="$emit('mouseout', $event)"
    @mouseover="$emit('mouseover', $event)"
    @mouseup="$emit('mouseup', $event)"
    @reset="$emit('reset', $event)"
    @select="$emit('select', $event)"
    @submit="$emit('submit', $event)"
    @unload="$emit('unload', $event)"
  >
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
    initialism: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      outClass: null,
    }
  },
  mounted() {
    this.outClass = {
      initialism: this.initialism,
    }
  },
}
</script>

<style>
abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}
</style>
