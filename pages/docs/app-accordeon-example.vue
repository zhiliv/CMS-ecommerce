<template>
  <app-container container-fluid="true">
    <app-row>
      <app-h level="4">Аккордеон</app-h>
      <app-col col="4" class>
        <div class="px-2 border h-100">
          <app-h level="5">Свойства</app-h>
          <app-p class="m-0">
            <app-strong>Items</app-strong>- Массив в содержимым {title, body}
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
          <app-accordeon :items="items"></app-accordeon>
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
import appAccordeon from '../../components/app/accordeon/accordeon.vue'
export default {
  components: {
    'app-row': appRow,
    'app-h': appH,
    'app-col': appCol,
    'app-hr': appHr,
    'app-p': appP,
    'app-strong': appStrong,
    'app-container': appContainer,
    'app-accordeon': appAccordeon
  },
  data() {
    return {
      body: '<app-accordeon :items="items"></app-accordeon>',
      items: [
      {title: 'Заголовок 1', body: 'Содержимое блока 1'},
      {title: 'Заголовок 2', body: 'Содержимое блока 2'},
      {title: 'Заголовок 3', body: 'Содержимое блока 3'}
      ]
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