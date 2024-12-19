<template>
  <div class="init-page">
    <h1>Registros Akashicos</h1>
    
    <div class="images-container">
      <img src="../assets/images/registros01.jpg" alt="Limpieza 1">
      <img src="../assets/images/registros02.jpg" alt="Limpieza 2">
    </div>
    
    <h2>¿Qué son los registros akáshicos?</h2>
    <p>
      Los registros akáshicos son una especie de "biblioteca energética" que contiene 
      toda la información sobre las experiencias, emociones, pensamientos y aprendizajes 
      de cada ser, a lo largo de todas sus vidas. Provienen del término sánscrito 
      <strong>akasha</strong>, que significa éter o espacio.
    </p>
    <h3>¿Para qué sirven?</h3>
    <ul>
      <li>Comprender patrones repetitivos o bloqueos en sus vidas.</li>
      <li>Obtener respuestas sobre su propósito o camino espiritual.</li>
      <li>Sanar emociones o traumas del pasado.</li>
      <li>Conectar con su esencia y avanzar en su desarrollo personal.</li>
    </ul>
    <p>
      En esencia, permiten acceder a información para crecer y tomar decisiones 
      más conscientes.
    </p>
  </div>
</template>

<script>
export default {
  name: "LimpiezasPage",
};
</script>

<style scoped>
/* Reset para evitar problemas de márgenes y paddings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  overflow-x: hidden; /* Elimina el scroll horizontal */
}

.init-page {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%; /* No excede el ancho del viewport */
  min-height: 100vh; /* Ajusta para cubrir toda la ventana */
  padding: 20px;
  background: linear-gradient(45deg, #52568f, #011122, #6313af);
}

h1 {
  color: #ffffff;
  margin-bottom: 20px; /* Espacio inferior reducido */
  text-align: center;
}

h3 {
  color: #ffffff;
  max-width: 800px; /* Limita el ancho del texto */
  text-align: justify;
  margin-top: 20px; /* Espacio superior entre texto e imágenes */
}

.images-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px; /* Espacio entre imágenes */
  margin-bottom: 30px; /* Espacio inferior entre imágenes y texto */
  max-width: 100%; /* Evita que se desborde */
  overflow-x: hidden;
}

.images-container img {
  width: 300px; /* Tamaño ajustado */
  height: 300px;
  object-fit: cover; /* Ajusta la imagen sin deformar */
  border-radius: 10px; /* Bordes redondeados para un mejor diseño */
}

.akashic-records {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #ffffff;
}
.akashic-records h1 {
  color: #ffffff;
}
.akashic-records ul {
  margin: 0;
  padding: 0 0 0 20px;
}
.akashic-records li {
  margin-bottom: 8px;
}
</style>
