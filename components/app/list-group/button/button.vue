<template>
  <app-button
    style="width: 100%"
    v-bind="$attrs"
    :class="[outClass, classes]"
    @click="$emit('click', click($event))">
    <slot></slot>
  </app-button>
</template>

<script>

export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} classesActive - классы для активной строки
   * @property {String} size - Размер(Доступные размеры sm, lg)
   * @property {Boolean} isActive - Статус активности
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
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    /*
     * Данные компонента
     * @typedef {Object}
     * @property {Object} outClass - Устанавливаемые классы
     */
    return {
      outClass: {
        'no-select': true, // установка класса для запрета выделения текста
        'align-items-start': true,
        'd-flex': true,
        'my-1': true
      },
    }
  },

  beforeMount() {
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
    if(this.isActive) this.outClass[this.classesActive] = true // установка класса для активного элемента
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
      /* const list = event.target.parentElement.querySelectorAll('button') // получение списка элементов
      const arrActiveClass = strToArr(this.classesActive) // получение массива из строки
      if (list && list.length) {
        list.forEach((el) => {
          // обход всех элементов списка
          arrActiveClass.forEach(
            (activeClass) => el.classList.remove(activeClass), // удаление класса активности у элементов, у которых есть активность
          )
          el.classList.remove('active') // удаление класса активности у элементов
        })
      }
      arrActiveClass.forEach(
        (activeClass) => event.target.classList.add(activeClass), // добавление класса выделенному элементу
      )
      event.target.classList.add('active') */
    },
  },
}
</script>

<style scoped>
@import './../../../../assets/css/text.css';
@import './../../../../assets/css/align.css';
@import './../../../../assets/css/margin.css';

</style>
