import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import routes from './config/routes'
import App from './components/app.vue'

//load the configuration based on the environment
import config from './config/params'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)

const environment = process.env.NODE_ENV || 'production'


Vue.config.debug = (environment != 'production')
Vue.config.devtools = (environment != 'production')

//Setup the resources
Vue.http.options.root = config[environment].apiRoot;

// Initialize Vue Router
let router = new VueRouter({
    mode: 'hash'

})

router.map(routes)

// Start the application
router.start(App, '#content', function() {

    if (window) {
        window.App = router.app;
    }

})
