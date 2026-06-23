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

const { t, locale } = useI18n();

const selectedImage = ref<string | null>(null);

const projectsData = [
  {
    key: "premium",
    owner_ar: "شركة مصنع بريميوم للصناعات المعدنية",
    owner_en: "Premium Metal Industries Factory Co.",
    area: "40,950",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/premium/premium-1.jpeg",
      "/images/gallery/premium/premium-2.jpeg",
      "/images/gallery/premium/premium-3.jpeg",
      "/images/gallery/premium/premium-4.jpeg",
      "/images/gallery/premium/premium-5.jpeg",
      "/images/gallery/premium/premium-6.jpeg",
      "/images/gallery/premium/premium-7.jpeg",
      "/images/gallery/premium/premium-8.jpeg",
      "/images/gallery/premium/premium-9.jpeg",
    ],
  },
  {
    key: "seken",
    owner_ar: "شركة راسي",
    owner_en: "Rasi Company",
    area: "9,831",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/sken/sken - 1.jpeg",
      "/images/gallery/sken/sken - 2.jpeg",
      "/images/gallery/sken/sken - 3.jpeg",
    ],
  },
  {
    key: "drasa",
    owner_ar: "شركة دراسة للفحص",
    owner_en: "Drasa Inspection Company",
    area: "9,598",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/drasa/drasa-1.jpeg",
      "/images/gallery/drasa/drasa-2.jpeg",
      "/images/gallery/drasa/drasa-3.jpeg",
      "/images/gallery/drasa/drasa-4.jpeg",
      "/images/gallery/drasa/drasa-5.jpeg",
    ],
  },
  {
    key: "adan",
    owner_ar: "شركة عدان العالمية",
    owner_en: "Adan International Company",
    area: "8,700",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/adan/adan-1.jpeg",
      "/images/gallery/adan/adan-2.jpeg",
      "/images/gallery/adan/adan-3.jpeg",
      "/images/gallery/adan/adan-4.jpeg",
    ],
  },
  {
    key: "bayan",
    owner_ar: "شركة المحمدية لتجارة الحديد وتشكيل المعادن",
    owner_en: "Al Mohammadiyah Iron Trading & Metal Forming Co.",
    area: "8,700",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/bayan/bayan-1.jpeg",
      "/images/gallery/bayan/bayan-2.jpeg",
      "/images/gallery/bayan/bayan-3.jpeg",
      "/images/gallery/bayan/bayan-4.jpeg",
      "/images/gallery/bayan/bayan-5.jpeg",
      "/images/gallery/bayan/bayan-6.jpeg",
    ],
  },

  {
    key: "hawa",
    owner_ar: "شركة الهواء النقي للغازات الصناعية",
    owner_en: "Pure Air Industrial Gases Company",
    area: "3,381",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/hawa/hawa-1.jpeg",
      "/images/gallery/hawa/hawa-2.jpeg",
      "/images/gallery/hawa/hawa-3.jpeg",
      "/images/gallery/hawa/hawa-4.jpeg",
      "/images/gallery/hawa/hawa-5.jpeg",
      "/images/gallery/hawa/hawa-6.jpeg",
      "/images/gallery/hawa/hawa-7.jpeg",
      "/images/gallery/hawa/hawa-8.jpeg",
      "/images/gallery/hawa/hawa-9.jpeg",
    ],
  },
  {
    key: "egada",
    owner_ar: "",
    owner_en: "",
    area: "",
    location_ar: "",
    location_en: "",
    images: [
      "/images/gallery/egada/egada-1.jpeg",
      "/images/gallery/egada/egada-2.jpeg",
      "/images/gallery/egada/egada-3.jpeg",
      "/images/gallery/egada/egada-4.jpeg",
      "/images/gallery/egada/egada-5.jpeg",
      "/images/gallery/egada/egada-6.jpeg",
      "/images/gallery/egada/egada-7.jpeg",
      "/images/gallery/egada/egada-8.jpeg",
    ],
  },
  {
    key: "glc",
    owner_ar: "شركة جي ال سي العربية للدهانات",
    owner_en: "GLC Arabia Paints Company",
    area: "22,500",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/glc/glc-1.jpeg",
      "/images/gallery/glc/glc-2.jpeg",
      "/images/gallery/glc/glc-3.jpeg",
      "/images/gallery/glc/glc-4.jpeg",
      "/images/gallery/glc/glc-5.jpeg",
      "/images/gallery/glc/glc-6.jpeg",
      "/images/gallery/glc/glc-7.jpeg",
      "/images/gallery/glc/glc-8.jpeg",
      "/images/gallery/glc/glc-9.jpeg",
      "/images/gallery/glc/glc-10.jpeg",
    ],
  },
  {
    key: "middle_east",
    owner_ar: "شركة ميدل ايست للصناعة",
    owner_en: "Middle East Manufacturing Company",
    area: "11,700",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/midle/midle-1.jpeg",
      "/images/gallery/midle/midle-2.jpeg",
      "/images/gallery/midle/midle-3.jpeg",
      "/images/gallery/midle/midle-4.jpeg",
      "/images/gallery/midle/midle-5.jpeg",
      "/images/gallery/midle/midle-6.jpeg",
      "/images/gallery/midle/midle-7.jpeg",
      "/images/gallery/midle/midle-8.jpeg",
      "/images/gallery/midle/midle-9.jpeg",
      "/images/gallery/midle/midle-10.jpeg",
    ],
  },
  {
    key: "khalegya",
    owner_ar: "الشركة الخليجية لأنظمة التعبئة والتغليف",
    owner_en: "Gulf Packaging Systems Company",
    area: "22,493",
    location_ar: "المدينة الصناعية الأولى بجدة",
    location_en: "1st Industrial City, Jeddah",
    images: [
      "/images/gallery/khalegya/khalegya-1.jpeg",
      "/images/gallery/khalegya/khalegya-2.jpeg",
      "/images/gallery/khalegya/khalegya-3.jpeg",
      "/images/gallery/khalegya/khalegya-4.jpeg",
      "/images/gallery/khalegya/khalegya-5.jpeg",
      "/images/gallery/khalegya/khalegya-6.jpeg",
    ],
  },
  {
    key: "alam_elwaraa",
    owner_ar: "شركة مصنع جوهرة البلاستيك للصناعات البلاستيكية",
    owner_en: "Jawharat Al Plastic Industries Factory Co.",
    area: "17,600",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/war2/war2-1.jpeg",
      "/images/gallery/war2/war2-2.jpeg",
      "/images/gallery/war2/war2-3.jpeg",
      "/images/gallery/war2/war2-4.jpeg",
      "/images/gallery/war2/war2-5.jpeg",
      "/images/gallery/war2/war2-6.jpeg",
      "/images/gallery/war2/war2-7.jpeg",
      "/images/gallery/war2/war2-8.jpeg",
    ],
  },
  {
    key: "shada",
    owner_ar: "مؤسسة مصنع شدى العرب للبلاستيك",
    owner_en: "Shada Al Arab Plastic Manufacturing Est.",
    area: "8,371.94",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [
      "/images/gallery/shada/shada-1.jpeg",
      "/images/gallery/shada/shada-2.jpeg",
      "/images/gallery/shada/shada-3.jpeg",
      "/images/gallery/shada/shada-4.jpeg",
      "/images/gallery/shada/shada-5.jpeg",
      "/images/gallery/shada/shada-6.jpeg",
      "/images/gallery/shada/shada-7.jpeg",
      "/images/gallery/shada/shada-8.jpeg",
    ],
  },
  {
    key: "khalegya2",
    owner_ar: "الشركة الخليجية لأنظمة التعبئة والتغليف",
    owner_en: "Gulf Packaging Systems Company",
    area: "18,000",
    location_ar: "المدينة الصناعية الثانية بجدة",
    location_en: "2nd Industrial City, Jeddah",
    images: [],
  },

  {
    key: "zamil_abiat",
    owner_ar: "شركة الزامل للصناعة والتجارة والنقل",
    owner_en: "Zamil Industry, Trading & Transport Co.",
    area: "",
    location_ar: "جدة",
    location_en: "Jeddah",
    images: [],
  },
  {
    key: "fea",
    owner_ar: "شركة الفئ المطور لفصل المواد المجمعة",
    owner_en: "Al Fea Developer Material Separation Co.",
    area: "5,000",
    location_ar: "المدينة الصناعية الأولى بجدة",
    location_en: "1st Industrial City, Jeddah",
    images: [],
  },
  {
    key: "eskan",
    owner_ar: "شركة إسكان الدولية",
    owner_en: "Eskan International Company",
    area: "10,193.5",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [],
  },
  {
    key: "waha",
    owner_ar: "شركة الواحة العربية للصناعة",
    owner_en: "Arabian Oasis Industrial Company",
    area: "12,019.46",
    location_ar: "المدينة الصناعية الثانية بجدة",
    location_en: "2nd Industrial City, Jeddah",
    images: [],
  },
  {
    key: "soyuf",
    owner_ar: "مصنع السيوف للصناعة",
    owner_en: "Al Soyuf Manufacturing Factory",
    area: "4,496.64",
    location_ar: "المدينة الصناعية الثانية بجدة",
    location_en: "2nd Industrial City, Jeddah",
    images: [],
  },
  {
    key: "ghethaa",
    owner_ar: "شركة غذاء التفوق",
    owner_en: "Ghethaa Al Tafawuq Company",
    area: "10,000",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [],
  },
  {
    key: "shawarma",
    owner_ar: "مصنع حامد موسى الزبيدي للصناعة",
    owner_en: "Hamed Mousa Al Zubaidi Manufacturing",
    area: "3,656",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [],
  },

  {
    key: "jawhara",
    owner_ar: "شركة مصنع جوهرة البلاستيك للصناعات البلاستيكية",
    owner_en: "Jawharat Al Plastic Industries Factory Co.",
    area: "8,993.29",
    location_ar: "المدينة الصناعية الثانية بجدة",
    location_en: "2nd Industrial City, Jeddah",
    images: [],
  },
  {
    key: "zawaya",
    owner_ar: "مؤسسة مصنع زوايا البلاستيك للصناعة",
    owner_en: "Zawaya Plastic Manufacturing Establishment",
    area: "2,998",
    location_ar: "المدينة الصناعية الثانية بجدة",
    location_en: "2nd Industrial City, Jeddah",
    images: [],
  },

  {
    key: "zamil_tanks",
    owner_ar: "شركة الزامل للصناعة والتجارة والنقل",
    owner_en: "Zamil Industry, Trading & Transport Co.",
    area: "",
    location_ar: "المدينة الصناعية الثالثة بجدة",
    location_en: "3rd Industrial City, Jeddah",
    images: [],
  },
  {
    key: "zamil_warehouse",
    owner_ar: "شركة الزامل للصناعة والتجارة والنقل",
    owner_en: "Zamil Industry, Trading & Transport Co.",
    area: "",
    location_ar: "الخمرة، جدة",
    location_en: "Al Khumra, Jeddah",
    images: [],
  },
  {
    key: "basateen",
    owner_ar: "",
    owner_en: "",
    area: "2,500",
    location_ar: "المدينة الصناعية الأولى بجدة",
    location_en: "1st Industrial City, Jeddah",
    images: [],
  },
  {
    key: "munawala",
    owner_ar: "",
    owner_en: "",
    area: "9,799.9",
    location_ar: "المدينة الصناعية الثالثة",
    location_en: "3rd Industrial City",
    images: [],
  },
  {
    key: "rima",
    owner_ar: "",
    owner_en: "",
    area: "8,991.5",
    location_ar: "المدينة الصناعية الثانية",
    location_en: "2nd Industrial City",
    images: [],
  },
  {
    key: "ghadeer",
    owner_ar: "",
    owner_en: "",
    area: "3,733",
    location_ar: "المدينة الصناعية الثالثة",
    location_en: "3rd Industrial City",
    images: [],
  },
];

const projects = computed(() =>
  projectsData.map((p) => ({
    name: t(`projects.${p.key}.name`),
    owner: locale.value === "ar" ? p.owner_ar : p.owner_en,
    area: p.area
      ? locale.value === "ar"
        ? `${p.area} متر مربع`
        : `${p.area} sqm`
      : "",
    location: locale.value === "ar" ? p.location_ar : p.location_en,
    images: p.images,
  })),
);
</script>
