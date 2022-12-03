<template>
  <app-row class="h-100">
    <div class="h-100" style="width: 20%" draggable="true">
      <span
        v-for="component in listComponents"
        :key="component.name"
        draggable="true"
        @dragstart="drag"
      >{{component.name}}</span>
    </div>
    <div
      id="input-constructor"
      class="h-100"
      style="border: 1px solid gray; width: 40%"
      draggable="true"
      @drop="drop"
      @dragover="allowDrop"
    ></div>
    <app-col col="2"></app-col>
  </app-row>
</template>

<script>
import Vue from 'vue/dist/vue.js'
import appCol from '~/components/app/col/col.vue'
import appRow from '~/components/app/row/row.vue'
import appButton from '~/components/app/button/button.vue'
import listComponents from '~/content/list-components.json'

export default {
  components: {
    'app-col': appCol,
    'app-row': appRow,
    // eslint-disable-next-line vue/no-unused-components
    'app-button': appButton,
  },
  layout: 'constructors',
  data() {
    return {
      listComponents: [], // список компонентов
      newEl: null, // выбранный элемент
      source: {
        // исходники стартового компонента
        tag: 'div',
        id: 'input-constructor',
        class: 'h-100',
        style: 'border: 1px solid gray; width: 40%',
        attrs: {
          draggable: true,
        },
        events: {
          drop: 'drop',
          dragover: 'allowDrop',
        },
        children: [
          {
            tag: 'span',
            value: 'Текс',
            attrs: {
              draggable: true,
            },
            style: 'min-height: 300px; background: red',
            events: {
              drop: 'drop',
              dragover: 'allowDrop',
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.listComponents = listComponents

    /* const parser = new DOMParser()
      const doc = parser.parseFromString(test, "text/html")
      console.log('🚀 -> mounted -> doc', doc) */
    this.mountComponent()
  },
  methods: {
    /*
     * Создание исходной формы
     * @function generateHTML
     * @param {Object} source - код в формате json
     */
    generateHTML(source) {
      // eslint-disable-next-line no-async-promise-executor
      let result = ''
      result += '<' + `${source.tag}` // открытие тэга
      result += source.id ? ` id="${source.id}"` : '' // добавление id  в тег
      result += source.class ? ` class="${source.class}"` : '' // добавление классов в тег
      result += source.style ? ` style="${source.style}"` : '' // добавление стилей в тег
      if (source.attrs && Object.keys(source.attrs).length)
        // проверка количества аттрибутов
        for (const item in source.attrs) result += ` ${item}="${source.attrs[item]}"` // добавление аттрибута

      if (source.events && Object.keys(source.events).length)
        // проверка количества аттрибутов
        for (const item in source.events) result += ` @${item}="${source.events[item]}"` // добавление аттрибута

      result += '>' // закрытие тега
      result += source.value ? `${source.value}` : '' // Значение в теге перед дочерними элементами
      result += source.postValue ? `${source.postValue}` : '' // Значение в теге после дочерних элементов
      if (source.children && source.children.length) {
        for (const children of source.children) result += this.generateHTML(children) // добавление дочерних элементов
      }
      result += '</' + `${source.tag}` + '>' // закрывающий тег
      return result
    },
    async mountComponent() {
      const html = await this.generateHTML(this.source)
      const { newEl } = this
      // eslint-disable-next-line no-new
      new Vue({
        el: '#input-constructor',
        components: {
          'app-button': appButton,
        },
        methods: {
          drop(ev) {
            console.log('🚀 -> drop -> ev', ev)
            console.log('🚀 -> drop -> ev', newEl)
            console.log('#input-constructor', this.$el)
            // ev.preventDefault()
            // const data = ev.dataTransfer.getData('text')
            // ev.target.appendChild(document.getElementById(data))
          },
          allowDrop(ev) {
            // console.log('🚀 -> allowDrop -> ev', ev)
            // console.log('🚀 -> allowDrop -> ev', ev)
            ev.preventDefault()
          },
        },
        template: html,
      })
    },
    drag(event) {
      console.log('🚀 -> drag -> ev', event)
      const { innerText } = event.target
      this.newEl = this.listComponents.find(el => el.name === innerText)

      // ev.dataTransfer.setData('text', ev.target.id)
    },
    drop(event) {
      this.mountComponent()
      console.log('🚀 -> drop1 -> event', event)
      // console.log('🚀 -> drop -> ev', ev)
      // ev.preventDefault()
      // const data = ev.dataTransfer.getData('text')
      // ev.target.appendChild(document.getElementById(data))
    },
    allowDrop(event) {
      event.preventDefault()
    },
  },
}
</script>

<style>
  @import '~/assets/css/size.css';
</style>