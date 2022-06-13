<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String} type - Тип списка
   * Доступные варианты
   *  -ol
   *  -ul
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
    type: {
      type: String,
      required: true,
      validator(value) {
        // валидация на ввод значения
        return value === 'ul' || value === 'ol'
      },
    },
  },
  /*
   * Рендер компонента
   * @function render
   * @param {Object} createElement Функция создания элемента
   */
  render(createElement) {
    return createElement(
      this.type, // тип списка
      {
        attrs: {
          class: this.classes,
          style: this.styles,
        },
      },
      this.$slots.default // дочерние элементы
    )
  },
}
</script>

<style>
ol,
ul {
  padding-left: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
