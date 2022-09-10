<template>
  <li
    ref="item"
    :class="[classes, outClass]"
    @click="$emit('click', $event)">
    <slot></slot>
  </li>
</template>
<script>
export default {
  props: {
    /*
     * Входящие свойства
     * @typedef {Object} props
     * @property {String} classes - Классы для пункта меню
     * @property {String} size - Размер
     */
    classes: {
      type: [String, Array],
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  /*
   * Данные компонента
   * @function data
   */
  data() {
    /*
     * @typedef {Object}
     * @property {String} outClass - Классы сформированные в компоненте
     */
    return {
      outClass: { 'w-100': true, 'dropdown-item': true },
    }
  },
  /*
   * При монтировании компонента
   * @function mounted
   */
  beforeMount() {
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
  },
}
</script>
<style>
.dropdown-item {
  width: 100%;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  clear: both;
  font-weight: 400;
  color: var(--bs-dropdown-link-color);
  text-align: inherit;
  text-decoration: none;
  overflow-wrap: break-word;
  background-color: transparent;
  border: 0;
  z-index: 9999;
}
</style>
