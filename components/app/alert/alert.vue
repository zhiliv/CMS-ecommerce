<template>
  <div>
    <div :class="[{'alert': true, 'alert-dismissible': true}, classes]" role="alert">
      <slot></slot>
      <app-button-close
        v-if="close === 'true'"
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="onClose"
      ></app-button-close>
    </div>
  </div>
</template>

<script>
import appButtonClose from './../button/close/close.vue'
const validAlert = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
export default {
  components: {
    'app-button-close': appButtonClose,
  },
  props: {
    /* Признак отображения кнопки закрытия */
    close: {
      type: String,
      default: 'false',
      validator(value) {
        return value === 'true' || value === 'false'
      },
    },
    /* Цвет уведомления */
    alertColor: {
      type: String,
      default: 'primary',
      validator(value) {
        return validAlert.includes(value)
      },
    },
    /* Время показа уведомления, в миллисекундах */
    time: {
      type: String,
      default: '',
      validator(value) {
        return Number.isInteger(+value)
      },
    },
  },
  computed: {
    classes() {
      const { alertColor } = this
      return {
        [`alert-${alertColor}`]: !!alertColor,
      }
    },
  },
  mounted() {
    const { time } = this
    if (time) // если установлено время показа, то закрываем уведомление по таймеру
      setTimeout(() => {
        this.$el.remove() // удаление элемента
      }, time)
  },
  methods: {
    /* При нажатии на кнопку "X" */
    onClose() {
      this.$el.remove() // удаление элемента
    },
  },
}
</script>

<style>
  .alert {
    --bs-alert-bg: transparent;
    --bs-alert-padding-x: 1rem;
    --bs-alert-padding-y: 1rem;
    --bs-alert-margin-bottom: 1rem;
    --bs-alert-color: inherit;
    --bs-alert-border-color: transparent;
    --bs-alert-border: 1px solid var(--bs-alert-border-color);
    --bs-alert-border-radius: 0.375rem;
    position: relative;
    padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
    margin-bottom: var(--bs-alert-margin-bottom);
    color: var(--bs-alert-color);
    background-color: var(--bs-alert-bg);
    border: var(--bs-alert-border);
    border-radius: var(--bs-alert-border-radius);
  }

  .alert-heading {
    color: inherit;
  }

  .alert-link {
    font-weight: 700;
  }

  .alert-dismissible {
    padding-right: 3rem;
  }
  .alert-dismissible .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 1.25rem 1rem;
  }

  .alert-primary {
    --bs-alert-color: #084298;
    --bs-alert-bg: #cfe2ff;
    --bs-alert-border-color: #b6d4fe;
  }
  .alert-primary .alert-link {
    color: #06357a;
  }

  .alert-secondary {
    --bs-alert-color: #41464b;
    --bs-alert-bg: #e2e3e5;
    --bs-alert-border-color: #d3d6d8;
  }
  .alert-secondary .alert-link {
    color: #34383c;
  }

  .alert-success {
    --bs-alert-color: #0f5132;
    --bs-alert-bg: #d1e7dd;
    --bs-alert-border-color: #badbcc;
  }
  .alert-success .alert-link {
    color: #0c4128;
  }

  .alert-info {
    --bs-alert-color: #055160;
    --bs-alert-bg: #cff4fc;
    --bs-alert-border-color: #b6effb;
  }
  .alert-info .alert-link {
    color: #04414d;
  }

  .alert-warning {
    --bs-alert-color: #664d03;
    --bs-alert-bg: #fff3cd;
    --bs-alert-border-color: #ffecb5;
  }
  .alert-warning .alert-link {
    color: #523e02;
  }

  .alert-danger {
    --bs-alert-color: #842029;
    --bs-alert-bg: #f8d7da;
    --bs-alert-border-color: #f5c2c7;
  }
  .alert-danger .alert-link {
    color: #6a1a21;
  }

  .alert-light {
    --bs-alert-color: #636464;
    --bs-alert-bg: #fefefe;
    --bs-alert-border-color: #fdfdfe;
  }
  .alert-light .alert-link {
    color: #4f5050;
  }

  .alert-dark {
    --bs-alert-color: #141619;
    --bs-alert-bg: #d3d3d4;
    --bs-alert-border-color: #bcbebf;
  }
  .alert-dark .alert-link {
    color: #101214;
  }
</style>