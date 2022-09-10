<template>
  <ul
    style="width: 100%"
    v-bind="$attrs"
    :class="[outClass, classes]"
    :size="size">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} size - Размер(Доступные размеры sm, lg)
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      outClass: {},
    }
  },
  mounted() {},
  methods: {
    click() {},
  },
}
</script>

<style>
ul {
  display: block;
  list-style-type: none;
  padding: 0;
  margin: 0px;
}
</style>
