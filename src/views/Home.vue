<template>
  <div class="min-h-screen">
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
          alt="Construction site"
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
          class="text-5xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow leading-tight"
          v-motion
          :initial="{ opacity: 0, y: -50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 200 },
          }"
        >
          {{ t("hero.title1") }}
          <br />
          {{ t("hero.title2") }}
        </h1>
        <p
          class="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 400 },
          }"
        >
          {{ t("hero.subtitle") }}
        </p>
        <div
          class="flex gap-4 justify-center items-center"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, delay: 600 },
          }"
        >
          <router-link
            to="/gallery"
            class="inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 bg-primary hover:bg-primary-dark text-secondary font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>{{ t("hero.cta") }}</span>
          </router-link>
          <router-link
            to="/contact"
            class="inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 bg-primary hover:bg-primary-dark text-secondary font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>{{ t("hero.cta2") }}</span>
            <ArrowRight
              class="w-5 h-5"
              :class="locale === 'ar' ? 'rotate-180' : ''"
            />
          </router-link>
        </div>
      </div>

      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown class="w-8 h-8 text-white" />
      </div>
    </section>

    <!-- Stats Section -->
    <section
      class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden"
    >
      <!-- Decorative Elements -->
      <div
        class="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      ></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="group relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary hover:shadow-[0_0_30px_rgba(243,204,3,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex justify-between items-center"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 200 },
            }"
          >
            <div>
              <div
                class="text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300"
              >
                15+
              </div>
              <div class="text-gray-400 font-medium text-lg">
                {{ t("about.stats.experience") }}
              </div>
            </div>
            <div
              class="absolute -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"
              :class="locale === 'ar' ? '-left-6' : '-right-6'"
            ></div>
            <Clock
              class="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div
            class="group relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary hover:shadow-[0_0_30px_rgba(243,204,3,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex justify-between items-center"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 400 },
            }"
          >
            <div>
              <div
                class="text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300"
              >
                50+
              </div>
              <div class="text-gray-400 font-medium text-lg">
                {{ t("about.stats.projects") }}
              </div>
            </div>
            <div
              class="absolute -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"
              :class="locale === 'ar' ? '-left-6' : '-right-6'"
            ></div>
            <Building2
              class="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div
            class="group relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary hover:shadow-[0_0_30px_rgba(243,204,3,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex justify-between items-center"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 600 },
            }"
          >
            <div>
              <div
                class="text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300"
              >
                30+
              </div>
              <div class="text-gray-400 font-medium text-lg">
                {{ t("about.stats.clients") }}
              </div>
            </div>
            <div
              class="absolute -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"
              :class="locale === 'ar' ? '-left-6' : '-right-6'"
            ></div>
            <Users
              class="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- New About Us Section -->
    <section
      class="py-24 bg-white dark:bg-secondary-light relative overflow-hidden"
    >
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style="
          background-image: radial-gradient(#f3cc03 1px, transparent 1px);
          background-size: 32px 32px;
        "
      ></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text Content -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 800, delay: 200 },
            }"
          >
            <div
              class="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm mb-6"
            >
              {{ t("about.whoWeAre") }}
            </div>
            <h2
              class="text-4xl lg:text-5xl font-bold text-secondary dark:text-white mb-8 leading-tight"
            >
              <span class="text-primary">{{
                t("home.about_new.title").split(" ")[0]
              }}</span>
              {{ t("home.about_new.title").split(" ").slice(1).join(" ") }}
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              {{ t("home.about_new.description") }}
            </p>
            <router-link
              to="/about"
              class="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary font-bold hover:text-primary-dark transition-colors group"
            >
              <span>{{ t("home.about_new.readMore") }}</span>
              <ArrowRight
                class="w-5 h-5 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
              />
            </router-link>
          </div>

          <!-- Semantic Image Grid -->
          <div
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 800, delay: 400 },
            }"
          >
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=800&fit=crop"
                  alt="Industrial Construction"
                  class="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=600&fit=crop"
                  alt="Factory Interior"
                  class="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div class="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=600&fit=crop"
                  alt="Engineering Planning"
                  class="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=800&fit=crop"
                  alt="Construction Site"
                  class="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            <!-- Decorative Circle -->
            <div
              class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 bg-gray-50 dark:bg-black relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <h2
            class="text-4xl sm:text-5xl font-bold text-secondary dark:text-white mb-4"
          >
            <span class="text-primary">{{ t("why.title").split(" ")[0] }}</span>
            {{ t("why.title").split(" ").slice(1).join(" ") }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {{ t("why.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 200 },
            }"
            class="group p-8 bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-primary"
          >
            <div
              class="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors duration-300"
            >
              <Lightbulb
                class="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("why.expertise.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("why.expertise.description") }}
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 300 },
            }"
            class="group p-8 bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-primary"
          >
            <div
              class="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors duration-300"
            >
              <Cog
                class="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("why.technical.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("why.technical.description") }}
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 400 },
            }"
            class="group p-8 bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-primary"
          >
            <div
              class="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors duration-300"
            >
              <Handshake
                class="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("why.partnerships.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("why.partnerships.description") }}
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 500 },
            }"
            class="group p-8 bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-primary"
          >
            <div
              class="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors duration-300"
            >
              <CheckCircle2
                class="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("why.turnkey.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("why.turnkey.description") }}
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 600 },
            }"
            class="group p-8 bg-white dark:bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-primary"
          >
            <div
              class="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary transition-colors duration-300"
            >
              <Shield
                class="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300"
              />
            </div>
            <h3 class="text-xl font-bold text-secondary dark:text-white mb-3">
              {{ t("why.commitment.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ t("why.commitment.description") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Zamil Section -->
    <section
      class="py-24 bg-gradient-to-br from-secondary via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden"
    >
      <div
        class="absolute inset-0 opacity-20"
        style="
          background-image: linear-gradient(
            30deg,
            #f3cc03 1px,
            transparent 1px
          );
          background-size: 40px 40px;
        "
      ></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div
            class="inline-block px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm mb-6 uppercase tracking-wider"
          >
            {{ t("about.values") }}
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold mb-6">
            <span class="text-primary">{{
              t("zamil.title").split(" ")[0]
            }}</span>
            {{ t("zamil.title").split(" ").slice(1).join(" ") }}
          </h2>
          <p class="text-primary text-xl font-semibold mb-4">
            {{ t("zamil.subtitle") }}
          </p>
          <p class="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            {{ t("zamil.description") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 200 },
            }"
            class="group p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-6 shadow-lg shadow-primary/20"
            >
              <Building2 class="w-8 h-8 text-secondary" />
            </div>
            <h3
              class="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
            >
              {{ t("zamil.project1") }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t("zamil.project1Desc") }}
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 400 },
            }"
            class="group p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-6 shadow-lg shadow-primary/20"
            >
              <Warehouse class="w-8 h-8 text-secondary" />
            </div>
            <h3
              class="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
            >
              {{ t("zamil.project2") }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t("zamil.project2Desc") }}
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 600 },
            }"
            class="group p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div
              class="flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-6 shadow-lg shadow-primary/20"
            >
              <Lightbulb class="w-8 h-8 text-secondary" />
            </div>
            <h3
              class="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
            >
              {{ t("zamil.project3") }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t("zamil.project3Desc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-white dark:bg-secondary-light relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <h2
            class="text-4xl sm:text-5xl font-bold text-secondary dark:text-white mb-4"
          >
            <span class="text-primary">{{
              t("services.title").split(" ")[0]
            }}</span>
            {{ t("services.title").split(" ").slice(1).join(" ") }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {{ t("services.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            v-for="(service, index) in services"
            :key="service.icon"
            :icon="service.icon"
            :title="t(service.title)"
            :description="t(service.description)"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: index * 100 },
            }"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-accent-light dark:bg-secondary overflow-hidden">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1, transition: { duration: 1000 } }"
      >
        <div class="text-center">
          <h2
            class="text-4xl sm:text-5xl font-bold text-secondary dark:text-white mb-4"
          >
            {{ t("trusted.title") }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            {{ t("trusted.subtitle") }}
          </p>
        </div>
      </div>

      <div class="relative">
        <div class="flex animate-scroll">
          <div
            class="flex space-x-12 rtl:space-x-reverse px-6"
            v-for="n in 2"
            :key="n"
          >
            <div
              v-for="client in clients"
              :key="client"
              class="flex items-center justify-center min-w-[200px] h-24 px-8 bg-white dark:bg-secondary-light rounded-lg shadow-md"
            >
              <span
                class="text-lg font-semibold text-secondary dark:text-white whitespace-nowrap"
              >
                {{ client }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-secondary dark:bg-black text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          class="text-3xl sm:text-4xl font-bold mb-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          {{ t("home.cta.title") }}
        </h2>
        <p
          class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 200 },
          }"
        >
          {{ t("home.cta.text") }}
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: 400 },
          }"
        >
          <router-link
            to="/contact"
            class="inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 bg-primary hover:bg-primary-dark text-secondary font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>{{ t("nav.contact") }}</span>
            <ArrowRight
              class="w-5 h-5"
              :class="locale === 'ar' ? 'rotate-180' : ''"
            />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "../stores/useAppStore";
import ServiceCard from "../components/ServiceCard.vue";
import {
  ArrowRight,
  ChevronDown,
  Lightbulb,
  Cog,
  Handshake,
  CheckCircle2,
  Shield,
  Building2,
  Warehouse,
  Clock,
  Users,
} from "lucide-vue-next";

const { t } = useI18n();
const appStore = useAppStore();
const locale = computed(() => appStore.locale);

const services = [
  {
    icon: "building",
    title: "services.construction",
    description: "services.constructionDesc",
  },
  {
    icon: "zap",
    title: "services.electrical",
    description: "services.electricalDesc",
  },
  {
    icon: "droplet",
    title: "services.plumbing",
    description: "services.plumbingDesc",
  },
  { icon: "wind", title: "services.hvac", description: "services.hvacDesc" },
  {
    icon: "trees",
    title: "services.landscaping",
    description: "services.landscapingDesc",
  },
  {
    icon: "wrench",
    title: "services.turnkey",
    description: "services.turnkeyDesc",
  },
];

const clients = [
  "Zamil Group",
  "GLC Arabia",
  "Gulf 3P",
  "Paper World",
  "Premium Aluminum",
  "Bayan Steel",
];
</script>
