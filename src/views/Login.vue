<template>
  <div class="login">
    <h1>This is Login</h1>
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="user.email">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="user.password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import store from '../store'

export default {
  data() {
    return {
      user: { email: '', password : '' }
    }
  },
  methods: {
    login() {
      store.dispatch('login', this.user).then(() => this.$router.push('/'))
    },
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => this.$router.push('/'))
        .catch((err) => alert(err.message))
    }
  }
}
</script>
