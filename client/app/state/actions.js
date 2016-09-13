/**
 * This module offers actions for our application state's mutations.
 * This class has been implemented per
 * [Vuex Specs](http://vuex.vuejs.org/en/actions.html)
 */

import {
    AUTHENTICATE, UNAUTHENTICATE
} from './mutation-types'

function authenticate({dispatch}, payload) {
    dispatch(AUTHENTICATE, payload)
}

function unauthenticate({dispatch}) {
    dispatch(UNAUTHENTICATE)
}
