<template>
    <div class="init-page">
      <div>
        <h1>Bienvenidos a Espacio Alma 11</h1>
      </div>
      <div>
        <h3>
          En esta página encontrarás [describe brevemente lo que ofrece tu página,
           por ejemplo: información, servicios, productos, etc.]. 
          Nuestro objetivo es [mencionar tu misión o propósito principal].  
          <br><br>
          Te invitamos a explorar y descubrir todo lo que hemos preparado para ti.
           ¡Gracias por visitarnos!
        </h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "InitPage",
  };
  </script>
  
  <style scoped>
  /* Contenedor principal */
  .init-page {
    display: flex;
    flex-direction: column; /* Apilar elementos verticalmente */
    justify-content:flex-start; 
    align-items: center; /* Centrar horizontalmente */
    width: 100%; /* Ancho total del viewport */
    height: 100%; /* Altura total del viewport */
    overflow: hidden; /* Evita que aparezca el scroll */
    background: linear-gradient(45deg, #e91ab5, #011122, #6313af);
  }
  
  /* Estilo para los textos */
  .init-page h1,
  .init-page h3 {
    margin: 30px 0;
    color: white;
    text-align: center;
    padding: 2%;
    
  }

  </style>
  