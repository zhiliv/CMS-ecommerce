<template>
  <app-container classes="h-75"
    ><app-row classes="h-100">
      <app-col col="12">
        <app-label>Наименование</app-label>
        <app-input></app-input>
      </app-col>
      <app-col
        col="12"
        classes="h-100">
        <app-label>Описание</app-label>
        <app-textarea classes="h-75"></app-textarea>
      </app-col> </app-row
  ></app-container>
</template>

<script>
export default {}
</script>

<style scoped>
@import '~/assets/css/height.css';
</style>
