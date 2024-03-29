<template>
  <app-container container-fluid="true" class="border border-grey-darken-1 h-100">
    <app-modal-head
      title="Типы офферов"
      class="bg-grey-darken-3 grey-lighten-3-text"
      @click="onClose"
    />
    <app-row class="border border-1 border-grey-lighten-2 rounded-1 m-3p p-0 h-85 p-3">
      <app-col col="4" class="h-100 p-0">
        <app-list-group
          ref="list"
          show-spinner="true"
          spinner-classes="amber-darken-3-text"
          :is-load="isLoadTypeOffers"
          class="overflow-y-scroll h-100 border border-grey-lighten-2 shadow-5 m-0"
          classes-active="bg-item-list-group grey-darken-4-text"
        >
          <app-list-group-item
            v-for="item in list"
            :key="item._id"
            :_id="item._id"
            check-confirm="true"
            class="border-bottom border-1 border-grey bg-item-list-group-hvr white-text-hvr p-02"
            @click="onSelect(item)"
          >
            <div class="w-100" style="padding: 0.1em">
              {{ item.name }}
              <app-button
                class="btn-close-right"
                btn-size="sm"
                style=" box-sizing: content-box; padding: 0 0.15em 0 0.15em; margin: 0; height: 22px;"
                @click="onDelete(item._id)"
              >
              <svg-trash-delete width="18" height="18" viewBox="0 0 24 24" style="margin-top: 0.15em;"/>
              </app-button>
            </div>
          </app-list-group-item>
        </app-list-group>
      </app-col>
      <app-col col="8">
        <div class="border border-gray-lighten-4 shadow-5 px-1 h-100">
          <maket-form :data-inp="selectItem" />
        </div>
      </app-col>
    </app-row>
    <app-row class="pt-2">
      <app-col col="3">
        <app-button
          class="bg-blue-darken-4 grey-lighten-5-text btn-new w-75"
          btn-size="sm"
          @click="onCreate"
        >Новая запись</app-button>
      </app-col>
      <app-col col="2" offset="7" class="justify-content-end d-flex">
        <app-button
          class="bg-red-darken-4 grey-lighten-5-text btn-cancel"
          btn-size="sm"
          :disabled="disabledBtnControl"
          @click="onCancel"
        >Отменить</app-button>
        <app-button
          class="bg-green-darken-3 grey-lighten-5-text btn-save ms-2"
          btn-size="sm"
          :disabled="disabledBtnControl"
          @click="onSave"
        >Сохранить</app-button>
      </app-col>
    </app-row>
    <!-- Отправка HTTP запроса для получения списка типов офферов -->
    <app-query
      ref="getTypeOffers"
      type="get"
      url="/api/type_offers"
      @is-load="event => isLoadTypeOffers = event"
      @result="event => list = event"
    ></app-query>
    <app-query
      ref="updTypeOffers"
      type="put"
      show-message="true"
      url="/api/type_offers"
    ></app-query>
    <app-query
      ref="delTypeOffers"
      type="delete"
      show-message="true"
      url="/api/type_offers"
    ></app-query>

  </app-container>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import appContainer from '../../../components/app/container/container.vue'
import appCol from '../../../components/app/col/col.vue'
import appButton from '../../../components/app/button/button.vue'
import appRow from '../../../components/app/row/row.vue'
import appListGroup from '../../../components/app/list-group/list-group.vue'
import appListGroupItem from '../../../components/app/list-group/item/item.vue'
import appModalHead from '../../../components/app/modal-head/modal-head.vue'
import svgTrashDelete from '../../../assets/icons/basic/trash-alt-delete-bin.svg'
import appQuery from '../../../components/app/query/query.vue'
import formNew from './new.vue'
import maketForm from './form.vue'
import confirmModal from './../confirm.vue'
import { cloneObject, withObject } from '~/scripts/component/func'
export default {
  /*
   * Подключенные компоненты
   */
  components: {
    'app-container': appContainer,
    'app-col': appCol,
    'maket-form': maketForm,
    'app-modal-head': appModalHead,
    'app-row': appRow,
    'app-list-group': appListGroup,
    'app-button': appButton,
    'app-list-group-item': appListGroupItem,
    'app-query': appQuery,
    'svg-trash-delete': svgTrashDelete
  },
  validations: {
    selectItem: {
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
      list: [], // список типов офферов
      selectItem: {}, // данные выделенного типа офферов
      selectId: null, // идентификатор выделенного типа оффера
      disabledBtnControl: true, // доступность кнопки "сохранить" и "Отменить"
      isLoadTypeOffers: false // признак загрузки списка типов офферов
    }
  },
  watch: {
    /* Отслеживание изменений выбранного объекта */
    selectItem: {
      handler(newVal) {
        const index = this.list.findIndex(el => el._id === this.selectId) // получение индекса выбранного элемента
        const item = this.list[index] // получение объекта по индексу
        this.disabledBtnControl = !(!this.$v.selectItem.$invalid && !withObject(newVal, item)) // установка активности кнопки "Сохранить" и "Отменить"
      },
      deep: true,
    },
  },
  async mounted() {
    await this.$refs.getTypeOffers.execute() // получение списка типов офферов
    const { list } = this // заполненный список "Типы офферов"
    if (list && list.length) {
      // если длина списка больше 0
      this.selectItem = cloneObject(list[0]) // объекту для редактирования присваивается 1-ая строка
      this.selectId = list[0]._id // установка значения идентификатора выделенного оффера
      this.$refs.list.$emit('active', { _id: this.selectId }) // отправка события для выделения строки и установки свойства isActive = true
    }
  },
  methods: {
    /*
     * при выборе элемента списка
     * @function onSelect
     * @param {Object} item - ВЫделенная строка
     */
    onSelect(item) {
      const { selectItem, selectId, list } = this
      const index = list.findIndex(el => el._id === item._id) // индекс текущего DOM элемента в списке типов офферов
      const indexItem = list.findIndex(el => el._id === selectId) // поиск индекса элемента в списке
      if (indexItem >= 0 && withObject(list[indexItem], selectItem) && item) {
        this.setActiveItem(index) // установка активности элементов
        this.selectId = item._id // установка идентификатора в  область видимости формы
        this.selectItem = cloneObject(item) // присвоение свойству selectItem значение выделенной строки
      } else {
        this.$modal.show(
          confirmModal,
          { title: 'Есть не сохраненные изменения, уверены, что хотите продолжить?', typeConfirm: 'Да' }, // передача параметров
          { width: '400px', height: '120px', draggable: false, resizable: false, clickToClose: false },
          {
            'before-close': event => {
              const confirm = event.params.confirm // результат полученный из модального окна
              if (confirm) {
                // если нажата кнопка "Подтвердить"
                this.selectItem = cloneObject(item) // установка значения выбранного элемента
                this.selectId = item._id ? item._id : null // установка для области видимости формы идентификатора выбранного элемента
                this.setActiveItem(index) // установка активности элементов
              } else {
                const index = this.selectItem._id ? this.list.findIndex(el => el._id === this.selectItem._id) :  null // поиск индекса выбранного элемента
                this.setActiveItem(index) // установка активности элементов
              }
            },
          },
        )
      }
    },

    /*
     * При нажати на кнопку "Отменить"
     * @function onCancel
     */
    onCancel() {
      const index = this.list.findIndex(el => el._id === this.selectId) // получение индекса выбранного элемента
      this.selectItem = cloneObject(this.list[index]) // установка значения
    },

    /*
     * при нажатии на кнопку "Сохранить"
     * @function onSave
     */
    async onSave() {
      const response = await this.$refs.updTypeOffers.execute({ params: this.selectItem })
      if (response && response.status === 200) {
        const index = this.list.findIndex(el => el._id === this.selectId) // получение индекса
        this.list.splice(index, 1, cloneObject(this.selectItem)) // замена объекта в массиве
        this.disabledBtnControl = true // деативация кнопок "Сохранить" и "Отменить"
      }
    },

    /*
     * Удаление типа оффера
     * @function onDelete
     * @param  {String} _id - Идентификатор типа оффера
     */
    onDelete(_id) {
      const index = this.list.findIndex(el => el._id === _id)
      const data = this.list[index]
      this.$modal.show(
        confirmModal,
        { title: `Удалить тип оффера "${data.name}"` }, // передача параметров
        { width: '400px', height: '120px', draggable: false, resizable: false, clickToClose: false },
        {
          'before-close': async event => {
            const { confirm } = event.params
            if (confirm) {
              const response = await this.$refs.delTypeOffers.execute({}, _id)
              if (response && response.status === 200) {
                // если статус успешный
                this.list.splice(index, 1) // удаление строки из массива
                const { list } = this
                if (list && list.length) {
                  // проверка длины списка
                  this.selectItem = list[0] // установка элемента
                  if(list && list.length) this.selectId = list[0]._id // установка идентификатора выбранной строки
                  this.setActiveItem(0) // выделение цветом активной строки
                }
              }
            }
          },
        },
      ) // результат полученный из модального окна
    },

    /*
     * При нажатии на кнопку "Создать"
     * @function onCreate
     */
    onCreate() {
      this.$modal.show(
        formNew,
        { isNew: true }, // передача параметров
        { width: '600px', height: '400px', draggable: true, resizable: true, clickToClose: false },
        {'before-close': (event) => {
          const {item} = event.params // получение данных созданного объекта
          if(item) this.list.push(item) // добавление нового объекта в список
        }}
      )
    },
    /*
     * При нажатии на кнопку закрыть
     * @function onClose
     */
    onClose() {
      this.$emit('close', { list: this.list }) // отправка события для закрытия формы
    },

    /*
     * Удаление активности строк из списка
     * @function setActiveItem
     * @param {Number} index - Индекс текущего DOM элемента строки
     */
    setActiveItem(index) {
      const { _id } = this.list[index]
      this.$refs.list.$emit('active', { _id }) // отправка события для выделения строки и установки свойства isActive = true
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
</style>
