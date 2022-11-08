<!-- eslint-disable vue/valid-template-root -->
<template></template>
<script>
export default {
  props: {
    type: { // тип HTTP запроса
      type: String,
      required: true,
      default: 'post',
      validator(value) {
        return value === 'post' || value === 'get' || value === 'put' || value === ' delete'
      },
    },
    url: { // адрес ссылки
      type: String,
      default: '',
      required: true
    }
  },
  data(){
    return {
      isLoad: false
    }
  },
  mounted(){
    this.$emit('is-load', false)
  },
  methods: {
    async execute() {
      const {type, url} = this
      const response = await this.$axios[type](url).catch(err => {
        console.error(err)
        this.$nuxt.$emit('show-toast', { params: { title: err.title, message: err.message, type: 'danger' } }) // отправка события для отображения уведомления
      })
      if(response && response.data) this.$emit('result', response.data)
      this.$emit('is-load', true)
      return response
    },
  },
}
</script>

<style>
</style>