import routeError from '../components/errors/route-error.vue'
import landingPage from '../components/landing.vue'
import promises from '../components/promises'
import quizes from '../components/quizes'
import questions from '../components/questions'

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
                title: 'Would you like to become a Legend?',
                name: 'promise-sign-up'
            },
            '/promise-added': {
                name: 'promise-added',
                component: promises.PromiseAdded
            }
        }
    },
    '/legendary-quiz': {
        name: 'legendary-quiz',
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/': {
                component: quizes.Start,
                title: 'Start your Quiz',
                name: 'quiz-start'
            },
            '/quiz': {
                component: quizes.Quiz,
                title: 'Ongoing Quiz',
                name: 'quiz-do'
            },
            '/finished': {
                component: quizes.Finish,
                title: 'You\'ve completed a Legendary Quiz!',
                name: 'quiz-finished'
            },
            '/results': {
                component: quizes.Results,
                name: 'quiz-results'
            }

        }
    },
    '/questions': {
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/': {
                name: 'question-list',
                component: questions.List
            },
            '/create': {
                name: 'create-question',
                component: questions.Create
            }
        }
    }

}
