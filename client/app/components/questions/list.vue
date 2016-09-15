<template lang="html">
  <section class="container">
      <h1>
          A very simple list of questions
          <a v-link="{name: 'create-question'}" class="btn btn-warning btn-lg btn-circle pull-right" title="New Question">
              <i class="fa fa-plus"></i>
          </a>
      </h1>
      <div class="mt-xl row-masonry row-masonry-xl-3 row-masonry-lg-3 row-masonry-md-3 row-masonry-sm-2">
          <div class="col-masonry" v-for.sync="q in questions">
              <question :question="q" v-on:delete-question="deleteQuestion"></question>
          </div>
      </div>
  </section>
</template>

<script>
import QuizService from '../../api/quizes/quizes'
import Question from './question.vue'
export default {
  data() {
    return {
        questions: []
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
      deleteQuestion: function(question) {

          QuizService.delete(question).then((response) => {
              //find question and delete it
              this.questions.splice(this.questions.findIndex(q => q._id == question._id), 1)
              console.log('deleted question ' + question._id)
          }, (response) => {
              console.error('Something prevented us from deleting the quesstion...', response)
          })
      }
  },
  components: {
      'question': Question
  },
  created: function() {
      QuizService.getQuestions().then((response) => {
          this.questions = response.body
      }, (response) => {
          alert('There was a problem loading questions. Please try again later')
      })
  }
};
</script>

<style lang="css">
</style>
