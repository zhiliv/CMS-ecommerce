<template>
  <div :class="parentClass">
    <app-label :classes="labelClass">{{ label }}</app-label>
    <textarea
      v-bind="$attrs"
      :value="value"
      :class="[outClass, classes]"
      type="text"
      @input="$emit('input', $event.target.value)">
    </textarea>
  </div>
</template>

<script>

export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} value - Значение поля
   * @property {String} label - Заголовок
   * @property {String} parentClass - Классы для родительского блока
   * @property {String} size - Размер, доступные варианты sm, lg
   * @property {String} labelClass - Классы для заголовка компонента
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    parentClass: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: null
    },
    labelClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      outClass: null, // классы, сформированные аттрибутами
    }
  },
  mounted() {
    this.outClass = {
      'form-control': true,
    }
    if(this.size) this.outClass[`form-control-${this.size}`] = true
  },
}
</script>

<style>
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  resize: vertical;
}

textarea.form-control {
  min-height: calc(1.5em + 0.75rem + 2px);
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
}
</style>
