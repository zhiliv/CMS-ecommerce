<template>
  <app-container classes="border border-secondary rounded-2 vh-100">
    <app-row>
      <app-col col="3">
        <router-link to="/offers/">
          <app-button classes="btn-primary m-3 w-100" size="lg"
            >Офферы</app-button
          >
        </router-link>
      </app-col>
      <app-col col="3"> </app-col>
    </app-row>
  </app-container>
</template>

<script>
export default {}
</script>

<style>
@import './../assets/css/height.css';
@import './../assets/css/width.css';
@import './../assets/css/margin.css';
@import './../assets/css/border.css';
</style>
