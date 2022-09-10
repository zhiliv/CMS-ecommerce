<!-- eslint-disable vue/no-mutating-props -->
<template>
  <input
    :value="value"
    :class="[outClass, classes]"
    type="text"
    @input="$emit('input', $event.target.value)" />
</template>

<script>
import { strToBool } from './../../../scripts/component/func'
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} value - Введенное значение
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    formControl: {
      type: [String, Boolean],
      default: true,
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  /*
   * Свойства компонента
   * @typedef {Object}
   * @property {Object} outClass - Классы формируемые компонентом
   */
  data() {
    return {
      outClass: null,
    }
  },
  /*
   * Перед монтированием компонента
   * @function mounted
   */
  beforeMount() {
    this.outClass = {
      'form-control': strToBool(this.formControl),
    }
  },
}
</script>

<style>
input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
</style>
