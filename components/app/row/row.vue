<template>
  <div :class="[outClass, classes]" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { removeSpace } from './../../../scripts/component/func'
export default {
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
    this.outClass = {}
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
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6667%;
}

@media (min-width: 576px) {
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6667%;
  }
}

@media (min-width: 768px) {
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6667%;
  }
}

@media (min-width: 992px) {
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6667%;
  }
}
@media (min-width: 1200px) {
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6667%;
  }
}
@media (min-width: 1400px) {
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333%;
  }

  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6667%;
  }
}
</style>
