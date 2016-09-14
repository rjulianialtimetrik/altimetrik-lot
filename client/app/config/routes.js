import routeError from '../components/errors/route-error.vue'
import landingPage from '../components/landing.vue'
import promises from '../components/promises'
import quiz from '../components/quizes/quiz.vue'
import quizFinished from '../components/quizes/quiz-finished.vue'
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
                title: 'Would you like to become a Legend?'
            }
        }
    },
    '/legendary-quiz': {
        name: 'legendary-quiz',
        component: quiz,
        title: 'Do the Legendary Quiz'
    },
    '/quiz-finished': {
        name: 'quiz-finished',
        component: quizFinished,
        title: 'You\'ve finished the Legendary Quiz!'
    },
    '/create-question': {
        name: 'create-question',
        component: questions.Create
    }
}
