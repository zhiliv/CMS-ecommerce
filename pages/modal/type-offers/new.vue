<template>
  <app-container
    breakpoint="fluid"
    container="false"
    classes="border border-blue-darken-4 h-100">
    <app-row classes="p-1 px-3">
      <app-col col="11"></app-col>
      <app-col col="1">
        <app-button-close
          classes="border border-blue-darken-2"
          @click="onClose"></app-button-close>
      </app-col>
    </app-row>
    <app-row
      classes="border border-blue-lighten-4 rounded-1 m-3p p-0"
      style="height: 77%">
      <app-col col="12">
        <type-offers-form :inp-data="data" />
      </app-col>
    </app-row>
    <app-row classes="pt-2">
      <app-col
        col="12"
        classes="justify-content-end d-flex">
        <app-button
          classes="bg-green white-text btn-save ms-2"
          size="sm"
          @click="onCreate"
          >Создать</app-button
        >
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
import typeOffersForm from './form.vue'
export default {
  /*
   * Подключение компонентов
   */
  components: {
    typeOffersForm,
  },
  /*
   * Вхрдные параметры
   * @typedef {Object}
   * @property {Object} dataInp - Данные для заполнения строк
   */
  props: {
    dataInp: {
      type: Object,
      default: null,
    },
  },
  data() {
    /*
     * Свойства формы
     * @typedef {Object}
     * @property {Boolean} disCreate - Активность кнопки "Создать"
     */
    return {
      disCreate: false,
      data: {
        name: null, // наименование
        description: null, // описание
      },
    }
  },
  /*
   * При создании компонента
   */
  created() {
    if (this.dataInp) this.data = this.dataInp // установка полям входящих значений
  },
  /*
   * Методы формы
   */
  methods: {
    /*
     * При нажатии на кнопку "Создать"
     * @function onCreate
     */
    onCreate() {},
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

</style>
