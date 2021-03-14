import { createStore } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore'

const state = {
    player : {}
}

const mutations = {
    set : (state, player) => {
        state.player = player
    }
}

const actions = {
    deletePlanet : async ({ state, commit }, i) => {
        let p = state.player
        p.planets.splice(i, 1)
        await firebase.firestore().collection('players').doc(p.id).set(p)
        commit('set', p)
    },
    addPlanet : async ({ state, commit }, planet) => {
        let p = state.player
        p.planets.push({...planet, date_updated : firebase.firestore.Timestamp.now()})
        await firebase.firestore().collection('players').doc(p.id).set(p)
        commit('set', p)
    },
    get : async ({ commit }, playerName) => {
        let player = await firebase.firestore().collection('players').where('pseudo', '==', playerName).get()
        player.forEach(p => {
            commit('set', {...p.data(), id : p.id })
        })
    }
}

const modules = {}

const getters = {
    player : (state) => state.player
}

export default createStore({ state, mutations, actions, modules, getters })