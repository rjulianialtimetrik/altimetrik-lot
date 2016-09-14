<template lang="html">
  <section class="container">
      <h1>
          Create a new Question for the Legendary Quiz!
          <a v-link="{name: 'question-list'}" class="btn btn-info btn-lg btn-circle pull-right" title="List">
              <i class="fa fa-bars"></i>
          </a>
      </h1>
      <question-form v-on:create-question="saveQuestion" class="mt-xl"></question-form>

  </section>
</template>

<script>
import QuestionForm from './question-form.vue'
import QuizService from '../../api/quizes/quizes'
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
      /**
       * This method stores the question currently saved
       * @param  {[type]} question [description]
       * @return {[type]}          [description]
       */
      saveQuestion: function(question){
          let self = this
          QuizService.create(question).then((response) => {
              self.$broadcast('question-saved')
              self.$emit('question-saved', response)
          }, (response) => {
              self.$emit('question-save-error', response)
          })
      }
  },
  events: {
      'question-save-error': (response) => {
          console.error(response)
          alert('There was an error saving your question. Please see the logs for more info')
      },
      'question-saved': (response) => {
          console.log('Question saved! Id: ', response.body._id)
      }
  },
  components: {
      'question-form': QuestionForm
  }
};
</script>

<style lang="css">
</style>
