<template>
  <app-container classes="h-75"
    ><app-row classes="h-100">
      <app-col col="12">
        <app-label>Наименование</app-label>
        <app-input v-model="data.name" />
      </app-col>
      <app-col
        col="12"
        classes="h-100">
        <app-label>Описание</app-label>
        <app-textarea
          v-model="data.description"
          classes="h-100"></app-textarea>
      </app-col> </app-row
  ></app-container>
</template>

<script>
export default {
  /*
   * Входные параметры формы
   * @typedef {Object}
   * @property {Object} dataInp - Входные данные
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
     * @property {Object} data - Данные полей
     */
    return {
      data: {
        name: null,
        description: null,
      },
    }
  },
  watch: {
    /*
     * Наблюдатель за изменением свойства dataInp
     */
    dataInp: {
      /*
       * @function handler
       * Событие при изменении свойства
       * @param {Object} newValue - Полученное значение объекта
       */
      handler(newValue) {
        this.data = newValue
      },
      deep: true, // отслеживание при изменении свойств объекта
    },
  },
}
</script>

<style>
@import '~/assets/css/size.css';
</style>
