<template>
  <app-container
    breakpoint="fluid"
    container="false"
    classes="border border-blue-darken-4 h-100">
    <app-row classes="p-1 px-3">
      <app-col col="11"></app-col>
      <app-col col="1"> <app-button-close classes="border border-blue-darken-2"></app-button-close> </app-col>
    </app-row>
    <app-row
      classes="border border-blue-lighten-4 rounded-1 m-3p p-0"
      style="height: 77%">
      <app-col col="12">
        <type-offers-form />
      </app-col>
    </app-row>
    <app-row classes="pt-2">
      <app-col
        col="12"
        classes="justify-content-end d-flex">
        <app-button
          classes="bg-green white-text btn-save ms-2"
          size="sm"
          >Создать</app-button
        >
      </app-col>
    </app-row>
  </app-container>
</template>

<script>
import typeOffersForm from './form.vue'
export default {
  components: {
    typeOffersForm,
  },
}
</script>

<style>
@import '~/assets/css/align.css';
</style>
