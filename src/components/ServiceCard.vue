<template>
  <div
    class="group p-6 bg-white dark:bg-secondary-light rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
  >
    <div class="flex flex-col items-center text-center space-y-4">
      <div
        class="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors"
      >
        <component
          :is="iconComponent"
          class="w-10 h-10 text-primary"
          :stroke-width="1.5"
        />
      </div>

      <h3 class="text-xl font-bold text-secondary dark:text-white">
        {{ title }}
      </h3>

      <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Building2, Zap, Droplet, Wind, Trees, Wrench } from "lucide-vue-next";

const props = defineProps<{
  icon: string;
  title: string;
  description: string;
}>();

const iconMap = {
  building: Building2,
  zap: Zap,
  droplet: Droplet,
  wind: Wind,
  trees: Trees,
  wrench: Wrench,
};

const iconComponent = computed(
  () => iconMap[props.icon as keyof typeof iconMap] || Building2,
);
</script>
