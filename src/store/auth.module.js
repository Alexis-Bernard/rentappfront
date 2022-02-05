import AuthService from '../services/auth.service'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, user) {
      try {
        user = await AuthService.login(user)

        commit('loginSuccess', user)

        return user
      }
      catch (err) {
        commit('loginFailure')

        throw err
      }
    },
    logout({ commit }) {
      AuthService.logout()

      commit('logout')
    },
    async register({ commit }, user) {
      try {
        let response = await AuthService.register(user)

        commit('registerSuccess')
        
        return response.data
      }
      catch (err) {
        commit('registerFailure')
        
        throw err
      }
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure(state) {
      state.status.loggedIn = false
      state.user = null
    },
    logout(state) {
      state.status.loggedIn = false
      state.user = null
    },
    registerSuccess(state) {
      state.status.loggedIn = false
    },
    registerFailure(state) {
      state.status.loggedIn = false
    }
  }
}
