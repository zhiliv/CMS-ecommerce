<template>
  <app-button
    v-bind="$attrs"
    :class="{'no-select': true,'align-items-start': true,'d-flex': true,'my-1': true}"
    @click="$emit('click', click($event))"
  >
    <slot></slot>
  </app-button>
</template>

<script>
import appButton from './../../button/button.vue'
export default {
  components: {
    'app-button': appButton,
  },
  props: {
    /* Классы при активности */
    classesActive: {
      type: String,
      default: '',
    },
    /* Размер */
    size: {
      type: String,
      default: '',
    },
    /* Статус активности */
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    /*
     * Данные компонента
     * @typedef {Object}
     * @property {Object} outClass - Устанавливаемые классы
     */
    return {
      outClass: {
        'no-select': true,
        'align-items-start': true,
        'd-flex': true,
        'my-1': true,
      },
    }
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

<style>
  @import './../../../../assets/css/margin.css';
  @import './../../../../assets/css/text/text.css';
</style>
