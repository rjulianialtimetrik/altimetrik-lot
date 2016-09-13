
export default {
    getUser: state => {
        return state.auth.user
    },
    getToken: state => {
        return state.auth.token
    },
    isLoggedIn: state => {
        return state.token != null && state.user != null
    }

}
