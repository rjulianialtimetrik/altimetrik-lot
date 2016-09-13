import {
    AUTHENTICATE, UNAUTHENTICATE
} from '../mutation-types'

//initial state: the user is not logged in
const state = {
    token: '',
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
        state.token = ''
        state.user = null
        localStorage.clear()
    }
}

export default {
    state,
    mutations
}
