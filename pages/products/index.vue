<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <app-row class="h-100">
    <app-col col="3">
      <app-h level="5" class="text-center no-select">Список офферов</app-h>
      <app-list-group
        ref="listOffers"
        :is-load="isLoadProducts"
        show-spinner="true"
        spinner-classes="amber-darken-3-text"
        classes-active="bg-item-list-group grey-darken-4-text"
        class="overflow-y-scroll max-vh-95 border border-grey-lighten-2 shadow-10 m-0 p-0"
      >
        <app-list-group-item
          v-for="item in listOffers"
          :key="item._id"
          :_id="item._id"
          class="border-bottom border-1 border-grey bg-item-list-group-hvr white-text-hvr p-02"
          @click="onSelect(item)"
        >
          {{ item.name }}
          <app-button
            class="btn-close-right"
            btn-size="sm"
            style=" box-sizing: content-box; padding: 0 0.15em 0 0.15em; margin: 0; height: 22px;"
            @click="onDelete(item._id)"
          >
            <svg-trash-delete
              width="18"
              height="18"
              viewBox="0 0 24 24"
              style="margin-top: 0.15em;"
            />
          </app-button>
        </app-list-group-item>
      </app-list-group>
    </app-col>
    <app-col col="9">
      <app-d-flex flex-row="true" class="border border-grey-lighten-2 shadow-10">
        <app-col col="12">
          <app-navbar
            :menu="menu"
            class-link-active="bg-amber-accent-4 grey-darken-4-text"
            class="bg-grey-darken-4 p-0"
            class-li="bg-grey-darken-4"
            class-link="grey-lighten-1-text"
            class-dropdown="bg-grey-darken-3 p-0"
          ></app-navbar>
          <form class="p-3 h-100">
            <app-row class="h-100 px-3">
              <app-col col="12" class="h-100">
                <app-row>
                  <app-col col="2" class="h-100">
                    <app-switch label="Состояние" role="switch" class="mt-4v" />
                  </app-col>
                  <app-col col="6">
                    <app-label>Наименование</app-label>
                    <app-input></app-input>
                  </app-col>
                  <app-col col="4">
                    <app-label>Тип оффера</app-label>
                    <v-select></v-select>
                  </app-col>
                </app-row>
                <app-row>
                  <app-col col="12" class="h-100">
                    <app-row>
                      <app-label class="fw-semibold">Короткое описание</app-label>
                      <app-textarea textarea-size="sm" rows="2" is-count="true" />
                      <app-label class="fw-semibold">Полное описание</app-label>
                      <app-textarea
                        v-model="offer.description"
                        textarea-size="sm"
                        rows="12"
                        is-count="true"
                      />
                    </app-row>
                  </app-col>
                </app-row>
              </app-col>
            </app-row>
          </form>
        </app-col>
      </app-d-flex>
    </app-col>
    <!-- Отправка HTTP запроса для получения офферов -->
    <app-query
      ref="getOffers"
      type="get"
      url="/api/offers"
      @is-load="event => isLoadProducts = event"
      @result="event => listOffers = event"
    ></app-query>
    <!-- Отправка HTTP запроса для получения типов офферов -->
    <app-query
      ref="getTypeOffers"
      type="get"
      url="/api/type_offers"
      @result="event => listTypeOffer.push(...event)"
    ></app-query>
  </app-row>
</template>

<script>
import formTypeOffers from '../../pages/modal/type-offers/type-offers.vue'
import formNewProduct from '../../pages/modal/products/new.vue'
import appRow from '../../components/app/row/row.vue'
import appButton from '../../components/app/button/button.vue'
import appCol from '../../components/app/col/col.vue'
import appListGroup from '../../components/app/list-group/list-group.vue'
import appDFlex from '../../components/app/d-flex/d-flex.vue'
import appNavbar from '../../components/app/navbar/navbar.vue'
import appListGroupItem from './../../components/app/list-group/item/item.vue'
import appSwitch from './../../components/app/switch/switch.vue'
import appLabel from './../../components/app/label/label.vue'
import appInput from './../../components/app/input/input.vue'
import appTextarea from './../../components/app/textarea/textarea.vue'
import appH from './../../components/app/h/h.vue'
import appQuery from './../../components/app/query/query.vue'
import svgTrashDelete from './../../assets/icons/basic/trash-alt-delete-bin.svg'
import { cloneObject, withObject } from '~/scripts/component/func'
export default {
  // шаблон
  components: {
    'app-row': appRow,
    'app-col': appCol,
    'app-list-group': appListGroup,
    'app-d-flex': appDFlex,
    'app-navbar': appNavbar,
    'app-list-group-item': appListGroupItem,
    'app-switch': appSwitch,
    'app-label': appLabel,
    'app-input': appInput,
    'app-textarea': appTextarea,
    'app-h': appH,
    'app-button': appButton,
    'app-query': appQuery,
    'svg-trash-delete': svgTrashDelete,
  },
  layout: 'default',
  data() {
    return {
      offer: {}, // текущий оффер
      listOffers: [], // список офферов
      isLoadProducts: false, // установка признака загрузки списка офферов
      listTypeOffer: [{}], // типы офферов
      selectItem: {}, // объект выделенного оффера
      selectId: null, // идентификатор выделенного типа оффера

      menu: [
        {
          id: 1,
          label: 'Создать оффер',
          type: 'text',
          href: '#',
          click: () => {
                this.$modal.show(
                  formNewProduct,
                  {},
                  { width: '900px', height: '200px', draggable: '.modal-header', resizable: true, clickToClose: false },
                  {
                    'before-close': event => {
                      // const { list } = event.params // получение списка типов офферов
                      // list.unshift({}) // добавление пустого объекта в начало массива
                      // this.listTypeOffer = list && list.length ? list : [] // присвоение полученного списка в значения для отображения в select
                    },
                  },
                )
              },
        },
        {
          id: 2,
          label: 'Управление',
          type: 'dropdown',
          list: [
            {
              id: 3,
              label: 'Типы офферов',
              href: '#',
              click: () => {
                this.$modal.show(
                  formTypeOffers,
                  {},
                  { width: '900px', height: '600px', draggable: '.modal-header', resizable: true, clickToClose: false },
                  {
                    'before-close': event => {
                      const { list } = event.params // получение списка типов офферов
                      list.unshift({}) // добавление пустого объекта в начало массива
                      this.listTypeOffer = list && list.length ? list : [] // присвоение полученного списка в значения для отображения в select
                    },
                  },
                )
              },
            },
          ],
        },
        /* {
          id: 3,
          label: 'Управление 3',
          type: 'text',
        }, */
      ], // список меню
    }
  },
  watch: {
    'offer.description'(newValue) {},
  },
  async mounted() {
    await this.$refs.getTypeOffers.execute() // получение списка типов офферов
    await this.$refs.getOffers.execute() // получение списка офферов

    // await this.getListTypeOffers()
    const { listOffers } = this // заполненный список "Типы офферов"
    if (listOffers && listOffers.length) {
      // если длина списка больше 0
      this.selectItem = cloneObject(listOffers[0]) // объекту для редактирования присваивается 1-ая строка
      this.selectId = listOffers[0]._id // установка значения идентификатора выделенного оффера
      this.$refs.listOffers.$emit('active', { _id: this.selectId }) // отправка события для выделения строки и установки свойства isActive = true
    }
  },
  methods: {
    /*
     * При выборе офеера
     * @function onSelect
     * @param {Object} item - Объект выделенного оффера
     */
    onSelect(item) {
      const { selectItem, selectId, listOffers } = this
      const index = listOffers.findIndex(el => el._id === item._id) // индекс текущего DOM элемента в списке офферов
      const indexItem = listOffers.findIndex(el => el._id === selectId) // поиск индекса элемента в списке
      if (indexItem >= 0 && withObject(listOffers[indexItem], selectItem) && item) {
        this.setActiveItem(index) // установка активности элементов
        this.selectId = item._id // установка идентификатора в  область видимости формы
        this.selectItem = cloneObject(item) // присвоение свойству selectItem значение выделенной строки
      }
    },

    /*
     * Удаление активности строк из списка
     * @function setActiveItem
     * @param {Number} index - Индекс текущего DOM элемента строки
     */
    setActiveItem(index) {
      const { _id } = this.listOffers[index]
      this.$refs.listOffers.$emit('active', { _id }) // отправка события для выделения строки и установки свойства isActive = true
    },
  },
}
</script>

<style>
  @import './../../assets/css/size.css';
  @import './../../assets/css/margin.css';
  @import './../../assets/css/padding.css';
  @import './../../assets/css/border.css';
  @import './../../assets/css/overflow.css';
  @import './../../assets/css/form-control.css';
  @import './../../assets/css/form.css';
  @import './../../assets/css/font.css';
  @import './../../assets/css/text/text.css';
  @import './../../assets/css/text/amber.css';
  @import './../../assets/css/align.css';
  @import './../../assets/css/background/amber.css';
  @import './../../assets/css/text/grey.css';
  @import './../../assets/css/background/grey.css';

  .p-02 {
    padding: 0.2em;
  }

  .mt-4v{
    margin-top: 4vh;
  }
</style>
