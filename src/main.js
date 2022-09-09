import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import '/node_modules/tiny-slider/dist/tiny-slider.css';

// Import de mitt
import mitt from 'mitt';

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
	apiKey: "AIzaSyA_kpnZRk08IyFHkM-Vnjl-qf8z4XTJUDc",
	authDomain: "phase-2-projet.firebaseapp.com",
	projectId: "phase-2-projet",
	storageBucket: "phase-2-projet.appspot.com",
	messagingSenderId: "509533628912",
	appId: "1:509533628912:web:4be1a3db6d32d2f3295535"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')