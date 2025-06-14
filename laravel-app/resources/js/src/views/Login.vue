<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 py-6 w-80 space-y-4">
      <h1 class="text-xl font-semibold text-center">Login</h1>
      <div>
        <label class="block mb-1 text-sm font-medium">Email</label>
        <input v-model="email" type="email" required class="form-input w-full rounded" />
      </div>
      <div>
        <label class="block mb-1 text-sm font-medium">Password</label>
        <input v-model="password" type="password" required class="form-input w-full rounded" />
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function login() {
  localStorage.setItem('loggedIn', 'true')
  router.push('/')
}
</script>
