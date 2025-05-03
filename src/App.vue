<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
  <button @click="$router.push('/')"
    class="quantum-anchor fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/90 to-pink-500/90 backdrop-blur-lg shadow-quantum transition-all duration-700 hover:scale-110 hover:shadow-pulse"
    aria-label="量子回歸錨點">
    <svg class="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@keyframes quantum-pulse {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.9;
  }

  50% {
    transform: translate(2px, -3px) scale(1.05);
    opacity: 1;
  }
}

.shadow-quantum {
  box-shadow: 0 0 24px -4px rgba(165, 180, 252, 0.5), 0 4px 24px -2px rgba(192, 132, 252, 0.3);
}

.shadow-pulse {
  animation: quantum-pulse 1.5s ease-in-out infinite;
  box-shadow:
    0 0 32px -6px rgba(165, 180, 252, 0.7),
    0 4px 48px -4px rgba(192, 132, 252, 0.5),
    inset 0 -2px 8px rgba(255, 255, 255, 0.3);
}

.quantum-anchor {
  transition:
    transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    box-shadow 0.6s ease-out;
}
</style>
