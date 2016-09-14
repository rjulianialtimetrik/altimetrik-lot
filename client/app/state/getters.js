
export const getUser = state => {
    return state.auth.user
}

export const getToken = state => {
        return state.auth.token
}

export const isLoggedIn = state => {
    return state.auth.token != null && state.auth.user != null
}

export const getAnswers = state => {
    return state.quiz.answers
}
