import Vue from 'vue'

const toast = {}

toast.install = function (Vue) {
  Vue.prototype.$toast = new Vue()
  console.log('this.to', this)
}

Vue.use(toast)
