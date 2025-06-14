<template>
  <div>
    <h2>Events</h2>
    <ul>
      <li v-for="(event, index) in events" :key="index">
        <strong>{{ event.name }}</strong> - {{ event.date }} @ {{ event.location }}
        <p>{{ event.description }}</p>
      </li>
    </ul>
    <p v-if="!events.length">No events yet.</p>
  </div>
</template>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 12px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
}
</style>
