<template>
  <app-button
    ref="item"
    v-bind="$attrs"
    size="sm"
    :class="[outClass, classes]"
    dropdown-item
    @blur="onBlur"
    @click="setActive">
    <slot></slot>
  </app-button>
</template>
<script>
export default {
  /*
   * @typedef {Object} props
   * @property {String} size - Размер
   * @property {String} color - Цвет панели
   * @property {String} classItemActive - Класс для активного элемента
   */
  props: {
    classes: {
      type: [String, Array],
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    classItemActive: {
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
     * @property {Object} outClass - Сформированный список внутренних классов
     */
    return {
      outClass: { 'transition-1': true, 'no-select': true, 'nav-buttoin-item': true, 'm-1': true, 'p-1': true },
    }
  },
  /*
   * Перед монтированием компонента
   */
  beforeMount() {
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
  },
  methods: {
    /*
     * Установка класса активности для выделенного элемента
     * @function setActive
     * @property {Object} event - Объект события
     */
    setActive(event) {
      this.$emit('click', event)
      const listEl = this.$el.parentElement // список родительских элементов меню
      listEl.querySelectorAll('button[dropdown-item]').forEach(el => {
        if (this.classItemActive) this.classItemActive.split(' ').forEach(cls => el.classList.remove(cls))
      })
      this.$el.parentElement.querySelectorAll('ul').forEach(el => el.classList.remove('show')) // удаление класса показа у элементов dropdown
      if (this.classItemActive) this.classItemActive.split(' ').forEach(cls => this.$el.classList.add(cls)) // добавление классов активности элементу
    },
    /*
     * При потере фокуса у элемента, происходит удаление класса
     * @function onBlur
     */
    onBlur() {
      if (this.classItemActive) this.classItemActive.split(' ').forEach(cls => this.$el.classList.remove(cls)) // удаление классов активности
    },
  },
}
</script>
<style>
@import './../../../../assets/css/bg-color.css';
@import './../../../../assets/css/text.css';

.nav-buttoin-item::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
}
</style>
