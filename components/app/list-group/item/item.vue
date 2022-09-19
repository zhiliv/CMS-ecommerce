<template>
  <li
    v-bind="$attrs"
    :class="[{'no-select': true, 'align-items-start': true, 'd-block': true, 'list-group-item': trues}]"
    @click="$emit('click', click($event))"
  >
    <slot></slot>
  </li>
</template>

<script>
import { strToArr } from './../../../../scripts/component/func'
export default {
  props: {
    /* Классы при активности */
    classesActive: {
      type: String,
      default: '',
    },
    /* Размер */
    size: {
      type: String,
      default: null,
      validator(value) {
        return value === null || value === 'sm' || value === 'lg'
      },
    },
  },
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
        list.forEach(el => {
          // обход всех элементов списка
          arrActiveClass.forEach(
            activeClass => el.classList.remove(activeClass), // удаление класса активности у элементов, у которых есть активность
          )
          el.classList.remove('active') // удаление класса активности у элементов
        })
      }
      arrActiveClass.forEach(
        activeClass => event.target.classList.add(activeClass), // добавление класса выделенному элементу
      )
      event.target.classList.add('active')
    },
  },
}
</script>

<style>
  .list-group-item {
    padding: 4px 8px;
  }

  .list-group-item.sm {
    padding: 0px;
  }

  .list-group-item.lg {
    padding: 8px 16px;
  }
</style>
