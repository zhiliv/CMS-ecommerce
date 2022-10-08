<template>
  <!-- <template v-if="isAuthenticated"> -->
  <app-container container-fluid="true" class="vh-100">
    <app-row class="h-100 transition-1">
      <app-col col="2" class="bg-grey-darken-4 col-menu">
        <app-list-group ref="menu">
          <template v-for="item in menu">
            <router-link
              v-if="item.name !== null"
              :key="item.name"
              v-slot="{ href, navigate, isActive }"
              :to="item.link"
              class="text-decoration-none text-reset"
            >
              <a :href="href" @click="navigate">
                <app-list-group-button
                  :key="item.name"
                  :is-active="isActive"
                  class="grey-lighten-1-text w-100"
                  classes-active="grey-darken-4-text bg-amber-accent-4"
                  :title="item.name"
                >{{ item.name }}</app-list-group-button>
              </a>
            </router-link>
          </template>
        </app-list-group>
      </app-col>
      <app-col col="10" class="h-100 overflow-auto">
        <nuxt />
      </app-col>
    </app-row>
  </app-container>

  <!-- </template>
      <template v-else>
        <auth-login></auth-login>
  </template>-->
</template>

<script>
import appContainer from '../components/app/container/container.vue'
import appRow from '../components/app/row/row.vue'
import appCol from '../components/app/col/col.vue'
import appListGroup from '../components/app/list-group/list-group.vue'
import appListGroupButton from '../components/app/list-group/button/button.vue'
export default {
  components: {
    'app-container': appContainer,
    'app-row': appRow,
    'app-col': appCol,
    'app-list-group-button': appListGroupButton,
    'app-list-group': appListGroup,
  },
  data() {
    return {
      menu: [
        { name: 'Статистика', link: '/statistic/' },
        { name: 'Управление офферами', link: '/products/' },
      ],
    }
  },
  head() {
    const canonical = `http://localhost:3000${this.$route.path.toLowerCase().replace(/\/$/, '')}`
    return {
      meta: [...this.meta],
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
      ],
      link: [{ rel: 'stylesheet', href: canonical }],
    }
  },
  computed: {
    /*
     * Проверка авторизации
     * @function isAuthenticated
     * @return {Boolean} Значение авторизации
     */
    /*     isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }, */

    meta() {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no',
        },
        { hid: 'description', name: 'description', content: 'Главная' },
      ]
    },
  },
  mounted() {
    this.menu.forEach((item, index) => {
      if (`${this.$route.path}/` === item.link) this.selectItemMenu(index)
    })
  },
  methods: {
    /*
     * Выделение пункта меню для активной страницы
     * @function selectItemMenu
     * @param {Number} index - Индекс элемента активного пункта меню
     */
    selectItemMenu(index) {
      this.$refs.menu.$children[index].$children[0].isActive = true // установка активности для пункта меню загруженной страницы
    },
  },
}
</script>
<style>
  @import './../assets/css/padding.css';
  @import './../assets/css/background/grey.css';
  @import './../assets/css/background/amber.css';
  @import './../assets/css/text/grey.css';
  @import './../assets/css/text/text.css';
  @import './../assets/css/size.css';

  /* sm */
  @media (min-width: 576px) {
    .col-menu {
      height: auto;
    }
  }

  /* lg */
  @media (min-width: 992px) {
    .col-menu {
      height: 100%;
    }
  }
</style>
