<template>
  <div>
    <h2>Events</h2>
    <ul>
      <li v-for="(event, index) in events" :key="index">
        <div v-if="editIndex === index">
          <input v-model="editEvent.name" />
          <input type="date" v-model="editEvent.date" />
          <input v-model="editEvent.location" />
          <textarea v-model="editEvent.description"></textarea>
          <button @click="saveEdit(index)">Save</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
        <div v-else>
          <strong>{{ event.name }}</strong> - {{ event.date }} @ {{ event.location }}
          <p>{{ event.description }}</p>
          <button @click="startEdit(index)">Edit</button>
          <button @click="$emit('delete-event', index)">Delete</button>
        </div>
      </li>
    </ul>
    <p v-if="!events.length">No events yet.</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update-event', 'delete-event'])

const editIndex = ref(-1)
const editEvent = reactive({
  name: '',
  date: '',
  location: '',
  description: ''
})

function startEdit(index) {
  editIndex.value = index
  Object.assign(editEvent, props.events[index])
}

function cancelEdit() {
  editIndex.value = -1
}

function saveEdit(index) {
  emit('update-event', index, { ...editEvent })
  cancelEdit()
}
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
