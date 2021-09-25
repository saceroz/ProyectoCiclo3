<template>
  <!--- agrege la barra donde estan las rutas que redirecionan a 
  las demas vistas ademas de una imagen - joel----->
  <div class="consulta">
    <Navegacion></Navegacion>
<v-app>
    <div class="home">
        <img alt="logo" src="../assets/MascotasVacunadas.jpg">
    </div>
    <v-card elevation="2" class="pa-5 ma-5" min-height="500px">
      <v-row align="center" class="ma-0" justify="space between">
      <Carta nombreMascota="Mascota1" ultimaFechaV="23/09/2021" descripcion="Vacuna 1"></Carta>
      <Carta nombreMascota="Mascota1" ultimaFechaV="23/09/2021" descripcion="Vacuna 1"></Carta>
      <Carta nombreMascota="Mascota1" ultimaFechaV="23/09/2021" descripcion="Vacuna 1"></Carta>
      </v-row>
    </v-card>
    
  
  </v-app>
  
  </div>
  
</template>

<script>
import Busqueda from '../components/Busqueda.vue'
import Carta from '../components/Carta.vue'
import Navegacion from '../components/Navegacion.vue'


export default {
  
  name: 'Inscripcion',
  components: {
   
    Busqueda,
    Navegacion,
    Carta  
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