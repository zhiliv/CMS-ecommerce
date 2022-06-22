<template>
    <table :class="[outClass, classes]" :style="styles">
      <slot></slot>
    </table>
</template>

<script>
export default {
  /*
   * Входящие свойства
   * @typedef {Object} props
   * @property {String} classes - Входные классы
   * @property {String} styles - Входные стили
   * @property {Boolean} tableSm - компактный размер таблицы
   */
  props: {
    classes: {
      type: String,
      default: '',
    },
    styles: {
      type: String,
      default: '',
    },
    tableSm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      outClass: null, // классы, сформированные аттрибутами
    }
  },
  mounted() {
    this.outClass = {
      table: true,
      tableSm: this.tableSm,
    }
  },
}
</script>

<style>
table {
  caption-side: bottom;
  border-collapse: collapse;
}

.table {
  --bs-table-color: var(--bs-body-color);
  --bs-table-bg: transparent;
  --bs-table-border-color: var(--bs-border-color);
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: var(--bs-body-color);
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: var(--bs-body-color);
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: var(--bs-body-color);
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: var(--bs-table-color);
  vertical-align: top;
  border-color: var(--bs-table-border-color);
}

.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.table-borderless > :not(:first-child) {
  border-top-width: 0;
}

.table-group-divider {
  border-top: 2px solid currentcolor;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

</style>
