<template>
  <app-container container-fluid="true">
    <app-modal-head title="Подтвердите действие" class="bg-grey-darken-3 grey-lighten-3-text" @click="onClose" />
    <app-row class="p-0">
      <app-col col="12" class="h-p-40">
        <span class="w-100 transfer-text-2">{{title}}</span>
      </app-col>
      <app-col col="12" class="p-0 py-3">
        <app-button
          class="bg-green-darken-3 grey-lighten-5-text btn-save ms-2"
          btn-size="sm"
          @click="onConfirm"
        >Подтвердить</app-button>
        <app-button class="bg-red-darken-4 grey-lighten-5-text btn-cancel mx-2" style="float: right" btn-size="sm" @click="onClose">Отменить</app-button>
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
import appContainer from '../../components/app/container/container.vue'
import appCol from '../../components/app/col/col.vue'
import appButton from '../../components/app/button/button.vue'
import appRow from '../../components/app/row/row.vue'
import appModalHead from '../../components/app/modal-head/modal-head.vue'
export default {
  /*
   * Подключенные компоненты
   */
  components: {
    'app-container': appContainer,
    'app-col': appCol,
    'app-modal-head': appModalHead,
    'app-row': appRow,
    'app-button': appButton
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      confirm: false
    }
  },
  methods: {
    /*
    * При нажатии на кнопку "Подтвердить"
    * @function confirm
    */
    onConfirm(){
      this.confirm = true
      this.onClose()
    },
    /*
    * При закрытии
    * @function onClose
    */
    onClose() {
      const {confirm} = this
      this.$emit('close', {confirm}) // отправка события для закрытия формы
    },
  },
}
</script>

<style>
  @import '~/assets/css/size.css';
  @import '~/assets/css/padding.css';
  @import '~/assets/css/align.css';
  @import '~/assets/css/text/text.css';
  @import '~/assets/css/color/materialize-red.css';
  @import '~/assets/css/background/green.css';
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
</style>
