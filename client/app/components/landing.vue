<template lang="html">
    <section class="wrapper">
        <img class="header-background img-responsive clickable" src="/img/APP-Reclutamiento.png" style="width: 100% !important" v-on:click="$router.go({name: 'promise-sign-up'})">
        <div class="col-xs-10 col-xs-offset-1">
            <h1 class="text-center">Have you ever wanted to become a Legend?</h1>
            <br>
            <p class="lead">
                At Altimetrik we build <strong>Enterprise Software</strong> for the whole world. this
                means if you really want to do <strong class="text-success">Legendary stuff</strong> you should join us!
            </p>
            <blockquote >
                <p>
                    Before Altimetrik, I was just old plain me, and now I'm a Legend
                </p>
                <small>A happy person working at Altimetrik</small>
            </blockquote>
            <br>
            <p class="lead">
                See? A testimonial doesn't lie, does it?
            </p>
            <p class="lead">
                This time you have the chance to <strong class="text-primary">Become Legend</strong> and also take our <strong class="text-primary">Legendary Quiz</strong>.
                Which one you choose, if any, is up to you. <strong class="text-success">Are you ready to start?</strong>
            </p>

        </div>
        <div class="row">
            <div class="col-xs-12 col-md-6 p0">
                <img src="/img/bg9.jpg" class="img-responsive " alt="" style="width: 100% !important; height: 340px; max-height: 400px;" />
                <div class="overlay abs-center-container clickable" v-on:click="$router.go({name: 'promise-sign-up'})">
                    <div class="hover-visible abs-center text-center">
                        <h1 class="text-gray">Become Legend</h1>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6 p0">
                <img src="/img/hand-on-tablet.jpg" class="img-responsive clickable" alt="" style="width: 100% !important; height: 340px; max-height: 400px;" />
                <div class="overlay abs-center-container clickable" v-on:click="$router.go({name: 'quiz-start'})">
                    <div class="hover-visible abs-center text-center">
                        <h1 class="text-gray">Take the Legendary Quiz</h1>
                    </div>
                </div>
            </div>
        </div>


    </section>


</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
