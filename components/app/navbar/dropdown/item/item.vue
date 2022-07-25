<template>
  <li
    ref="item"
    :class="[classes, outClass]"
    @click="$emit('click', $event)"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <slot></slot>
  </li>
</template>
<script>
export default {
  props: {
    /*
     * Входящие свойства
     * @typedef {Object} props
     * @property {String} hoverColor - Класс при наведении мыши
     * @property {String} color - Классы для dropdown и его дочерних элементов
     * @property {String} classes - Классы для пункта меню
     * @property {String} size - Размер
     */
    hoverColor: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  /*
   * Данные компонента
   * @function data
   */
  data() {
    /*
     * @typedef {Object}
     * @property {Boolean} hover - устанавливает статус наведения курсора на элемент
     * @property {String} outClass - Классы сформированные в компоненте
     */
    return {
      hover: false,
      outClass: {},
    }
  },
  /*
   * Наблюдатель за изменением свойств
   * @typedef {Object} watch
   */
  watch: {
    /*
     * Отслеживание наведения мыши
     * @function hover
     * @property {Boolean} val Значение при наведение курсора на элемент
     */
    hover(val) {
      this.$emit('hover-status', val) // отправка события со значением наведения курсора на элемент
      const elCls = this.$refs.item.classList // обращение к элементу для управления его классами
      if (val) {
        // если курсор наведен на элемент
        elCls.add(this.hoverColor) // добавление класса отвечающего за наведение курсора на элемент
        elCls.remove(`bg-${this.color}`) // удаление класса с основным цветом элемента
      } else {
        elCls.remove(this.hoverColor) // удаление класса отвечающего за наведение курсора на элемент
        elCls.add(`bg-${this.color}`) // добавление класса с основным цветом элемента
      }
    },
  },
  /*
   * При монтировании компонента
   * @function mounted
   */
  beforeMount() {
    if (this.color) this.outClass[`bg-${this.color}`] = true // если указан цвет то добавляем его в классы компонента
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
  },
}
</script>
<style scoped>
@import './../../../../../assets/css/color.css';
li {
  display: block;
  color: white;
  text-align: left !important;
  padding: 4px 8px;
  height: 32px;
  text-decoration: none;
}

li.sm {
  height: 23px !important;
  padding: 0px 5px !important;
  margin: 0px !important;
}

li.lg {
  height: 40px !important;
  padding: 7px 14px !important;
}

@media (max-width: 767px) {
  li {
    display: none;
  }
}
</style>
