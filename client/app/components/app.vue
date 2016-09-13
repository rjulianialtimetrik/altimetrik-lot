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
  }
};
</script>

<style lang="css">
</style>
