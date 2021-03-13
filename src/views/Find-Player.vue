<template>
    <div class="container find-player">
        <div class="row">
            <div class="input-group">
                <span class="input-group-text">Pseudo</span>
                <input type="text" class="form-control" v-model="player.name" @change="findUser">
                <button class="btn btn-outline-secondary" type="button" @click="findUser">Trouver</button>
            </div>
        </div>
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        <th>Galaxie</th>
                        <th>Système</th>
                        <th>Position</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(planet, i) in player.planets" :key="`planet-${i}`">
                        <td>{{ planet.g }}</td>
                        <td>{{ planet.s }}</td>
                        <td>{{ planet.p }}</td>
                        <td>{{ (new Date(planet.date_updated)).toLocaleString() }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import player from '../store/player'

export default {
  data() {
    return {
      player : { name : ''}
    }
  },
  methods: {
    findUser() {
      player.dispatch('get', this.player.name).then(() => {
        this.player = player.getters.player
      })
    }
  }
}
</script>