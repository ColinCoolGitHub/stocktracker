<template>
   <Toolbar title="Ticker list">
    <template #content>
      ticker list page!
      liste des actions ou crypto acheter avec la date, quantité et prix
    </template>
  </Toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toolbar from '../components/Toolbar.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Toolbar
  },
});
</script>
