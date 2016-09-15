<template lang="html">
  <div class="card">
      <div class="card-heading bg-pink shadow-z1">
          <div class="card-icon">
            <em class="fa fa-user"></em>
         </div>
         <div class="card-title">{{ promise.name }}</div>
      </div>
      <div class="card-subheader">Personal Info</div>
      <div class="card-body">
          <div class="mda-list">
             <div class="mda-list-item">
                <div class="mda-list-item-icon bg-primary">
                   <em class="fa fa-envelope"></em>
                </div>
                <div class="mda-list-item-text mda-2-line">
                   <h3>{{ promise.email }}</h3>
                   <h5>Email</h5>
                </div>
             </div>
             <div class="mda-list-item">
                <div class="mda-list-item-icon bg-primary">
                   <em class="fa fa-graduation-cap"></em>
                </div>
                <div class="mda-list-item-text mda-2-line">
                   <h3>{{ promise.career }} {{ promise.careerOther}}</h3>
                   <h5>Career</h5>
                </div>
             </div>
             <div class="mda-list-item">
                <div class="mda-list-item-icon bg-primary">
                   <em class="fa fa-language"></em>
                </div>
                <div class="mda-list-item-text mda-2-line">
                   <h3>{{ promise.englishLevel }}</h3>
                   <h5>English Knowledge</h5>
                </div>
             </div>
             <div class="mda-list-item" v-if="{{ promise.hasWorkExperience }}">
                <div class="mda-list-item-icon bg-primary">
                   <em class="fa fa-briefcase"></em>
                </div>
                <div class="mda-list-item-text mda-2-line">
                   <h3>{{ promise.workExperience }}</h3>
                   <h5>Work Experience</h5>
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
        filter: ""
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {},
  props: {
      promise: {
          type: Object,
          required: true
      }
  }
};
</script>

<style lang="css">
</style>
