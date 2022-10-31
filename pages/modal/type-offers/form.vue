<template>
  <app-container class="h-75">
    <app-row class="h-100">
      <app-col col="12">
        <app-label class="fw-semibold">Наименование</app-label>
        <app-input ref="name" v-model.trim="data.name" />
      </app-col>
      <app-col col="12" class="h-100">
        <app-label class="fw-semibold">Описание</app-label>
        <app-textarea
          ref="description"
          v-model.trim="data.description"
          :class="{'h-100': !$attrs['is-new'], 'h-75': $attrs['is-new']}"
        ></app-textarea>
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

import appContainer from '../../../components/app/container/container.vue'
import appCol from '../../../components/app/col/col.vue'
import appRow from '../../../components/app/row/row.vue'
import appLabel from '../../../components/app/label/label.vue'
import appInput from '../../../components/app/input/input.vue'
import appTextarea from '../../../components/app/textarea/textarea.vue'
export default {
  components: {
    'app-container': appContainer,
    'app-col': appCol,
    'app-label': appLabel,
    'app-input': appInput,
    'app-textarea': appTextarea,
    'app-row': appRow,
  },
  model: {
    prop: 'dataInp',
    event: 'update',
  },
  props: {
    /* Входные данные */
    dataInp: {
      type: Object,
      default: null,
    },
  },
  validations: {
    data: {
      name: {
        // валидация поля "Наименование"
        minLength: minLength(3),
        required,
      },
      description: {
        // валидация поля "Описание"
        minLength: minLength(3),
      },
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
    /* Отслеживание изменений поля "Наименование" */
    'data.name'() {
      this.$v.data.$touch()
      this.$refs.name.$emit('is-invalid', this.$v.data.name.$invalid) // отправка события в компонент для установки ошибки валидации
    },
    data: {
      handler(newVal) {
        /* отправка события с данными формы */
        this.$emit('get-data-from-type-offer', { data: newVal }) // отправка события
      },
      deep: true,
    },
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
  @import '~/assets/css/font.css';
</style>
