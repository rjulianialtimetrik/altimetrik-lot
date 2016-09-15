<template lang="html">
  <section class="wrapper">
      <div class="col-xs-12 col-md-7">
          <div class="row">
              <img src="/img/bg5.jpg" class="img-responsive"/>
          </div>
      </div>
      <div class="col-xs-12 col-md-5">
          <h1>Are you ready for a Legendary Quiz?</h1>
          <br>
          <div class="well">
              Enter your data below and get ready to start. Each participant will
              have the chance to win an awesome prize!
          </div>
          <br>
          <div class="panel panel-default">
             <div class="panel-heading"><strong>Fill in your data</strong></div>
             <div class="panel-body">
                <form class="form-horizontal" v-on:submit.prevent="startQuiz">
                   <div class="form-group">
                      <label class="col-lg-2 control-label">Email</label>
                      <div class="col-lg-10">
                         <input type="email" placeholder="Email" class="form-control" autocomplete="off" v-model="person.email">
                      </div>
                   </div>
                   <div class="form-group">
                      <label class="col-lg-2 control-label">Name</label>
                      <div class="col-lg-10">
                         <input type="text" placeholder="John Doe" class="form-control" autocomplete="off" v-model="person.name">
                      </div>
                   </div>
                   <div class="form-group">
                      <div class="col-lg-offset-2 col-lg-10">
                         <button type="submit" class="btn btn-sm btn-primary pull-right">START!</button>
                      </div>
                   </div>
                </form>
             </div>
          </div>
      </div>
  </section>
</template>

<script>
import { setPerson, clearQuiz } from '../../state/actions'
import { getPerson } from '../../state/getters'
export default {
  data() {
    return {
        person: {
            email: "",
            name: ""
        }
    };
  },
  vuex: {
      getters: {
          getPerson
      },
      actions: {
          setPerson,
          clearQuiz
      }
  },
  computed: {},
  ready() {
      //clear any previous quiz data stored in our app's state
      this.clearQuiz()
  },
  attached() {},
  methods: {
      startQuiz: function() {
          this.setPerson(this.person)
          this.$router.go({name: 'quiz-do'})
      }
  },
  components: {}
};
</script>

<style lang="css">
</style>
