<template>
    <label for="localSelect">
        {{ $t('shared.selectALocaleBellow')}}
    </label>
    <select id="localSelect" v-model="selectedLocale">
        <option v-for="locale in availableLocale" :key="locale" value="locale">
            {{ locale }}
        </option>
    </select>
</template>
<script>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n"
export default {
  name: "LangSwitcher",
  setup() {
      const { locale } = useI18n()
      const selectedLocale = computed({
          get() {
              return locale.value
          },
          set(value) {
            locale.value = value;
          }
      })
    const availableLocale = ref(["en", "fr"]);

    return {
      selectedLocale,
      availableLocale,
    };
  },
};
</script>