<template lang="html">
    <section class="col-xs-12">
        <h1>Quizes Completed</h1>
        <div class="wrapper mt-xl">
            <form class="form-horizontal col-xs-8" >
                <div class="form-group">
                    <div class="input-group">
                       <input type="text" class="form-control" v-model="filter">
                       <span class="input-group-btn">
                          <button type="button" class="btn btn-default"><i class="fa fa-search"></i></button>
                       </span>
                    </div>
                </div>
            </form>
            <div class="col-xs-4 text-center">
                <button type="button" name="button" class="btn btn-success btn-lg" v-on:click="doRaffle">RAFFLE!</button>
            </div>
        </div>
        <div class="mt-xl row-masonry row-masonry-xl-3 row-masonry-lg-3 row-masonry-md-3 row-masonry-sm-2">
            <div class="col-masonry" v-for.sync="qr in results | filterBy filter">
                <quiz-result :result="qr" ></quiz-result>
            </div>
        </div>
    </section>
</template>

<script>
import QuizResult from './quiz-result.vue'
import QuizService from '../../api/quizes/quizes'

export default {
  data() {
    return {
        filter: "",
        results: []
    };
  },
  computed: {},
  ready() {
      QuizService.getResults().then((response) => {
          this.results = response.body
      }, (response) => {
          console.error('Error Loading Quiz Results: ', response)
      })
  },
  attached() {},
  methods: {
      doRaffle: function() {
          let winner = this.results[Math.floor(Math.random()*this.results.length)]
          alert('WINNER: ' + winner.person.name + ' / ' + winner.person.email)
      }
  },
  components: {
      'quiz-result': QuizResult
  }
};
</script>

<style lang="css">
</style>
