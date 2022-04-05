<template>
  <div>
    <b-modal id="modal" title="Виды услуг" size="lg">
      <b-row>
        <b-col cols="5">
          <b-list-group class="max-h-280 overflow-x-hidden overflow-y-scroll">
            <b-list-group-item
              v-for="item in items"
              :key="item._id"
              :active="item.select"
              class="m-height-32 text-ellipsis"
              @click="select(item)"
              >{{ isNew ? data.name : item.name }}</b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col cols="7">
          <div class="form-group h-75">
            <label for="name">Наименование</label>
            <input
              id="name"
              v-model="data.name"
              type="text"
              class="form-control"
            />
            <label for="description">Описание</label>
            <b-textarea
              id="description"
              v-model="data.description"
              name="description"
              class="h-50"
            ></b-textarea>
          </div>

          <b-row class="pt-1">
            <b-col offset="8">
              <template v-if="isNew">
                <b-button variant="success" class="w-100" @click="onNew"
                  >Создать</b-button
                >
              </template>
              <template v-else>
                <b-button variant="success" class="w-100">Сохранить</b-button>
              </template>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <template #modal-footer>
        <b-row class="w-100">
          <b-col cols="5" class="text-start pl-0">
            <b-button
              class="w-50"
              variant="primary"
              :disabled="isNew"
              @click="create"
              >Новый</b-button
            >
          </b-col>
          <b-col offset="5" cols="2" class="">
            <b-button
              type="button"
              variant="danger"
              class="w-100"
              @click="$bvModal.hide('modal')"
              >Закрыть</b-button
            >
          </b-col>
        </b-row>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      // свойство отвечающее за отображение модального окна
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      data: {
        // данные полей
        name: null,
        description: null,
      },
      items: [], // список документов
      isNew: false, // признак нового документа
    }
  },
  watch: {
    /*
     * Отображение модального окна при поступлении параметра show
     * @function show
     * @param {Boolean} Входной параметр из родительской формы
     */
    show(val) {
      if (val) this.$root.$emit('bv::show::modal', 'modal')
    },
  },
  mounted() {
    /*
     * Отслеживание события закрытия окна
     */
    this.$root.$on('bv::modal::hide', () => {
      this.$store.commit('getShowModalTypesOfServices') // изменение значения состояния показа окна
    })
  },
  methods: {
    /*
     * получение всех видов услуг
     */
    getList() {},
    /*
     * Создание нового документа
     * @function create
     */
    create() {
      this.toogleIsNew()
      this.items.push({ name: ' ', description: '' }) // добавление нового объекта для создания новой записи
      this.delSelect()
      this.items[0].select = true
    },
    /*
    * Отправка данных для создания нового документа
    * Создает новый документ из объекта data
    * @function onNew
    */
    async onNew() {
      this.toogleIsNew()
      const response = await this.$axios.$post('/api/new_type_service', {params: this.data})
      console.log('🚀 -> onNew -> response', response)
    },
    /*
     * Изменение состояние я для кнопок "Новый" и Создать"
     * При значении true отображается кнопка "Создать", кнопка "Новый" становится неактивной
     * При значении false отображается кнопка "Сохранить", кнопка "Новый" становится активной
     */
    toogleIsNew() {
      this.isNew = !this.isNew
    },
    /*
     * Удаление класса активности выделенной строки в списки
     * @function delSelect
     */
    delSelect() {
      this.items = this.items.map((item) => {
        delete item.select // удаление свойства
        return item
      })
    },
    /*
     * При клике на строку в списке
     * При клике происходит обход всего списка и удаление класса активности
     * Устанавливается свойство select для активной строки
     * @function select
     * @param {Object} item Объект строки
     */
    select(item) {
      this.delSelect()
      item.select = true
    },
  },
}
</script>

<style scoped>
.active {
  background: #6610f2;
  border: #6f42c1;
}

.m-height-32 {
  min-height: 32px;
}


</style>
