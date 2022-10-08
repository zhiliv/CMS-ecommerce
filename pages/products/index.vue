<template>
  <app-row class="h-100">
    <app-col col="2">
      <app-h level="5" class="text-center no-select">Список офферов</app-h>
      <app-list-group
        class="overflow-y-scroll max-vh-95 border border-grey-lighten-2 shadow-10 m-0 p-0"
      >
        <app-list-group-item
          v-for="item in listOffers"
          :key="item.name"
          classes-active="bg-item-list-group grey-darken-4-text"
          class="border-bottom border-1 border-grey bg-item-list-group-hvr white-text-hvr p-02"
        >{{ item.name }}</app-list-group-item>
      </app-list-group>
    </app-col>
    <app-col col="10">
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
                    <app-input-check switch="true" label="Состояние" role="switch" />
                  </app-col>
                  <app-col col="6">
                    <app-label>Наименование</app-label>
                    <app-input></app-input>
                  </app-col>
                  <app-col col="4">
                    <app-label>Тип оффера</app-label>
                    <app-select>
                      <option v-for="item in listTypeOffer" :key="item.name">{{ item.name }}</option>
                    </app-select>
                  </app-col>
                </app-row>
                <app-row>
                  <app-col col="12" class="h-100">
                    <app-row>
                      <app-label class="fw-semibold">Короткое описание</app-label>
                      <app-textarea textarea-size="sm" rows="2"></app-textarea>
                      <app-label class="fw-semibold">Полное описание</app-label>
                      <app-textarea textarea-size="sm" rows="12"></app-textarea>
                    </app-row>
                  </app-col>
                </app-row>
              </app-col>
            </app-row>
          </form>
        </app-col>
      </app-d-flex>
    </app-col>
  </app-row>
</template>

<script>
import formTypeOffers from '../../pages/modal/type-offers/type-offers.vue'
import appRow from '../../components/app/row/row.vue'
import appCol from '../../components/app/col/col.vue'
import appListGroup from '../../components/app/list-group/list-group.vue'
import appDFlex from '../../components/app/d-flex/d-flex.vue'
import appNavbar from '../../components/app/navbar/navbar.vue'
import appListGroupItem from './../../components/app/list-group/item/item.vue'
import appInputCheck from './../../components/app/input-check/input-check.vue'
import appLabel from './../../components/app/label/label.vue'
import appInput from './../../components/app/input/input.vue'
import appSelect from './../../components/app/select/select.vue'
import appTextarea from './../../components/app/textarea/textarea.vue'
import appH from './../../components/app/h/h.vue'
export default {
  // шаблон
  components: {
    'app-row': appRow,
    'app-col': appCol,
    'app-list-group': appListGroup,
    'app-d-flex': appDFlex,
    'app-navbar': appNavbar,
    'app-list-group-item': appListGroupItem,
    'app-input-check': appInputCheck,
    'app-label': appLabel,
    'app-input': appInput,
    'app-select': appSelect,
    'app-textarea': appTextarea,
    'app-h': appH
  },
  layout: 'default',
  data() {
    return {
      listOffers: [],
      listTypeOffer: [{}],
      menu: [
        {
          id: 1,
          label: 'Управление',
          type: 'dropdown',
          list: [
            {
              id: 2,
              label: 'Типы офферов',
              href: '#',
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
          click: () => {},
        },
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
  @import './../../assets/css/margin.css';
  @import './../../assets/css/padding.css';
  @import './../../assets/css/border.css';
  @import './../../assets/css/overflow.css';
  @import './../../assets/css/form-control.css';
  @import './../../assets/css/form.css';
  @import './../../assets/css/font.css';
  @import './../../assets/css/text/text.css';
  @import './../../assets/css/align.css';
  @import './../../assets/css/background/amber.css';
  @import './../../assets/css/text/grey.css';
  @import './../../assets/css/background/grey.css';
  .nav-item {
    color: var(--grey-lighten-1);
    border-bottom: 0.2em solid var(--grey-lighten-1);
  }

  @media (max-width: 576px) {
    .data-form {
      height: 81%;
      overflow-y: auto;
    }
  }

  @media (min-width: 992px) {
    .data-form {
      height: 90%;
    }
  }

  .p-02 {
    padding: 0.2em;
  }
</style>
