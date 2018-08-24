<template>
  <div>
 <article v-for="(location, idx) in locations" :key="idx">
  <img :src="location.images">
  <h1>{{ location.name }}</h1>
  <h3>{{ location.id }}</h3>
  <h3>{{ location.createdAt }}</h3>
  <button @click="deleteLocation(location.id)">Delete</button>
 </article>
 <form @submit="addLocation(name, images)">
<input v-model="name" placeholder="Location Name">
<input v-model="images" placeholder="Location Image URL">
<button type="submit">Add New Location</button>
</form>
</div>

</template>

<script>
import { db } from '../main'
export default {
 name: 'HelloWorld',
 data () {
   return {
     locations: [],
     name: '',
     images: ''
   }
 },
 firestore () {
   return {
     locations: db.collection('locations').orderBy('createdAt')
   }
 },
  methods: {
   addLocation (name, images) {      // <-- новый метод
     const createdAt = new Date()
     db.collection('locations').add({ name, images, createdAt })
   },
    deleteLocation (id) {   // <-- новый метод
    db.collection('locations').doc(id).delete()
   }
 }
}
</script>

<style scoped>
</style>
