<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item  class="item">Link</b-nav-item>
          <b-nav-item class="item">Disabled</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto item">
          <b-nav-item-dropdown text="Профиль" right>
            <b-dropdown-item class="item" @click="signOut"
              >Выйти</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    async signOut() {
      await this.$auth.logout()
    },
  },
}
</script>

<style>
.item {
  font-size: 14px;
}
</style>
