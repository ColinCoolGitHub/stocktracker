<template>
   <Toolbar title="About">
    <template #content>
      about page!
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
