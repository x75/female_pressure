import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import helpers from './helpers';
import authentication from './modules/authentication'

Vue.use(Vuex)


const vuexStorage = new VuexPersist({
    key: 'portal',
    storage: localStorage,
})

const store = new Vuex.Store({
    modules: {
        authentication: authentication,
    },

    plugins: [vuexStorage.plugin],
    state: helpers.getDefaultState,
    mutations,
    actions,
    getters
})

export default store;