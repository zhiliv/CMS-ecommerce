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
      validate(value){
        return value === 'strong' || value === 'b'
      }
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

</style>
