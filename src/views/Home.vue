<template>
  <Toolbar title="Home">
    <template #content>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <HelloI18n></HelloI18n>
    </template>
  </Toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toolbar from '../components/Toolbar.vue'
import HelloI18n from "@/components/HelloI18n.vue";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    Toolbar,
    HelloI18n
    },
})
</script>