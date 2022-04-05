<template>
  <b-container fluid>
    <div>
      <!-- <template v-if="isAuthenticated"> -->
      <app-nav></app-nav>
      <Nuxt />
      <!-- </template>
      <template v-else>
        <auth-login></auth-login>
      </template> -->
    </div>
  </b-container>
</template>

<script>
export default {
  computed: {
    /*
     * Проверка авторизации
     * @function isAuthenticated
     * @return {Boolean} Значение авторизации
     */
    /*     isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }, */
  },
}
</script>
<style>
@import 'assets/css/bootstrap.min.css';
</style>
