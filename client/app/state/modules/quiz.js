import {
    QUIZ_CLEAR_ANSWERS, QUIZ_SET_ANSWERS
} from '../mutation-types'

//initial state: the user is not logged in
const state = {
    answers: []
}

const mutations = {
    [QUIZ_CLEAR_ANSWERS](state) {
        state.answers = []
    },
    [QUIZ_SET_ANSWERS](state, answers) {
        state.answers = answers
    }
}

export default {
    state,
    mutations
}
