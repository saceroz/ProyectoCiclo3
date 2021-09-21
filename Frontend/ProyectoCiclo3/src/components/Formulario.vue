<template>
  <v-form>
    <v-container >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="first"
            label="Primer Nombre"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="Primer Apellido"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="Numero de identificación"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="Correo Electronico"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="Contraseña"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Segundo Nombre"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="last"
            label="Segundo Apellido"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="Dirección de Residencia"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="Celular"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="first"
            label="Repetir contraseña"
            outlined
          ></v-text-field>

        </v-col>
      </v-row>
    </v-container>
  </v-form>
  
</template>