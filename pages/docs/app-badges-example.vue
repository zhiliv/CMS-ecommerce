<template>
  <app-container container-fluid="true">
    <app-row>
      <app-h level="4">Индикаторы</app-h>
      <app-col col="4" class>
        <div class="px-2 border h-100">
          <app-h level="5">Свойства</app-h>
          <app-p class="m-0">
            <app-strong>budges-color</app-strong>- Увет уведомления
            <app-p class="m-0 px-3">Доступные варианты:</app-p>
            <app-p class="m-0 px-5">primary</app-p>
            <app-p class="m-0 px-5">secondary</app-p>
            <app-p class="m-0 px-5">success</app-p>
            <app-p class="m-0 px-5">info</app-p>
            <app-p class="m-0 px-5">warning</app-p>
            <app-p class="m-0 px-5">danger</app-p>
            <app-p class="m-0 px-5">light</app-p>
            <app-p class="m-0 px-5">dark</app-p>
          </app-p>
          <app-p class="m-0">
            <app-strong>SLOT</app-strong>- Внутреннее содержимое
          </app-p>
          <app-p class="m-0">
            <app-strong>type</app-strong> - Тип
            <app-p class="m-0 px-3">Доступные варианты:</app-p>
            <app-p class="m-0 px-5">span</app-p>
            <app-p class="m-0 px-5">h</app-p>
          </app-p>
          <app-p class="m-0">
            <app-strong>level</app-strong> - Уровень заголовка, только для тега h
          </app-p>
        </div>
      </app-col>
      <app-col col="4">
        <div class="px-2 border h-100">
          <app-h level="5">Пример использования</app-h>
          <app-p>{{body}}</app-p>
        </div>
      </app-col>
      <app-col col="4">
        <div class="px-2 border h-100">
          <app-h level="5">Результат</app-h>
          <app-badges badges-color="success" type="span">Содержимое</app-badges>
          <app-badges badges-color="primary" type="span">Содержимое</app-badges>
        </div>
      </app-col>
    </app-row>
    <app-hr></app-hr>
  </app-container>
</template>

<script>
import appBadges from '../../components/app/badges/badges.vue'
import appContainer from '../../components/app/container/container.vue'
import appRow from '../../components/app/row/row.vue'
import appH from '../../components/app/h/h.vue'
import appCol from '../../components/app/col/col.vue'
import appHr from '../../components/app/hr/hr.vue'
import appP from '../../components/app/p/p.vue'
import appStrong from '../../components/app/strong/strong.vue'
export default {
  components: {
    'app-badges': appBadges,
    'app-row': appRow,
    'app-h': appH,
    'app-col': appCol,
    'app-hr': appHr,
    'app-p': appP,
    'app-strong': appStrong,
    'app-container': appContainer,
  },
  data() {
    return {
      body: '<app-badges badges-color="success">Содержимое</app-badges>',
    }
  },
}
</script>

<style>
  @import './../../assets/css/border.css';
  @import './../../assets/css/padding.css';
  @import './../../assets/css/size.css';
  @import './../../assets/css/margin.css';
</style>