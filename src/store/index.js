import { createStore } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default createStore({
  state: {
    status : '',
    user : null
  },
  mutations: {
    set_user(state, user) {
      state.user = user
    },
    auth_success(state, user) {
      state.user = user
      state.status = 'success'
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.user = null
    }
  },
  actions: {
    setUser({commit}) {
      firebase.auth().onAuthStateChanged(user => {
        commit('set_user', user)
      })
    },
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(userCredentials => {
          commit('auth_success', userCredentials.user)
          resolve(userCredentials.user)
        })
        .catch((err) => {
            commit('auth_error')
            reject(err)
        })
      })
    },
    logout({commit}) {
      return new Promise((resolve) => {
        firebase.auth().signOut().then(() => {
          commit('logout')
          resolve()
        })
      })
    }  
  },
  modules: {
  },
  getters: {
    isLoggedIn: state => !!state.user,
    authStatus: state => state.status,
    user      : (state) => state.user
  }
})
