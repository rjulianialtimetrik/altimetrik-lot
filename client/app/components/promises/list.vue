<template lang="html">
  <section class="wrapper">
      <h1>Promises</h1>

  </section>

</template>

<script>
import PromiseService from '../../api/promises/promises'

export default {
  data() {
    return {
        promises: []
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {},
  created: function() {
      PromiseService.list().then((response)=> {
          this.promises = response.body
      })
  }
};
</script>

<style lang="css">
</style>
