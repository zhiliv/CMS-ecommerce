<template>
  <textarea
    :value="value"
    :class="[outClass, classes]"
    type="text"
    @input="$emit('input', $event.target.value)">
  </textarea>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} value - Значение поля
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
