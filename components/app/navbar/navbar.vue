<template>
  <div
    :class="parentClass"
    style="width: 100%">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      viewBox="0 0 16 16"
      class="svg-icon"
      :class="burgerClass"
      @click="activeBurger($event)">
      <path
        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z" />
      <path
        d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
    </svg>

    <ul
      ref="list"
      :class="[outClass, classes]">
      <template v-for="item in menu">
        <template v-if="!item.list">
          <app-navbar-item
            :key="item.id"
            :classes="[outClassItem, classesItem]"
            :color="color"
            :size="size"
            :class-item-active="classItemActive"
            @click="item.click"
            >{{ item.caption }}</app-navbar-item
          >
        </template>
        <template v-else>
          <app-navbar-dropdown
            :key="item.id"
            :class-button-toogle="classButtonToogle"
            :class-dropdown="classDropdown"
            :class-item-dropdown="classItemDropdown"
            :size="size"
            :caption="item.caption"
            :color="color"
            :class-item-active="classItemActive"
            :list="item.list">
          </app-navbar-dropdown>
        </template>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  /*
   * @typedef {Object} props Входящие свойства
   * @property {String} classes - Входные классы
   * @property {String} color - Цвет панели(класс)
   * @property {String} burgerClass - Класс1ы для кнопки выпадающего меню
   * @property {String} size - Размер панели(Варианты: sm, lg)
   * @property {Array} menu - Список меню
   * @property {String} classesItem - Классы для строк
   * @property {String} classButtonToogle - Классы для кнопки выпадающего списка
   * @property {String} classDropdown - Классы для меню
   * @property {String} classItemDropdown - Классы для пунктов выпадающего списка
   * @property {String} classItemActive - Классы для активного не dropdown
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    burgerClass: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: null,
    },
    menu: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
    classesItem: {
      type: String,
      default: '',
    },
    classButtonToogle: {
      type: String,
      default: '',
    },
    classDropdown: {
      type: String,
      default: '',
    },
    classItemDropdown: {
      type: String,
      default: '',
    },
    classItemActive: {
      type: String,
      default: '',
    },
  },
  /*
   * Данные компонента
   * @function data
   * @property {String} outClass - Классы сформированные при монтировании компонента
   * @property {String} parentClass - классы для родительского элемента
   * @return {Object} outClassItem - сформированные классы для строк
   */
  data() {
    return {
      outClass: { navbar: true },
      outClassItem: {},
      parentClass: {},
    }
  },
  watch: {},
  /*
   * При монтировании компонента
   * @function mounted
   */
  mounted() {
    this.parentClass[`${this.color}`] = true // добавление класса цвета родительскому элементу
    if (this.size) this.outClassItem[this.size] = true // если задан размер то устанавливаем размер
    if (this.color) this.outClassItem[`${this.color}`] = true // добавление класса цвета элементу при указании цвета элемента
  },
  /*
   * Методы компонента
   */
  methods: {
    /*
     * Отображение \ скрытие бургер меню при клике
     * @function activeBurger
     */
    activeBurger() {
      const els = this.$el.querySelectorAll('li') // получение элемента
      // eslint-disable-next-line no-return-assign
      els.forEach(el => (el.style.display === 'block' ? (el.style.display = 'none') : (el.style.display = 'block')))
    },
  },
}
</script>

<style scoped>
@import './../../../assets/css/bg-color.css';
@import './../../../assets/css/align.css';

.navbar {
  display: flex;
}

.mt-10p {
  margin-top: 10px !important;
}

.svg-icon {
  border: 1px solid gray;
  border-radius: 15%;
  margin: 5px;
  padding: 5px;
  width: 38px;
  height: 38px;
}

.svg-icon:hover {
  border: 3px solid gray;
}

@media (min-width: 768px) {
  .svg-icon {
    display: none;
  }
}

@media (max-width: 767px) {
  .svg-icon {
    display: block;
  }
}
</style>
