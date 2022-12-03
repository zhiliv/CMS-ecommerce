import Vue from 'vue'

const vueDemo = {}

vueDemo.install = function (Vue) {
  Vue.prototype.$demo = new Vue()
}

Vue.use(vueDemo)
