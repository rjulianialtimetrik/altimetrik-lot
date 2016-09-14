<template lang="html">
    <div class="">
        <header>
            <bs-navbar></bs-navbar>
        </header>
        <router-view></router-view>

    </div>


</template>

<script>
import BsNavbar from './partials/bs-navbar.vue'
import store from '../state/store'

export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
      'bs-navbar': BsNavbar
  },
  store: store
};
</script>

<style lang="css">
</style>
