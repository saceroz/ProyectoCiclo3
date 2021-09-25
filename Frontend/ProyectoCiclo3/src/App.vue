<template>
  <v-app>
    <v-main class="app">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
.app{
  align-items: center;
  text-align: center;
}
</style>