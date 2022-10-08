<template>
  <div>
    <b-modal
      id="organization"
      no-close-on-backdrop
      title="Организации"
      size="xl"
    >
      <b-row>
        <b-col cols="3">
          <b-list-group class="max-h-450 overflow-x-hidden overflow-y-scroll">
            <b-list-group-item
              v-for="item in items"
              :key="item._id"
              :active="item.select"
              class="m-height-32 text-ellipsis w-100"
            >
              {{ item.new ? data.name : item.name }}
              <b-button-close v-if="!item.new" @click="onDelete(item)" />
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="6">
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
              class="h-100"
            ></b-textarea>
            <b-row>
              <b-alert
                v-model="alert.status"
                style="bottom: -15px;"
                class="position-absolute"
                :variant="alert.type"
                dismissible
                :show="alert.status"
              >
                {{ alert.text }}
              </b-alert>
            </b-row>
          </div>

          <b-row class="pt-1">
            <b-col offset="8"> </b-col>
          </b-row>
        </b-col>
      </b-row>
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
      alert: {
        status: false,
        text: null, // содержимое ошибки
        type: null, // тип окна success(успех), danger(ошибка)
      }, // состояние для уведомления об ошибке
      disSave: false, // состояние активности кнопки "Сохранить"
      cloneSelect: {},
    }
  },
  watch: {
    /*
     * Отображение модального окна при поступлении параметра show
     * @function show
     * @param {Boolean} Входной параметр из родительской формы
     */
    show(val) {
      if (val) this.$root.$emit('bv::show::modal', 'organization')
    },
  },
  mounted() {
    /*
     * Отслеживание события закрытия окна
     */
    this.$root.$on('bv::organization::hide', () => {
      this.$store.commit('getShowModalOrganization') // изменение значения состояния показа окна
    })

    this.$root.$on('bv::organization::show', async () => {
      // событие при показе формы
      await this.getList() // получение списка всех документов
      if (this.items.length) {
        this.items[0].select = true
        this.data = Object.assign({}, this.items[0]) // установка объекта редактирования
        this.cloneSelect = Object.assign({}, this.items[0]) // установка объекта редактирования
      }
    })
  },
  methods: {
    /*
     * Получение списка всех организаций
     * @function getList
     */
    async getList() {
      const response = await this.$axios
        .get('/api/organization')
        .catch((err) => {
          console.log(err)
        })
      this.items = response.data // установка полученного списка
    },

    /*
     * Удаление элемента
     * a@function onDelete
     */
    async onDelete(item) {
      const confirm = await this.showMsgBoxCancelNew(true) // вызов формы подтверждения не сохранения данных
      if (confirm) {
        const index = this.items.findIndex((row) => row._id === item._id)
        this.$axios
          .$delete(`/api/type_service/${item._id}`)
          .then(() => {
            this.showHideAlert('warning', 'Запись успешно удалена', 3000)
            this.items.splice(index, 1)
          })
          .catch((err) =>
            this.showHideAlert('danger', `Произошла ошибка: ${err}`)
          )
      }
      if (this.items.length) {
        this.items[0].select = true
        this.data = this.items[0]
      }
    },
  },
}
</script>

<style>
.active {
  background: #6610f2;
  border: #6f42c1;
}

.m-height-32 {
  min-height: 32px;
}

b-alert {
  bottom: -15px;
}
</style>
