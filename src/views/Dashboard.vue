<template>
  <div class="dashboard">
      <input type="text" v-model="player.name" @change="findUser">
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
            <td>{{ planet.date_updated }}</td>
          </tr>
        </tbody>
      </table>
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