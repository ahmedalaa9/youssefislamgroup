<template>
  <div
    class="group h-full overflow-hidden rounded-2xl bg-white dark:bg-white/[0.07] dark:backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-white/10"
  >
    <!-- Image Section -->
    <div
      v-if="project.images && project.images.length > 0"
      class="relative overflow-hidden bg-gray-100 dark:bg-gray-800"
    >
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{
          transform: `translateX(${appStore.locale === 'ar' ? currentImageIndex * 100 : -(currentImageIndex * 100)}%)`,
        }"
      >
        <div
          v-for="(image, index) in project.images"
          :key="index"
          class="w-full flex-shrink-0 cursor-pointer"
          @click="$emit('open-image', image)"
        >
          <img
            :src="image"
            :alt="project.name"
            class="w-full h-auto max-h-[320px] object-contain bg-gray-50 dark:bg-gray-900/50 group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        v-if="project.images.length > 1"
        @click.stop="prevImage"
        class="absolute start-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-primary hover:text-secondary transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
      >
        <component
          :is="appStore.locale === 'ar' ? ChevronRight : ChevronLeft"
          class="w-5 h-5"
        />
      </button>
      <button
        v-if="project.images.length > 1"
        @click.stop="nextImage"
        class="absolute end-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-primary hover:text-secondary transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
      >
        <component
          :is="appStore.locale === 'ar' ? ChevronLeft : ChevronRight"
          class="w-5 h-5"
        />
      </button>

      <!-- Dots -->
      <div
        v-if="project.images.length > 1"
        class="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 rtl:space-x-reverse z-10 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5"
      >
        <button
          v-for="(_, index) in project.images"
          :key="index"
          @click.stop="currentImageIndex = index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="
            currentImageIndex === index
              ? 'bg-primary w-5'
              : 'bg-white/50 hover:bg-white/80'
          "
        ></button>
      </div>

      <!-- Image counter badge -->
      <div
        v-if="project.images.length > 1"
        class="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full z-10"
      >
        {{ currentImageIndex + 1 }} / {{ project.images.length }}
      </div>
    </div>

    <!-- No Image Placeholder -->
    <div
      v-else
      class="relative h-48 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-800/80 dark:to-gray-900 flex items-center justify-center"
    >
      <div class="text-center">
        <Building2
          class="w-14 h-14 text-gray-300 dark:text-gray-600 mx-auto mb-2"
        />
        <span class="text-xs text-gray-400 dark:text-gray-500 font-medium">{{
          locale === "ar" ? "صورة قريباً" : "Image coming soon"
        }}</span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-5 space-y-4">
      <!-- Project Name -->
      <h3
        class="text-lg font-bold text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 leading-relaxed text-center"
      >
        {{ project.name }}
      </h3>

      <!-- Metadata -->
      <div
        class="space-y-2.5 pt-3 border-t border-gray-100 dark:border-white/10"
      >
        <!-- Owner -->
        <div
          v-if="project.owner"
          class="flex items-start gap-2.5 text-sm"
        >
          <div
            class="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center mt-0.5"
          >
            <UserCircle class="w-4 h-4 text-primary" />
          </div>
          <div>
            <span class="text-gray-400 dark:text-gray-500 text-xs block">{{
              locale === "ar" ? "المالك" : "Owner"
            }}</span>
            <span class="text-gray-700 dark:text-gray-200 font-medium">{{
              project.owner
            }}</span>
          </div>
        </div>

        <!-- Area -->
        <div
          v-if="project.area"
          class="flex items-start gap-2.5 text-sm"
        >
          <div
            class="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center mt-0.5"
          >
            <Maximize2 class="w-4 h-4 text-primary" />
          </div>
          <div>
            <span class="text-gray-400 dark:text-gray-500 text-xs block">{{
              locale === "ar" ? "المساحة" : "Area"
            }}</span>
            <span class="text-gray-700 dark:text-gray-200 font-medium">{{
              project.area
            }}</span>
          </div>
        </div>

        <!-- Location -->
        <div
          v-if="project.location"
          class="flex items-start gap-2.5 text-sm"
        >
          <div
            class="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center mt-0.5"
          >
            <MapPin class="w-4 h-4 text-primary" />
          </div>
          <div>
            <span class="text-gray-400 dark:text-gray-500 text-xs block">{{
              locale === "ar" ? "الموقع" : "Location"
            }}</span>
            <span class="text-gray-700 dark:text-gray-200 font-medium">{{
              project.location
            }}</span>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="pt-2">
        <router-link
          to="/contact"
          class="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-secondary rounded-xl font-semibold transition-all duration-300 space-x-2 rtl:space-x-reverse text-sm"
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
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  UserCircle,
  Maximize2,
  MapPin,
  Building2,
} from "lucide-vue-next";

const appStore = useAppStore();
const locale = computed(() => appStore.locale);

const props = defineProps<{
  project: {
    name: string;
    owner?: string;
    area?: string;
    location?: string;
    images: string[];
  };
}>();

defineEmits(["open-image"]);

const currentImageIndex = ref(0);

const nextImage = () => {
  if (props.project.images && props.project.images.length > 0) {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % props.project.images.length;
  }
};

const prevImage = () => {
  if (props.project.images && props.project.images.length > 0) {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + props.project.images.length) %
      props.project.images.length;
  }
};
</script>
