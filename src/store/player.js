import { createStore } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/database'

const state = {
    player : {}
}

const mutations = {
    set : (state, player) => {
        state.player = player
    }
}

const actions = {
    get : ({ commit }, playerName) => {
        return new Promise( resolve => {
            let player = firebase.database().ref('users').orderByChild('name').equalTo(playerName)
            player.on('value', p => {
                let player = p.exists() ? Object.values(p.val())[0] : {}
                commit('set', player)
                resolve(player)
            })
        })
    }
}

const modules = {}

const getters = {
    player : (state) => state.player
}

export default createStore({ state, mutations, actions, modules, getters })