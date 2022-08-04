<template>
  <app-container
    breakpoint="fluid"
    container="false"
    classes="border border-blue-darken-4 h-100">
    <app-row classes="justify-content-end p-1 px-3">
      <app-button-close classes="border border-blue-darken-2"></app-button-close>
    </app-row>
    <app-row
      classes="border border-blue-lighten-4 rounded-1 m-3p p-0"
      style="height: 85%">
      <app-col
        col="4"
        classes="p-0 h-100 p-0 border-end border-grey-lighten-1">
        <app-h
          level="5"
          classes="justify-content-center d-flex border-bottom border-grey-lighten-2"
          style="margin: 0px"
          >Типы офферов</app-h
        >
        <app-list-group classes="overflow-y-scroll h-94">
          <app-list-group-item
            v-for="item in list"
            :key="item.name"
            classes-active="bg-item-list-group white-text"
            classes="border-bottom border-1 border-blue-lighten-4 bg-item-list-group-hvr white-text-hvr"
            >{{ item.name }}</app-list-group-item
          >
        </app-list-group>
      </app-col>
      <app-col col="8">
        <type-offers-form />
      </app-col>
    </app-row>
    <app-row classes="pt-2">
      <app-col col="3">
        <app-button
          classes="bg-blue white-text btn-new w-75"
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
          classes="bg-red-accent-4 white-text btn-cancel"
          size="sm"
          >Отменить</app-button
        >
        <app-button
          classes="bg-green white-text btn-save ms-2"
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
     */
    return {
      list: [],
    }
  },
  /*
   * Перед монтированием компонента
   * @function beforeMount
   */
  beforeMount() {
    this.getList()
  },
  methods: {
    /*
     * Получение списка типов офферов
     * @function getList
     */
    async getList() {
      const response = await this.$axios.get('/api/type_service').catch(console.log)
      this.list.push(...response.data) // установка полученного списка
    },
    /*
    * При нажатии на кнопку "Создать"
    * @function onCreate
    */
   onCreate(){
    this.$modal.show(newOffer, {}, { width: '600px', height: '400px' })
   }
  },
}
</script>

<style scoped>
@import '~/assets/css/width.css';
@import '~/assets/css/height.css';
@import '~/assets/css/margin.css';
@import '~/assets/css/align.css';
@import '~/assets/css/border.css';
@import '~/assets/css/padding.css';
.btn-cancel:hover {
  background-color: var(--materialize-red-lighten-1) !important;
  color: white !important;
  transition-duration: 0.6s;
}

.btn-save:hover {
  background-color: var(--green-lighten-1) !important;
  color: white !important;
  transition-duration: 0.6s;
}

.btn-new:hover {
  background-color: var(--blue-lighten-1) !important;
  color: white !important;
  transition-duration: 0.6s;
}

.btn-cancel {
  transition-duration: 0.6s;
}
</style>
