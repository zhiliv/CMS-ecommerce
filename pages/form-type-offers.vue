<template>
  <app-container
    breakpoint="fluid"
    container="false"
    classes="border border-secondary h-100"
  >
    <app-row classes="justify-content-end p-1 px-3">
      <app-button-close classes="border border-secondary"></app-button-close>
    </app-row>
    <app-row
      classes="border border-secondary rounded-1 m-3p p-0"
      style="height: 87%;"
    >
      <app-col col="3" classes="p-0 h-100">
        <app-h level="4" classes="justify-content-center d-flex">Список офферов</app-h>
        <app-list-group classes="overflow-y-scroll h-92">
          <app-list-group-item
            v-for="item in list"
            :key="item.name"
            classes-active="bg-blue-darken-2 white-text"
            classes="border border-secondary"
            hover-color="bg-blue-lighten-5"
            >{{ item.name }}</app-list-group-item
          >
        </app-list-group>
      </app-col>
      <app-col col="9"> </app-col>
    </app-row>
    <app-row>
      <app-col col="3">
        <app-button classes="bg-blue white-text btn-new w-75" size="sm">Создать</app-button>
      </app-col>
      <app-col col="2" offset="7" classes="justify-content-end d-flex">
        <app-button classes="bg-red-accent-4 white-text btn-cancel" size="sm">Отменить</app-button>
        <app-button classes="bg-green white-text btn-save ms-2" size="sm">Сохранить</app-button>
      </app-col>

    </app-row>
  </app-container>
</template>

<script>
export default {
  data() {
    /*
     * Данные компонента
     * @typedef {Object}
     * @property {Array} list - Список типов офферов
     */
    return {
      list: [],
    }
  },
  /*
   * Перед монтированием компонента
   * @function beforeMount
   */
  beforeMount() {
    this.getList()
  },
  methods: {
    /*
     * Получение списка типов офферов
     * @function getList
     */
    async getList() {
      const response = await this.$axios
        .get('/api/type_service')
        .catch(console.log)
      this.list.push(...response.data) // установка полученного списка
    },
  },
}
</script>

<style scoped>
@import './../assets/css/width.css';
@import './../assets/css/height.css';
@import './../assets/css/margin.css';
@import './../assets/css/border.css';
@import './../assets/css/padding.css';
.btn-cancel:hover{
  background-color: var(--bs-materialize-red);
  color: white !important;
  transition-duration: .6s;
}

.btn-save:hover{
  background-color: #66bb6a;
  color: white !important;
  transition-duration: .6s;
}

.btn-new:hover{
  background-color: #42a5f5;
  color: white !important;
  transition-duration: .6s;
}

.btn-cancel{
  transition-duration: .6s;
}
</style>
