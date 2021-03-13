<template>
  <nav class="navbar navbar-light sticky-top navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="user">
            <router-link to="/find-player" class="nav-link">Find Player</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <span class="navbar-nav" v-if="!user">
          <router-link to="/login" class="nav-link">Login</router-link>
        </span>
        <span class="navbar-nav" v-else>
          <a href="#" class="nav-link d-flex" @click="logout">Log Out</a>
        </span>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import user from './store/user'

export default {
  user,
  computed: {
    user() { return user.getters.user }
  },
  methods: {
    logout() {
      user.dispatch('logout').then(() => this.$router.replace('/'))
    }
  }
}
</script>

<style lang="scss">

</style>
