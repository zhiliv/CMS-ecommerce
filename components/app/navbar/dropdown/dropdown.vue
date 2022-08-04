<template>
  <div class="dropdown">
    <li
      ref="item"
      :class="[classes, outClassParent]">
      {{ caption }}
    </li>
    <div :class="outClass">
      <template v-for="item in list">
        <template v-if="!item.parent">
          <app-navbar-dropdown-item
            :key="item.id"
            :size="size"
            :classes="classes"
            @click="item.click"
            >{{ item.caption }}</app-navbar-dropdown-item
          >
        </template>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} caption - Наименование кнопки
   * @property {Array} list - Список раскрываемого меню
   * @property {String} size - Размер
   */
  props: {
    classes: {
      type: [String, Array],
      default: null,
    },
    caption: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
    size: {
      type: String,
      default: '',
    },
  },
  /*
   * Свойства компонента
   */
  data() {
    return {
      /*
       * @property {Object} outClassParent - классы для родительского элемента выпадающего меню
       * @property {Object} outClass - Классы для выпадающего списка
       */
      outClassParent: { transition: true, 'no-select': true },
      outClass: {
        'dropdown-content': true,
        'show-animation': true,
        'no-select': true,
      },
    }
  },
  /*
   * При монтировании компонента
   */
  mounted() {
    if (this.size) {
      this.outClass[this.size] = true // если задан размер то устанавливаем размер
      this.outClassParent[this.size] = true // если задан размер то устанавливаем размер
    }
  },
}
</script>

<style scoped>
@import './../../../../assets/css/border.css';
@import './../../../../assets/css/align.css';
@import './../../../../assets/css/animate.css';
@import './../../../../assets/css/text.css';

.dropdown {
  position: absolute;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: relative;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown:hover .dropdown-content {
  display: inline-block;
  position: relative;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 100;
  opacity: 1;
}

.dropdown-content.sm {
  padding-top: 2px;
}

li {
  height: 32px;
  padding: 4px 8px;
}

li.sm {
  height: 21px !important;
  padding: 0px 14px;
  margin: 1px 5px;
}

li.lg {
  height: 40px !important;
  padding: 7px 14px !important;
}

.show-animation {
  -webkit-animation: fadeInTopRight 0.4s;
  animation: fadeInTopRight 0.4s;
}
</style>
