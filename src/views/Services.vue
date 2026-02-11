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
          src="https://images.unsplash.com/photo-1581094794329-cd28b6d7a820?w=1920&h=1080&fit=crop"
          alt="Engineering Services"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/70"></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <h1
          class="text-4xl md:text-6xl font-bold text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          {{ t("servicesPage.hero.title") }}
        </h1>
        <p
          class="text-xl text-gray-200 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 200 },
          }"
        >
          {{ t("servicesPage.hero.subtitle") }}
        </p>
      </div>
    </section>
 
    <section class="py-20 bg-white dark:bg-secondary-light">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in servicesList"
            :key="index"
            class="group p-8 bg-gray-50 dark:bg-secondary rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: index * 100 },
            }"
          >
            <div
              class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
            >
              <component
                :is="service.icon"
                class="w-7 h-7 text-primary group-hover:text-secondary transition-colors"
              />
            </div>
            <h3 class="text-2xl font-bold text-secondary dark:text-white mb-4">
              {{ t(service.titleKey) }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {{ t(service.descKey) }}
            </p>
            <ul class="space-y-2">
              <li
                v-for="(feature, idx) in service.features"
                :key="idx"
                class="flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <div class="w-1.5 h-1.5 bg-primary rounded-full me-2"></div>
                {{ t(feature) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
 
    <section class="py-20 bg-primary relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2
          class="text-3xl md:text-4xl font-bold text-secondary mb-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          {{ t("servicesPage.cta.title") }}
        </h2>
        <p
          class="text-secondary/80 text-lg mb-8 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 200 },
          }"
        >
          {{ t("servicesPage.cta.text") }}
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-4 bg-secondary text-white rounded-lg font-bold hover:bg-secondary-lighter transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 400 },
          }"
        >
          {{ t("servicesPage.cta.button") }}
          <ArrowRight class="ms-2 w-5 h-5 rtl:rotate-180" />
        </router-link>
      </div>
    </section>
  </div> -->
</template>

<script setup lang="ts">
// import { useI18n } from "vue-i18n";
// import {
//   Building2,
//   Zap,
//   Droplet,
//   Wind,
//   PaintBucket,
//   HardHat,
//   ArrowRight,
// } from "lucide-vue-next";

// const { t } = useI18n();

// const servicesList = [
//   {
//     icon: Building2,
//     titleKey: "servicesPage.construction.title",
//     descKey: "servicesPage.construction.desc",
//     features: [
//       "servicesPage.construction.feat1",
//       "servicesPage.construction.feat2",
//       "servicesPage.construction.feat3",
//     ],
//   },
//   {
//     icon: Zap,
//     titleKey: "servicesPage.electrical.title",
//     descKey: "servicesPage.electrical.desc",
//     features: [
//       "servicesPage.electrical.feat1",
//       "servicesPage.electrical.feat2",
//       "servicesPage.electrical.feat3",
//     ],
//   },
//   {
//     icon: Droplet,
//     titleKey: "servicesPage.plumbing.title",
//     descKey: "servicesPage.plumbing.desc",
//     features: [
//       "servicesPage.plumbing.feat1",
//       "servicesPage.plumbing.feat2",
//       "servicesPage.plumbing.feat3",
//     ],
//   },
//   {
//     icon: Wind,
//     titleKey: "servicesPage.hvac.title",
//     descKey: "servicesPage.hvac.desc",
//     features: [
//       "servicesPage.hvac.feat1",
//       "servicesPage.hvac.feat2",
//       "servicesPage.hvac.feat3",
//     ],
//   },
//   {
//     icon: PaintBucket,
//     titleKey: "servicesPage.finishing.title",
//     descKey: "servicesPage.finishing.desc",
//     features: [
//       "servicesPage.finishing.feat1",
//       "servicesPage.finishing.feat2",
//       "servicesPage.finishing.feat3",
//     ],
//   },
//   {
//     icon: HardHat,
//     titleKey: "servicesPage.consulting.title",
//     descKey: "servicesPage.consulting.desc",
//     features: [
//       "servicesPage.consulting.feat1",
//       "servicesPage.consulting.feat2",
//       "servicesPage.consulting.feat3",
//     ],
//   },
// ];
</script>
