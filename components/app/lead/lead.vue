<template>
  <p
    v-bind="$attrs"
    :class="[outClass, classes]"
    :style="styles"
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
  data() {
    /*
     * @typedef {Object} Внутренние свойства компонента
     * @property {Object} outClass Выходные классы
     *
     */
    return {
      outClass: null, // классы, сформированные аттрибутами
    }
  },
  mounted(){
    this.outClass = {
      lead: true
    }
  }
}
</script>

<style>
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
</style>
