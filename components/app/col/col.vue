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
import {
  removeSpace,
  camelToDash,
  isBoolean,
  isString,
} from './../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String, Number, Boolean} col - Размер колонки
   *  Доступные варианты
   *  -true
   *  -false
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   *  -12
   * @property {String, Number, Boolean} colSm - Размер колонки для устройств с размером экрана >= 576px
   *  Доступные варианты
   *  -true
   *  -false
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   *  -12
   * @property {String, Number, Boolean} colMd - Размер колонки для устройств с размером экрана >= 768px
   *  Доступные варианты
   *  -true
   *  -false
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   *  -12
   * @property {String, Number, Boolean} colLg - Размер колонки для устройств с размером экрана >= 992px
   *  Доступные варианты
   *  -true
   *  -false
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   *  -12
   *  @property {String, Number, Boolean} colXl - Размер колонки для устройств с размером экрана >= 1200px
   *  Доступные варианты
   *  -true
   *  -false
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   *  -12
   * @property {String, Number, Boolean} colXxl - Размер колонки для устройств с размером экрана >= 1400px
   *  Доступные варианты
   *  -true
   *  -false
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   *  -12
   * @property {String, Number, Boolean} offset - Размер колонки
   *  Доступные варианты
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   * @property {String, Number, Boolean} offsetSm - Размер колонки для устройств с размером экрана >= 576px
   *  Доступные варианты
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   * @property {String, Number, Boolean} offsetMd - Размер колонки для устройств с размером экрана >= 768px
   *  Доступные варианты
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   * @property {String, Number, Boolean} offsetLg - Размер колонки для устройств с размером экрана >= 992px
   *  Доступные варианты
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   * @property {String, Number, Boolean} offsetXl - Размер колонки для устройств с размером экрана >= 1200px
   *  Доступные варианты
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   * @property {String, Number, Boolean} offsetXxl - Размер колонки для устройств с размером экрана >= 1400px
   *  Доступные варианты
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   *  -7
   *  -8
   *  -9
   *  -10
   *  -11
   */
  props: {
    // eslint-disable-next-line vue/require-default-prop
    classes: {
      type: String,
      default: '',
    },
    styles: {
      type: String,
      default: '',
    },
    col: {
      // col
      type: [Boolean, Number, String],
      default: true,
    },
    colSm: {
      // col-sm
      type: [Boolean, Number, String],
      default: null,
    },
    colMd: {
      // col-md
      type: [Boolean, Number, String],
      default: null,
    },
    colLg: {
      // col-lg
      type: [Boolean, Number, String],
      default: null,
    },
    colXl: {
      // col-xl
      type: [Boolean, Number, String],
      default: null,
    },
    colXxl: {
      // col-xxl
      type: [Boolean, Number, String],
      default: null,
    },
    offset: {
      // offset
      type: Number,
      default: null,
    },
    offsetSm: {
      // offset-sm
      type: Number,
      default: null,
    },
    offsetMd: {
      // offset-md
      type: Number,
      default: null,
    },
    offsetLg: {
      // offset-lg
      type: Number,
      default: null,
    },
    offsetXl: {
      // offset-xl
      type: Number,
      default: null,
    },
    offsetXxl: {
      // offset-xxl
      type: Number,
      default: null,
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
    for (const item in this.$props) {
      if (
        (item === 'col' ||
          item === 'colSm' ||
          item === 'colMd' ||
          item === 'colLg' ||
          item === 'colXl' ||
          item === 'colXxl') &&
        isBoolean(this[item])
      )
        this.outClass[`${camelToDash(item)}`] = this[item]
      else if (
        (item === 'col' ||
          item === 'colSm' ||
          item === 'colMd' ||
          item === 'colLg' ||
          item === 'colXl' ||
          item === 'colSm' ||
          item === 'colXxl') &&
        (Number.isInteger(+this[item]) || isString(this[item]))
      )
        this.outClass[`${camelToDash(item)}-${this[item]}`] = removeSpace(
          this[item]
        )
      if (
        item === 'offset' ||
        item === 'offsetSm' ||
        item === 'offsetMd' ||
        item === 'offsetLg' ||
        item === 'offsetXl' ||
        item === 'offsetXxl'
      )
        this.outClass[`${camelToDash(item)}-${this[item]}`] = removeSpace(
          this[item]
        )
    }
  },
}
</script>
<style>
.col {
  flex: 1 0 0%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.3333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.6667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 3.3333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.6667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.3333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.6667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.3333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.6667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.3333%;
}

.offset-2 {
  margin-left: 16.6667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 3.3333%;
}

.offset-5 {
  margin-left: 41.6667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.3333%;
}

.offset-8 {
  margin-left: 66.6667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.3333%;
}

.offset-11 {
  margin-left: 91.6667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.3333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.6667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 3.3333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.6667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.3333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.6667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.3333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.6667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.3333%;
  }

  .offset-sm-2 {
    margin-left: 16.6667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 3.3333%;
  }

  .offset-sm-5 {
    margin-left: 41.6667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.3333%;
  }

  .offset-sm-8 {
    margin-left: 66.6667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.3333%;
  }

  .offset-sm-11 {
    margin-left: 91.6667%;
  }
}

@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.3333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.6667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 3.3333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.6667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.3333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.6667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.3333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.6667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.3333%;
  }

  .offset-md-2 {
    margin-left: 16.6667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 3.3333%;
  }

  .offset-md-5 {
    margin-left: 41.6667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.3333%;
  }

  .offset-md-8 {
    margin-left: 66.6667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.3333%;
  }

  .offset-md-11 {
    margin-left: 91.6667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.3333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.6667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 3.3333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.6667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.3333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.6667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.3333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.6667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.3333%;
  }

  .offset-lg-2 {
    margin-left: 16.6667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 3.3333%;
  }

  .offset-lg-5 {
    margin-left: 41.6667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.3333%;
  }

  .offset-lg-8 {
    margin-left: 66.6667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.3333%;
  }

  .offset-lg-11 {
    margin-left: 91.6667%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.3333%;
  }

  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.6667%;
  }

  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 auto;
    width: 3.3333%;
  }

  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.6667%;
  }

  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.3333%;
  }

  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.6667%;
  }

  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.3333%;
  }

  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.6667%;
  }

  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.3333%;
  }

  .offset-xl-2 {
    margin-left: 16.6667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 3.3333%;
  }

  .offset-xl-5 {
    margin-left: 41.6667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.3333%;
  }

  .offset-xl-8 {
    margin-left: 66.6667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.3333%;
  }

  .offset-xl-11 {
    margin-left: 91.6667%;
  }
}

@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }

  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.3333%;
  }

  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.6667%;
  }

  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xxl-4 {
    flex: 0 0 auto;
    width: 3.3333%;
  }

  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.6667%;
  }

  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.3333%;
  }

  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.6667%;
  }

  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.3333%;
  }

  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.6667%;
  }

  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xxl-0 {
    margin-left: 0;
  }

  .offset-xxl-1 {
    margin-left: 8.3333%;
  }

  .offset-xxl-2 {
    margin-left: 16.6667%;
  }

  .offset-xxl-3 {
    margin-left: 25%;
  }

  .offset-xxl-4 {
    margin-left: 3.3333%;
  }

  .offset-xxl-5 {
    margin-left: 41.6667%;
  }

  .offset-xxl-6 {
    margin-left: 50%;
  }

  .offset-xxl-7 {
    margin-left: 58.3333%;
  }

  .offset-xxl-8 {
    margin-left: 66.6667%;
  }

  .offset-xxl-9 {
    margin-left: 75%;
  }

  .offset-xxl-10 {
    margin-left: 83.3333%;
  }

  .offset-xxl-11 {
    margin-left: 91.6667%;
  }
}
</style>
