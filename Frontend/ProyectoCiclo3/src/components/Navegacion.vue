<template>
<div>
  <v-app-bar app color="primary" dark>

    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        min-width="50"
        src="https://cdn-icons-png.flaticon.com/128/1077/1077502.png"
        transition="scale-transition"
        width="50"
      />
    </div>
    <v-spacer></v-spacer>
    <router-link class="btn_nav" to="/inscripcion">Inscripción </router-link>
    <router-link class="btn_nav" to="/consulta">Consulta</router-link>
    <router-link class="btn_nav" to="/insmascota">Inscribir Mascota</router-link>
  </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn_nav{
    border-radius: 5px;
    padding: 0.5rem;
    text-decoration: none;
    color: white !important;

}
.btn_nav:hover{
    background-color: rgb(0, 0, 0, 0.133);
    transition-duration: 2ms;
}
</style>
