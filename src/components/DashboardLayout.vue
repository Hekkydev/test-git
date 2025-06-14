<template>
  <div class="flex min-h-screen bg-gray-50">
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4 text-xl font-semibold border-b">Event Portal</div>
      <nav class="p-4 space-y-2">
        <RouterLink to="/" class="block px-3 py-2 rounded hover:bg-gray-100">Home</RouterLink>
        <button @click="logout" class="w-full text-left px-3 py-2 rounded hover:bg-gray-100">Logout</button>
      </nav>
    </aside>
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('loggedIn')
  router.push('/login')
}
</script>
