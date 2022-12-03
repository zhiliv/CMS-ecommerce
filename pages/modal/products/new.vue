<template>
  <app-container container-fluid="true">
    <app-modal-head
      title="Новый оффер"
      class="bg-grey-darken-3 grey-lighten-3-text"
      @click="onClose"
    />
    <app-row class="border border-1 border-grey-lighten-2 rounded-1 m-3p p-0 h-85 p-3">
      <app-col col="12">
        <app-row>
          <app-col col="6">
            <app-label class="fw-semibold">Наименование</app-label>
            <app-input ref="name" v-model.trim="data.name" />
          </app-col>
          <app-col col="6">
            <app-row>
              <app-label class="fw-semibold">Тип оффера</app-label>
              <v-select
                v-model="selectedTypeOffer"
                :options="listTypeOffer"
                label="name"
                class="style-chooser"
              ></v-select>
              <app-button
                btn-size="sm"
                class="btn-add"
                style="fill: red"
                @click="onCreateTypeOffer"
              >
                <svg-trash-create
                  width="20"
                  height="20"
                  style="fill: red !important"
                  viewBox="0 0 24 22"
                  stroke="red"
                  class="icon-add"
                />
              </app-button>
            </app-row>
          </app-col>
        </app-row>
      </app-col>
    </app-row>
    <app-row class="pt-2">
      <app-col col="2" offset="10" class="justify-content-end d-flex">
        <app-button
          class="bg-green-darken-3 grey-lighten-5-text btn-save ms-2"
          btn-size="sm"
          :disabled="disCreate"
          @click="onCreate"
        >Создать</app-button>
      </app-col>
    </app-row>
    <!-- Отправка HTTP запроса для получения списка типов офферов -->
    <app-query ref="postOffer" type="post" url="/api/offers" @result="event => result = event"></app-query>
    <app-query
      ref="getTypeOffers"
      type="get"
      url="/api/type_offers"
      @result="event => listTypeOffer.push(...event)"
    ></app-query>
  </app-container>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import appContainer from '../../../components/app/container/container.vue'
import appCol from '../../../components/app/col/col.vue'
import appButton from '../../../components/app/button/button.vue'
import appRow from '../../../components/app/row/row.vue'
import appInput from '../../../components/app/input/input.vue'
import appLabel from '../../../components/app/label/label.vue'
import appModalHead from '../../../components/app/modal-head/modal-head.vue'
import appQuery from '../../../components/app/query/query.vue'
import svgTrashCreate from './../../../assets/icons/basic/add-plus.svg'
import formTypeOffers from './../../../pages/modal/type-offers/new.vue'
// import formNew from './new.vue'
// import confirmModal from './../confirm.vue'
// import { cloneObject } from '~/scripts/component/func'
export default {
  /*
   * Подключенные компоненты
   */
  components: {
    'app-container': appContainer,
    'app-col': appCol,
    'app-modal-head': appModalHead,
    'app-row': appRow,
    'app-button': appButton,
    'app-query': appQuery,
    'app-input': appInput,
    'app-label': appLabel,
    'svg-trash-create': svgTrashCreate,
  },
  validations: {
    data: {
      name: {
        // валидация поля "Наименование"
        minLength: minLength(3),
        required,
      },
      typeOffer: {
        required,
        // валидация поля "тип продукта"
        minLength: minLength(3),
      },
    },
  },
  data() {
    return {
      disCreate: true, // доступность кнопки "сохранить" и "Отменить"
      data: {
        name: null, // наименование
        typeOffer: null, // описание
      },
      result: null, // результат выполнения запроса
      listTypeOffer: [{}], // список "Типы офферов"
      selectedTypeOffer: null,
    }
  },
  watch: {
    /*
     * Отслеживание изменения типа оффера
     * @function selectedTypeOffer
     * @param {Object} - Новое значение
     */
    selectedTypeOffer(newVal) {
      this.data.typeOffer = newVal && newVal._id ? newVal._id : null
    },
    /*
     * Отслеживание изменения полей
     */
    data: {
      handler(newVal) {
        this.disCreate = this.$v.data.$invalid // установка значения валидности кнопки "Создать"
      },
      deep: true,
    },
  },
  mounted() {
    this.$refs.getTypeOffers.execute() // получение списка "Типы офферов"
  },
  methods: {
    /*
     * при нажатии на кнопку "Сохранить"
     * @function onCreate
     */
    async onCreate() {
      const response = await this.$refs.postOffer.execute({ params: this.data })
      if (response && response.status === 200) console.log('response', response)
        // this.onClose({data: response.data.result})

    },

    /*
     * При нажатии на кнопку закрыть
     * @function onClose
     */
    onClose() {
      this.$emit('close') // отправка события для закрытия формы
    },

    /*
     * При нажатии на кнопку добавления нового типа оффера
     * @function onCreateTypeOffer
     */
    onCreateTypeOffer() {
      this.$modal.show(
        formTypeOffers,
        {},
        { width: '900px', height: '400px', draggable: '.modal-header', resizable: true, clickToClose: false },
        {
          'before-close': event => {
            if (event && event.params.item.data) this.listTypeOffer.push(event.params.item.data) // добавление результата в список
          },
        },
      )
    },
  },
}
</script>

<style>
  @import '~/assets/css/size.css';
  @import '~/assets/css/margin.css';
  @import '~/assets/css/border.css';
  @import '~/assets/css/padding.css';
  @import '~/assets/css/align.css';
  @import '~/assets/css/color/materialize-red.css';
  @import '~/assets/css/color/green.css';
  @import '~/assets/css/background/green.css';
  @import '~/assets/css/background/amber.css';
  @import '~/assets/css/color/blue.css';
  @import '~/assets/css/background/red.css';
  @import '~/assets/css/background/blue.css';
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

  .bg-item-list-group-hvr.active .btn-close-right {
    display: block;
  }

  .bg-item-list-group-hvr:hover .btn-close-right {
    display: block;
  }

  .btn-close-right {
    float: right;
    display: none;
  }

  .mt-32p {
    margin-top: 32px;
  }

  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle {
    height: 38px;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .style-chooser .vs__dropdown-menu {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 70px;
  }

  .v-select {
    width: 89%;
    padding: 0;
  }

  .btn-add {
    width: 40px;
  }

  .btn-add:hover {
    border-color: #ced4da !important;
  }

  .icon-add {
    padding-top: 2px;
    color: gray;
  }
</style>
