<template>
  <p v-bind="$attrs" :class="[{'lead': true}]">
    <slot></slot>
  </p>
</template>

<style>
  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
</style>
