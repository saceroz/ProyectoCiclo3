<template>
  <!--- agrege la barra donde estan las rutas que redirecionan a 
  las demas vistas ademas de una imagen - joel----->
  <div class="inscripcion">
    <Navegacion></Navegacion>
    <v-app>
      <div class="home">
        <img alt="logo" src="../assets/MascotasVacunadas.jpg" />
      </div>
      <Formulario></Formulario>
    </v-app>
  </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import Navegacion from "../components/Navegacion.vue";

export default {
  name: "Inscripcion",
  components: {
    Formulario,
    Navegacion,
  },
};
</script>
<style lang="scss">

</style>