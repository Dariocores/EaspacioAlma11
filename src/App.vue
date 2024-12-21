<template>
  <div id="app">
    <router-view></router-view>
    <!-- Donde se renderizan las vistas -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Elimina el scroll y ocupa toda la pantalla */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Quita el scroll */
}

#app {
  height: 100%;
  width: 100%;
  display: block; /* Permite que el contenido ocupe todo el espacio */
}
</style>
