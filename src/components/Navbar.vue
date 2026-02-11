<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-secondary-light/95 backdrop-blur-md shadow-lg transition-all duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <router-link
          to="/"
          class="flex items-center space-x-2 rtl:space-x-reverse group"
        >
          <div
            class="h-16 w-14 bg-primarys rounded-lg group-hover:shadow-lg group-hover:shadow-primary/50s transition-all mx-1"
          >
            <!-- <Building2 class="w-6 h-6 text-secondary" /> -->
            <img src="/logo.png" alt="Logo" class="w-full h-full" />
          </div>
          <div class="hidden sm:flex flex-col leading-tight mt-3">
            <span class="text-sm font-bold text-secondary dark:text-white">
              {{ t("nav.brandName") }}
            </span>
            <span class="text-xs text-gray-600 dark:text-gray-400">
              {{ t("nav.brandSubtitle") }}
            </span>
          </div>
        </router-link>

        <div class="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg transition-all duration-300"
            :class="
              currentRoute.path === link.path
                ? 'bg-primary/20 text-primarsy dark:bg-primary/30  font-extrabold'
                : 'font-semibold'
            "
          >
            {{ t(link.label) }}
          </router-link>
        </div>

        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <button
            @click="appStore.toggleTheme()"
            :aria-label="
              appStore.theme === 'light'
                ? t('nav.toggleDark')
                : t('nav.toggleLight')
            "
            class="p-2 rounded-lg bg-gray-100 dark:bg-secondary hover:bg-gray-200 dark:hover:bg-secondary-lighter text-gray-700 dark:text-yellow-400 transition-all duration-300 hover:shadow-lg"
          >
            <Sun v-if="appStore.theme === 'light'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <div
            class="hidden sm:flex items-center bg-gray-100 dark:bg-secondary rounded-lg p-1"
          >
            <button
              @click="appStore.setLocale('en')"
              :class="[
                'px-3 py-1 rounded text-xs font-semibold transition-all duration-300',
                appStore.locale === 'en'
                  ? 'bg-white dark:bg-secondary-lighter text-primary shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200',
              ]"
            >
              EN
            </button>
            <button
              @click="appStore.setLocale('ar')"
              :class="[
                'px-3 py-1 rounded text-xs font-semibold transition-all duration-300',
                appStore.locale === 'ar'
                  ? 'bg-white dark:bg-secondary-lighter text-primary shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200',
              ]"
            >
              AR
            </button>
          </div>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-secondary text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-secondary-lighter transition-all"
          >
            <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
            <X v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-2 animate-slide-down"
      >
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg transition-all duration-300"
          @click="mobileMenuOpen = false"
        >
          {{ t(link.label) }}
        </router-link>

        <div
          class="px-4 pt-2 border-t border-gray-200 dark:border-gray-700 mt-2"
        >
          <div
            class="flex items-center bg-gray-100 dark:bg-secondary rounded-lg p-1 mb-3"
          >
            <button
              @click="appStore.setLocale('en')"
              :class="[
                'flex-1 px-2 py-1 rounded text-xs font-semibold transition-all duration-300',
                appStore.locale === 'en'
                  ? 'bg-white dark:bg-secondary-lighter text-primary shadow-md'
                  : 'text-gray-600 dark:text-gray-400',
              ]"
            >
              EN
            </button>
            <button
              @click="appStore.setLocale('ar')"
              :class="[
                'flex-1 px-2 py-1 rounded text-xs font-semibold transition-all duration-300',
                appStore.locale === 'ar'
                  ? 'bg-white dark:bg-secondary-lighter text-primary shadow-md'
                  : 'text-gray-600 dark:text-gray-400',
              ]"
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useAppStore } from "../stores/useAppStore";
import { Sun, Moon, Menu, X } from "lucide-vue-next";

const { t } = useI18n();
const route = useRoute();
const appStore = useAppStore();
const mobileMenuOpen = ref(false);

const currentRoute = computed(() => route);

const navLinks = [
  { path: "/", label: "nav.home" },
  { path: "/about", label: "nav.about" },
  { path: "/services", label: "nav.services" },
  { path: "/gallery", label: "nav.gallery" },
  { path: "/contact", label: "nav.contact" },
];
</script>
