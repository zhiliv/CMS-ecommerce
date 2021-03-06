<template>
  <li
    style="width: 100%;"
    v-bind="$attrs"
    :class="[outClass, classes]"
    @click="$emit('click', click($event))"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <slot></slot>
  </li>
</template>

<script>
import { strToArr } from './../../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} classesActive - классы для активной строки
   * @property {String} size - Размер(Доступные размеры sm, lg)
   * @property {String} hoverColor - Цвет при наведении
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    classesActive: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    hoverColor: {
      type: String,
      default: null,
    },
  },
  data() {
    /*
     * Данные компонента
     * @typedef {Object}
     * @property {Object} outClass - Устанавливаемые классы
     * @property {Boolean} hover - Статус наведения на элемент
     */
    return {
      hover: false,
      outClass: {
        'no-select': true, // установка класса для запрета выделения текста
        'align-items-start': true,
        'd-flex': true
      },
    }
  },
  watch: {
    /*
     * Отслеживание наведения мыши на элемент
     * @function hover
     * @property {Any} val - Полученное значение
     */
    hover(val) {
      const elCls = this.$el.classList // получение элемента для управления классами
      if (val) {
        if (this.hoverColor) elCls.add(this.hoverColor) // добавление класса при наведении курсора на элемент
        if (this.color) elCls.remove(`${this.color}`) // удаление класса цвета
      } else {
        if (this.hoverColor) elCls.remove(this.hoverColor) // удаление класса наведения при потере фокуса
        if (this.color) elCls.add(`${this.color}`) // добавление класса цвета элементу
      }
    },
  },

  beforeMount() {
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
  },
  /*
   * Методы компонента
   */
  methods: {
    /*
     * При клике на пункт списка
     * @function click
     * @props {Object} event - Данные события
     */
    click(event) {
      const list = event.target.parentElement.querySelectorAll('li') // получение списка элементов
      const arrActiveClass = strToArr(this.classesActive) // получение массива из строки
      if (list && list.length) {
        list.forEach((el) => {
          // обход всех элементов списка
          arrActiveClass.forEach(
            (activeClass) => el.classList.remove(activeClass) // удаление класса активности у элементов, у которых есть активность
          )
          el.classList.remove('active') // удаление класса активности у элементов
        })
      }
      arrActiveClass.forEach(
        (activeClass) => event.target.classList.add(activeClass) // добавление класса выделенному элементу
      )
      event.target.classList.add('active')
    },
  },
}
</script>

<style scoped>
@import './../../../../assets/css/text.css';
@import './../../../../assets/css/align.css';
li {
  padding: 4px 8px;
  color: rgba(0, 0, 0, 0.787);
  display: block;
}

li.sm{
  padding: 0px;
}


li.lg{
  padding: 8px 16px;
}
</style>
