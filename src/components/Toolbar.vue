<template>
  <ion-page>
    <ion-header>
      <ion-toolbar translucent>
        <ion-buttons slot="start">
          <ion-menu-button style="position: absolute"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <slot name="content"></slot>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonButtons,
  IonToolbar,
  IonContent,
  IonTitle,
  IonMenuButton,
  IonHeader,
  IonPage,
} from "@ionic/vue";
export default defineComponent({
  name: "Home",
  props: {
    title: String,
  },
  components: {
    IonButtons,
    IonToolbar,
    IonContent,
    IonTitle,
    IonMenuButton,
    IonHeader,
    IonPage,
  },
});
</script>
