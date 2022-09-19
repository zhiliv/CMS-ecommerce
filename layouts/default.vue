<template>
  <!-- <template v-if="isAuthenticated"> -->
  <app-container container-fluid="true" class="vh-100">
    <app-row class="h-100 transition-1">
      <app-col
        col="false"
        col-sm="12"
        col-md="12"
        col-lg="3"
        col-xl="3"
        col-xxl="2"
        class="bg-grey-darken-4 col-menu"
      >
        <app-a href="https://ya.ru">Ссылка на яндекс</app-a>
        <app-list-group>
          <template v-for="item in menu">
            <router-link
              :key="item.name"
              v-slot="{ href, navigate, isActive }"
              style="text-decoration: none; color: inherit"
              :to="item.link"
            >
              <a :href="href" @click="navigate">
                <app-list-group-button
                  :key="item.name"
                  :is-active="isActive"
                  classes="grey-lighten-1-text"
                  classes-active="white-text bg-grey-darken-3"
                  :title="item.name"
                >{{ item.name }}</app-list-group-button>
              </a>
            </router-link>
          </template>
        </app-list-group>
      </app-col>
      <app-col
        col-sm="12"
        col-md="12"
        col-lg="9"
        col-xl="9"
        col-xxl="10"
        class="h-100 overflow-auto"
      >
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
import appA from '../components/app/a/a.vue'
export default {
  components: {
    'app-container': appContainer,
    'app-row': appRow,
    'app-col': appCol,
    'app-list-group-button': appListGroupButton,
    'app-list-group': appListGroup,
    'app-a': appA,
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
    console.log('🚀 -> head -> canonical', canonical)
    return {
      meta: [...this.meta],
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
      ],
      // link: [{ rel: 'stylesheet', href: canonical }],
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
}
</script>
<style>
  @import './../assets/css/padding.css';

  /* sm */
  @media ((min-width: 576px) and (orientation: landscape)) {
    .col-menu {
      height: auto;
    }
  }

  /* lg */
  @media (min-width: 992px) {
    .col-menu {
      height: 100%;
      background-color: var(--bs-blue);
    }
  }
</style>
