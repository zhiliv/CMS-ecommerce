<template>
  <app-container container-fluid="true" class="border border-blue-darken-4 h-100">
    <app-modal-head
      title="Создание нового оффера"
      class="bg-grey-darken-3 grey-lighten-3-text"
      @click="onClose"
    />
    <app-row class="border border-blue-lighten-4 rounded-1 m-3p p-0 h-77">
      <app-col col="12">
        <maket-form :inp-data="data" is-new="true" />
      </app-col>
    </app-row>
    <app-row class="pt-2">
      <app-col col="12" class="justify-content-end d-flex">
        <app-button
          class="bg-green-darken-3 grey-lighten-5-text btn-save ms-2"
          btn-size="sm"
          @click="onCreate"
        >Создать</app-button>
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
import appContainer from '../../../components/app/container/container.vue'
import appCol from '../../../components/app/col/col.vue'
import appRow from '../../../components/app/row/row.vue'
import appButton from '../../../components/app/button/button.vue'
import appModalHead from '../../../components/app/modal-head/modal-head.vue'
import maketForm from './form.vue'
export default {
  /*
   * Подключение компонентов
   */
  components: {
    'maket-form': maketForm,
    'app-container': appContainer,
    'app-col': appCol,
    'app-row': appRow,
    'app-button': appButton,
    'app-modal-head': appModalHead,
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
    console.log(this)
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
  @import '~/assets/css/size.css';
</style>
