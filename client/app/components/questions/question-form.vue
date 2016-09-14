<template lang="html">
  <form role="form" v-on:submit.prevent="createQuestion" class="card p-xl">
      <div class="form-group">
          <label class="control-label">Question</label>
          <textarea name="qText" class="form-control" rows="2" cols="40" v-model="question.text"></textarea>

      </div>
      <div class="panel panel-primary">
          <div class="panel-heading">
              Options
          </div>
          <div class="panel-body">
              <option-form v-for.sync="opt in question.options" :opt.sync="opt" v-on:option-deleted="deleteOption"></option-form>
          </div>
          <div class="panel-footer">
              <div class="wrapper">
                    <button type="button" name="button" class="btn btn-primary pull-right" v-on:click="addOption">Add Option</button>
              </div>

          </div>
      </div>
      <div class="wrapper" v-if="question.text.length > 0 && question.options.length > 0">
          <h3>Ready to save your new question?</h3>
          <p>
              <button type="submit" name="button" class="btn btn-success btn-lg pull-right">CREAR!</button>
          </p>
      </div>
  </form>
</template>

<script>
import OptionForm from './option-form.vue'
export default {
  data() {
    return {
        question: {
            text: "",
            options: []
        }
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
      addOption: function() {
          this.question.options.push({
              text: "",
              correct: false,
              number: this.question.options.length + 1
          })
      },
      createQuestion: function() {
          this.$dispatch('create-question', this.question)
      },
      deleteOption: function(option) {

          this.question.options.slice(option.number-1, 1)
      }
  },
  components: {
      'option-form': OptionForm
  },
  events: {
      'question-saved': function() {
          this.question.text = ""
          this.question.options = []
          alert('question saved!')

      }
  }
};
</script>

<style lang="css">
</style>
