<template>
<div class="login">
<v-card id="card" class="mx-auto" width="350">
    <h1> INICIO SESIÓN </h1>
    <v-img
      src="../assets/MascotasVacunadas.jpg"
      height="180"
      contain
    ></v-img>

    <v-card-tex>
      <v-form class="mx-5">
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
    <div class="contenedor">
      <v-card-actions id="bt1">
      <v-btn depressed color="error" elevation="2" block @click="login">INICIAR SESIÓN</v-btn>
      </v-card-actions>
    
    <v-card-actions id="bt1">
      <v-btn depressed color="primary" elevation="2" block @click="registro">REGISTRARME</v-btn>
    </v-card-actions>
    </div>
    <router-link to="/recuperarContraseña" class="span">¿Olvidaste tu contraseña?</router-link>
  </v-card>
</div>
  
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
.login{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#card {
  height: fit-content;
  justify-content: center;
}
h1{
  text-align: center;
}

#bt1 {
   justify-content: center;
}
.contenedor{
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 70%;
}
.span{
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  padding: 1.3rem;
  color: blue;
  text-decoration: none;
}

</style>