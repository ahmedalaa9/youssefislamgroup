import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { i18n } from "../i18n";

export const useAppStore = defineStore("app", () => {
  const theme = ref<"light" | "dark">("light");
  const locale = ref<"en" | "ar">("en");

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      theme.value = "light";
    }
    applyTheme();
  };

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    applyTheme();
    localStorage.setItem("theme", theme.value);
  };

  const applyTheme = () => {
    if (theme.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const initLocale = () => {
    const savedLocale = localStorage.getItem("locale") as "en" | "ar" | null;
    if (savedLocale) {
      locale.value = savedLocale;
    } else {
      locale.value = "ar";
    }
    // Update i18n locale
    if (i18n.global.locale) {
      (i18n.global.locale as any).value = locale.value;
    }
    applyDirection();
  };

  const setLocale = (newLocale: "en" | "ar") => {
    locale.value = newLocale;
    localStorage.setItem("locale", newLocale);
    // Update i18n locale
    if (i18n.global.locale) {
      (i18n.global.locale as any).value = newLocale;
    }
    applyDirection();
  };

  const applyDirection = () => {
    document.documentElement.setAttribute(
      "dir",
      locale.value === "ar" ? "rtl" : "ltr",
    );
    document.documentElement.setAttribute("lang", locale.value);
  };

  watch(locale, applyDirection);
  watch(theme, applyTheme);

  return {
    theme,
    locale,
    toggleTheme,
    setLocale,
    initTheme,
    initLocale,
  };
});
