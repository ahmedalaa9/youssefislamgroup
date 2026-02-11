<template>
  <div class="flex justify-center items-center h-[80vh]">
    <h1 class="text-5xl font-bold mt-20">Comming Soon ...</h1>
  </div>
  <!-- <div class="min-h-screen pt-20">
    <section
      class="relative h-[50vh] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt="Projects"
          class="w-full h-full object-cover"
        />
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

    <section class="py-20 bg-white dark:bg-secondary-light">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="filter in filters"
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              activeFilter === filter.value
                ? 'bg-primary text-secondary shadow-lg'
                : 'bg-accent-light dark:bg-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-secondary-lighter',
            ]"
          >
            {{ t(filter.label) }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.name"
            :project="project"
          />
        </div>

        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <p class="text-gray-500 dark:text-gray-400 text-lg">
            {{ t('projects.noProjects') }}
          </p>
        </div>
      </div>
    </section>
  </div> -->
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import ProjectCard from "../components/ProjectCard.vue";

const { t } = useI18n();

const activeFilter = ref("all");

const filters = [
  { value: "all", label: "projects.filter.all" },
  { value: "factories", label: "projects.filter.factories" },
  { value: "warehouses", label: "projects.filter.warehouses" },
  { value: "showrooms", label: "projects.filter.showrooms" },
];

const projectsData = [
  {
    key: "zamil_tanks",
    category: "factories",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
  },
  {
    key: "gulf_3p",
    category: "factories",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop",
  },
  {
    key: "paper_world",
    category: "factories",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop",
  },
  {
    key: "glc",
    category: "factories",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    key: "insulated_doors",
    category: "factories",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
  },
  {
    key: "premium_aluminum",
    category: "factories",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
  },
  {
    key: "bayan_steel",
    category: "warehouses",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
];

const projects = computed(() =>
  projectsData.map((p) => ({
    name: t(`projects.${p.key}.name`),
    category: t(`projects.filter.${p.category}`),
    categoryValue: p.category,
    image: p.image,
    description: t(`projects.${p.key}.desc`),
    highlights: Array.isArray(t(`projects.${p.key}.highlights`))
      ? t(`projects.${p.key}.highlights`)
      : [],
  })),
);

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projects.value;
  }
  return projects.value.filter(
    (project) => project.categoryValue === activeFilter.value,
  );
});
</script>
