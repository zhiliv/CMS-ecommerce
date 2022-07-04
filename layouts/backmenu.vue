<template>
  <!-- <template v-if="isAuthenticated"> -->
  <div>
    <app-row style="height: 4vh; max-width: 100%; margin: 0px">
      <app-col col="1" classes="d-flex">
        <app-button size="sm" type="secondary">←</app-button>
      </app-col>
      <app-col col="1" offset="10" classes="justify-content-end d-flex">
        <app-button size="sm" type="secondary">→</app-button>
      </app-col>
    </app-row>
    <Nuxt />
  </div>
  <!-- </template>
      <template v-else>
        <auth-login></auth-login>
      </template> -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  head() {
    const canonical = `http://localhost:3000${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
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
          content:
            'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no',
        },
        { hid: 'description', name: 'description', content: 'Главная' },
      ]
    },
  },
}
</script>
<style>
@import './../assets/css/border.css';
@import './../assets/css/align.css';
</style>
