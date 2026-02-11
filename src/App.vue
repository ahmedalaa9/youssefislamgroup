<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "./stores/useAppStore";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const appStore = useAppStore();

onMounted(() => {
  appStore.initTheme();
  appStore.initLocale();
});
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-secondary text-gray-900 dark:text-white"
  >
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
