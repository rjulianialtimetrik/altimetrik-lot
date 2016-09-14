<template lang="html">

  <div class="panel widget">
      <div class="panel-body bg-light-blue-700">
          <div class="row">
            <div class="col-xs-2 text-center"><i class="fa fa-question fa-3x"></i></div>
            <div class="col-xs-10 p-l">
                <p>
                    {{ question.text }}
                </p>
            </div>
          </div>
      </div>
      <div class="list-group">
        <q-option v-for="(index, option) in question.options"
            :text="option.text" :is-correct="option.correct" :number="index + 1"
                v-on:click="optionSelected(option)" >

                </q-option>
      </div>
      
  </div>
</template>

<script>
import Option from './q-option.vue'
export default {
  data() {
    return {

    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
      optionSelected: function(option) {
          if (!this.answered) {
              this.$dispatch('question-answered', this.question, option)
              this.$broadcast('question-answered', option)
              this.answered = true
          }


      }
  },
  components: {
      'q-option': Option
  },
  props: {
      question: {
          type: Object
      },
      answered: {
          type: Boolean,
          default: false
      }
  }
};
</script>

<style lang="css">
</style>
