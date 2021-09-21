<template>
  
      <div id="cont">
          <h1></h1>
          <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">NombreMascota</th>
              <th class="text-left">NombrePropietario</th>
              <th class="text-left">ÚltimaFechaVacunación</th>
              <th class="text-left">NombreVacuna</th>
              <th class="text-left">AlertaNotificación</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in mascota" :key="item.NombreMascota">
              <td>
                  <img 
                    :src="item.PicUrl"
                    :alt="item.NombreMascota"
                  />
              </td>
              <td>{{ item.NombreMascota }}</td>
              <td>{{ item.NombrePropietario }}</td>
              <td>{{ item.ÚltimaFechaVacunación }}</td>
              <td>{{ item.NombreVacuna }}</td>
              <td>{{ item.AlertaNotificación }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    
</template>

<script>
import store from '../store/index.js'

export default {
    data: ()=>{
        return{

        }
    },
    methods: {

    },
    created: ()=>{
        //Acceder a las acciones del store
        store.dispatch('getMascota');
    },
    //Propiedad computada
    computed: {
        mascota: ()=>{
            return store.state.mascota; //Se cargan las tarjetas con la información de las mascotas.
        }
    }
}
</script>

<style>

</style>