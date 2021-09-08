<template>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
           <ion-item v-for="item in menuItems" :color="isItemSelected(item) ? 'primary':''" :key="item.id"  @click="fermerMenu(item)" :routerLink="{name:item.routeName}">
            <ion-icon :icon="item.icon" />
          {{item.title}}
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
import { heartOutline } from "ionicons/icons"
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
  data(){
    return{
    menuItems:[
      {
        id:0,
        routeName:"Home",
        title:"Home",
        icon : heartOutline,
      },
      {
        id:1,
        routeName:"About",
        title:"About",
        icon : heartOutline,
      },
          {
            id:2,
        routeName:"TickerList",
        title:"Ticker list",
        icon : heartOutline,
      },
             {
               id:3,
        routeName:"Porfolio",
        title:"Porfolio",
        icon : heartOutline,
      },
      
    ]
    }
  },
   setup() {
       return {
           heartOutline
       }
   },
  methods: {
    fermerMenu(){
      menuController.close("first")
    },
    isItemSelected(item){
      return item.routeName === this.$route.name;
    }
  },
});
</script>