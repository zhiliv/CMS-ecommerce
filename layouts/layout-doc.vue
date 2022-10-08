<template>
  <app-container container-fluid="true">
    <nuxt />
  </app-container>
</template>

<script>
import appContainer from '../components/app/container/container.vue'
export default {
  components: {
    'app-container': appContainer,
  },
}
</script>

<style>

</style>
