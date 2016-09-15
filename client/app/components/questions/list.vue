<template lang="html">
  <section class="wrapper">
      <h1>
          A very simple list of questions
          <a v-link="{name: 'create-question'}" class="btn btn-warning btn-lg btn-circle pull-right" title="New Question">
              <i class="fa fa-plus"></i>
          </a>
      </h1>
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
          <div class="col-masonry" v-for.sync="q in questions | filterBy filter in 'text'">
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
        questions: [],
        filter: ""
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
