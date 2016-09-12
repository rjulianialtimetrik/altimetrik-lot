import routeError from '../components/errors/route-error.vue'
import landingPage from '../components/landing.vue'
import promises from '../components/promises'


export default {

    // By default, access to the wrong page will get the
    // user to an error page
    '*': {
        name: 'routeError',
        component: routeError
    },

    '/': {
        name: 'landing',
        component: landingPage
    },

    '/promises': {
        component: promises.Index,
        subRoutes: {
            '/': {
                component: promises.List,
                title: 'List of Promises'
            },
            '/sign-up': {
                component: promises.New,
                title: 'Would you like to become a Legend?'
            }
        }
    }
}
