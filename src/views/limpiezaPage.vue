<template>
    <div class="init-page">
      <!-- Aquí va el contenido de tu componente -->
      <h1>Hola desde LimpiezaPage</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "LimpiezasPage",
  };
  </script>
  
  <style scoped>
 .init-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Asegura que ocupe todo el ancho disponible */
  height: 100%; /* Ocupar todo el espacio disponible */
  background: linear-gradient(45deg, #52568f, #011122,  #6313af);
}

  h1 {
    color: rgb(255, 255, 255);;
    
  }
  </style>
  