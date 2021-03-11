import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

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

let app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
