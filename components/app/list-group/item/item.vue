<template>
  <li
    v-bind="$attrs"
    :class="[{'no-select': true, 'align-items-start': true, 'd-block': true, 'list-group-item': true}]"
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
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  text-decoration: none;
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}
.list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
  font-weight: 500;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(-1 * var(--bs-list-group-border-width));
  border-top-width: var(--bs-list-group-border-width);
}
</style>
