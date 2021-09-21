<template>
  <v-card id="card" class="mx-auto" max-width="350">
    <h1> INICIO SESIÓN </h1>
    <v-img
      src="../assets/MascotasVacunadas.jpg"
      height="100%"
    ></v-img>

    <v-card-tex>
      <v-form>
        <v-text-field
          label="Usuario"
          placeholder="Número Identificación"
          outlined
        ></v-text-field>
        <v-text-field
          label="Contraseña"
          placeholder="Contraseña"
          outlined
        ></v-text-field>
      </v-form>
    </v-card-tex>

    <v-card-actions id="bt1">
      <v-btn depressed color="error" elevation="14" x-large @click="login">INICIAR SESIÓN</v-btn>
    </v-card-actions>
    
    <v-card-actions id="bt2">
      <v-btn depressed color="primary" elevation="14" x-large @click="registro">REGISTRARME</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: ()=>{
      return{

      }
    },

    methods: {
      login(){
        console.log("Vereficando credenciales..");
        this.$router.push('/consulta');
      },
      registro(){
        console.log("Vereficando credenciales..");
        this.$router.push('/inscripcion')
      }
    }
}
    
</script>

<style>
#card {
  margin: 2%;
  justify-content: center;
}
h1{
  text-align: center;
}

#bt1 {
   justify-content: center;
  
}
#bt2 {
   justify-content: center;
}

</style>