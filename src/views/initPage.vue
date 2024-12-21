<template>
  <div class="init-page">
    <h1>Bienvenidos !!</h1>

    <br /><br />
    <br /><br />

    <h3>
      En esta página encontrarás [describe brevemente lo que ofrece tu página,
      por ejemplo: información, servicios, productos, etc.]. Nuestro objetivo es
      [mencionar tu misión o propósito principal].
      <br /><br />

      Te invitamos a explorar y descubrir todo lo que hemos preparado para ti.
      ¡Gracias por visitarnos!
    </h3>
  </div>
</template>

<script>
export default {
  name: "InitPage",
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
