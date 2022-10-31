<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <app-container container-fluid="true" class="border border-blue-darken-4 h-100">
    <app-modal-head
      title="Создание нового оффера"
      class="bg-grey-darken-3 grey-lighten-3-text"
      @click="onClose"
    />
    <app-row class="border border-blue-lighten-4 rounded-1 m-3p p-0 h-77">
      <app-col col="12">
        <maket-form ref="form" :data-inp="data" is-new="true" />
      </app-col>
    </app-row>
    <app-row class="pt-2">
      <app-col col="12" class="justify-content-end d-flex">
        <app-button
          class="bg-green-darken-3 grey-lighten-5-text btn-save ms-2"
          btn-size="sm"
          :disabled="disCreate"
          @click="onCreate"
        >Создать</app-button>
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
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
    return {
      disCreate: {
        type: Boolean,
        default: true,
      },
      /* Данные формы */
      data: {
        name: null, // наименование
        description: null, // описание
      },
    }
  },

  mounted() {
    /* Прослушивание события при изменения данных на форме  */
    this.$refs.form.$on('get-data-from-type-offer', event => {
      this.data = event.data // получение данных строки
      this.disCreate = this.$v.data.$invalid // установка значения валидности кнопки "Создать"
    })
  },

  methods: {
    /*
     * При нажатии на кнопку "Создать"
     * @function onCreate
     */
    async onCreate() {
      const response = await this.$axios.post('/api/type_offers', { params: this.data }).catch(err => {
        this.$nuxt.$emit('show-toast', { params: { title: err.title, message: err.message, type: 'danger' } })
      })
      console.log('response', response)
      if (response && response.status === 200)
        this.$nuxt.$emit('show-toast', {
          params: { title: response.data.title, message: response.data.message, type: response.data.type_message },
        })
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
</style>
