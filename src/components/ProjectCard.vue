<template>
  <div
    class="group h-full overflow-hidden rounded-xl bg-white dark:bg-white/10 dark:backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-white/20"
  >
    <div class="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
      <img
        :src="project.image"
        :alt="project.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300"
      ></div>
      <span
        class="absolute bottom-4 left-4 rtl:right-4 rtl:left-auto px-3 py-1 bg-primary text-secondary text-xs font-bold rounded-full"
      >
        {{ project.category }}
      </span>
    </div>

    <div class="p-6 space-y-4">
      <div>
        <h3
          class="text-xl font-bold text-secondary dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors"
        >
          {{ project.name }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ project.description }}
        </p>
      </div>

      <div
        v-if="project.highlights"
        class="space-y-2 pt-2 border-t border-gray-200 dark:border-white/20"
      >
        <div
          v-for="highlight in project.highlights"
          :key="highlight"
          class="flex items-start space-x-2 rtl:space-x-reverse text-xs text-gray-600 dark:text-gray-400"
        >
          <CheckCircle2 class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <span>{{ highlight }}</span>
        </div>
      </div>

      <router-link
        to="/contact"
        class="inline-flex items-center space-x-2 rtl:space-x-reverse text-sm font-semibold text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors mt-2"
      >
        <span>{{ locale === "ar" ? "استفسر الآن" : "Inquire Now" }}</span>
        <ArrowRight
          class="w-4 h-4"
          :class="locale === 'ar' ? 'rotate-180' : ''"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAppStore } from "../stores/useAppStore";
import { CheckCircle2, ArrowRight } from "lucide-vue-next";

const appStore = useAppStore();
const locale = computed(() => appStore.locale);

defineProps<{
  project: {
    name: string;
    category: string;
    categoryValue: string;
    image: string;
    description: string;
    highlights?: string | string[];
  };
}>();
</script>
