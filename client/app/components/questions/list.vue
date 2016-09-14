<template lang="html">
  <section class="container">
      <h1>
          A very simple list of questions
          <a v-link="{name: 'create-question'}" class="btn btn-warning btn-lg btn-circle pull-right" title="New Question">
              <i class="fa fa-plus"></i>
          </a>
      </h1>
      <div class="mt-xl row-masonry row-masonry-xl-3 row-masonry-lg-3 row-masonry-md-3 row-masonry-sm-2">
          <div class="col-masonry" v-for="q in questions">
              <question :question="q"></question>
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
  methods: {},
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
