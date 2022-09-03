<template>
  <div class="relative">
    <app-button
      ref="item"
      size="sm"
      :classes="[classButtonToogle, outClassParent]"
      @blur="onBlur"
      @click="onViewDropDown">
      {{ caption }}
    </app-button>
    <ul
      ref="drowdown"
      :class="[outClass, classDropdown]">
      <template v-for="item in list">
        <template v-if="!item.parent">
          <app-navbar-dropdown-item
            :key="item.id"
            :size="size"
            :classes="classItemDropdown"
            @click="item.click"
            >{{ item.caption }}</app-navbar-dropdown-item
          >
        </template>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} caption - Наименование кнопки
   * @property {Array} list - Список раскрываемого меню
   * @property {String} size - Размер
   * @property {String} classButtonToogle - Классы для родительского элемента dropdownКнопки выпадающего списка)
   * @property {String} classDropdown - Классы для выпадающего меню
   * @property {String} classItemDropdown - Классы для пунктов меню выпадающего списка
   */
  props: {
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
   * Свойства компонента
   */
  data() {
    return {
      /*
       * @property {Object} outClassParent - классы для родительского элемента выпадающего меню
       * @property {Object} outClass - Классы для выпадающего списка
       */
      outClassParent: { transition: true, 'no-select': true, 'dropdown-toggle': true, 'm-1': true, 'p-1': true },
      outClass: {
        'dropdown-menu': true,
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
  methods: {
    /*
     * Отображение списка меню при клике
     * @function onViewDropDown
     */
    onViewDropDown() {
      const elClasslist = this.$el.querySelector('ul').classList // активный список
      if (elClasslist.contains('show'))
        // проверка есть такой класс у элемента
        elClasslist.remove('show') // удаление класса если он есть в классах
      else {
        const allEl = this.$el.parentNode.querySelectorAll('ul') // получение всех элементов dropdown
        allEl.forEach(el => el.classList.remove('show')) // удаление класса у всех элементов dropdown
        elClasslist.add('show') // добавление класса активному списку
        this.$el.parentNode.querySelectorAll('button[dropdown-item]').forEach(el => {
          if (this.classItemActive) this.classItemActive.split(' ').forEach(cls => el.classList.remove(cls)) // удаление классов активности у элементов не являющихся dropdown
        })
      }
    },
    /*
     * При потере фокуса у кнопки dropdown
     * @function onBlur
     */
    onBlur() {
      /* Таймер добавлен, чтобы нажатый элемент не пропал раньше вызова */
      setTimeout(() => {
        this.$el.querySelector('ul').classList.remove('show') // удаление класса у элемента
      }, 1000)
    },
  },
}
</script>

<style scoped>
@import './../../../../assets/css/border.css';
@import './../../../../assets/css/padding.css';
@import './../../../../assets/css/margin.css';
@import './../../../../assets/css/align.css';
@import './../../../../assets/css/animate.css';
@import './../../../../assets/css/text.css';

.dropdown-menu {
  max-width: 240px;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0.5rem;
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: 0.9rem;
  --bs-dropdown-color: #212529;
  --bs-dropdown-bg: #fff;
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-border-radius: 0.375rem;
  --bs-dropdown-border-width: 1px;
  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-divider-margin-y: 0.5rem;
  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-dropdown-link-color: #212529;
  --bs-dropdown-link-hover-color: #1e2125;
  --bs-dropdown-link-hover-bg: #e9ecef;
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0d6efd;
  --bs-dropdown-link-disabled-color: #adb5bd;
  --bs-dropdown-item-padding-x: 1rem;
  --bs-dropdown-item-padding-y: 0.25rem;
  --bs-dropdown-header-color: #6c757d;
  --bs-dropdown-header-padding-x: 1rem;
  --bs-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: 1000;
  min-width: var(--bs-dropdown-min-width);
  padding: 0px;
  margin: -6px;
  font-size: var(--bs-dropdown-font-size);
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-dropdown-bg);
  background-clip: padding-box;
  display: none;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}
</style>
