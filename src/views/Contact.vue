<template>
  <div class="min-h-screen pt-20">
    <section
      class="relative h-[40vh] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="/images/hero-section.jpg"
          alt="Contact us"
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
          {{ t("contact.title") }}
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto">
          {{ t("contact.subtitle") }}
        </p>
      </div>
    </section>

    <section class="py-20 bg-gray-50 dark:bg-secondary-light">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl font-bold text-secondary dark:text-white mb-4">
            {{ t("contact.getInTouchTitle") }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            {{ t("contact.info") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Address -->
          <div
            class="bg-white dark:bg-secondary p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group transform hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <MapPin class="w-8 h-8 text-primary" />
            </div>
            <h4 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("contact.address") }}
            </h4>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("contact.addressText") }}
            </p>
          </div>

          <!-- Phone -->
          <div
            class="bg-white dark:bg-secondary p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group transform hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <Phone class="w-8 h-8 text-primary" />
            </div>
            <h4 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("contact.phoneLabel") }}
            </h4>
            <a
              href="tel:+966123456789"
              dir="ltr"
              class="inline-block text-gray-600 dark:text-gray-400 hover:text-primary transition-colors font-medium text-lg"
            >
              +966 12 345 6789
            </a>
          </div>

          <!-- Email -->
          <div
            class="bg-white dark:bg-secondary p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group transform hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <Mail class="w-8 h-8 text-primary" />
            </div>
            <h4 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("contact.emailLabel") }}
            </h4>
            <a
              href="mailto:info@yousefcontracting.com"
              class="inline-block text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              info@yousefcontracting.com
            </a>
          </div>

          <!-- Business Hours -->
          <div
            class="bg-white dark:bg-secondary p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group transform hover:-translate-y-1"
          >
            <div
              class="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <Clock class="w-8 h-8 text-primary" />
            </div>
            <h4 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("contact.businessHours") }}
            </h4>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("contact.businessHoursValue") }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { MapPin, Phone, Mail, Clock } from "lucide-vue-next";

const { t } = useI18n();
</script>
