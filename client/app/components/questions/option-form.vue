<template lang="html">
  <div class="wrapper">
      <div class="form-group col-xs-2 text-center">
          <div class="label label-purple">
              {{ opt.number}}
          </div>
      </div>
      <div class="form-group col-xs-6">
          <label class="control-label">Text</label>
          <input class="form-control" name="optText" v-model="opt.text">
      </div>
      <div class="form-group col-xs-2 text-center">
          <label class="control-label text-center">Is Correct?</label>
          <div class="text-center">
              <input type="checkbox" class="form-control text-center" v-model="opt.correct">
          </div>
      </div>
      <div class="form-group col-xs-2 ">
          <div class="text-center">
              <a role="button" class="btn btn-danger" title="Delete" v-on:click="delete">
                  <i class="fa fa-times"></i>
              </a>
          </div>

      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
      delete: function() {
          this.$dispatch('option-deleted', this.opt)
      }
  },
  components: {},
  props: {
      opt: {
          type: Object,
          required: true
      }
  }
};
</script>

<style lang="css">
</style>
