<template>
  <img
    :src="src"
    :class="[outClass, classes]"
    :style="styles"
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
  />
</template>

<script>
import { camelToDash } from './../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String} href  - значение ссылки
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
    src: {
      type: String,
      default: '',
    },
    imgFluid: {
      type: Boolean,
      default: false,
    },
    imgThumbnail: {
      type: Boolean,
      default: false,
    },
  },
  /*
   * При монтировании компонента
   */
  mounted() {
    this.outClass = {}
    for (const item in this.$props) {
      if (item === 'imgFluid' || item === 'imgThumbnail')
        this.outClass[`${camelToDash(item)}`] = this[item]
    }
  },
}
</script>

<style>
img {
  vertical-align: middle;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid var(--bs-border-color);
  border-radius: 0.375rem;
  max-width: 100%;
  height: auto;
}
</style>
