<template>
  <div class="dropdown">
    <li
      ref="item"
      :class="outClassParent"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      {{ caption }}
    </li>
    <div :class="outClass">
      <template v-for="item in list">
        <template v-if="!item.parent">
          <app-navbar-dropdown-item
            :key="item.id"
            :color="color"
            :size="size"
            :hover-color="hoverColor"
            classes="w-100 border-bottom"
            @click="item.click"
            @hover-status="hoverStatus"
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
   * @property {String} color - Классы для dropdown и его дочерних элементов
   * @property {String} hoverColor - Класс при наведении мыши
   * @property {Array} list - Список раскрываемого меню
   * @property {String} size - Размер
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
    hoverColor: {
      type: String,
      default: '',
      required: true,
    },
    color: {
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
       * @property {Boolean} hover - свойство для получения параметра из родительского элемента для отображения списка
       * @property {Object} outClassParent - классы для родительского элемента выпадающего меню
       * @property {Object} outClass - Классы для выпадающего списка
       */
      hover: false,
      outClassParent: { transition: true, 'no-select': true },
      outClass: {
        'dropdown-content': true,
        'show-animation': true,
        'no-select': true,
      },
    }
  },
  watch: {
    /*
     * Отслеживание наведения мыши на элемент
     * @function hover
     * @property {Any} val - Полученное значение
     */
    hover(val) {
      if (val) {
        // если курсор наведен на элемент
        this.$refs.item.classList.add(this.hoverColor) // добавление класса отвечающего за наведение курсора на элемент
        this.$refs.item.classList.remove(`bg-${this.color}`) // удаление класса с основным цветом элемента
      } else {
        this.$refs.item.classList.remove(this.hoverColor) // удаление класса отвечающего за наведение курсора на элемент
        this.$refs.item.classList.add(`bg-${this.color}`) // добавление класса с основным цветом элемента
      }
    },
  },
  /*
   * При монтировании компонента
   */
  mounted() {
    if (this.color) this.outClass[`bg-${this.color}`] = true // если задан размер то устанавливаем размер
    if (this.size) this.outClass[this.size] = true // если задан размер то устанавливаем размер
    if (this.size) this.outClassParent[this.size] = true // если задан размер то устанавливаем размер
  },
  /*
   * Методы компонента
   */
  methods: {
    /*
     * Отслеживание события наведения курсора - hover-status из дочернего компонента и устанавливает свойству hover этого компонента значение наведения
     * @function hoverStatus
     * @param {Boolean} hover - Значение наведения курсора на дочерний элемент
     */
    hoverStatus(hover) {
      this.hover = hover
    },
  },
}
</script>

<style scoped>
@import './../../../../assets/css/color.css';
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
