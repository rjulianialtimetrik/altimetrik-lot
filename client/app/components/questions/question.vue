<template lang="html">
    <div class="card">
        <div class="card-heading bg-primary shadow-z1">
            <div class="card-icon">
              <em class="fa fa-question"></em>
           </div>
           <div class="card-title">{{ question.text }}</div>
        </div>
        <div class="card-offset pull-right">
           <button type="button" class="btn btn-danger btn-circle btn-lg" title="Delete this Question" v-on:click="confirmDelete(question)">
              <em class="fa fa-trash"></em>
           </button>
        </div>
        <div class="card-subheader">Options</div>
        <div class="mda-list">
           <div class="mda-list-item" v-for="option in question.options">
              <div class="mda-list-item-initial bg-pink">{{ option.number }}</div>
              <div class="mda-list-item-text mda-2-line">
                 <h4>{{ option.text }}</h4>
                 <h5>
                     <div class="label label-success" v-if="option.correct">Correct</div>
                     <div class="label label-danger" v-if="!option.correct">Incorrect</div>
                 </h5>
              </div>
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
      confirmDelete: function(question) {
          //If the user confirms deletion, emit a delete request so the parent
          //can delete it.
          if(confirm('Are you sure you want to DELETE this question?')) {
              this.$dispatch('delete-question', question)
          }
      }
  },
  components: {},
  props: {
      question: {
          type: Object,
          required: true
      }
  }
};
</script>

<style lang="css">
</style>
