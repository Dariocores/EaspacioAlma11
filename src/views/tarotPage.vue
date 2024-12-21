<template>
  <div class="init-page">
    <h1>Tarot Evolutivo</h1>

    <div class="images-container">
      <img src="../assets/images/tarot01.jpg" alt="Tarot 1" />
      <img src="../assets/images/tarot02.jpg" alt="Tarot 2" />
    </div>

    <h3>
      El tarot evolutivo es una herramienta de autoconocimiento y desarrollo
      personal que utiliza las cartas del tarot para explorar procesos internos
      y promover el crecimiento espiritual y emocional. A diferencia de enfoques
      tradicionales centrados en predicciones, el tarot evolutivo se enfoca en
      ofrecer una perspectiva más profunda sobre los retos, aprendizajes y
      potencialidades de la vida. Busca guiar a las personas hacia la
      comprensión de sí mismas, la toma de decisiones conscientes y la
      alineación con su propósito de vida.
    </h3>
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

html,
body {
  width: 100%;
  overflow-x: hidden; /* Elimina el scroll horizontal */
}

.init-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(45deg, #bd10b4, #52568f, #0f3864, #bd10b4);
  z-index: 1;
}

.init-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/espacioalma.jpeg") center center / cover
    no-repeat;
  opacity: 0.1; /* Ajusta la opacidad para la marca de agua */
  z-index: 0;
}

h1,
h3,
.images-container {
  position: relative;
  z-index: 2; /* Asegura que el contenido esté sobre la marca de agua */
  margin: 2%;
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
</style>
