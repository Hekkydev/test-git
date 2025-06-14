<script setup>
import { ref } from 'vue'
import EventForm from './components/EventForm.vue'
import EventList from './components/EventList.vue'

const events = ref([])

function addEvent(event) {
  events.value.push(event)
}

function updateEvent(index, updatedEvent) {
  events.value[index] = updatedEvent
}

function removeEvent(index) {
  events.value.splice(index, 1)
}
</script>

<template>
  <main class="max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-bold text-center mb-4">Event Management Portal</h1>
    <EventForm @add-event="addEvent" />
    <EventList
      :events="events"
      @update-event="updateEvent"
      @delete-event="removeEvent"
    />
  </main>
</template>

