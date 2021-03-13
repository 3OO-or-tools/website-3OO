import { createStore } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

const state = {
  status : '',
  user : null
}

const mutations = {
  set : (state, user) => {
    state.user = user
  },
  auth_success : (state, user) => {
    state.user = user
    state.status = 'success'
  },
  auth_error : (state) => {
    state.status = 'error'
  },
  logout : (state) => {
    state.status = ''
    state.user = null
  }
}

const actions = {
  set : ({commit}) => {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(user => {
        commit('set', user)
        resolve(user)
      })
    })
  },
  login : ({commit}, user) => {
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
  logout : ({commit}) => {
    return new Promise((resolve) => {
      firebase.auth().signOut().then(() => {
        commit('logout')
        resolve()
      })
    })
  }  
}

const modules = {}

const getters = {
  isLoggedIn: (state) => !!state.user,
  authStatus: (state) => state.status,
  user      : (state) => state.user
}

export default createStore({
  state,
  mutations,
  actions,
  modules,
  getters
})
