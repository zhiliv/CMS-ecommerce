<template>
  <li
    ref="item"
    v-bind="$attrs"
    :class="[outClass, classes]"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </li>
</template>
<script>
export default {
  /*
   * @typedef {Object} props
   * @property {String} hoverColor - Класс для добавления в элемент при наведении мыши
   * @property {String} size - Размер
   * @property {String} color - Цвет панели
   * @property {String} textColor - Цвет текста
   */
  props: {
    classes: {
      type: String,
      default: ''
    },
    hoverColor: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    color: {
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
     * @property {Boolean} hover - Статус наведен ли курсор на элемент
     * @property {Object} outClass - Сформированный список внутренних классов
     */
    return {
      hover: false,
      outClass: { transition: true, 'no-select': true },
    }
  },
  /*
   * Наблюдатель за изменениями
   */
  watch: {
    /*
     * Наблюдение за изменением свойства hover
     * @function hover
     * @property {Boolean} val - Значение статуса задачи
     */
    hover(val) {
      const elCls = this.$refs.item.classList
      if (val) {
        // если курсор наведен на элемент
        elCls.add(this.hoverColor) // добавление класса отвечающего за наведение курсора на элемент
        elCls.remove(`${this.color}`) // удаление класса с основным цветом элемента
      } else {
        elCls.remove(this.hoverColor) // удаление класса отвечающего за наведение курсора на элемент
        elCls.add(`${this.color}`) // добавление класса с основным цветом элемента
      }
    },
  },
  /*
   * Перед монтированием компонента
   */
  beforeMount() {
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
  },
}
</script>
<style scoped>
@import './../../../../assets/css/color.css';
@import './../../../../assets/css/text.css';
li {
  float: left;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  height: 32px;
  padding: 4px 8px;
}

li.sm {
  height: 23px !important;
  padding: 0px 14px !important;
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

.transition {
  transition-duration: 1s;
}
</style>
