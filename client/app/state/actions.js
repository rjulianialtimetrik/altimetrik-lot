/**
 * This module offers actions for our application state's mutations.
 * This class has been implemented per
 * [Vuex Specs](http://vuex.vuejs.org/en/actions.html)
 */

import * as types from './mutation-types'

export const authenticate = ({dispatch}, payload) => {
    dispatch(types.AUTHENTICATE, payload)
}

export const unauthenticate = ({dispatch}) => {
    dispatch(types.UNAUTHENTICATE)
}

export const clearQuiz = ({dispatch}) => {
    dispatch(types.QUIZ_CLEAR)
}

export const setPerson = ({dispatch}, personData) => {
    dispatch(types.QUIZ_SET_PERSON, personData)
}

export const setAnswers = ({dispatch}, answers) => {
    dispatch(types.QUIZ_SET_ANSWERS, answers)
}
