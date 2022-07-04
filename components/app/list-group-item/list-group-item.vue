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
    noselect: { // запрет выделения текста
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      outClass: null,
    }
  },
  mounted() {
    this.outClass = {
      'list-group-item': true,
      'noselect': true,
    }
  },
  methods: {
    click(event) {
      const list = event.target.parentElement.querySelectorAll('li') // получение списка элементов
      if (list && list.length)
        list.forEach((el) => el.classList.remove('active')) // обход полученных элементов для удаления класса active
      event.target.classList.add('active') // добавление класса выделенному элементу
    },
  },
}
</script>

<style>
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
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(var(--bs-list-group-border-width) * -1);
  border-top-width: var(--bs-list-group-border-width);
}

.list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.list-group-item-primary.list-group-item-action:hover,
.list-group-item-primary.list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.list-group-item-secondary.list-group-item-action:hover,
.list-group-item-secondary.list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}

.list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:hover,
.list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:hover,
.list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.list-group-item-warning.list-group-item-action:hover,
.list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:hover,
.list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.list-group-item-light.list-group-item-action:hover,
.list-group-item-light.list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}

.list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.list-group-item-dark.list-group-item-action:hover,
.list-group-item-dark.list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                              supported by Chrome and Opera */
}
</style>
