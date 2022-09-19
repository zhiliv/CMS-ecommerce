<template>
  <ul v-bind="$attrs" :class="[{'list-group': true}, classes]" :size="size">
    <template v-if="list.length && typeRow === 'item'">
      <app-list-group-item></app-list-group-item>
    </template>
    <template v-else-if="list.length && typeRow === 'button'">
      <app-list-group-button></app-list-group-button>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    /* Размер списка */
    size: {
      type: String,
      default: null,
      validator(value) {
        return value === 'sm' || value === 'lg' || value === null
      },
    },
    /* Вариант отображения */
    typeRow: {
      type: String,
      default: 'item',
      validator(value) {
        return value === 'item' || value === 'button'
      },
    },
    /* Список */
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
  .list-group {
    display: block;
    list-style-type: none;
    padding: 0;
    margin: 0px;
  }
</style>
