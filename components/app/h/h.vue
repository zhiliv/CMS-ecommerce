<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {Number} level - Уровень заголовка
   * Доступные варианты:
   *  -1
   *  -2
   *  -3
   *  -4
   *  -5
   *  -6
   */
  props: {
    level: {
      type: String,
      required: true,
      min: 1,
      max: 6,
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
  /*
   * Рендер компонента
   * @param {Object} createElement Функция создания элемента
   */
  render(createElement) {
    return createElement(
      'h' + this.level, // имя тега
      {
        on: {
          click: (event) => this.$emit('click', event),
          dblclick: (event) => this.$emit('dblclick', event),
          change: (event) => this.$emit('change', event),
          keydown: (event) => this.$emit('keydown', event),
          focus: (event) => this.$emit('focus', event),
          keypress: (event) => this.$emit('keypress', event),
          keyup: (event) => this.$emit('keyup', event),
          load: (event) => this.$emit('load', event),
          mousedown: (event) => this.$emit('mousedown', event),
          mousemove: (event) => this.$emit('mousemove', event),
          mouseout: (event) => this.$emit('mouseout', event),
          mouseover: (event) => this.$emit('mouseover', event),
          mouseup: (event) => this.$emit('mouseup', event),
          reset: (event) => this.$emit('reset', event),
          select: (event) => this.$emit('select', event),
          submit: (event) => this.$emit('submit', event),
          unload: (event) => this.$emit('unload', event),
        },
        attrs: {
          // указание аттрибутов
          class: this.classes, // классы
          style: this.styles, // стили
        },
      },
      this.$slots.default // массив дочерних элементов
    )
  },
}
</script>

<style>
h6,
.h6,
h5,
.h5,
h4,
.h4,
h3,
.h3,
h2,
.h2,
h1,
.h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--bs-heading-color);
}

h1,
.h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1,
  .h1 {
    font-size: 2.5rem;
  }
}

h2,
.h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2,
  .h2 {
    font-size: 2rem;
  }
}

h3,
.h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3,
  .h3 {
    font-size: 1.75rem;
  }
}

h4,
.h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4,
  .h4 {
    font-size: 1.5rem;
  }
}

h5,
.h5 {
  font-size: 1.25rem;
}

h6,
.h6 {
  font-size: 1rem;
}


</style>
