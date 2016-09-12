<template lang="html">
  <section class="container widget">
      <div class="col-xs-12 col-md-6 bg-black pt-xl">
          <picture class="lateral-picture">
              <img src="/img/bg2.jpg">
          </picture>
      </div>
      <div class="col-xs-12 col-md-6 pt-xl">
          <h1>{{ $route.title }}</h1>
          <validator name="validation" :classes="{valid: 'has-success', invalid: 'has-error'}">
          <form class="bs-component" action="index.html" method="post" v-on:submit.prevent="signUp" novalidate>
                <div class="form-group" v-validate-class >
                    <label class="control-label" for="promiseName">Name</label>
                    <input type="text" class="form-control" id="promiseName"
                        v-model="newPromise.name"
                        v-validate:name="{required: {rule: true, message: 'Please enter your name'}}">
                    <span class="help-block" v-if="$validation.name.invalid">{{ $validation.name.required }}</span>
                </div>
                <div class="form-group" v-validate-class>
                    <label for="promiseEmail" class="control-label">Email</label>
                    <input type="email" name="promiseName" v-model="newPromise.email" class="form-control"
                    v-validate:email="{required: {rule: true, message: 'Please enter your email address'}}">
                    <span class="help-block" v-if="$validation.name.invalid">{{ $validation.email.required }}</span>
                </div>
                <div class="form-group">
                    <label for="promiseCareer" class="control-label">Career</label>
                    <select class="form-control" name="promiseCareer" id="promiseCareer" class="form-control" v-model="newPromise.career" required>
                        <option selected>Ingenieria</option>
                        <option>ATI</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="form-group" v-show="newPromise.career =='Other'">
                    <label for="promiseCareerOther" class="control-label">Which one?</label>
                    <input type="text" class="form-control" name="promiseCareerOther" v-model="newPromise.careerOther">
                </div>
                <div class="form-group">
                    <label for="promiseEnglishLevel" class="control-label">English Knowledge</label>
                    <select class="form-control" name="promiseEnglishLevel" id="promiseEnglishLevel" v-model="newPromise.englishLevel">
                        <option selected>Begginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Native</option>
                    </select>
                    <br>
                    <div class="alert alert-success" v-if="newPromise.englishLevel == 'Native'">
                        <h4>I like that ;)</h4>
                    </div>

                </div>
                <div class="form-group">
                    <div class="checkbox c-checkbox">
                        <label>
                           <input type="checkbox" v-model="newPromise.hasWorkExperience">
                           <span class="fa fa-check"></span> Do you have any work experience?</label>
                     </div>

                </div>

                <div class="form-group" v-show="newPromise.hasWorkExperience">
                    <label for="promiseWorkExperienceDescription" class="control-label">Tell us more!</label>
                    <textarea name="promiseWorkExperienceDescription" rows="4" id="promiseWorkExperienceDescription" class="form-control" v-model="newPromise.workExperience"></textarea>
                </div>
                <div class="form-group text-right">
                    <button type="submit" name="button" class="btn btn-success btn-lg">Make me a Legend!</button>
                </div>


          </form>
          </validator>
      </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
        newPromise: {
            name: '',
            email: '',
            career: '',
            careerOther: '',
            englishLevel: '',
            hasWorkExperience: '',
            workExperience: ''
        }
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
      signUp: function(event) {
          console.log(this.newPromise.name)
      }
  },
  components: {}
};
</script>

<style lang="css">
</style>
