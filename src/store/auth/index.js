import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

Vue.use(Vuex);

const store = {
    namespaced: true,
    state: {
        activeUser: null,
        token: JSON.parse(localStorage.getItem('token'))
    },
    mutations,
    actions,
    getters
}

export default store;