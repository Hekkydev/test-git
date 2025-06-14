<template>
  <div class="mt-8">
    <h2 class="text-xl font-semibold mb-4">Events</h2>
    <ul class="space-y-4">
      <li v-for="(event, index) in events" :key="index" class="border rounded p-4">
        <div class="text-left space-y-2">
          <div class="font-medium">{{ event.name }} - {{ event.date }} @ {{ event.location }}</div>
          <p class="text-sm">{{ event.description }}</p>
          <div class="space-x-2">
            <button @click="openEdit(index)" class="px-3 py-1 bg-blue-600 text-white rounded">Edit</button>
            <button @click="$emit('delete-event', index)" class="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
          </div>
        </div>
      </li>
    </ul>
    <p v-if="!events.length" class="text-center text-gray-500">No events yet.</p>

    <Dialog v-if="isEditOpen" @close="cancelEdit" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4">
        <DialogPanel class="bg-white w-full max-w-md rounded p-6 space-y-4">
          <DialogTitle class="text-lg font-medium">Edit Event</DialogTitle>
          <input v-model="editEvent.name" class="form-input rounded w-full" />
          <input type="date" v-model="editEvent.date" class="form-input rounded w-full" />
          <input v-model="editEvent.location" class="form-input rounded w-full" />
          <textarea v-model="editEvent.description" class="form-textarea rounded w-full"></textarea>
          <div class="space-x-2 text-right">
            <button @click="saveEdit(editIndex)" class="px-3 py-1 bg-green-600 text-white rounded">Save</button>
            <button @click="cancelEdit" class="px-3 py-1 bg-gray-300 rounded">Cancel</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const props = defineProps({
  events: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update-event', 'delete-event'])

const editIndex = ref(-1)
const isEditOpen = ref(false)
const editEvent = reactive({
  name: '',
  date: '',
  location: '',
  description: ''
})

function openEdit(index) {
  editIndex.value = index
  Object.assign(editEvent, props.events[index])
  isEditOpen.value = true
}

function cancelEdit() {
  isEditOpen.value = false
  editIndex.value = -1
}

function saveEdit(index) {
  emit('update-event', index, { ...editEvent })
  cancelEdit()
}
</script>

