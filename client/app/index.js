import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import routes from './config/routes'
import App from './components/app.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)

const environment = process.env.NODE_ENV

Vue.config.debug = (environment != 'production')
Vue.config.devtools = (environment != 'production')

// Initialize Vue Router
let router = new VueRouter({
    history: true,
    http: {
        root: '/api',
        headers: {
            Authorization: ''
        }
    }
})

router.map(routes)

// Start the application
router.start(App, '#content', function() {

    if (window) {
        window.App = router.app;
    }

})
