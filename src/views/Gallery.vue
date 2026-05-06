<template>
  <div class="min-h-screen pt-20">
    <section
      class="relative h-[50vh] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <video
          src="/images/glc-vedio.mp4"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover"
        ></video>
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"
        ></div>
      </div>

      <div
        class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1
          class="text-5xl sm:text-6xl font-bold text-white mb-4 animate-fade-in text-shadow"
        >
          {{ t("projects.title") }}
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto">
          {{ t("projects.subtitle") }}
        </p>
      </div>
    </section>

    <section class="py-20 bg-gray-50 dark:bg-secondary-light">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in projects"
            :key="project.name"
            :project="project"
            @open-image="selectedImage = $event"
          />
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      @click="selectedImage = null"
    >
      <button
        class="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
        @click="selectedImage = null"
      >
        <X class="w-6 h-6" />
      </button>
      <img
        :src="selectedImage"
        class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        @click.stop
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { X } from "lucide-vue-next";

import ProjectCard from "../components/ProjectCard.vue";

const { t } = useI18n();

const selectedImage = ref<string | null>(null);

const projectsData = [
  {
    key: "khalegya",
    images: [
      "/images/gallery/khalegya/khalegya-1.jpg",
      "/images/gallery/khalegya/khalegya-2.jpg",
      "/images/gallery/khalegya/khalegya-3.jpg",
      "/images/gallery/khalegya/khalegya-4.jpg",
      "/images/gallery/khalegya/khalegya-5.jpg",
    ],
  },
  {
    key: "glc",
    images: [
      "/images/gallery/glc/glc-1.jpeg",
      "/images/gallery/glc/glc-2.jpeg",
      "/images/gallery/glc/glc-3.jpeg",
      "/images/gallery/glc/glc-4.jpeg",
    ],
  },
  {
    key: "egada",
    images: [
      "/images/gallery/egada/egada-1.jpeg",
      "/images/gallery/egada/egada-2.jpeg",
      "/images/gallery/egada/egada-3.jpeg",
      "/images/gallery/egada/egada-4.jpeg",
    ],
  },
  {
    key: "alam_elwaraa",
    images: [
      "/images/gallery/war2/war2 - 1.jpeg",
      "/images/gallery/war2/war2 - 2.jpeg",
      "/images/gallery/war2/war2 - 3.jpeg",
      "/images/gallery/war2/war2 - 4.jpeg",
      "/images/gallery/war2/war2 - 5.jpeg",
    ],
  },
  {
    key: "seken",
    images: [
      "/images/gallery/sken/sken - 1.jpeg",
      "/images/gallery/sken/sken - 2.jpeg",
      "/images/gallery/sken/sken - 3.jpeg",
    ],
  },
  {
    key: "middle_east",
    images: [
      "/images/gallery/midle/midle - 1.jpg",
      "/images/gallery/midle/midle - 2.jpg",
      "/images/gallery/midle/midle - 3.jpg",
      "/images/gallery/midle/midle - 4.jpg",
      "/images/gallery/midle/midle - 5.jpg",
    ],
  },
];

const projects = computed(() =>
  projectsData.map((p) => ({
    name: t(`projects.${p.key}.name`),
    images: p.images,
  })),
);
</script>
