<template>
  <div>
    <doc-app-a></doc-app-a>
    <doc-app-abbr></doc-app-abbr>
    <doc-app-accordeon></doc-app-accordeon>
    <doc-alert></doc-alert>
    <doc-budges></doc-budges>
  </div>
</template>

<script>
import docAppA from './docs/app-a-example.vue'
import docAppAbbr from './docs/app-abbr-example.vue'
import docAppAccordeon from './docs/app-accordeon-example.vue'
import docAppAlert from './docs/app-alert-example.vue'
import docBudges from './docs/app-badges-example.vue'
export default {
  components: {
    'doc-app-a': docAppA,
    'doc-app-abbr': docAppAbbr,
    'doc-app-accordeon': docAppAccordeon,
    'doc-alert': docAppAlert,
    'doc-budges': docBudges
  },
  layout: 'layout-doc',
}
</script>

<style>
</style>