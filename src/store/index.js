import Vue from 'vue'
import Vuex from 'vuex'

import { getToken } from '@/utils/auth'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  token: getToken()
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
