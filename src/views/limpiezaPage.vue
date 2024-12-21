<template>
  <div class="init-page">
    <h1>Limpieza energética</h1>

    <div class="images-container">
      <img src="../assets/images/limpieza01.jpg" alt="Limpieza 1" />
      <img src="../assets/images/limpieza02.jpg" alt="Limpieza 2" />
    </div>

    <h3>
      La limpieza energética es un conjunto de prácticas y técnicas diseñadas
      para eliminar las energías negativas o densas que pueden acumularse en
      espacios, objetos o personas. Estas energías suelen ser el resultado de
      emociones como el estrés, la tristeza o la ira, así como de situaciones de
      conflicto o ambientes cargados.
      <br /><br />
      El objetivo principal de una limpieza energética es restablecer el
      equilibrio, la claridad y la armonía en el entorno y en quienes lo
      habitan. Existen diversas formas de realizar una limpieza energética,
      adaptadas a diferentes creencias y tradiciones. Entre las más comunes se
      encuentran el uso de herramientas como el sahumerio (con hierbas como la
      salvia, el romero o el palo santo), baños con sal marina o hierbas
      específicas, cristales como el cuarzo o la amatista, y técnicas de
      meditación y visualización.
      <br /><br />
      También se pueden emplear sonidos armónicos, como cuencos tibetanos,
      campanas o música relajante, que ayudan a elevar la vibración del espacio.
      El proceso de limpieza energética es tanto un acto físico como espiritual.
      Implica una intención clara de liberar aquello que ya no sirve, acompañado
      de un enfoque en la renovación y la positividad.
      <br /><br />
      En resumen, la limpieza energética es una práctica poderosa y
      transformadora que permite conectar con una sensación de bienestar,
      protección y tranquilidad, ayudándonos a vivir en un entorno más ligero y
      lleno de energía positiva.
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
