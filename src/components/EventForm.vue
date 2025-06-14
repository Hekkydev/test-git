<template>
  <form @submit.prevent="addEvent">
    <div>
      <label>Name</label>
      <input v-model="name" required />
    </div>
    <div>
      <label>Date</label>
      <input type="date" v-model="date" required />
    </div>
    <div>
      <label>Location</label>
      <input v-model="location" required />
    </div>
    <div>
      <label>Description</label>
      <textarea v-model="description"></textarea>
    </div>
    <button type="submit">Add Event</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-event'])

const name = ref('')
const date = ref('')
const location = ref('')
const description = ref('')

function addEvent() {
  emit('add-event', {
    name: name.value,
    date: date.value,
    location: location.value,
    description: description.value,
  })
  name.value = ''
  date.value = ''
  location.value = ''
  description.value = ''
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}
label {
  display: block;
  font-weight: bold;
}
input,
textarea {
  padding: 4px;
}
</style>
