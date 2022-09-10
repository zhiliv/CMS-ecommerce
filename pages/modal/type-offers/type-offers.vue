<template>
  <app-container
    breakpoint="fluid"
    container="false"
    classes="border border-grey-darken-1 h-100">
    <app-modal-head title="Типы офферов" @click="onClose"/>
    <app-row
      classes="border border-1 border-grey-lighten-2 rounded-1 m-3p p-0 h-85 p-3">
      <app-col
        col="4"
        classes="h-100 p-0">

        <app-list-group classes="overflow-y-scroll h-100 border border-grey-lighten-2 shadow-5">
          <app-list-group-item
            v-for="item in list"
            :key="item.name"
            classes-active="bg-item-list-group white-text"
            classes="border-bottom border-1 border-gray-lighten-4 bg-item-list-group-hvr"
            @click="onSelect(item)"
            >{{ item.name }}</app-list-group-item
          >
        </app-list-group>
      </app-col>
      <app-col col="8">
        <div class="border border-gray-lighten-4 shadow-5 px-1 h-100">
          <type-offers-form :data-inp="selectItem"/>
        </div>
      </app-col>
    </app-row>
    <app-row classes="pt-2">
      <app-col col="3">
        <app-button
          classes="bg-blue-darken-4 white-text btn-new w-75"
          size="sm"
          @click="onCreate"
          >Новая запись</app-button
        >
      </app-col>
      <app-col
        col="2"
        offset="7"
        classes="justify-content-end d-flex">
        <app-button
          classes="bg-red-darken-4 white-text btn-cancel"
          size="sm"
          >Отменить</app-button
        >
        <app-button
          classes="bg-green-darken-3 white-text btn-save ms-2"
          size="sm"
          >Сохранить</app-button
        >
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
import typeOffersForm from './form.vue'
import newOffer from './new.vue'
export default {
  /*
   * Подключенные компоненты
   */
  components: {
    // eslint-disable-next-line vue/no-unused-components
    typeOffersForm,
  },
  data() {
    /*
     * Данные компонента
     * @typedef {Object}
     * @property {Array} list - Список типов офферов
     * @property {Object} selectItem - Выделенный элемент
     */
    return {
      list: [],
      selectItem: {},
    }
  },
  /*
   * Перед монтированием компонента
   * @function beforeMount
   */
  beforeMount() {
    this.getList()
    // eslint-disable-next-line no-unused-expressions
    // this.$el.classList.add('bg-black')

  },
  mounted() {
    console.log(this.$modal)
},
  updated() {
    // this.$el.classList.add('bg-primary')
  },
  methods: {
    /*
     * при выборе элемента списка
     * @function onSelect
     * @param {Object} item - ВЫделенная строка
     */
    onSelect(item) {
      if (item) this.selectItem = item // присвоение свойству selectItem значение выделенной строки
    },

    /*
     * Получение списка типов офферов
     * @function getList
     */
    async getList() {
      const response = await this.$axios.get('/api/type_service').catch(console.log)
      this.list.push(...response.data) // установка полученного списка
    },
    beforeClose(event) {
      console.log('🚀 -> beforeClose -> event', event)
    },
    /*
     * При нажатии на кнопку "Создать"
     * @function onCreate
     */
    onCreate() {
      this.$modal.show(
        newOffer,
        { simple: 'Тест передачи параметра' },
        { width: '600px', height: '400px', draggable: true, resizable: true, clickToClose: false },
        { 'before-close': this.beforeClose },
      )
    },
    /*
     * При нажатии на кнопку закрыть
     * @function onClose
     */
    onClose() {
      this.$emit('close', this.data) // отправка события для закрытия формы
    },
  },
}
</script>

<style>
@import '~/assets/css/size.css';
@import '~/assets/css/margin.css';
@import '~/assets/css/align.css';
@import '~/assets/css/border.css';
@import '~/assets/css/padding.css';
.btn-cancel:hover {
  background-color: var(--materialize-red-darken-1) !important;
  color: white !important;
  transition-duration: 0.6s;
}

.btn-save:hover {
  background-color: var(--green-darken-2) !important;
  color: white !important;
  transition-duration: 0.6s;
}

.btn-new:hover {
  background-color: var(--blue-darken-3) !important;
  color: white !important;
  transition-duration: 0.6s;
}

.btn-cancel {
  transition-duration: 0.6s;
}

.bg-item-list-group {
  background: linear-gradient(to top, var(--amber-darken-4), 20%, var(--amber-accent-4));
  color: var(--white) !important;
}

.bg-item-list-group-hvr:hover {
  background: linear-gradient(to top, var(--amber-lighten-5), 20%, var(--amber-lighten-3));
  color: var(--black) !important;
}
</style>
