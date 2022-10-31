2<template>
  <ul v-bind="$attrs" :class="{'list-group': true}">
    <template v-if="list.length && typeRow === 'item'">
      <app-list-group-item v-for="item in list" :key="item.id" :class="classItem">{{item.text}}</app-list-group-item>
    </template>
    <template v-else-if="list.length && typeRow === 'button'">
      <app-list-group-button v-for="item in list" :key="item.id" :class="classItem">{{item.text}}</app-list-group-button>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </ul>
</template>

<script>
import { strToArr } from './../../../scripts/component/func'
import appListGroupItem from './item/item.vue'
import appListGroupButton from './button/button.vue'
export default {
  components: {
    'app-list-group-item': appListGroupItem,
    'app-list-group-button': appListGroupButton,
  },
  props: {
    /* Вариант отображения */
    typeRow: {
      type: String,
      default: 'item',
      validator(value) {
        return value === 'item' || value === 'button'
      },
    },
    /* Список */
    list: {
      type: Array,
      default: () => [],
    },
    /* Классы для срок */
    classItem: {
      type: String,
      default: '',
    },
    /* Классы при активности */
    classesActive: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.$on('active', event => {
      const { _id } = event // получение передаваемого параметра _id в переменную
      this.setDelIsActive()
      this.delClassActiveItem()
      const index = this.$children.findIndex(el => el.$attrs._id === _id) // получение индекса элемента
      if (index >= 0) {
        this.$children[index]._data.isActive = true
        this.setClassActiveItem(index)
      }
    })
    this.$root.$emit('test', {data: 'test'})
    console.log('🚀 -> mounted -> this.$root', this.$root)
  },
  methods: {
    /* Установка свойства isActive для всех элементов списка в состояние false
     * @function setDelIsActive
     */
    setDelIsActive() {
      this.$children.forEach(element => {
        element._data.isActive = false
      })
    },

    /*
     * Удаление классов активности из всех элементов списка
     * @function delClassActiveItem
     */
    delClassActiveItem() {
      const arrActiveClass = strToArr(this.classesActive) // получение массива из строки
      const list = this.$children // список элементов
      if (list && list.length) {
        // проверка что массив не пустой
        list.forEach(item => {
          // обход всех элементов списка
          arrActiveClass.forEach(
            activeClass => item.$el.classList.remove(activeClass), // удаление класса активности у элементов, у которых есть активность
          )
          item.$el.classList.remove('active') // удаление класса активности у элементов
        })
      }
    },

    /*
     * Установка классов активности для элемента
     * @function setClassActiveItem
     */
    setClassActiveItem(index) {
      const arrActiveClass = strToArr(this.classesActive) // получение массива из строки
      arrActiveClass.forEach(activeClass => this.$children[index].$el.classList.add(activeClass)) // добавление класса выделенному элементу
      this.$children[index].$el.classList.add('active')
    },
  },
}
</script>

<style>
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: var(--bs-list-group-border-radius);
  }
</style>
