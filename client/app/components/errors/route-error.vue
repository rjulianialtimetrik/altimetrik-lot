<template lang="html">
    <div class="container">
        <div class="jumbotron">

            <h1>
                <span class="glyphicon glyphicon-thumbs-down text-danger"></span>&nbsp;
                <span>Did you get lost?</span>
            </h1>
            <div class="alert alert-danger">
                <p>
                    It appears you're trying to get to <strong>{{ path }}</strong>
                </p>

            </div>
            <p>
                <a v-link="{path: '/'}" class="btn btn-primary btn-lg">Take me&nbsp;<span class="glyphicon glyphicon-home"> </span></a>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'RouteError',

    props: {

        path: {
            type: String,
            required: false
        }
    },

    created() {

        // Get the current route.
        let route = this.$route;

        // Set the route path in the data.
        this.path = route.path;
    }
}
</script>

<style lang="css">
</style>
