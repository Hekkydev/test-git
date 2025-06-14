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
  <main>
    <h1>Event Management Portal</h1>
    <EventForm @add-event="addEvent" />
    <EventList
      :events="events"
      @update-event="updateEvent"
      @delete-event="removeEvent"
    />
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  padding: 20px;
}
h1 {
  text-align: center;
}
</style>
