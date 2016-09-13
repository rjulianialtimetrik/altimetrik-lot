/**
 * This module handles a single point access to the application's state.
 * Among others, this will contain information on the user currently logged in,
 * API JWT token, etc.
 * The store is organized by modules as explained by
 * http://vuex.vuejs.org/en/structure.html
 */

import Vuex from 'vuex'
import auth from './modules/auth'

export default new Vuex.Store({

    modules: {
        auth
    }
})
