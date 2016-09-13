import {
    AUTHENTICATE, UNAUTHENTICATE, RESTORE_SESSION
} from '../mutation-types'

//initial state: the user is not logged in
const state = {
    token: null,
    user: null
}

const mutations = {
    [AUTHENTICATE](state, payload) {
        state.token = payload.token
        state.user = payload.user
        localStorage.token = payload.token
        localStorage.user = payload.user
    },
    [UNAUTHENTICATE](state) {
        state.token = null
        state.user = null
        localStorage.clear()
    },
    [RESTORE_SESSION](state) {
        if (localStorage.token != undefined) {
            state.token = localStorage.token
        }
        if (localStorage.user != undefined) {
            state.user = localStorage.user
        }
    }
}

export default {
    state,
    mutations
}
