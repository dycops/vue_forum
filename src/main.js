// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyCaG_iPQlEFKuOoASh-ROpANlT6LCK3CnA",
  authDomain: "forum-24e38.firebaseapp.com",
  databaseURL: "https://forum-24e38.firebaseio.com",
  projectId: "forum-24e38",
  storageBucket: "forum-24e38.appspot.com",
  messagingSenderId: "288954716574"
})
export const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

Vue.config.productionTip = false  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
