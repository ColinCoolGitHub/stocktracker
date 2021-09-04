<template>

 <ion-app>
   <Menu></Menu>
  <ion-router-outlet id="main"></ion-router-outlet>
</ion-app>

</template>




<script>
import Menu from '../src/components/Menu.vue'
import { 
   IonApp,
  IonRouterOutlet,

} from '@ionic/vue';
export default {
  components: { Menu, 
   IonApp,
  IonRouterOutlet,
   },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
#nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
