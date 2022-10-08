<template>
  <app-container container-fluid="true">
    <app-row>
      <app-h level="4">Аббревиатура</app-h>
      <app-col col="4" class>
        <div class="px-2 border h-100">
          <app-h level="5">Свойства</app-h>
          <app-p class="m-0">
            <app-strong>initialism</app-strong>- Использование уменьшенного шрифта
            <app-p class="m-0 px-3">Доступные варианты: "true" \ "false"</app-p>
          </app-p>
          <app-p class="m-0">
            <app-strong>SLOT</app-strong>- Внутреннее содержимое
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
          <app-abbr>Содержимое slot</app-abbr>
        </div>
      </app-col>
    </app-row>
    <app-hr></app-hr>
  </app-container>
</template>

<script>
import appContainer from '../../components/app/container/container.vue'
import appRow from '../../components/app/row/row.vue'
import appH from '../../components/app/h/h.vue'
import appCol from '../../components/app/col/col.vue'
import appHr from '../../components/app/hr/hr.vue'
import appP from '../../components/app/p/p.vue'
import appStrong from '../../components/app/strong/strong.vue'
import appAbbr from '../../components/app/abbr/abbr.vue'
export default {
  components: {
    'app-row': appRow,
    'app-h': appH,
    'app-col': appCol,
    'app-hr': appHr,
    'app-p': appP,
    'app-strong': appStrong,
    'app-container': appContainer,
    'app-abbr': appAbbr,
  },
  data() {
    return {
      body: '<app-abbr>Содержимое slot</app-abbr>',
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