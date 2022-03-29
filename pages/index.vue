<template>
  <div>
    <template v-if="isAuthenticated">
      <div>
  </div>

    </template>
    <template v-else>
      <auth-login></auth-login>
    </template>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
  },
}
</script>
