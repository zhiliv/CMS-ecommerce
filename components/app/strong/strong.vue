<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String} type - Тип выделения
   * Доступные варианты
   *  -strong
   *  -b
   */
  props: {
    type: {
      type: String,
      default: 'strong',
      validate(value) {
        return value === 'strong' || value === 'b'
      },
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
      this.type, // имя тега
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
b,
strong {
  font-weight: bolder;
}
</style>
