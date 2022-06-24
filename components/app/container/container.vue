/* eslint-disable vue/no-reserved-props */
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
import { removeSpace, StrToBool } from './../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {Boolean} container - устанавливает максимальную ширину max-width в каждой отзывчивой контрольной точке(установлен по умолчанию). Для того чтобы не использовать значение должно быть false
   * @property {String} breakpoint - Адаптивное значение ширины
   * Доступные варианты:
   *     -sm - максимальный размер 540px, размер экрана >= 576px
   *     -md - максимальный размер 720px, размер экрана >= 768px
   *     -lg - максимальный размер 960px, размер экрана >= 992px
   *     -xl - максимальный размер 1140px, размер экрана >= 1200px
   *     -xxl - максимальный размер 1320px, размер экрана >= 1400px
   *     -fluid - ширина которого width: 100% на всех контрольных точках;
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   */
  props: {
    // eslint-disable-next-line vue/require-default-prop
    container: {
      type: [Boolean,String],
      default: true,
    },
    breakpoint: {
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
    /*
     * @typedef {Object} Внутренние свойства компонента
     * @property {Object} outClass Выходные классы
     *
     */
    return {
      outClass: null, // классы, сформированные аттрибутами
    }
  },
  /*
   * При монтировании компонента
   */
  mounted() {
    this.outClass = {
      container: StrToBool(this.container) ,
    }
    // создание объекта для установки выходных классов
    const arrOfBreakpoint = this.breakpoint
      ? removeSpace(this.breakpoint).split(',')
      : [] // преобразование строки в масси
    arrOfBreakpoint.forEach((el) =>
      Object.assign(this.outClass, { [`container-${el}`]: true })
    ) // добавление класса в выходной параметр классов
  },
}
</script>
<style>
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm,
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md,
  .container-sm,
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1320px;
  }
}
</style>
