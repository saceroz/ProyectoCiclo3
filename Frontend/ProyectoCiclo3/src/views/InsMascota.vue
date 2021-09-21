<template>
  <!--- agrege la barra donde estan las rutas que redirecionan a 
  las demas vistas ademas de una imagen - joel----->
  <v-app>
    <div class="home">
        <img alt="logo" src="../assets/MascotasVacunadas.jpg">
    </div>
    <v-app-bar
      app
      color="primary"
      dark
      >
      <v-spacer></v-spacer>
      
      <div id="app">
        <div id="nav">
        
        <router-link to="/inscripcion">Inscripción </router-link>
        <router-link to="/consulta">Consulta</router-link>
        <router-link to="/insmascota">Inscribir Mascota</router-link>
        </div> 
      </div>
      
    <v-spacer></v-spacer>

    <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          min-width="60"
          src="https://cdn-icons-png.flaticon.com/128/2372/2372856.png"
          transition="scale-transition"
          width="60"
        />
        </div>
    
    </v-app-bar>
    
    
    
    <Mascota></Mascota>
  </v-app>
  
</template>

<script>
import Mascota from '../components/Mascota.vue'

export default {
  
  name: 'InsMascota',
  components: {
    Mascota   
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>