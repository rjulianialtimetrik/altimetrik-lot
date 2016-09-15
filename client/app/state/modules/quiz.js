import {
    QUIZ_CLEAR, QUIZ_SET_ANSWERS, QUIZ_SET_PERSON
} from '../mutation-types'

//initial state: the user is not logged in
const state = {
    answers: []
}

const mutations = {
    [QUIZ_SET_PERSON](state, personData) {
        state.person = personData
    },
    [QUIZ_CLEAR](state) {
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
