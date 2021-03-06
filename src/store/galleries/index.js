import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

Vue.use(Vuex);

const store = {
    namespaced: true,
    state: {
        galleries: {
            data: []
        },
        gallery: {},
        myGalleries: {
            data: []
        },
        authorsGalleries: {
            data: []
        }
    },
    mutations,
    actions,
    getters
}

export default store;