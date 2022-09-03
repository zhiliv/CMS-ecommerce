<template>
  <app-container
    container="false"
    breakpoint="fluid"
    classes="w-100 h-100">
    <app-row classes="h-93">
      <app-col
        col="false"
        col-sm="12"
        col-md="12"
        col-lg="12"
        col-xl="3"
        col-xxl="2">
        <app-list-group classes="overflow-y-scroll max-vh-98 border border-grey-lighten-2 shadow-10 mt-1">
          <app-list-group-item
            v-for="item in listOffers"
            :key="item.name"
            classes-active="bg-item-list-group white-text"
            classes="border-bottom border-1 border-grey bg-item-list-group-hvr white-text-hvr"
            >{{ item.name }}</app-list-group-item
          >
        </app-list-group>
      </app-col>
      <app-col
        col="false"
        col-sm="12"
        col-md="12"
        col-lg="12"
        col-xl="9"
        col-xxl="10"
        classes="p-1 h-93">
        <app-navbar
          burger-class="white-text"
          classes-item="nav-item bg-grey-darken-3-hvr border-grey-lighten-1-hvr rounded-0 rounded-1-hvr grey-lighten-1-text-hvr"
          class-item-active="bg-grey-darken-2 grey-lighten-1-text border rounded-1"
          classes="bg-grey-darken-4 border"
          class-button-toogle="bg-grey-darken-4 bg-grey-darken-3-hvr bg-grey-darken-2-fcs grey-lighten-1-text border-bottom border-2 border-grey-lighten-1-hvr rounded-0 rounded-1-hvr rounded-1-fcs border-grey-lighten-1-fcs transition-1"
          class-dropdown="bg-grey-darken-4 grey-lighten-1-text transition-1"
          class-item-dropdown="bg-grey-darken-3 bg-grey-darken-2-hvr grey-lighten-1-text bg-grey-darken-1-fcs border-bottom border-1 border-grey-lighten-1 transition-1 grey-lighten-1-text"
          :menu="navOffer"></app-navbar>
        <form class="p-3 h-97 border border-grey-lighten-2 shadow-10">
          <app-row classes="h-100">
            <app-col
              col="false"
              col-sm="12"
              col-md="12"
              col-lg="12"
              classes="border-end h-100">
              <app-row>
                <app-col
                  col="false"
                  col-sm="12"
                  col-md="12"
                  col-lg="2"
                  col-xl="2"
                  col-xxl="2"
                  classes="justify-content-center align-items-center d-flex">
                  <app-input-check
                    switch="true"
                    text="Состояние"
                    role="switch"></app-input-check>
                </app-col>
                <app-col
                  col="false"
                  col-sm="12"
                  col-md="12"
                  col-lg="12"
                  col-xl="6"
                  col-xxl="6">
                  <app-label>Наименование</app-label>
                  <app-input></app-input>
                </app-col>
                <app-col
                  col="false"
                  col-sm="12"
                  col-md="12"
                  col-lg="12"
                  col-xl="4"
                  col-xxl="4">
                  <app-label>Тип оффера</app-label>
                  <app-select>
                    <option
                      v-for="item in listTypeOffer"
                      :key="item.name">
                      {{ item.name }}
                    </option>
                  </app-select>
                </app-col>
              </app-row>
              <app-row classes="h-100">
                <app-col
                  col="12"
                  classes="h-15">
                  <app-label>Короткое описание</app-label>
                  <app-textarea classes="h-100"></app-textarea>
                </app-col>
                <app-col
                  col="12"
                  classes="h-60">
                  <app-label>Полное описание</app-label>
                  <app-textarea style="height: 80%"></app-textarea>
                </app-col>
              </app-row>
            </app-col>
          </app-row>
        </form>
      </app-col>
    </app-row>
    <app-row>
      <app-col
        offset="10"
        col="2"
        style="border: 1px solid red"
        classes="h-10">
        <app-button>Сохранить</app-button>
      </app-col>
    </app-row>

    <app-row> </app-row>
  </app-container>
</template>

<script>
import formTypeOffers from '../../pages/modal/type-offers/type-offers.vue'
export default {
  layout: 'default', // шаблон
  data() {
    return {
      listOffers: [],
      listTypeOffer: [{}],
      navOffer: [
        {
          id: 1,
          caption: 'Управление',
          list: [
            {
              id: 2,
              caption: 'Типы офферов',
              click: () => {
                this.$modal.show(
                  formTypeOffers,
                  {},
                  { width: '900px', height: '600px', draggable: '.modal-header', resizable: true, clickToClose: false },
                )
              },
            },

          ],
        },
        {
          id: 3,
          caption: 'Управление 3',
          click: () => {}
        }

      ],
    }
  },
  mounted() {
    this.getListOffers()
    this.getListTypeOffers()
  },
  methods: {
    /*
     * Получение списка всех офферов
     * @function getListOffers
     */
    async getListOffers() {
      const response = await this.$axios.get('/api/products').catch(err => {
        console.log(err)
      })
      this.listOffers = response.data // установка полученного списка
    },

    /*
     * Получение списка типов офферов
     * @function getListTypeOffers
     */
    async getListTypeOffers() {
      const response = await this.$axios.get('/api/type_service').catch(console.log)
      this.listTypeOffer.push(...response.data) // установка полученного списка
    },
  },
}
</script>

<style>
@import './../../assets/css/size.css';
@import './../../assets/css/align.css';
@import './../../assets/css/margin.css';
@import './../../assets/css/padding.css';
@import './../../assets/css/border.css';
@import './../../assets/css/overflow.css';
@import './../../assets/css/form-control.css';
@import './../../assets/css/form.css';
@import './../../assets/css/bg-color.css';
@import './../../assets/css/text-color.css';

.nav-item{
  color: var(--grey-lighten-1);
  border-bottom: .2em solid var(--grey-lighten-1)
}
</style>
