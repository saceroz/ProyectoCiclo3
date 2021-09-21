<template>
  <v-form>
     <v-container fluid>
      <v-row>
        <v-col 
          cols="2"
          sm="2"
        >
          <v-text-field
            v-model="first"
            label="Nombre"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="2"
          sm="2"
        >
          <v-text-field
            v-model="first"
            label="Edad"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col cols="2">
          <v-autocomplete
            v-model="values"
            :items="items"
            Perro
            Gato
            Hamster
            Conejo
            label="Animal"
            outlined
          ></v-autocomplete>
        </v-col>
        <v-col cols="2">
          <v-autocomplete
            v-model="values"
            :items="tipos"
            Samoyedo
            Bulldog
            Sin raza
            San Bernardo
            label="Raza"
            outlined
          ></v-autocomplete>
        </v-col >
      </v-row>
      <h3>Sufre de alergias</h3>
      <v-row>
       <p>{{ selected }}</p>
    <v-checkbox
      v-model="selected"
      label="Si"
      value="Si"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="No"
      value="No"
    ></v-checkbox>
    </v-row>
      <v-col cols="12" sm="6" >
          <v-text-field v-model="first" label="Descripción" outlined>
          </v-text-field>
      </v-col>
       <v-row>
         <v-col cols="12" sm="6">
        <v-text-field v-model="first" label="Nombre de la ultima vacuna aplicada" outlined>
        </v-text-field>
         </v-col>
        </v-row>
    <v-row>
    <v-date-picker
      v-model="picker"
      color="green lighten-1"
    ></v-date-picker>
    </v-row>
    </v-container>
 </v-form>
</template>
<script>
  export default {
    data: () => ({
      items: ['Perro', 'Gato', 'Hamster', 'Conejo'],
      tipos: ['Samoyedo', 'Bulldog', 'Sin raza', 'San Bernardo'],
      values: ['foo', 'bar'],
      value: null,
    }),
  }
</script>