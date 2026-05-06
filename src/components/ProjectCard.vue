<template>
  <div
    class="group h-full overflow-hidden rounded-xl bg-white dark:bg-white/10 dark:backdrop-blur-md shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-white/20"
  >
    <div class="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
      <div
        class="flex h-full transition-transform duration-500 ease-out"
        :style="{
          transform: `translateX(${appStore.locale === 'ar' ? currentImageIndex * 100 : -(currentImageIndex * 100)}%)`,
        }"
      >
        <div
          v-for="(image, index) in project.images"
          :key="index"
          class="w-full h-full flex-shrink-0 cursor-pointer"
          @click="$emit('open-image', image)"
        >
          <img
            :src="image"
            :alt="project.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        v-if="project.images.length > 1"
        @click.stop="prevImage"
        class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors z-10"
      >
        <ChevronLeft
          class="w-5 h-5"
          :class="appStore.locale === 'ar' ? 'rotate-180' : ''"
        />
      </button>
      <button
        v-if="project.images.length > 1"
        @click.stop="nextImage"
        class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors z-10"
      >
        <ChevronRight
          class="w-5 h-5"
          :class="appStore.locale === 'ar' ? 'rotate-180' : ''"
        />
      </button>

      <!-- Dots -->
      <div
        v-if="project.images.length > 1"
        class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 rtl:space-x-reverse z-10"
      >
        <button
          v-for="(_, index) in project.images"
          :key="index"
          @click.stop="currentImageIndex = index"
          class="w-2 h-2 rounded-full transition-all"
          :class="
            currentImageIndex === index
              ? 'bg-primary w-4'
              : 'bg-white/60 hover:bg-white'
          "
        ></button>
      </div>

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      ></div>
    </div>

    <div class="p-6 space-y-4">
      <div class="text-center">
        <h3
          class="text-xl font-bold text-secondary dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors"
        >
          {{ project.name }}
        </h3>
      </div>

      <div class="flex justify-center">
        <router-link
          to="/contact"
          class="inline-flex items-center justify-center w-full px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-secondary rounded-lg font-semibold transition-colors mt-2 space-x-2 rtl:space-x-reverse"
        >
          <span>{{ locale === "ar" ? "استفسر الآن" : "Inquire Now" }}</span>
          <ArrowRight
            class="w-4 h-4"
            :class="locale === 'ar' ? 'rotate-180' : ''"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore } from "../stores/useAppStore";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-vue-next";

const appStore = useAppStore();
const locale = computed(() => appStore.locale);

const props = defineProps<{
  project: {
    name: string;
    images: string[];
  };
}>();

defineEmits(["open-image"]);

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % props.project.images.length;
};

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + props.project.images.length) %
    props.project.images.length;
};
</script>
