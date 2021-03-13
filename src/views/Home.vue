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
import user from '../store/user'

export default {
  name: 'Home',
  user: user,
  computed: {
    user() { return user.getters.user }
  },
  components: {
    HelloWorld
  }
}
</script>
