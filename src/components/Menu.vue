<template>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
           <ion-item routerLink="/">
          <i slot="start" class="icon ion-md-heart"></i>
          Home
        </ion-item>
        <ion-item routerLink="/about">
          <i slot="start" class="icon ion-md-heart"></i>
          About
        </ion-item>
         <ion-item routerLink="/tickerList">
          <i slot="start" class="icon ion-md-heart"></i>
          Ticker list
        </ion-item>
          <ion-item routerLink="/porfolio">
          <i slot="start" class="icon ion-md-heart"></i>
          Porfolio
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<style>
.my-custom-menu {
  --width: 500px;
}
</style>

<script>
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonButton,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  menuController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon
  },
  methods: {
    openFirst() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
    openEnd() {
      menuController.open("end");
    },
    openCustom() {
      menuController.enable(true, "custom");
      menuController.open("custom");
    },
  },
});
</script>