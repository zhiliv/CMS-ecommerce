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
    size: {
      type: [Number, String],
      default: '',
    },
  },
  data() {
    return {
      outClass: {}, // классы, сформированные аттрибутами
    }
  },
  mounted() {
    this.outClass = {}
    if (this.size) this.outClass[`display-${this.size}`] = true
    // let test = Object.assign(this.outClass, this.classes ? this.classes : {})
    for(const item in this.outClass){
      if(this.outClass[item]) this.classes += '1'
    }
    console.log('this.outClass', this.outClass)
    console.log('this.classes', this.classes)
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
          class: this.classes,
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

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}
</style>
