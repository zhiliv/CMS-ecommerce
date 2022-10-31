<!-- eslint-disable vue/valid-v-for -->
<template>
  <div aria-live="polite" aria-atomic="true" class="position-absolute end-0 bottom-0">
    <div class="toast-container top-0 end-0 p-2" style>
      <app-body-toast
        v-for="(item, index) in listToast"
        :key="index"
        :title="item.title"
        :message="item.message"
        :index="index"
        :toast-color="item.type"
      ></app-body-toast>
    </div>
  </div>
</template>

<script>
import bodyToast from './body-toast/body-toast.vue'
export default {
  components: {
    'app-body-toast': bodyToast,
  },
  data() {
    return {
      listToast: [

      ], // список уведомлений
    }
  },
  mounted(){
    this.$nuxt.$on('show-toast', event => {
      this.listToast.push(event)
      console.log('🚀 -> mounted -> event', event)

    })

}
}
</script>

<style>
  @import '~/assets/css/position.css';
  @import '~/assets/css/padding.css';
  .toast-container {
    z-index: var(--bs-toast-zindex);
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    pointer-events: none;
  }
  .toast-container > :not(:last-child) {
    margin-bottom: var(--bs-toast-spacing);
  }
</style>