<template>
  <!-- <template v-if="isAuthenticated"> -->
  <app-container
    breakpoint="fluid"
    container="false"
    classes="vh-100">
    <app-row classes="h-100">
      <app-col
        col="false"
        col-sm="12"
        col-md="12"
        col-lg="3"
        col-xl="2"
        col-xxl="2"
        classes="bg-grey-darken-4 col-menu">
        <template v-for="item in menu">
          <router-link
            :key="item.name"
            v-slot="{ href, navigate, isActive }"
            style="text-decoration: none; color: inherit"
            :to="item.link">
            <a
              :href="href"
              @click="navigate">
              <app-list-group-button
                :key="item.name"
                :is-active="isActive"
                classes="grey-lighten-1-text"
                classes-active="white-text bg-grey-darken-3"
                :title="item.name"
                >{{ item.name }}</app-list-group-button
              >
            </a>
          </router-link>
        </template>
        <app-list-group> </app-list-group>
      </app-col>
      <app-col
        col-sm="12"
        col-md="12"
        col-lg="9"
        col-xl="10"
        col-xxl="10"
        classes="h-100 overflow-auto">
        <nuxt />
      </app-col>
    </app-row>
  </app-container>

  <!-- </template>
      <template v-else>
        <auth-login></auth-login>
      </template> -->
</template>

<script>
export default {
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
      link: [{ rel: 'canonical', href: canonical }],
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
@media (only screen and (min-width: 576px) and (orientation: landscape)) {
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
