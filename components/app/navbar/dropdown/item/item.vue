<template>
  <li
    ref="item"
    :class="[classes, outClass]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </li>
</template>
<script>
export default {
  props: {
    /*
     * Входящие свойства
     * @typedef {Object} props
     * @property {String} classes - Классы для пункта меню
     * @property {String} size - Размер
     */
    classes: {
      type: [String, Array],
      default: '',
    },
    size: {
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
     * @property {String} outClass - Классы сформированные в компоненте
     */
    return {
      outClass: {'w-100': true},
    }
  },
  /*
   * При монтировании компонента
   * @function mounted
   */
  beforeMount() {
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
  },
}
</script>
<style scoped>
li {
  display: block;
  color: white;
  text-align: left !important;
  padding: 4px 8px;
  height: 32px;
  text-decoration: none;
}

li.sm {
  height: 23px !important;
  padding: 0px 5px !important;
  margin: 0px !important;
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
</style>
