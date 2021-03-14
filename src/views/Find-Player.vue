<template>
    <div class="container find-player">
        <div class="row">
            <div class="input-group">
                <span class="input-group-text">Pseudo</span>
                <input type="text" class="form-control" v-model="player.pseudo" @change="findUser">
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(planet, i) in player.planets" :key="`planet-${i}`">
                        <td>{{ planet.galaxy }}</td>
                        <td>{{ planet.system }}</td>
                        <td>{{ planet.position }}</td>
                        <td>{{ (new Date(planet.date_updated.toDate())).toLocaleString() }}</td>
                        <td><input type="button" class="btn btn-danger" value="X" v-on:click="deletePlanet(i)"></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><input type="number" min="1" max="100" v-model="newPlanet.galaxy"></td>
                        <td><input type="number" min="1" max="100" v-model="newPlanet.system"></td>
                        <td><input type="number" min="1" max="10" v-model="newPlanet.position"></td>
                        <td></td>
                        <td><input type="button" value="Add" class="btn btn-primary" v-on:click="addPlanet"></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
import player from '../store/player'

export default {
    data() {
        return {
            player : { pseudo : '', planets : [] },
            newPlanet : { galaxy : '', system : '', position : '' }
        }
    },
    methods: {
        async deletePlanet(i) {
            await player.dispatch('deletePlanet', i)
        },
        async addPlanet() {
            await player.dispatch('addPlanet', this.newPlanet)
            this.newPlanet = { galaxy : '', system : '', position : '' }
        },
        async findUser() {
            await player.dispatch('get', this.player.pseudo)
            this.player = player.getters.player
        }
    }
}
</script>