<template>
  <button
    :class="[outClass, classes]"
    :style="styles"
    v-bind="$attrs"
    @dblclick="$emit('dblclick', $event)"
    @click="$emit('click', $event)"
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
    @unload="$emit('unload', $event)">
    <slot></slot>
  </button>
</template>

<script>
import { strToBool } from './../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {String} type - Тип кнопки
   * Возможные варианты
   *  -outline-primary
   *  -outline-secondary
   *  -outline-success
   *  -outline-info
   *  -outline-warning
   *  -outline-danger
   *  -outline-light
   *  -outline-dark
   * @property {String} size - Размер кнопки
   * Доступные варианты
   *  -sm
   *  -lg
   * @property {String} collapse Скрывать кнопку для больших экранов
   */
  props: {
    classes: {
      type: [String, Array],
      default: '',
    },
    styles: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    btn: {
      type: [Boolean, String],
      default: true,
    },
    collapse: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      outClass: null, // классы, сформированные аттрибутами
    }
  },
  /*
   * При монтировании компонента
   */
  mounted() {
    this.outClass = {
      btn: strToBool(this.btn),
      show: strToBool(this.collapse),
      hidden: strToBool(this.collapse),
    }
    if (this.type) this.outClass[`btn-${this.type}`] = true
    if (this.size) this.outClass[`btn-${this.size}`] = true
  },
}
</script>

<style>
/* stylelint-disable no-descending-specificity */
button:focus:not(:focus-visible) {
  outline: 0;
}

button {
  text-transform: none;
  border-radius: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

[role='button'] {
  cursor: pointer;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type='button']:not(:disabled),
[type='reset']:not(:disabled),
[type='submit']:not(:disabled) {
  cursor: pointer;
}

::-webkit-inner-spin-button {
  height: auto;
}

.btn {
  position: relative;
  top: -1px;
  --bs-btn-padding-x: 0.75rem;
  --bs-btn-padding-y: 0.375rem;
  --bs-btn-font-family: ;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.5;
  --bs-btn-color: #212529;
  --bs-btn-bg: transparent;
  --bs-btn-border-width: 1px;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: 0.375rem;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), 0.5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}

.btn:disabled,
.btn.disabled,
fieldset:disabled .btn {
  color: var(--bs-btn-disabled-color);
  pointer-events: none;
  background-color: var(--bs-btn-disabled-bg);
  border-color: var(--bs-btn-disabled-border-color);
  opacity: var(--bs-btn-disabled-opacity);
}
.btn-lg,
.btn-group-lg > .btn {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1rem;
  --bs-btn-font-size: 1.25rem;
  --bs-btn-border-radius: 0.5rem;
}

.btn-sm {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-border-radius: 0.25rem;
}

@media (max-width: 991px) {
  .show {
    display: block;
  }
}

@media (min-width: 991px) {
  .hidden {
    display: none;
  }
}
</style>
