<template>
  <caption
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
  >
    <slot></slot>
  </caption>
</template>

<script>
import { camelToDash } from './../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {Boolean} captionTop - Помещение в верхнюю часть таблицы
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
    captionTop: {
      type: Boolean,
      default: false
    }
  },
    data() {
    return {
      outClass: null, // классы, сформированные аттрибутами
    }
  },
  mounted() {
    this.outClass = {}
    if(this.captionTop) this.outClass[`${camelToDash('captionTop')}`] = this.captionTop
  },
}
</script>

<style>
caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: rgba(var(--bs-body-color-rgb), 0.75);
  text-align: left;
}

.caption-top {
  caption-side: top;
}

</style>
