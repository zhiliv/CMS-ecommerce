<template>
  <li
    v-bind="$attrs"
    :class="[outClass, classes]"
    :style="styles"
    @dblclick="$emit('dblclick', $event)"
    @click="$emit('click', click($event))"
    @change="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @keydown="$emit('keydown', $event)"
    @keypress="$emit('keypress', $event)"
    @keyup="$emit('keyup', $event)"
    @load="$emit('load', $event)"
    @mousedown="$emit('mousedown', $event)"
    @mousemove="$emit('mousemove', $event)"
    @mouseout="$emit('mouseout', $event)"
    @mouseover="$emit('mouseover', $event)"
    @mouseup="$emit('mouseup', $event)"
    @reset="$emit('reset', $event)"
    @select="$emit('select', $event)"
    @submit="$emit('submit', $event)"
    @unload="$emit('unload', $event)"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * * @property {String} classesActive - классы для активной строки
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
    noselect: {
      // запрет выделения текста
      type: Boolean,
      default: true,
    },
    classesActive: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      outClass: {
      'list-group-item': true,
      'no-select': true,
    },
    }
  },
  mounted() {
  },
  methods: {
    click(event) {
      const list = event.target.parentElement.querySelectorAll('li') // получение списка элементов
      const arrActiveClass = this.classesActive
        ? this.classesActive.trim().split(' ')
        : []
      if (list && list.length) {
        list.forEach((el) => {
          arrActiveClass.forEach((activeClass) => {
            el.classList.remove(activeClass)
          })
          el.classList.remove('active')
        })
      }
      arrActiveClass.forEach((activeClass) =>
        event.target.classList.add(activeClass)
      )
      event.target.classList.add('active')
    },
  },
}
</script>

<style>
@import './../../../assets/css/text.css';
.list-group-item-action {
  width: 100%;
  color: var(--bs-list-group-action-color);
  text-align: inherit;
}
.list-group-item-action:hover,
.list-group-item-action:focus {
  z-index: 1;
  color: var(--bs-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--bs-list-group-action-hover-bg);
}
.list-group-item-action:active {
  color: var(--bs-list-group-action-active-color);
  background-color: var(--bs-list-group-action-active-bg);
}

.list-group-item {
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y)
    var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  text-decoration: none;
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid
    var(--bs-list-group-border-color);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled,
.list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}
.list-group-item.active {
  z-index: 2;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(var(--bs-list-group-border-width) * -1);
  border-top-width: var(--bs-list-group-border-width);
}

</style>
