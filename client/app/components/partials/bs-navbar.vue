<template lang="html">
    <nav class="navbar navbar-default topnavbar" role="navigation">
        <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand m-sm" v-link="'/'">

                    <img src="/img/altimetrik-logo-white.png" class="img-responsive" style="max-height: 100%;">
                </a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="">
                        <a v-link="{name: 'promise-sign-up'}">Become a Legend</a>
                    </li>
                    <li>
                        <a v-link="{name: 'quiz-start'}">Legendary Quiz</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>

</template>

<script>
export default {
    data() {
        return {};
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
