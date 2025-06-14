<template>
  <form @submit.prevent="addEvent" class="space-y-4">
    <div class="flex flex-col">
      <label class="font-medium mb-1">Name</label>
      <input v-model="name" required class="form-input rounded" />
    </div>
    <div class="flex flex-col">
      <label class="font-medium mb-1">Date</label>
      <input type="date" v-model="date" required class="form-input rounded" />
    </div>
    <div class="flex flex-col">
      <label class="font-medium mb-1">Location</label>
      <input v-model="location" required class="form-input rounded" />
    </div>
    <div class="flex flex-col">
      <label class="font-medium mb-1">Description</label>
      <textarea v-model="description" class="form-textarea rounded" />
    </div>
    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Add Event</button>
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

