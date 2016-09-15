<template lang="html">
    <section>
        <div class="col-xs-12 col-md-7">

        </div>
        <div class="col-xs-12 col-md-5" v-if="answers.length > 0">
            <h1>{{ $route.title }}</h1>
            <h3 class="text-success" v-if="award != 'Copper'">Congratulations!</h3>
            <h3 class="text-warning" v-if="award == 'Copper'">Well... that didn't quite go as planned</h3>

            <div class="well">
                You had <span class="text-success text-bold">{{ correctAnswers }} correct answers</span> out of {{ answers.length }} questions
            </div>

                <div class="panel widget" v-bind:class="{'bg-warning': award == 'Gold', 'bg-blue-grey-200': award == 'Silver', 'bg-deep-orange-700': award == 'Bronze', 'bg-brown-400': award == 'Copper'}">
                     <div class="row row-table">
                        <div class="col-xs-4 text-center pv-lg" v-bind:class="{'bg-warning-dark': award == 'Gold', 'bg-blue-grey-400': award == 'Silver', 'bg-deep-orange-900': award == 'Bronze', 'bg-brown-600': award == 'Copper'}">
                           <em v-if="award != 'Copper'" class="fa fa-trophy fa-3x"></em>
                           <em v-if="award == 'Copper'" class="fa fa-frown-o fa-3x"></em>
                        </div>
                        <div class="col-xs-8 pv-lg text-center">
                           <div class="h1 m0 text-bold">{{ correctAnswers}}/{{ answers.length }}</div>
                           <div class="text-uppercase" v-if="award != 'Copper'">{{ award }} Medal!</div>
                           <div class="text-uppercase" v-if="award == 'Copper'">Too Bad! Try Again Next time!</div>
                        </div>
                     </div>
                  </div>


        </div>
        <div v-if="answers.length === 0" class="col-xs-12 col-md-5" >

            <div class="alert alert-danger mt-xl">
                <h1>Ooops... Something went wrong</h1>
                <h4>It appears you have not completed the quiz just yet!</h4>
            </div>

            <div class="well">
                <p>Don't worry too much, you can complete it right away!</p>
                <p class="text-center">
                    <a name="button" role="button" class="btn btn-success btn-lg text-bold" v-link="{name: 'legendary-quiz'}">LET'S DO IT!</a>
                </p>
            </div>
        </div>

    </section>
</template>

<script>
import { getAnswers, getPerson } from '../../state/getters'
import QuizService from '../../api/quizes/quizes'

export default {
  data() {
    return {

    };
  },
  vuex: {
      getters: {
          answers: getAnswers,
          person: getPerson
      }
  },
  computed: {
      correctAnswers: function(){
          return this.answers.filter(answer => answer.answer.correct).length
      },
      wrongAnswers: function() {
          return this.answers.filter(answer => !answer.answer.correct).length
      },
      rate: function() {
          return this.correctAnswers/this.answers.length
      },
      award: function() {
          if (1 >= this.rate && this.rate >= 0.95) {
              return 'Gold'
          } else if (0.95 > this.rate && this.rate >= 0.85) {
              return 'Silver'
          } else if (0.85 > this.rate && this.rate >= 0.7) {
              return 'Bronze'
          } else {
              return 'Copper'
          }
      }
  },
  ready() {
      QuizService.saveResults({
          person: this.person,
          answers: this.answers
      }).then((result) => {
          console.log('Successfully saved quiz for', this.person.email)
      }, (result) => {
         console.error('Something went wrong saving the quiz', result)
      })
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
