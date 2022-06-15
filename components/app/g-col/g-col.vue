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
} from '../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String, Number, Boolean} gCol - Размер колонки
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
   * @property {String, Number, Boolean} gColSm - Размер колонки для устройств с размером экрана >= 576px
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
   * @property {String, Number, Boolean} gColMd - Размер колонки для устройств с размером экрана >= 768px
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
   * @property {String, Number, Boolean} gColLg - Размер колонки для устройств с размером экрана >= 992px
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
   *  @property {String, Number, Boolean} gColXl - Размер колонки для устройств с размером экрана >= 1200px
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
   * @property {String, Number, Boolean} gColXxl - Размер колонки для устройств с размером экрана >= 1400px
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
    gCol: {
      // gCol
      type: [Boolean, Number, String],
      default: true,
    },
    gColSm: {
      // gCol-sm
      type: [Boolean, Number, String],
      default: null,
    },
    gColMd: {
      // gCol-md
      type: [Boolean, Number, String],
      default: null,
    },
    gColLg: {
      // gCol-lg
      type: [Boolean, Number, String],
      default: null,
    },
    gColXl: {
      // gCol-xl
      type: [Boolean, Number, String],
      default: null,
    },
    gColXxl: {
      // gCol-xxl
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
        (item === 'gCol' ||
          item === 'gColSm' ||
          item === 'gColMd' ||
          item === 'gColLg' ||
          item === 'gColXl' ||
          item === 'gColXxl') &&
        isBoolean(this[item])
      )
        this.outClass[`${camelToDash(item)}`] = this[item]
      else if (
        (item === 'gCol' ||
          item === 'gColSm' ||
          item === 'gColMd' ||
          item === 'gColLg' ||
          item === 'gColXl' ||
          item === 'gColSm' ||
          item === 'gColXxl') &&
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
.g-col {
  flex: 1 0 0%;
}

.g-col-auto {
  flex: 0 0 auto;
  grid-column: auto;
}

.g-col-1 {
  flex: 0 0 auto;
  grid-column: 8.3333%;
}

.g-col-2 {
  flex: 0 0 auto;
  grid-column: 16.6667%;
}

.g-col-3 {
  flex: 0 0 auto;
  grid-column: 25%;
}

.g-col-4 {
  flex: 0 0 auto;
  grid-column: 3.3333%;
}

.g-col-5 {
  flex: 0 0 auto;
  grid-column: 41.6667%;
}

.g-col-6 {
  flex: 0 0 auto;
  grid-column: 50%;
}

.g-col-7 {
  flex: 0 0 auto;
  grid-column: 58.3333%;
}

.g-col-8 {
  flex: 0 0 auto;
  grid-column: 66.6667%;
}

.g-col-9 {
  flex: 0 0 auto;
  grid-column: 75%;
}

.g-col-10 {
  flex: 0 0 auto;
  grid-column: 83.3333%;
}

.g-col-11 {
  flex: 0 0 auto;
  grid-column: 91.6667%;
}

.g-col-12 {
  flex: 0 0 auto;
  grid-column: 100%;
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
  .g-col-sm {
    flex: 1 0 0%;
  }

  .g-col-sm-auto {
    flex: 0 0 auto;
    grid-column: auto;
  }

  .g-col-sm-1 {
    flex: 0 0 auto;
    grid-column: 8.3333%;
  }

  .g-col-sm-2 {
    flex: 0 0 auto;
    grid-column: 16.6667%;
  }

  .g-col-sm-3 {
    flex: 0 0 auto;
    grid-column: 25%;
  }

  .g-col-sm-4 {
    flex: 0 0 auto;
    grid-column: 3.3333%;
  }

  .g-col-sm-5 {
    flex: 0 0 auto;
    grid-column: 41.6667%;
  }

  .g-col-sm-6 {
    flex: 0 0 auto;
    grid-column: 50%;
  }

  .g-col-sm-7 {
    flex: 0 0 auto;
    grid-column: 58.3333%;
  }

  .g-col-sm-8 {
    flex: 0 0 auto;
    grid-column: 66.6667%;
  }

  .g-col-sm-9 {
    flex: 0 0 auto;
    grid-column: 75%;
  }

  .g-col-sm-10 {
    flex: 0 0 auto;
    grid-column: 83.3333%;
  }

  .g-col-sm-11 {
    flex: 0 0 auto;
    grid-column: 91.6667%;
  }

  .g-col-sm-12 {
    flex: 0 0 auto;
    grid-column: 100%;
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
  .g-col-md {
    flex: 1 0 0%;
  }

  .g-col-md-auto {
    flex: 0 0 auto;
    grid-column: auto;
  }

  .g-col-md-1 {
    flex: 0 0 auto;
    grid-column: 8.3333%;
  }

  .g-col-md-2 {
    flex: 0 0 auto;
    grid-column: 16.6667%;
  }

  .g-col-md-3 {
    flex: 0 0 auto;
    grid-column: 25%;
  }

  .g-col-md-4 {
    flex: 0 0 auto;
    grid-column: 3.3333%;
  }

  .g-col-md-5 {
    flex: 0 0 auto;
    grid-column: 41.6667%;
  }

  .g-col-md-6 {
    flex: 0 0 auto;
    grid-column: 50%;
  }

  .g-col-md-7 {
    flex: 0 0 auto;
    grid-column: 58.3333%;
  }

  .g-col-md-8 {
    flex: 0 0 auto;
    grid-column: 66.6667%;
  }

  .g-col-md-9 {
    flex: 0 0 auto;
    grid-column: 75%;
  }

  .g-col-md-10 {
    flex: 0 0 auto;
    grid-column: 83.3333%;
  }

  .g-col-md-11 {
    flex: 0 0 auto;
    grid-column: 91.6667%;
  }

  .g-col-md-12 {
    flex: 0 0 auto;
    grid-column: 100%;
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
  .g-col-lg {
    flex: 1 0 0%;
  }

  .g-col-lg-auto {
    flex: 0 0 auto;
    grid-column: auto;
  }

  .g-col-lg-1 {
    flex: 0 0 auto;
    grid-column: 8.3333%;
  }

  .g-col-lg-2 {
    flex: 0 0 auto;
    grid-column: 16.6667%;
  }

  .g-col-lg-3 {
    flex: 0 0 auto;
    grid-column: 25%;
  }

  .g-col-lg-4 {
    flex: 0 0 auto;
    grid-column: 3.3333%;
  }

  .g-col-lg-5 {
    flex: 0 0 auto;
    grid-column: 41.6667%;
  }

  .g-col-lg-6 {
    flex: 0 0 auto;
    grid-column: 50%;
  }

  .g-col-lg-7 {
    flex: 0 0 auto;
    grid-column: 58.3333%;
  }

  .g-col-lg-8 {
    flex: 0 0 auto;
    grid-column: 66.6667%;
  }

  .g-col-lg-9 {
    flex: 0 0 auto;
    grid-column: 75%;
  }

  .g-col-lg-10 {
    flex: 0 0 auto;
    grid-column: 83.3333%;
  }

  .g-col-lg-11 {
    flex: 0 0 auto;
    grid-column: 91.6667%;
  }

  .g-col-lg-12 {
    flex: 0 0 auto;
    grid-column: 100%;
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
  .g-col-xl {
    flex: 1 0 0%;
  }

  .g-col-xl-auto {
    flex: 0 0 auto;
    grid-column: auto;
  }

  .g-col-xl-1 {
    flex: 0 0 auto;
    grid-column: 8.3333%;
  }

  .g-col-xl-2 {
    flex: 0 0 auto;
    grid-column: 16.6667%;
  }

  .g-col-xl-3 {
    flex: 0 0 auto;
    grid-column: 25%;
  }

  .g-col-xl-4 {
    flex: 0 0 auto;
    grid-column: 3.3333%;
  }

  .g-col-xl-5 {
    flex: 0 0 auto;
    grid-column: 41.6667%;
  }

  .g-col-xl-6 {
    flex: 0 0 auto;
    grid-column: 50%;
  }

  .g-col-xl-7 {
    flex: 0 0 auto;
    grid-column: 58.3333%;
  }

  .g-col-xl-8 {
    flex: 0 0 auto;
    grid-column: 66.6667%;
  }

  .g-col-xl-9 {
    flex: 0 0 auto;
    grid-column: 75%;
  }

  .g-col-xl-10 {
    flex: 0 0 auto;
    grid-column: 83.3333%;
  }

  .g-col-xl-11 {
    flex: 0 0 auto;
    grid-column: 91.6667%;
  }

  .g-col-xl-12 {
    flex: 0 0 auto;
    grid-column: 100%;
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
  .g-col-xxl {
    flex: 1 0 0%;
  }

  .g-col-xxl-auto {
    flex: 0 0 auto;
    grid-column: auto;
  }

  .g-col-xxl-1 {
    flex: 0 0 auto;
    grid-column: 8.3333%;
  }

  .g-col-xxl-2 {
    flex: 0 0 auto;
    grid-column: 16.6667%;
  }

  .g-col-xxl-3 {
    flex: 0 0 auto;
    grid-column: 25%;
  }

  .g-col-xxl-4 {
    flex: 0 0 auto;
    grid-column: 3.3333%;
  }

  .g-col-xxl-5 {
    flex: 0 0 auto;
    grid-column: 41.6667%;
  }

  .g-col-xxl-6 {
    flex: 0 0 auto;
    grid-column: 50%;
  }

  .g-col-xxl-7 {
    flex: 0 0 auto;
    grid-column: 58.3333%;
  }

  .g-col-xxl-8 {
    flex: 0 0 auto;
    grid-column: 66.6667%;
  }

  .g-col-xxl-9 {
    flex: 0 0 auto;
    grid-column: 75%;
  }

  .g-col-xxl-10 {
    flex: 0 0 auto;
    grid-column: 83.3333%;
  }

  .g-col-xxl-11 {
    flex: 0 0 auto;
    grid-column: 91.6667%;
  }

  .g-col-xxl-12 {
    flex: 0 0 auto;
    grid-column: 100%;
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
