<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{nombreMascota}}
        </div>
        <v-list-item-title class="mb-1">
          {{descripcion}}
        </v-list-item-title>
        <v-list-item-subtitle>{{ultimaFechaV}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions class="j-center">
      <v-btn
      color="primary"
        outlined
        tile
        text
      >
        Editar
      </v-btn>
      <v-btn
        color="error"
        outlined
        tile
        text
      >
        Eliminar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props:{
        nombreMascota: String,
        ultimaFechaV: String,
        descripcion: String,
    },
    methods:{
        editar(){
            console.log("editar")
        },
        eliminar(){
            console.log("editar")
        }
    }
}
</script>

<style>
.j-center{
    justify-content: center;
}
</style>