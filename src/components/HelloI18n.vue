<template>
  <p>{{ t('hello') }}</p>
  <LangSwitcher />
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { LangSwitcher } from "@/components/locale/LangSwitcher.vue";

export default defineComponent({
  name: 'HelloI18n',
  components: {
    LangSwitcher
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    // Something todo ..

    return { t }
  }
})
</script>
