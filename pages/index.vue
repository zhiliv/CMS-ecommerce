<template>
  <app-container breakpoint="fluid">
    sdrfasdf
    <app-progress styles="width: 25%;" aria-valuenow="50"></app-progress>
    <app-row style="height: 300px;" @click="alt($event)"> </app-row>
  </app-container>
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
