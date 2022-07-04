<template>
  <div
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
  </div>
</template>

<script>
import { removeSpace } from './../../../scripts/component/func'
export default {
  inheritAttrs: true,
  /*
   * Установка свойств для входных параметров
   * @typedef {Object} props
   * @property {String} rowCols - значение для добавления к классу 'row-cols-*'
   *   Доступные варианты:
   *     -auto - автоматическая установка ширины
   *     -1
   *     -2
   *     -3
   *     -4
   *     -5
   *     -6
   * @property {string} rowColsSm - row-cols-sm-*. Для устройств с максимальной шириной экрана 540px
   *  Доступные варианты:
   *    -auto
   *    -1
   *    -2
   *    -3
   *    -4
   *    -5
   *    -6
   * @property {string} rowColsMd - row-cols-md-*. Для устройств с максимальной шириной экрана 720px
   *  Доступные варианты:
   *    -auto
   *    -1
   *    -2
   *    -3
   *    -4
   *    -5
   *    -6
   * @property {string} rowColsLg - row-cols-lg-*. Для устройств с максимальной шириной экрана 992px
   *  Доступные варианты:
   *    -auto
   *    -1
   *    -2
   *    -3
   *    -4
   *    -5
   *    -6
   * @property {string} rowColsXl - row-cols-xl-*. Для устройств с максимальной шириной экрана 1200px
   *  Доступные варианты:
   *    -auto
   *    -1
   *    -2
   *    -3
   *    -4
   *    -5
   *    -6
   * @property {string} rowColsXxl - row-cols-xxl-*. Для устройств с максимальной шириной экрана 1320px
   *  Доступные варианты:
   *    -auto
   *    -1
   *    -2
   *    -3
   *    -4
   *    -5
   *    -6
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   */
  props: {
    row: {
      type: Boolean,
      default: true,
    },
    rowCols: {
      type: String,
      default: '',
    },
    rowColsSm: {
      type: String,
      default: '',
    },
    rowColsMd: {
      type: String,
      default: '',
    },
    rowColsLg: {
      type: String,
      default: '',
    },
    rowColsXl: {
      type: String,
      default: '',
    },
    rowColsXxl: {
      type: String,
      default: '',
    },
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
    return {
      outClass: null, // классы, сформированные аттрибутами
    }
  },
  /*
   * При монтировании компонента
   */
  mounted() {
    this.outClass = {
      row: this.row,
    }
    /*
     * Проверка условий для добавления классов
     * @function checkCondition
     * @param {String} nameProp Наименование свойства
     * @return {Boolean} Результат проверки
     */
    const checkCondition = (nameProp) =>
      this[nameProp] &&
      (this[nameProp] === 'auto' || (this[nameProp] > 0 && this[nameProp] <= 6))

    /*
     * Добавление Объекта в выходные классы
     * @function addObjClass
     * @param {String} nameProp Наименование свойства
     */
    const addObjClass = (nameProp) =>
      Object.assign(this.outClass, { [nameProp]: true }) // добавление к выходным классам

    if (checkCondition('rowCols'))
      addObjClass(`row-cols-${removeSpace(this.rowCols)}`)
    if (checkCondition('rowColsSm'))
      addObjClass(`row-cols-sm-${removeSpace(this.rowColsSm)}`)
    if (checkCondition('rowColsMd'))
      addObjClass(`row-cols-md-${removeSpace(this.rowColsMd)}`)
    if (checkCondition('rowColsLg'))
      addObjClass(`row-cols-lg-${removeSpace(this.rowColsLg)}`)
    if (checkCondition('rowColsXl'))
      addObjClass(`row-cols-xl-${removeSpace(this.rowColsXl)}`)
    if (checkCondition('rowColsXxl'))
      addObjClass(`row-cols-xxl-${removeSpace(this.rowColsXxl)}`)
  },
}
</script>
<style>

</style>
