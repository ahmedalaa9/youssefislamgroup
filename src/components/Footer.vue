<template>
  <footer class="bg-secondary dark:bg-black text-white pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="flex items-center space-x-2 rtl:space-x-reverse mb-4">
            <!-- <Building2 class="w-8 h-8 text-primary" :stroke-width="2" />
              -->
            <img src="/logo.png" alt="" class="w-12 h-14 mx-2" />
            <div class="flex flex-col">
              <span class="text-xl font-bold leading-tight">
                {{ t("footer.brandName") }}
              </span>
              <span class="text-xs text-gray-400">
                {{ t("footer.brandSubtitle") }}
              </span>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ t("footer.description") }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary">
            {{ t("footer.quickLinks") }}
          </h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                {{ t(link.name) }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary">
            {{ t("footer.services") }}
          </h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <span class="text-gray-400 text-sm">{{ t(service) }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-primary">
            {{ t("contact.info") }}
          </h3>
          <div class="space-y-3">
            <a
              href="tel:+966123456789"
              class="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-primary transition-colors text-sm"
            >
              <Phone class="w-4 h-4" />
              <span>+966 12 345 6789</span>
            </a>
            <a
              href="mailto:info@yousefcontracting.com"
              class="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-primary transition-colors text-sm"
            >
              <Mail class="w-4 h-4" />
              <span>info@yousefcontracting.com</span>
            </a>
            <div
              class="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 text-sm"
            >
              <MapPin class="w-4 h-4" />
              <span>{{ t("contact.addressText") }}</span>
            </div>
          </div>

          <div class="mt-6">
            <h4 class="text-sm font-semibold mb-3 text-primary">
              {{ t("footer.followUs") }}
            </h4>
            <div class="flex rtl:space-x-reverse gap-3">
              <a
                href="#"
                class="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin class="w-5 h-5" />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter class="w-5 h-5" />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook class="w-5 h-5" />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          {{ new Date().getFullYear() }} {{ t("footer.copyrightName") }}.
          {{ t("footer.rights") }}.
        </p>
        <p class="text-primary text-xs mt-2 italic">{{ t("slogan") }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import {
  // Building2,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-vue-next";

const { t } = useI18n();

const quickLinks = [
  { path: "/", name: "nav.home" },
  { path: "/about", name: "nav.about" },
  { path: "/gallery", name: "nav.gallery" },
  { path: "/contact", name: "nav.contact" },
];

const services = [
  "services.construction",
  "services.electrical",
  "services.plumbing",
  "services.hvac",
];
</script>
