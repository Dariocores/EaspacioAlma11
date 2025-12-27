<template>
  <div id="app">
    <a class="skip-link" href="#home-page">Saltar al contenido</a>
    <router-view></router-view> <!-- Donde se renderizan las vistas -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Elimina el scroll y ocupa toda la pantalla */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto; /* Permite scroll natural para mejor usabilidad */
}

#app {
  min-height: 100vh;
  width: 100%;
  display: block; /* Permite que el contenido ocupe todo el espacio */
}

.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  z-index: 2000;
}

.skip-link:focus {
  left: 1rem;
  top: 1rem;
  border-radius: 6px;
}
</style>
