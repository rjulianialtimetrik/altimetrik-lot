<template lang="html">

     <div class="list-group-item clickable " v-bind:class="{'bg-green-light': isCorrect && chosen, 'bg-danger-light': chosen && !isCorrect}">

         <span class="pull-right">
             <em v-if="isCorrect && answered" class="fa fa-check text-success pull-right"></em>
             <em v-if="!isCorrect && answered" class="fa fa-times text-danger pull-right"></em>
         </span>
         <span class="text-bold label bg-deep-purple-400">{{ number }}</span>
          {{ text }}
      </div>

</template>

<script>

export default {
  data() {
    return {
        answered: false,
        chosen: false
    };
  },
  computed: {},
  ready() {

  },
  attached() {},
  methods: {
      choose: function() {
          console.log('they chose me! ', this)
          if (!this.answered) {
              this.chosen = true
              this.answered = true
          }

      }
  },
  events: {
      'question-answered': function(option) {
          this.answered = true
          if (option.text === this.text) {
              this.chosen = true
          }
      }
  },
  components: {},
  props: {
      text: {
          type: String
      },
      isCorrect: {
          type: Boolean
      },
      number: {
          type: Number
      },

  }
};
</script>

<style lang="css">
</style>
