<template>
  <div class="flex justify-center items-center h-[80vh]">
    <h1 class="text-5xl font-bold mt-20">Comming Soon ...</h1>
  </div>
  <!-- <div class="min-h-screen pt-20">
    <section
      class="relative h-[40vh] flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
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

    <section class="py-20 bg-white dark:bg-secondary-light">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold text-secondary dark:text-white mb-8">
              {{ t("contact.getInTouchTitle") }}
            </h2>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {{ t("contact.name") }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {{ t("contact.email") }}
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {{ t("contact.phone") }}
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {{ t("contact.message") }}
                </label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder-gray-500 dark:placeholder-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-secondary font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {{
                  isSubmitting
                    ? t("contact.sending")
                    : t("contact.send")
                }}
              </button>

              <div
                v-if="submitStatus"
                :class="[
                  'p-4 rounded-lg text-center font-medium',
                  submitStatus === 'success'
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
                ]"
              >
                {{
                  submitStatus === "success"
                    ? t("contact.success")
                    : t("contact.error")
                }}
              </div>
            </form>
          </div>

          <div class="space-y-8">
            <div>
              <h3
                class="text-2xl font-bold text-secondary dark:text-white mb-6"
              >
                {{ t("contact.info") }}
              </h3>

              <div class="space-y-6">
                <div class="flex items-start space-x-4 rtl:space-x-reverse">
                  <div
                    class="p-3 bg-primary/10 dark:bg-primary/20 rounded-full flex-shrink-0"
                  >
                    <MapPin class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4
                      class="font-semibold text-secondary dark:text-white mb-1"
                    >
                      {{ t("contact.address") }}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400">
                      {{ t("contact.addressText") }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 rtl:space-x-reverse">
                  <div
                    class="p-3 bg-primary/10 dark:bg-primary/20 rounded-full flex-shrink-0"
                  >
                    <Phone class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4
                      class="font-semibold text-secondary dark:text-white mb-1"
                    >
                      {{ t("contact.phoneLabel") }}
                    </h4>
                    <a
                      href="tel:+966123456789"
                      class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      +966 12 345 6789
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-4 rtl:space-x-reverse">
                  <div
                    class="p-3 bg-primary/10 dark:bg-primary/20 rounded-full flex-shrink-0"
                  >
                    <Mail class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4
                      class="font-semibold text-secondary dark:text-white mb-1"
                    >
                      {{ t("contact.emailLabel") }}
                    </h4>
                    <a
                      href="mailto:info@yousefcontracting.com"
                      class="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      info@yousefcontracting.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-4 rtl:space-x-reverse">
                  <div
                    class="p-3 bg-primary/10 dark:bg-primary/20 rounded-full flex-shrink-0"
                  >
                    <Clock class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4
                      class="font-semibold text-secondary dark:text-white mb-1"
                    >
                      {{ t("contact.businessHours") }}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400">
                      {{ t("contact.businessHoursValue") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-secondary dark:to-secondary-lighter rounded-lg overflow-hidden shadow-lg h-80 flex items-center justify-center border border-gray-300 dark:border-gray-700"
            >
              <div class="text-center">
                <MapPin class="w-12 h-12 mx-auto mb-2 text-primary" />
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ t("contact.locationMap") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  </div> -->
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { MapPin, Phone, Mail, Clock } from "lucide-vue-next";

const { t } = useI18n();

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref<"success" | "error" | null>(null);

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    submitStatus.value = "success";
    form.name = "";
    form.email = "";
    form.phone = "";
    form.message = "";
  } catch (error) {
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      submitStatus.value = null;
    }, 5000);
  }
};
</script>
