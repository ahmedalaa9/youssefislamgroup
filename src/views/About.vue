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
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
          alt="About us"
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
          {{ t("about.title") }}
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto">
          {{ t("about.subtitle") }}
        </p>
      </div>
    </section>

    <section class="py-20 bg-white dark:bg-secondary-light">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-secondary dark:text-white">
              {{ t('about.whoWeAre') }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {{ t("about.description") }}
            </p>
            <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {{ t('about.portfolioText') }}
            </p>
          </div>

          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
              alt="Construction team"
              class="rounded-lg shadow-2xl"
            />
            <div
              class="absolute -bottom-6 -right-6 rtl:-left-6 rtl:right-auto w-64 h-64 bg-primary/20 rounded-lg -z-10"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-accent-light dark:bg-secondary">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            class="bg-white dark:bg-secondary-light p-8 rounded-lg shadow-lg"
          >
            <div class="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div class="p-3 bg-primary/10 rounded-full">
                <Eye class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-2xl font-bold text-secondary dark:text-white">
                {{ t("about.vision") }}
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("about.visionText") }}
            </p>
          </div>

          <div
            class="bg-white dark:bg-secondary-light p-8 rounded-lg shadow-lg"
          >
            <div class="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div class="p-3 bg-primary/10 rounded-full">
                <Target class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-2xl font-bold text-secondary dark:text-white">
                {{ t("about.mission") }}
              </h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("about.missionText") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white dark:bg-secondary-light">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-secondary dark:text-white mb-4">
            {{ t("about.values") }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="text-center p-6 bg-accent-light dark:bg-secondary rounded-lg hover:shadow-lg transition-shadow"
          >
            <div
              class="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center"
            >
              <component :is="value.icon" class="w-10 h-10 text-primary" />
            </div>
            <h3 class="text-xl font-bold text-secondary dark:text-white mb-2">
              {{ t(value.title) }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-secondary dark:bg-black text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6 italic text-primary">
          "{{ t("slogan") }}"
        </h2>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto">
          {{ t('about.sloganDesc') }}
        </p>
      </div>
    </section>
  </div> -->
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { Eye, Target, Award, Clock, Users, Shield } from "lucide-vue-next";

const { t } = useI18n();

const values = [
  { icon: Award, title: "about.value1" },
  { icon: Clock, title: "about.value2" },
  { icon: Users, title: "about.value3" },
  { icon: Shield, title: "about.value4" },
];
</script>
