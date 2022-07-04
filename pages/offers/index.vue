<template>
  <app-container container="false" breakpoint="fluid" classes="w-100 vh-100 border border-secondary rounded-2">
    <app-row classes="h-100">
      <app-col col-sm="12" col-md="2" col-xl="2" col-xxl="2" classes="border-end border-secondary">
        <app-list-group classes="max-vh-99 overflow-y-scroll">
          <app-list-group-item v-for="item in listOffers" :key="item.name" classes="border border-secondary rounded-1">{{item.name}}</app-list-group-item>
        </app-list-group>
      </app-col>
      <app-col col="10" col-sm="12" col-md="10"></app-col>
    </app-row>
  </app-container>
</template>

<script>
export default {
  layout: 'backmenu',
  data(){
    return {
      listOffers: []
    }
  },
  mounted() {
    this.getListOffers()
  },
  methods: {
    /*
    * Получение списка всех офферов
    * @function getListOffers
    */
   async getListOffers(){
          const response = await this.$axios
        .get('/api/offers')
        .catch((err) => {
          console.log(err)
        })
        console.log('response', response)
      this.listOffers = response.data // установка полученного списка
   }
  }
}
</script>

<style>
  @import './../../assets/css/width.css';
  @import './../../assets/css/height.css';
  @import './../../assets/css/border.css';
  @import './../../assets/css/overflow.css';
</style>
