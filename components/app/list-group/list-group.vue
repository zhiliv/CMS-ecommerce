2<template>
  <ul v-bind="$attrs" :class="{'list-group': true}">
    <template v-if="list.length && typeRow === 'item'">
      <app-list-group-item v-for="item in list" :key="item.id" :class="classItem">{{item.text}}</app-list-group-item>
    </template>
    <template v-else-if="list.length && typeRow === 'button'">
      <app-list-group-button v-for="item in list" :key="item.id" :class="classItem">{{item.text}}</app-list-group-button>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </ul>
</template>

<script>
import appListGroupItem from './item/item.vue'
import appListGroupButton from './button/button.vue'
export default {
  components: {
    'app-list-group-item': appListGroupItem,
    'app-list-group-button': appListGroupButton,
  },
  props: {
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
    /* Классы для срок */
    classItem: {
      type: String,
      default: '',
    },
  },

}
</script>

<style>
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: var(--bs-list-group-border-radius);
  }
</style>
