/* eslint-disable vue/no-reserved-props */
<template>
  <div :class="[outClass, classes]" :style="styles">
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
    dFlex: {
      // d-flex
      type: Boolean,
      default: true,
    },
    dInlineFlex: {
      // d-inline-flex
      type: Boolean,
      default: false,
    },
    flexRow: {
      // flex-row
      type: Boolean,
      default: false,
    },
    dSmFlex: {
      // d-sm-flex
      type: Boolean,
      default: false,
    },
    dSmInlineFlex: {
      // d-sm-inline-flex
      type: Boolean,
      default: false,
    },
    dMdFlex: {
      // d-md-flex
      type: Boolean,
      default: false,
    },
    dMdInlineFlex: {
      // d-md-inline-flex
      type: Boolean,
      default: false,
    },
    dLgFlex: {
      // d-lg-flex
      type: Boolean,
      default: false,
    },
    dLgInlineFlex: {
      // d-lg-inline-flex
      type: Boolean,
      default: false,
    },
    dXlFlex: {
      // d-xl-flex
      type: Boolean,
      default: false,
    },
    dXlInlineFlex: {
      // d-xl-inline-flex
      type: Boolean,
      default: false,
    },
    dXxlFlex: {
      // d-xxl-flex
      type: Boolean,
      default: false,
    },
    dXxlInlineFlex: {
      // d-xxl-inline-flex
      type: Boolean,
      default: false,
    },
    flexRowReverse: {
      // flex-row-reverse
      type: Boolean,
      default: false,
    },
    flexColumn: {
      // flex-column
      type: Boolean,
      default: false,
    },
    flexColumnReverse: {
      // flex-column-reverse
      type: Boolean,
      default: false,
    },
    flexSmRow: {
      // flex-sm-row
      type: Boolean,
      default: false,
    },
    flexSmRowReverse: {
      // flex-sm-row-reverse
      type: Boolean,
      default: false,
    },
    flexSmColumn: {
      // flex-sm-column
      type: Boolean,
      default: false,
    },
    flexSmColumnReverse: {
      // flex-sm-column-reverse
      type: Boolean,
      default: false,
    },
    flexMdRow: {
      // flex-md-row
      type: Boolean,
      default: false,
    },
    flexMdRowReverse: {
      // flex-md-row-reverse
      type: Boolean,
      default: false,
    },
    flexMdColumn: {
      // flex-md-column
      type: Boolean,
      default: false,
    },
    flexMdColumnReverse: {
      // flex-md-column-reverse
      type: Boolean,
      default: false,
    },
    flexLgRow: {
      // flex-lg-row
      type: Boolean,
      default: false,
    },
    flexLgRowReverse: {
      // flex-lg-row-reverse
      type: Boolean,
      default: false,
    },
    flexLgColumn: {
      // flex-lg-column
      type: Boolean,
      default: false,
    },
    flexLgColumnReverse: {
      // flex-lg-column-reverse
      type: Boolean,
      default: false,
    },
    flexXlRow: {
      // flex-xl-row
      type: Boolean,
      default: false,
    },
    flexXlRowReverse: {
      // flex-xl-row-reverse
      type: Boolean,
      default: false,
    },
    flexXlColumn: {
      // flex-xl-column
      type: Boolean,
      default: false,
    },
    flexXlColumnReverse: {
      // flex-xl-column-reverse
      type: Boolean,
      default: false,
    },
    flexXxlRow: {
      // flex-xxl-row
      type: Boolean,
      default: false,
    },
    flexXxlRowReverse: {
      // flex-xxl-row-reverse
      type: Boolean,
      default: false,
    },
    flexXxlColumn: {
      // flex-xxl-column
      type: Boolean,
      default: false,
    },
    flexXxlColumnReverse: {
      // flex-xxl-column-reverse
      type: Boolean,
      default: false,
    },
    flexFill: {
      // flex-fill
      type: Boolean,
      default: false,
    },
    flexSmFill: {
      // flex-sm-fill
      type: Boolean,
      default: false,
    },
    flexMdFill: {
      // flex-md-fill
      type: Boolean,
      default: false,
    },
    flexLgFill: {
      // flex-lg-fill
      type: Boolean,
      default: false,
    },
    flexXlFill: {
      // flex-xl-fill
      type: Boolean,
      default: false,
    },
    flexXxlFill: {
      // flex-xxl-fill
      type: Boolean,
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
      type: Boolean,
      default: false,
    },
    flexWrap: {
      // flex-wrap
      type: Boolean,
      default: false,
    },
    flexWrapReverse: {
      // flex-wrap-reverse
      type: Boolean,
      default: false,
    },
    flexSmWrap: {
      // flex-sm-wrap
      type: Boolean,
      default: false,
    },
    flexSmNowrap: {
      // flex-sm-nowrap
      type: Boolean,
      default: false,
    },
    flexSmWrapReverse: {
      // flex-sm-wrap-reverse
      type: Boolean,
      default: false,
    },
    flexMdWrap: {
      // flex-md-wrap
      type: Boolean,
      default: false,
    },
    flexMdNowrap: {
      // flex-md-nowrap
      type: Boolean,
      default: false,
    },
    flexMdWrapReverse: {
      // flex-md-wrap-reverse
      type: Boolean,
      default: false,
    },
    flexLgWrap: {
      // flex-lg-wrap
      type: Boolean,
      default: false,
    },
    flexLgNowrap: {
      // flex-lg-nowrap
      type: Boolean,
      default: false,
    },
    flexLgWrapReverse: {
      // flex-lg-wrap-reverse
      type: Boolean,
      default: false,
    },
    flexXlWrap: {
      // flex-xl-wrap
      type: Boolean,
      default: false,
    },
    flexXlNowrap: {
      // flex-xl-nowrap
      type: Boolean,
      default: false,
    },
    flexXlWrapReverse: {
      // flex-xl-wrap-reverse
      type: Boolean,
      default: false,
    },
    flexXxlWrap: {
      // flex-xxl-wrap
      type: Boolean,
      default: false,
    },
    flexXxlNowrap: {
      // flex-xxl-wrap
      type: Boolean,
      default: false,
    },
    flexXxlWrapReverse: {
      // flex-xxl-wrap-reverse
      type: Boolean,
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
        this.outClass[`${camelToDash(item)}-${this[item]}`] = this[item]
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
