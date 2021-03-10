<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p v-if="user">
      Hello {{user.email}}
    </p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import store from '../store'

export default {
  name: 'Home',
  store : store,
  computed: {
    user() { return store.getters.user }
  },
  components: {
    HelloWorld
  }
}
</script>
