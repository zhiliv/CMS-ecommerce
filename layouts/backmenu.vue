<template>
  <!-- <template v-if="isAuthenticated"> -->
  <div>
    <app-row classes="m-0 mw-100 h-30p bg-blue darken-3 white-text">
      <app-col col="1" classes="d-flex">
        <app-button
          size="sm"
          classes="w-30p p-icon h-30p bg-blue darken-3 white-text"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </app-button>
        <router-link to="/">
          <app-button
            size="sm"
            classes="w-30p mx-2 p-icon h-30p bg-blue darken-3 white-text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-menu-button-wide"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"
              />
              <path
                d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
              /></svg
          ></app-button>
        </router-link>
      </app-col>
      <app-col col="1" offset="10" classes="justify-content-end d-flex">
        <app-button
          size="sm"
          classes="w-30p p-icon h-30p bg-blue darken-3 white-text"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            /></svg
        ></app-button>
      </app-col>
    </app-row>
    <Nuxt class="mh-100" />
    <app-row classes="mt-3 mb-1 border-top mw-100 ">
      <app-col col="1" offset="11" classes="justify-content-end d-flex">
        <app-button classes="mt-1" type="success">Сохранить</app-button>
      </app-col>
    </app-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
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
@import './../assets/css/size.css';
@import './../assets/css/margin.css';

.w-30p {
  width: 30px;
}

.p-icon {
  padding: 5px 0px;
}

.h-30p {
  height: 30px;
}
</style>
