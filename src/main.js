import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAZFr3Ac72-m_vj-i234S-eF8ikbI8_j3k",
    authDomain: "tools-or.firebaseapp.com",
    databaseURL: "https://tools-or-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tools-or",
    storageBucket: "tools-or.appspot.com",
    messagingSenderId: "982890396592",
    appId: "1:982890396592:web:799ea6eae3637179d07475"
}

firebase.initializeApp(firebaseConfig)

let app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
