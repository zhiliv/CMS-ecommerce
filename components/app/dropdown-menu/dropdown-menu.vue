<template>
  <div class="dropdown" :class="classes" :style="styles">
    <app-button
      size="size"
      type="type"
      classes="classesBtn"
      :styles="stylesBtn"
      >{{ caption }}</app-button
    >
    <app-ol-ul-dl classes="btn-group">
      <slot></slot>
    </app-ol-ul-dl>
  </div>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} classesBtn - Входные классы для кнопки
   * @property {String} styles - Входные стили
   * @property {String} styles - Входные стили для кнопки
   * @property {String} type - Тип кнопки
   * @property {String} caption - Наименование кнопки
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    classesBtn: {
      type: String,
      default: '',
    },
    styles: {
      type: String,
      default: '',
    },
    stylesBtn: {
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
    caption: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      outClass: {}, // классы, сформированные аттрибутами
    }
  },
  /*
   * При монтировании компонента
   */
  mounted() {

  },
}
</script>

<style></style>
