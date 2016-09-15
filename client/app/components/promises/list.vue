<template lang="html">
  <section class="col-xs-12">
      <h1>Promises</h1>
      <div class="wrapper mt-xl">
          <form class="form-horizontal col-xs-12" >
              <div class="form-group">
                  <div class="input-group">
                     <input type="text" class="form-control" v-model="filter">
                     <span class="input-group-btn">
                        <button type="button" class="btn btn-default"><i class="fa fa-search"></i></button>
                     </span>
                  </div>
              </div>
          </form>
      </div>
      <div class="mt-xl row-masonry row-masonry-xl-3 row-masonry-lg-3 row-masonry-md-3 row-masonry-sm-2">
          <div class="col-masonry" v-for.sync="p in promises | filterBy filter in 'name' 'email'">
              <promise-detail :promise="p" ></promise-detail>
          </div>
      </div>
  </section>

</template>

<script>
import PromiseService from '../../api/promises/promises'
import PromiseDetail from './promise-detail.vue'

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
  components: {
      'promise-detail': PromiseDetail
  },
  created: function() {
      PromiseService.list().then((response)=> {
          this.promises = response.body
      })
  }
};
</script>

<style lang="css">
</style>
