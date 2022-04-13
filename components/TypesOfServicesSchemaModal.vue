<template>
  <div>
    <b-modal id="modal" no-close-on-backdrop title="Виды услуг" size="lg">
      <b-row>
        <b-col cols="5">
          <b-list-group class="max-h-280 overflow-x-hidden overflow-y-scroll">
            <b-list-group-item
              v-for="item in items"
              :key="item._id"
              :active="item.select"
              class="m-height-32 text-ellipsis w-100"
              @click="onSelect(item)"
            >
              {{ item.new ? data.name : item.name }}
              <b-button-close v-if="!item.new" @click="onDelete(item)" />
            </b-list-group-item>
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
              style="height: 75%;"
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
      <template #modal-footer>
        <b-row class="w-100">
          <b-col cols="5" class="text-start pl-0">
            <b-button
              v-show="!isNew"
              class="w-50"
              variant="primary"
              @click="onCreate"
              >Новый</b-button
            >
            <b-button
              v-show="isNew"
              class="w-50"
              variant="primary"
              @click="onCancel"
              >Отмена</b-button
            >
          </b-col>
          <b-col offset="5" cols="2" class="">
            <template v-if="isNew">
              <b-button
                variant="success"
                class="w-100"
                :disabled="!data.name"
                @click="onNew"
                >Создать</b-button
              >
            </template>
            <template v-else>
              <b-button
                v-show="data._id"
                :disabled="disSave"
                variant="success"
                class="w-100"
                @click="onSave"
                >Сохранить</b-button
              >
            </template>
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
      alert: {
        status: false,
        text: null, // содержимое ошибки
        type: null, // тип окна success(успех), danger(ошибка)
      }, // состояние для уведомления об ошибке
      disSave: false, // состояние активности кнопки "Сохранить"
      cloneSelect: {},
    }
  },

  computed: {
    checkDisSave() {
      const { data, items } = this
      return { data, items }
    },
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

    checkDisSave: {
      handler(value) {
        const index = this.items.findIndex(
          (item) =>
            item.name === value.data.name &&
            item.description === value.data.description
        )
        const item = index !== -1 ? this.items[index] : {}
        const { data } = value
        if (this.data.description === '') this.data.description = null
        this.disSave =
          data.name === item.name && data.description === item.description
      },
      deep: true,
    },
  },

  mounted() {
    /*
     * Отслеживание события закрытия окна
     */
    this.$root.$on('bv::modal::hide', () => {
      this.$store.commit('getShowModalTypesOfServices') // изменение значения состояния показа окна
    })

    this.$root.$on('bv::modal::show', async () => {
      // событие при показе формы
      await this.getList() // получение списка всех документов
      this.items[0].select = true
      this.data = Object.assign({}, this.items[0]) // установка объекта редактирования
      this.cloneSelect = Object.assign({}, this.items[0]) // установка объекта редактирования
    })
  },

  methods: {
    /*
     * Отображение окна подтверждения отмены изменения\создания документа
     * @function showMsgBoxCancelNew
     * @param {Boolean} isDelete Признак подтверждения удаления
     */
    async showMsgBoxCancelNew(isDelete) {
      return await this.$bvModal.msgBoxConfirm(
        isDelete
          ? 'Удалить запись?'
          : 'Есть не сохраненные данные, продолжить?',
        {
          okTitle: 'Да',
          cancelTitle: 'Нет',
        }
      )
    },

    /*
     * получение всех видов услуг
     * @function getList
     */
    async getList() {
      const response = await this.$axios
        .get('/api/type_service')
        .catch((err) =>
          this.showHideAlert('danger', `Произошла ошибка: ${err}`)
        )
      this.items = response.data
    },

    /*
     * Создание нового документа
     * @function onCreate
     */
    onCreate() {
      this.toogleIsNew() // показ/скрытие кнопок "Новый", "Отмена", "Создать", "Сохранить"
      this.items.unshift({ name: null, description: null, new: true }) // добавление нового объекта для создания новой записи
      this.delSelect() // удаление выделенного элемента
      this.items[0].select = true // выделение строки
      this.data = Object.assign({}, this.items[0]) // установка объекта редактирования
    },

    /*
     * Отправка данных для создания нового документа
     * Создает новый документ из объекта data
     * @function onNew
     */
    async onNew() {
      this.dismissCountDown = true
      this.toogleIsNew() // показ/скрытие кнопок "Новый", "Отмена", "Создать", "Сохранить"
      const options = { params: this.data } // опции запроса
      await this.$axios
        .$post('/api/type_service', options)
        .then(() =>
          this.showHideAlert('success', 'Запись успешно создана', 3000)
        )
        .catch((err) =>
          this.showHideAlert('danger', `Произошла ошибка: ${err}`)
        )
      delete this.items[0].new // удаление свойства new из элемента
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
     * @function onSelect
     * @param {Object} item Объект строки
     */
    async onSelect(item) {
      this.delSelect() // удаление выделения строки
      if (this.data.new) {
        // если признак нового документа
        const confirm = await this.showMsgBoxCancelNew() // вызов формы подтверждения не сохранения данных
        if (confirm) this.items.unshift(this.cloneSelect)
        else {
          this.toogleIsNew()
          this.items[0].select = true
          this.data = Object.assign({}, item)
        }
      } else {
        item.select = true
        this.data = Object.assign({}, item)
        this.closeSelect = Object.assign({}, item)
      }
    },

    /*
     * Событие при нажатии кнопки "Отмена"
     * Удаляется ново созданный объект
     * @function onCancel
     */
    onCancel() {
      if (!this.items[0]._id) this.items.shift()
      this.items[0].select = true
      this.data = Object.assign({}, this.items[0])
      this.toogleIsNew()
    },

    /*
     * Сохранить изменения
     * @function onSave
     */
    onSave() {
      const options = { params: this.data } // опции запроса
      this.$axios
        .$put('/api/type_service', options)
        .then(() => {
          this.disSave = true
          this.showHideAlert('success', 'Данные успешно сохранены', 3000)
        })
        .catch((err) =>
          this.showHideAlert('danger', `Произошла ошибка: ${err}`)
        )
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

    /*
     * Показать/Скрыть уведомление
     * @function showHideAlert\
     * @param {String} type Тип уведомления(success/danger)
     * @param {String} text Текст сообщения
     * @param {Number} interval Время, через которое сообщение пропадет(мс), по умолчанию 5000
     */
    showHideAlert(type, text, interval) {
      this.alert.type = type
      this.alert.text = text
      this.alert.status = true
      setTimeout(() => {
        this.alert.type = null
        this.alert.text = null
        this.alert.status = false
      }, interval || 5000)
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

b-alert {
  bottom: -15px;
}
</style>
