
<template>
  <app-container
    container="false"
    breakpoint="fluid"
    classes="w-100"
    style="max-height: 94vh;"
  >
    <app-row classes="h-100">
      <app-col
        classes="p-0 border-end border-primary"
        col="false"
        col-sm="12"
        col-md="12"
        col-lg="12"
        col-xl="3"
        col-xxl="2"
      >
        <div class="d-flex justify-content-center border-bottom border-secondary">
          <app-h level="3" >Офферы</app-h>
        </div>

        <app-list-group classes="overflow-y-scroll ps-2" style="height: 86vh;">
          <app-list-group-item
            v-for="item in listOffers"
            :key="item.name"
            hover-color="bg-blue-lighten-5"
            classes-active="bg-blue-darken-2 white-text"
            classes="border border-secondary"
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
        classes="min-h-100 p-0"
      >
        <app-navbar
          color="bg-blue-accent-2"
          burger-class="white-text"
          hover-color="bg-blue-darken-3"
          :menu="navOffer"
        >
        </app-navbar>
        <form class="h-100 p-3">
          <app-row classes="h-100">
            <app-col
              col="false"
              col-sm="12"
              col-md="12"
              col-lg="12"
              classes="border-end h-100"
            >
              <app-row>
                <app-col
                  col="false"
                  col-sm="12"
                  col-md="12"
                  col-lg="2"
                  col-xl="2"
                  col-xxl="2"
                  classes="justify-content-center align-items-center   d-flex"
                >
                  <app-input-check
                    switch="true"
                    text="Состояние"
                    role="switch"
                  ></app-input-check>
                </app-col>
                <app-col
                  col="false"
                  col-sm="12"
                  col-md="12"
                  col-lg="12"
                  col-xl="6"
                  col-xxl="6"
                >
                  <app-label>Наименование</app-label>
                  <app-input></app-input>
                </app-col>
                <app-col
                  col="false"
                  col-sm="12"
                  col-md="12"
                  col-lg="12"
                  col-xl="4"
                  col-xxl="4"
                >
                  <app-label>Тип оффера</app-label>
                  <app-select>
                    <option v-for="item in listTypeOffer" :key="item.name">{{
                      item.name
                    }}</option>
                  </app-select>
                </app-col>
              </app-row>
              <app-row>
                <app-col col="12">
                  <app-label>Короткое описание</app-label>
                  <app-textarea></app-textarea>
                </app-col>
                <app-col col="12">
                  <app-label>Полное описание</app-label>
                  <app-textarea style="min-height: 350px;"></app-textarea>
                </app-col>
              </app-row>
            </app-col>
            <app-col col="4"> </app-col>
          </app-row>
        </form>
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
import formTypeOffers from '../form-type-offers.vue'
export default {
  layout: 'backmenu', // шаблон
  data() {
    return {
      listOffers: [],
      listTypeOffer: [{}],
      navOffer: [
        [
          {
            id: 2,
            caption: 'Данные',
            parent: true,
          },
          {
            id: 4,
            caption: 'Типы офферов',
            click: () => {
              this.$modal.show(formTypeOffers, {}, {width: '900px', height: '600px'})
            },
          },
        ],
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
      const response = await this.$axios.get('/api/products').catch((err) => {
        console.log(err)
      })
      this.listOffers = response.data // установка полученного списка
    },

    /*
     * Получение списка типов офферов
     * @function getListTypeOffers
     */
    async getListTypeOffers() {
      const response = await this.$axios
        .get('/api/type_service')
        .catch(console.log)
      this.listTypeOffer.push(...response.data) // установка полученного списка
    },
  },
}
</script>

<style>
@import './../../assets/css/width.css';
@import './../../assets/css/height.css';
@import './../../assets/css/align.css';
@import './../../assets/css/margin.css';
@import './../../assets/css/padding.css';
@import './../../assets/css/border.css';
@import './../../assets/css/overflow.css';
@import './../../assets/css/form-control.css';
@import './../../assets/css/form.css';
@import './../../assets/css/color.css';
@import './../../assets/css/text-color.css';
</style>
