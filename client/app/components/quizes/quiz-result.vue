<template lang="html">
    <div class="card">
        <div class="card-heading shadow-z1" v-bind:class="{'bg-warning': award == 'Gold', 'bg-blue-grey-200': award == 'Silver', 'bg-deep-orange-700': award == 'Bronze', 'bg-brown-400': award == 'Copper'}">
            <div class="card-icon">
              <em class="fa fa-user"></em>
           </div>
           <div class="card-title">{{ result.person.name }}</div>
        </div>
        <div class="card-subheader">Quiz Data</div>
        <div class="card-body">
            <div class="mda-list">
               <div class="mda-list-item">
                  <div class="mda-list-item-icon bg-primary">
                     <em class="fa fa-envelope"></em>
                  </div>
                  <div class="mda-list-item-text mda-2-line">
                     <h3>{{ result.person.email }}</h3>
                     <h5>Email</h5>
                  </div>
               </div>
               <div class="mda-list-item">
                  <div class="mda-list-item-icon bg-success">
                     <em class="fa fa-check"></em>
                  </div>
                  <div class="mda-list-item-text mda-2-line">
                     <h3>{{ correctAnswers }}</h3>
                     <h5>Correct Answers</h5>
                  </div>
               </div>
               <div class="mda-list-item">
                  <div class="mda-list-item-icon bg-danger">
                     <em class="fa fa-times"></em>
                  </div>
                  <div class="mda-list-item-text mda-2-line">
                     <h3>{{ wrongAnswers }}</h3>
                     <h5>Wrong Answers</h5>
                  </div>
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
  computed: {
      correctAnswers: function(){
          return this.result.answers.filter(answer => answer.answer.correct).length
      },
      wrongAnswers: function() {
          return this.result.answers.filter(answer => !answer.answer.correct).length
      },
      rate: function() {
          return this.correctAnswers/this.result.answers.length
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
  ready() {},
  attached() {},
  methods: {},
  components: {},
  props: {
      result: {
          type: Object,
          requird: true
      }
  }
};
</script>

<style lang="css">
</style>
