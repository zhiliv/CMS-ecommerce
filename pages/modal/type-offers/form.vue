<template>
  <app-container class="h-75">
    <app-row class="h-100">
      <app-col col="12">
        <app-label class="fw-semibold">Наименование</app-label>
        <app-input v-model="data.name" />
      </app-col>
      <app-col col="12" class="h-100">
        <app-label class="fw-semibold">Описание</app-label>
        <app-textarea v-model="data.description" :class="{'h-100': !$attrs['is-new'], 'h-75': $attrs['is-new']}"></app-textarea>
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
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
  @import '~/assets/css/font.css';
</style>
