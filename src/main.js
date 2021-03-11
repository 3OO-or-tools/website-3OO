import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey              : process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain          : process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL         : process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId           : process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket       : process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId   : process.env.VUE_APP_FIREBASE_MESSAGING_SEND_ID,
    appId               : process.env.VUE_APP_FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)
let db = firebase.database()

db.ref('users/1').set({
    username : 'toto',
    email : 'toto@gmail.com'
})

db.ref('users').get().then((v) => {
    if (v.exists())
        console.log(v.val())
})

store.dispatch('setUser').then(() => {
    let app = createApp(App)
    app.use(store)
    app.use(router)
    app.mount('#app')
})

