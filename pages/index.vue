<template>
  <div>
    <b-row>
      <b-col sm="12" xs="12" md="12" lg="2" xl="2">
        <b-list-group style="max-height: 92.5vh; overflow-y: scroll; ">
          <b-list-group-item active @click="selectOffer"
            >Awesome link</b-list-group-item
          >
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#">Link with active state</b-list-group-item>
          <b-list-group-item href="#">Action links are easy</b-list-group-item>
          <b-list-group-item href="#foobar" disabled
            >Disabled link</b-list-group-item
          >
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  methods: {
    selectOffer(event) {
      console.log('🚀 -> selectOffer -> event', event.target.parentNode)
    },
  },
}
</script>

<style></style>
