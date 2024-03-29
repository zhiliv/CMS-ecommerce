<template>
  <nav :class="{navbar: true, 'navbar-expand': true}">
    <app-container container-fluid="true">
      <app-a class="navbar-brand" href="#">{{title}}</app-a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse m-0">
        <ul class="navbar-nav m-0 bg-light p-0">
          <li v-for="item in menu" :key="item.id" :class="[{'nav-item': true}, classLi]">
            <template v-if="item.type === 'link'">
              <app-a :class="[{'nav-link': true}, classLink]" :href="item.href">{{item.label}}</app-a>
            </template>
            <template v-else-if="item.type === 'text'">
              <span :class="[{'nav-item': true}, classLi]" @click="onOpenDropDown">
                <app-a
                  :class="[{'nav-link': true}, classLink]"
                  href="#"
                  role="button"
                  @mouseover="onHoverLink"
                  @mouseleave="onNotHoverLink"
                  @click="handleClick(item, $event)"
                >{{item.label}}</app-a>
              </span>
            </template>
            <template v-else-if="item.type === 'dropdown'">
              <span
                :class="[{'nav-item': true, 'dropdown': true}, classLi]"
                @click="onOpenDropDown"
              >
                <app-a
                  :class="[{'nav-link': true, 'dropdown-toggle': true}, classLink]"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >{{item.label}}</app-a>
                <ul :class="[{'dropdown-menu': true}, classDropdown]">
                  <template v-if="item.type !== 'hr'">
                    <li v-for="itemDropdown in item.list" :key="itemDropdown.id" :class="classLi">
                      <template v-if="itemDropdown.href">
                        <app-a
                          :class="[{'dropdown-item': true}, classLink]"
                          :href="itemDropdown.href || '#'"
                          @mouseover="onHoverLink"
                          @mouseleave="onNotHoverLink"
                          @click="handleClick(itemDropdown, $event)"
                        >{{itemDropdown.label}}</app-a>
                      </template>
                      <template v-else>{{itemDropdown.label}}</template>
                    </li>
                  </template>
                  <template v-if="item.type === 'hr'">
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                  </template>
                </ul>
              </span>
            </template>
          </li>
        </ul>
        <slot></slot>
      </div>
    </app-container>
  </nav>
</template>

<script>
import appContainer from './../container/container.vue'
import appA from './../a/a.vue'
import { addStringListClass } from './../../../scripts/component/func'

export default {
  components: {
    'app-container': appContainer,
    'app-a': appA,
  },
  props: {
    /* Заголовок меню */
    title: {
      type: String,
      default: '',
    },
    /* Значение списка меню */
    menu: {
      type: Array,
      default: () => [],
    },
    /* Классы активной строки */
    classLinkActive: {
      type: String,
      default: null,
    },
    /* Классы для пунктов */
    classLi: {
      type: String,
      default: '',
    },
    /* Классы для ссылки */
    classLink: {
      type: String,
      default: '',
    },
    /* Классы для dropdown */
    classDropdown: {
      type: String,
      default: '',
    },
  },
  methods: {
    toggle(event) {
      const el = event.target.parentElement.parentElement.querySelector('.collapse')
      if (el) el.classList.toggle('show')
      event.target.classList.toggle('collapsed')
    },
    /* Открытие дропдоун меню
     * @function onOpenDropDown
     * @param {Object} event - Объект события
     */
    onOpenDropDown(event) {
      const el = event.target.parentElement.querySelector('.dropdown-menu')
      if (el) el.classList.toggle('show')
    },
    /*
     * При наведении мыши на элемент меню
     * @function onHoverLink
     * @param {Object} event - Данные события
     */
    onHoverLink(event) {
      addStringListClass(event.target, this.classLinkActive)
    },
    /*
     * При потере наведения на элемент меню
     * @function onNotHoverLink
     * @param {Object} event - Данные события
     */
    onNotHoverLink(event) {
      addStringListClass(event.target, this.classLinkActive)
    },
    /*
     * При клике на пункт меню
     * @function handleClick
     * @param {Object} item - Данные элемента меню
     * @param {Object} event - Данные события
     */
    handleClick(item, event) {
      const dropdownList = this.$el.querySelectorAll('.dropdown-menu') // получение выпадающих списков меню
      dropdownList.forEach(el => {
        el.classList.remove('show') // удаление класса для отображения выпадающего списка
      }) // скрытие всех выпадающих списков меню
      if (item && item.click()) item.click()
    },
  },
}
</script>

<style>
  @import '../../../assets/css/margin.css';
  @import '../../../assets/css/padding.css';
  @import '../../../assets/css/background/bs.css';
  ul {
    padding-left: 2rem;
  }

  .navbar {
    --bs-navbar-padding-x: 0;
    --bs-navbar-padding-y: 0.5rem;
    --bs-navbar-color: rgba(0, 0, 0, 0.55);
    --bs-navbar-hover-color: rgba(0, 0, 0, 0.7);
    --bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);
    --bs-navbar-active-color: rgba(0, 0, 0, 0.9);
    --bs-navbar-brand-padding-y: 0.3125rem;
    --bs-navbar-brand-margin-end: 1rem;
    --bs-navbar-brand-font-size: 1.25rem;
    --bs-navbar-brand-color: rgba(0, 0, 0, 0.9);
    --bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);
    --bs-navbar-nav-link-padding-x: 0.5rem;
    --bs-navbar-toggler-padding-y: 0.25rem;
    --bs-navbar-toggler-padding-x: 0.75rem;
    --bs-navbar-toggler-font-size: 1.25rem;
    --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    --bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);
    --bs-navbar-toggler-border-radius: 0.375rem;
    --bs-navbar-toggler-focus-width: 0.25rem;
    --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
  }
  .navbar > .container,
  .navbar > .container-fluid,
  .navbar > .container-sm,
  .navbar > .container-md,
  .navbar > .container-lg,
  .navbar > .container-xl,
  .navbar > .container-xxl {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-nav {
    --bs-nav-link-padding-x: 0;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: 600;
    --bs-nav-link-color: var(--bs-navbar-color);
    --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
    --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .navbar-nav .show > .nav-link,
  .navbar-nav .nav-link.active {
    color: var(--bs-navbar-active-color);
  }
  .navbar-nav .dropdown-menu {
    position: static;
  }

  .navbar-text {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: var(--bs-navbar-color);
  }
  .navbar-text a,
  .navbar-text a:hover,
  .navbar-text a:focus {
    color: var(--bs-navbar-active-color);
  }

  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }

  @media (min-width: 576px) {
    .navbar-expand-sm {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: var(--bs-navbar-nav-link-padding-x);
      padding-left: var(--bs-navbar-nav-link-padding-x);
    }
    .navbar-expand-sm .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
    .navbar-expand-sm .offcanvas {
      position: static;
      z-index: auto;
      flex-grow: 1;
      width: auto !important;
      height: auto !important;
      visibility: visible !important;
      background-color: transparent !important;
      border: 0 !important;
      transform: none !important;
      transition: none;
    }
    .navbar-expand-sm .offcanvas .offcanvas-header {
      display: none;
    }
    .navbar-expand-sm .offcanvas .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }
  @media (min-width: 768px) {
    .navbar-expand-md {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: var(--bs-navbar-nav-link-padding-x);
      padding-left: var(--bs-navbar-nav-link-padding-x);
    }
    .navbar-expand-md .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
    .navbar-expand-md .offcanvas {
      position: static;
      z-index: auto;
      flex-grow: 1;
      width: auto !important;
      height: auto !important;
      visibility: visible !important;
      background-color: transparent !important;
      border: 0 !important;
      transform: none !important;
      transition: none;
    }
    .navbar-expand-md .offcanvas .offcanvas-header {
      display: none;
    }
    .navbar-expand-md .offcanvas .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }
  @media (min-width: 992px) {
    .navbar-expand-lg {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: var(--bs-navbar-nav-link-padding-x);
      padding-left: var(--bs-navbar-nav-link-padding-x);
    }
    .navbar-expand-lg .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
    .navbar-expand-lg .offcanvas {
      position: static;
      z-index: auto;
      flex-grow: 1;
      width: auto !important;
      height: auto !important;
      visibility: visible !important;
      background-color: transparent !important;
      border: 0 !important;
      transform: none !important;
      transition: none;
    }
    .navbar-expand-lg .offcanvas .offcanvas-header {
      display: none;
    }
    .navbar-expand-lg .offcanvas .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }
  @media (min-width: 1200px) {
    .navbar-expand-xl {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: var(--bs-navbar-nav-link-padding-x);
      padding-left: var(--bs-navbar-nav-link-padding-x);
    }
    .navbar-expand-xl .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
    .navbar-expand-xl .offcanvas {
      position: static;
      z-index: auto;
      flex-grow: 1;
      width: auto !important;
      height: auto !important;
      visibility: visible !important;
      background-color: transparent !important;
      border: 0 !important;
      transform: none !important;
      transition: none;
    }
    .navbar-expand-xl .offcanvas .offcanvas-header {
      display: none;
    }
    .navbar-expand-xl .offcanvas .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }
  @media (min-width: 1400px) {
    .navbar-expand-xxl {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-xxl .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-xxl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xxl .navbar-nav .nav-link {
      padding-right: var(--bs-navbar-nav-link-padding-x);
      padding-left: var(--bs-navbar-nav-link-padding-x);
    }
    .navbar-expand-xxl .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-xxl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-xxl .navbar-toggler {
      display: none;
    }
    .navbar-expand-xxl .offcanvas {
      position: static;
      z-index: auto;
      flex-grow: 1;
      width: auto !important;
      height: auto !important;
      visibility: visible !important;
      background-color: transparent !important;
      border: 0 !important;
      transform: none !important;
      transition: none;
    }
    .navbar-expand-xxl .offcanvas .offcanvas-header {
      display: none;
    }
    .navbar-expand-xxl .offcanvas .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }
  .navbar-expand {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand .navbar-toggler {
    display: none;
  }
  .navbar-expand .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }

  .navbar-brand {
    padding-top: var(--bs-navbar-brand-padding-y);
    padding-bottom: var(--bs-navbar-brand-padding-y);
    margin-right: var(--bs-navbar-brand-margin-end);
    font-size: var(--bs-navbar-brand-font-size);
    color: var(--bs-navbar-brand-color);
    text-decoration: none;
    white-space: nowrap;
  }
  .navbar-brand:hover,
  .navbar-brand:focus {
    color: var(--bs-navbar-brand-hover-color);
  }

  .navbar-toggler {
    padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
    font-size: var(--bs-navbar-toggler-font-size);
    line-height: 1;
    color: var(--bs-navbar-color);
    background-color: transparent;
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
    border-radius: var(--bs-navbar-toggler-border-radius);
    transition: var(--bs-navbar-toggler-transition);
  }
  @media (prefers-reduced-motion: reduce) {
    .navbar-toggler {
      transition: none;
    }
  }
  .navbar-toggler:hover {
    text-decoration: none;
  }
  .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-image: var(--bs-navbar-toggler-icon-bg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: var(--bs-nav-tabs-link-active-color);
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: var(--bs-nav-tabs-link-active-border-color);
  }

  .nav-fill > .nav-link,
  .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }

  .nav-justified > .nav-link,
  .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }

  .nav-fill .nav-item .nav-link,
  .nav-justified .nav-item .nav-link {
    width: 100%;
  }

  .dropup,
  .dropend,
  .dropdown,
  .dropstart,
  .dropup-center,
  .dropdown-center {
    position: relative;
  }

  .dropdown-toggle {
    white-space: nowrap;
  }
  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;

    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropdown-menu {
    --bs-dropdown-zindex: 1000;
    --bs-dropdown-min-width: 10rem;
    --bs-dropdown-padding-x: 0;
    --bs-dropdown-padding-y: 0.5rem;
    --bs-dropdown-spacer: 0.125rem;
    --bs-dropdown-font-size: 1rem;
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
    z-index: var(--bs-dropdown-zindex);
    display: none;
    min-width: var(--bs-dropdown-min-width);
    padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
    margin: 0;
    font-size: var(--bs-dropdown-font-size);
    color: var(--bs-dropdown-color);
    text-align: left;
    list-style: none;
    background-color: var(--bs-dropdown-bg);
    background-clip: padding-box;
    border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
    border-radius: var(--bs-dropdown-border-radius);
  }
  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: var(--bs-dropdown-spacer);
  }

  .dropdown-menu-start {
    --bs-position: start;
  }
  .dropdown-menu-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-end {
    --bs-position: end;
  }
  .dropdown-menu-end[data-bs-popper] {
    right: 0;
    left: auto;
  }

  @media (min-width: 576px) {
    .dropdown-menu-sm-start {
      --bs-position: start;
    }
    .dropdown-menu-sm-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-sm-end {
      --bs-position: end;
    }
    .dropdown-menu-sm-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 768px) {
    .dropdown-menu-md-start {
      --bs-position: start;
    }
    .dropdown-menu-md-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-md-end {
      --bs-position: end;
    }
    .dropdown-menu-md-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 992px) {
    .dropdown-menu-lg-start {
      --bs-position: start;
    }
    .dropdown-menu-lg-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-lg-end {
      --bs-position: end;
    }
    .dropdown-menu-lg-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 1200px) {
    .dropdown-menu-xl-start {
      --bs-position: start;
    }
    .dropdown-menu-xl-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-xl-end {
      --bs-position: end;
    }
    .dropdown-menu-xl-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  @media (min-width: 1400px) {
    .dropdown-menu-xxl-start {
      --bs-position: start;
    }
    .dropdown-menu-xxl-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-xxl-end {
      --bs-position: end;
    }
    .dropdown-menu-xxl-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }
  .dropup .dropdown-menu[data-bs-popper] {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: var(--bs-dropdown-spacer);
  }
  .dropup .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    content: '';
    border-top: 0;
    border-right: 0.3em solid transparent;
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
  }
  .dropup .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropend .dropdown-menu[data-bs-popper] {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: var(--bs-dropdown-spacer);
  }
  .dropend .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
  }
  .dropend .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .dropend .dropdown-toggle::after {
    vertical-align: 0;
  }

  .dropstart .dropdown-menu[data-bs-popper] {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: var(--bs-dropdown-spacer);
  }
  .dropstart .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
  }
  .dropstart .dropdown-toggle::after {
    display: none;
  }
  .dropstart .dropdown-toggle::before {
    display: inline-block;
    margin-right: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-bottom: 0.3em solid transparent;
  }
  .dropstart .dropdown-toggle:empty::after {
    margin-left: 0;
  }
  .dropstart .dropdown-toggle::before {
    vertical-align: 0;
  }

  .dropdown-divider {
    height: 0;
    margin: var(--bs-dropdown-divider-margin-y) 0;
    overflow: hidden;
    border-top: 1px solid var(--bs-dropdown-divider-bg);
    opacity: 1;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
    clear: both;
    font-weight: 400;
    color: var(--bs-dropdown-link-color);
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }
  .dropdown-item:hover,
  .dropdown-item:focus {
    color: var(--bs-dropdown-link-hover-color);
    background-color: var(--bs-dropdown-link-hover-bg);
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: var(--bs-dropdown-link-active-color);
    text-decoration: none;
    background-color: var(--bs-dropdown-link-active-bg);
  }
  .dropdown-item.disabled,
  .dropdown-item:disabled {
    color: var(--bs-dropdown-link-disabled-color);
    pointer-events: none;
    background-color: transparent;
  }

  .dropdown-menu.show {
    display: block;
  }

  .dropdown-header {
    display: block;
    padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
    margin-bottom: 0;
    font-size: 0.875rem;
    color: var(--bs-dropdown-header-color);
    white-space: nowrap;
  }

  .collapse:not(.show) {
    display: none;
  }

  .nav {
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: ;
    --bs-nav-link-color: var(--bs-link-color);
    --bs-nav-link-hover-color: var(--bs-link-hover-color);
    --bs-nav-link-disabled-color: #6c757d;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    color: var(--bs-nav-link-color);
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .nav-link {
      transition: none;
    }
  }
  .nav-link:hover,
  .nav-link:focus {
    color: var(--bs-nav-link-hover-color);
  }
  .nav-link.disabled {
    color: var(--bs-nav-link-disabled-color);
    pointer-events: none;
    cursor: default;
  }

  .nav-tabs {
    --bs-nav-tabs-border-width: 1px;
    --bs-nav-tabs-border-color: #dee2e6;
    --bs-nav-tabs-border-radius: 0.375rem;
    --bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;
    --bs-nav-tabs-link-active-color: #495057;
    --bs-nav-tabs-link-active-bg: #fff;
    --bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;
    border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
  }
  .nav-tabs .nav-link {
    margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
    background: none;
    border: var(--bs-nav-tabs-border-width) solid transparent;
    border-top-left-radius: var(--bs-nav-tabs-border-radius);
    border-top-right-radius: var(--bs-nav-tabs-border-radius);
  }
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    isolation: isolate;
    border-color: var(--bs-nav-tabs-link-hover-border-color);
  }
  .nav-tabs .nav-link.disabled,
  .nav-tabs .nav-link:disabled {
    color: var(--bs-nav-link-disabled-color);
    background-color: transparent;
    border-color: transparent;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: var(--bs-nav-tabs-link-active-color);
    background-color: var(--bs-nav-tabs-link-active-bg);
    border-color: var(--bs-nav-tabs-link-active-border-color);
  }
  .nav-tabs .dropdown-menu {
    margin-top: calc(-1 * var(--bs-nav-tabs-border-width));
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .nav-pills {
    --bs-nav-pills-border-radius: 0.375rem;
    --bs-nav-pills-link-active-color: #fff;
    --bs-nav-pills-link-active-bg: #0d6efd;
  }
  .nav-pills .nav-link {
    background: none;
    border: 0;
    border-radius: var(--bs-nav-pills-border-radius);
  }
  .nav-pills .nav-link:disabled {
    color: var(--bs-nav-link-disabled-color);
    background-color: transparent;
    border-color: transparent;
  }
</style>
