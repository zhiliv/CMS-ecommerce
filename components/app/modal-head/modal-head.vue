<!-- Заголовок модального окна -->
<template>
  <app-row classes="justify-content-end p-1 px-3 bg-grey-darken-3 modal-header">
    <app-col col="10">
      <app-h
        level="5"
        classes="justify-content-center d-flex white-text"
        style="margin: 0px"
        >{{ title }}</app-h
      >
    </app-col>
    <app-button-close
      classes="bg-white"
      @click="$emit('click', $event)"></app-button-close>
  </app-row>
</template>

<script>
export default {
  /*
   * @typedef
   * @property {String} title Заголовок
   */
  props: {
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style></style>
