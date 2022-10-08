<template>
  <textarea
    v-bind="$attrs"
    :value="value"
    :class="[{'form-control': true},  classes]"
    type="text"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  props: {
    /* значение */
    value: {
      type: String,
      default: null,
    },
    /* Размер */
    textareaSize: {
      type: String,
      default: null,
      validator(value) {
        return value === 'sm' || value === 'lg' || value === null
      },
    },
  },
  computed: {
    classes() {
      const { textareaSize } = this
      return {
        [`textarea-${textareaSize}`]: !!textareaSize,
      }
    },
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
  textarea.textarea-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
  }
  textarea.textarea-lg {
    min-height: calc(1.5em + 1rem + 2px);
  }
</style>
