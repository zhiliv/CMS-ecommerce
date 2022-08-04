<template>
  <li
    ref="item"
    v-bind="$attrs"
    :class="[outClass, classes]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </li>
</template>
<script>
export default {
  /*
   * @typedef {Object} props
   * @property {String} size - Размер
   * @property {String} color - Цвет панели
   * @property {String} textColor - Цвет текста
   */
  props: {
    classes: {
      type: [String, Array],
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  /*
   * Данные компонента
   * @function data
   */
  data() {
    /*
     * @typedef {Object}
     * @property {Object} outClass - Сформированный список внутренних классов
     */
    return {
      outClass: { transition: true, 'no-select': true },
    }
  },
  /*
   * Перед монтированием компонента
   */
  beforeMount() {
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
  },
}
</script>
<style scoped>
@import './../../../../assets/css/bg-color.css';
@import './../../../../assets/css/text.css';
li {
  float: left;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  height: 32px;
  padding: 4px 8px;
}

li.sm {
  height: 23px !important;
  padding: 0px 14px !important;
}

li.lg {
  height: 40px !important;
  padding: 7px 14px !important;
}

@media (max-width: 767px) {
  li {
    display: none;
  }
}

.transition {
  transition-duration: 1s;
}
</style>
