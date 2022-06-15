<template>
  <app-row style="height: 300px;" @click="alt($event)">


  </app-row>
</template>

<script>
export default {
  methods: {
    alt(event) {
      console.log('event', event)
    },
  },
}
</script>

<style></style>
