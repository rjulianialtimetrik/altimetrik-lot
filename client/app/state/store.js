/**
 * This module handles a single point access to the application's state.
 * Among others, this will contain information on the user currently logged in,
 * API JWT token, etc.
 * The store is organized by modules as explained by
 * http://vuex.vuejs.org/en/structure.html
 */

import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import quiz from './modules/quiz'

Vue.use(Vuex)


export default new Vuex.Store({

    modules: {
        auth,
        quiz
    }
})
