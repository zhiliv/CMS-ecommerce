/* eslint-disable vue/no-reserved-props */
<template>
  <div
    :class="[outClass, classes]"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>
<script>
import { removeSpace, camelToDash } from './../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {Boolean} dFlex - отображение элемента вида flex
   * Доступные варианты
   *  -false
   *  -true(по умолчанию)
   * @property {Boolean} dInlineFlex - Гибкий контейнер
   * Доступные варианты
   *  -false
   *  -true
   * @property { Boolean } flexRow - Установка горизонтального направления
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dSmFlex - Гибкий контейнер для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dSmInlineFlex - Гибкий контейнер для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dMdFlex - Гибкий контейнер для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dMdInlineFlex - Гибкий контейнер для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dLgFlex - Гибкий контейнер для устройств с размером экрана >= 992px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dLgInlineFlex - Гибкий контейнер для устройств с размером экрана >= 992px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dXlFlex - Гибкий контейнер для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dXlInlineFlex - Гибкий контейнер для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dXxlFlex - Гибкий контейнер для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} dXxlInlineFlex - Гибкий контейнер для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexRowReverse - Установка горизонтального направления с обратной стороны
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexColumn - Установка вертикального направления
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexColumnReverse - Установка вертикального направления c обратной стороны
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexSmRow - Установка горизонтального направления для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexSmRowReverse - Установка горизонтального с обратной стороны направления для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexSmColumn - Установка вертикального направления для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexSmColumnReverse - Установка вертикального направления c обратной стороны для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexMdRow - Установка горизонтального направления для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexMdRowReverse - Установка горизонтального с обратной стороны направления для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexMdColumn - Установка вертикального направления для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexMdColumnReverse - Установка вертикального направления c обратной стороны для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexLgRow - Установка горизонтального направления для устройств с размером экрана >= 992px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexLgRowReverse - Установка горизонтального с обратной стороны направления для устройств с размером экрана >= 992x
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexLgColumn - Установка вертикального направления для устройств с размером экрана >= 992px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexLgColumnReverse - Установка вертикального направления c обратной стороны для устройств с размером экрана >= 992px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXlRow - Установка горизонтального направления для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXlRowReverse - Установка горизонтального с обратной стороны направления для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXlColumn - Установка вертикального направления для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXlColumnReverse - Установка вертикального направления c обратной стороны для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXxlRow - Установка горизонтального направления для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXxlRowReverse - Установка горизонтального с обратной стороны направления для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXxlColumn - Установка вертикального направления для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXxlColumnReverse - Установка вертикального направления c обратной стороны для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexFill - класс для серии родственных элементов, чтобы заставить их иметь ширину, равную их содержимому
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexSmFill - класс для серии родственных элементов, чтобы заставить их иметь ширину, равную их содержимому для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexMdFill - класс для серии родственных элементов, чтобы заставить их иметь ширину, равную их содержимому для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexLgFill - класс для серии родственных элементов, чтобы заставить их иметь ширину, равную их содержимому для устройств с размером экрана >= 992px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXlFill - класс для серии родственных элементов, чтобы заставить их иметь ширину, равную их содержимому для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexXxlFill - класс для серии родственных элементов, чтобы заставить их иметь ширину, равную их содержимому для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -false
   *  -true
   * @property {Boolean} flexGrow - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство.
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexSmGrow - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexMdGrow - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexLgGrow - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 992px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexXlGrow - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexXxlGrow - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexShrink - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexSmShrink - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 576px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexMdShrink - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 768px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexLgShrink - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 992px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexXlShrink - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 1200px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} flexXxlShrink - утилиты для переключения способности элемента flex расти, чтобы заполнить доступное пространство для устройств с размером экрана >= 1400px
   * Доступные варианты
   *  -0
   *  -1
   * @property {Boolean} - flexNowrap - Измените способ упаковки элементов flex в контейнер flex(без обертки по умолчанию )
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexWrap - Измените способ упаковки элементов flex в контейнер flex
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexWrapReverse  - Измените способ упаковки элементов flex в контейнер flex в обратном направлении
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexSmNowrap - Измените способ упаковки элементов flex в контейнер flex(без обертки по умолчанию ) для устройств с размером экрана >= 576px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexSmWrap - Измените способ упаковки элементов flex в контейнер flex для устройств с размером экрана >= 576px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexSmWrapReverse  - Измените способ упаковки элементов flex в контейнер flex в обратном направлении для устройств с размером экрана >= 576px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexMdNowrap - Измените способ упаковки элементов flex в контейнер flex(без обертки по умолчанию ) для устройств с размером экрана >= 768px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexMdWrap - Измените способ упаковки элементов flex в контейнер flex для устройств с размером экрана >= 768x
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexMdWrapReverse  - Измените способ упаковки элементов flex в контейнер flex в обратном направлении для устройств с размером экрана >= 768px
   * Доступные значения
   *  -true
   *  -false
   *
   * @property {Boolean} - flexLgNowrap - Измените способ упаковки элементов flex в контейнер flex(без обертки по умолчанию ) для устройств с размером экрана >= 992px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexLgWrap - Измените способ упаковки элементов flex в контейнер flex для устройств с размером экрана >= 992px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexLgWrapReverse  - Измените способ упаковки элементов flex в контейнер flex в обратном направлении для устройств с размером экрана >= 992px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexXlNowrap - Измените способ упаковки элементов flex в контейнер flex(без обертки по умолчанию ) для устройств с размером экрана >= 1200px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexXlWrap - Измените способ упаковки элементов flex в контейнер flex для устройств с размером экрана >= 1200px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexXlWrapReverse  - Измените способ упаковки элементов flex в контейнер flex в обратном направлении для устройств с размером экрана >= 1200px
   * Доступные значения
   *  -true
   *  -false
   *
   * @property {Boolean} - flexXxlNowrap - Измените способ упаковки элементов flex в контейнер flex(без обертки по умолчанию ) для устройств с размером экрана >= 1400px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexXxlWrap - Измените способ упаковки элементов flex в контейнер flex для устройств с размером экрана >= 1400px
   * Доступные значения
   *  -true
   *  -false
   * @property {Boolean} - flexXxlWrapReverse  - Измените способ упаковки элементов flex в контейнер flex в обратном направлении для устройств с размером экрана >= 1400px
   * Доступные значения
   *  -true
   *  -false
   */

  props: {
    classes: {
      type: [Boolean, String],
      default: '',
    },
    styles: {
      type: [Boolean, String],
      default: '',
    },
    dFlex: {
      // d-flex
      type: [Boolean, String],
      default: true,
    },
    dInlineFlex: {
      // d-inline-flex
      type: [Boolean, String],
      default: false,
    },
    flexRow: {
      // flex-row
      type: [Boolean, String],
      default: false,
    },
    dSmFlex: {
      // d-sm-flex
      type: [Boolean, String],
      default: false,
    },
    dSmInlineFlex: {
      // d-sm-inline-flex
      type: [Boolean, String],
      default: false,
    },
    dMdFlex: {
      // d-md-flex
      type: [Boolean, String],
      default: false,
    },
    dMdInlineFlex: {
      // d-md-inline-flex
      type: [Boolean, String],
      default: false,
    },
    dLgFlex: {
      // d-lg-flex
      type: [Boolean, String],
      default: false,
    },
    dLgInlineFlex: {
      // d-lg-inline-flex
      type: [Boolean, String],
      default: false,
    },
    dXlFlex: {
      // d-xl-flex
      type: [Boolean, String],
      default: false,
    },
    dXlInlineFlex: {
      // d-xl-inline-flex
      type: [Boolean, String],
      default: false,
    },
    dXxlFlex: {
      // d-xxl-flex
      type: [Boolean, String],
      default: false,
    },
    dXxlInlineFlex: {
      // d-xxl-inline-flex
      type: [Boolean, String],
      default: false,
    },
    flexRowReverse: {
      // flex-row-reverse
      type: [Boolean, String],
      default: false,
    },
    flexColumn: {
      // flex-column
      type: [Boolean, String],
      default: false,
    },
    flexColumnReverse: {
      // flex-column-reverse
      type: [Boolean, String],
      default: false,
    },
    flexSmRow: {
      // flex-sm-row
      type: [Boolean, String],
      default: false,
    },
    flexSmRowReverse: {
      // flex-sm-row-reverse
      type: [Boolean, String],
      default: false,
    },
    flexSmColumn: {
      // flex-sm-column
      type: [Boolean, String],
      default: false,
    },
    flexSmColumnReverse: {
      // flex-sm-column-reverse
      type: [Boolean, String],
      default: false,
    },
    flexMdRow: {
      // flex-md-row
      type: [Boolean, String],
      default: false,
    },
    flexMdRowReverse: {
      // flex-md-row-reverse
      type: [Boolean, String],
      default: false,
    },
    flexMdColumn: {
      // flex-md-column
      type: [Boolean, String],
      default: false,
    },
    flexMdColumnReverse: {
      // flex-md-column-reverse
      type: [Boolean, String],
      default: false,
    },
    flexLgRow: {
      // flex-lg-row
      type: [Boolean, String],
      default: false,
    },
    flexLgRowReverse: {
      // flex-lg-row-reverse
      type: [Boolean, String],
      default: false,
    },
    flexLgColumn: {
      // flex-lg-column
      type: [Boolean, String],
      default: false,
    },
    flexLgColumnReverse: {
      // flex-lg-column-reverse
      type: [Boolean, String],
      default: false,
    },
    flexXlRow: {
      // flex-xl-row
      type: [Boolean, String],
      default: false,
    },
    flexXlRowReverse: {
      // flex-xl-row-reverse
      type: [Boolean, String],
      default: false,
    },
    flexXlColumn: {
      // flex-xl-column
      type: [Boolean, String],
      default: false,
    },
    flexXlColumnReverse: {
      // flex-xl-column-reverse
      type: [Boolean, String],
      default: false,
    },
    flexXxlRow: {
      // flex-xxl-row
      type: [Boolean, String],
      default: false,
    },
    flexXxlRowReverse: {
      // flex-xxl-row-reverse
      type: [Boolean, String],
      default: false,
    },
    flexXxlColumn: {
      // flex-xxl-column
      type: [Boolean, String],
      default: false,
    },
    flexXxlColumnReverse: {
      // flex-xxl-column-reverse
      type: [Boolean, String],
      default: false,
    },
    flexFill: {
      // flex-fill
      type: [Boolean, String],
      default: false,
    },
    flexSmFill: {
      // flex-sm-fill
      type: [Boolean, String],
      default: false,
    },
    flexMdFill: {
      // flex-md-fill
      type: [Boolean, String],
      default: false,
    },
    flexLgFill: {
      // flex-lg-fill
      type: [Boolean, String],
      default: false,
    },
    flexXlFill: {
      // flex-xl-fill
      type: [Boolean, String],
      default: false,
    },
    flexXxlFill: {
      // flex-xxl-fill
      type: [Boolean, String],
      default: false,
    },
    flexGrow: {
      // flex-grow
      // Доступные значения 0, 1
      type: Number,
      default: null,
    },
    flexSmGrow: {
      // flex-sm-grow
      // Доступные значения 0, 1
      type: Number,
      default: null,
    },
    flexMdGrow: {
      // flex-md-grow
      // Доступные значения 0, 1
      type: Number,
      default: null,
    },
    flexLgGrow: {
      // flex-lg-grow
      // Доступные значения 0, 1
      type: Number,
      default: null,
    },
    flexXlGrow: {
      // flex-xl-grow
      // Доступные значения 0, 1
      type: Number,
      default: null,
    },
    flexXxlGrow: {
      // flex-xxl-grow
      // Доступные значения 0, 1
      type: Number,
      default: null,
    },
    flexShrink: {
      // flex-shrink
      type: Number,
      default: null,
    },
    flexSmShrink: {
      // flex-sm-shrink
      type: Number,
      default: null,
    },
    flexMdShrink: {
      // flex-md-shrink
      type: Number,
      default: null,
    },
    flexLgShrink: {
      // flex-lg-shrink
      type: Number,
      default: null,
    },
    flexXlShrink: {
      // flex-xl-shrink
      type: Number,
      default: null,
    },
    flexXxlShrink: {
      // flex-xxl-shrink
      type: Number,
      default: null,
    },
    flexNowrap: {
      // flex-nowrap
      type: [Boolean, String],
      default: false,
    },
    flexWrap: {
      // flex-wrap
      type: [Boolean, String],
      default: false,
    },
    flexWrapReverse: {
      // flex-wrap-reverse
      type: [Boolean, String],
      default: false,
    },
    flexSmWrap: {
      // flex-sm-wrap
      type: [Boolean, String],
      default: false,
    },
    flexSmNowrap: {
      // flex-sm-nowrap
      type: [Boolean, String],
      default: false,
    },
    flexSmWrapReverse: {
      // flex-sm-wrap-reverse
      type: [Boolean, String],
      default: false,
    },
    flexMdWrap: {
      // flex-md-wrap
      type: [Boolean, String],
      default: false,
    },
    flexMdNowrap: {
      // flex-md-nowrap
      type: [Boolean, String],
      default: false,
    },
    flexMdWrapReverse: {
      // flex-md-wrap-reverse
      type: [Boolean, String],
      default: false,
    },
    flexLgWrap: {
      // flex-lg-wrap
      type: [Boolean, String],
      default: false,
    },
    flexLgNowrap: {
      // flex-lg-nowrap
      type: [Boolean, String],
      default: false,
    },
    flexLgWrapReverse: {
      // flex-lg-wrap-reverse
      type: [Boolean, String],
      default: false,
    },
    flexXlWrap: {
      // flex-xl-wrap
      type: [Boolean, String],
      default: false,
    },
    flexXlNowrap: {
      // flex-xl-nowrap
      type: [Boolean, String],
      default: false,
    },
    flexXlWrapReverse: {
      // flex-xl-wrap-reverse
      type: [Boolean, String],
      default: false,
    },
    flexXxlWrap: {
      // flex-xxl-wrap
      type: [Boolean, String],
      default: false,
    },
    flexXxlNowrap: {
      // flex-xxl-wrap
      type: [Boolean, String],
      default: false,
    },
    flexXxlWrapReverse: {
      // flex-xxl-wrap-reverse
      type: [Boolean, String],
      default: false,
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
    this.outClass = {}
    // eslint-disable-next-line no-unused-expressions
    for (const item in this.$props)
      if (
        item !== 'styles' &&
        item !== 'classes' &&
        item !== 'flexGrow' &&
        item !== 'flexSmGrow' &&
        item !== 'flexMdGrow' &&
        item !== 'flexLgGrow' &&
        item !== 'flexXlGrow' &&
        item !== 'flexXxlGrow' &&
        item !== 'flexShrink' &&
        item !== 'flexSmShrink' &&
        item !== 'flexMdShrink' &&
        item !== 'flexLgShrink' &&
        item !== 'flexXlShrink' &&
        item !== 'flexXxlShrink'
      )
        this.outClass[`${camelToDash(item)}`] = this[item]
      else if (
        item === 'flexGrow' ||
        item === 'flexSmGrow' ||
        item === 'flexMdGrow' ||
        item === 'flexLgGrow' ||
        item === 'flexXlGrow' ||
        item === 'flexXxlGrow' ||
        item === 'flexShrink' ||
        item === 'flexSmShrink' ||
        item === 'flexMdShrink' ||
        item === 'flexLgShrink' ||
        item === 'flexXlShrink' ||
        item === 'flexXxlShrink'
      )
        this.outClass[`${camelToDash(item)}-${this[item]}`] = removeSpace(
          this[item]
        )
  },
}
</script>
<style>
.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}
.flex-row {
  flex-direction: row !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

@media (min-width: 576px) {
  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }

  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
}

@media (min-width: 768px) {
  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }

  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
}

@media (min-width: 992px) {
  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
}

@media (min-width: 1200px) {
  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }

  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
}

@media (min-width: 1400px) {
  .d-xxl-flex {
    display: flex !important;
  }

  .d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .flex-xxl-row {
    flex-direction: row !important;
  }

  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xxl-column {
    flex-direction: column !important;
  }

  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
}
</style>
