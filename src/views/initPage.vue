<template>
    <div class="init-page">
      <div>
  <h1>Bienvenidos a Espacio Alma 11</h1>
  <p class="explicacion">Este es tu espacio de sanación y autodescubrimiento. Aquí encontrarás servicios y herramientas para tu bienestar espiritual y emocional.</p>
  <button class="volver-btn" @click="$router.push({ name: 'homePage' })">Volver al inicio</button>
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
  .volver-btn {
    margin-top: 2rem;
    background: #7e57c2;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(126,87,194,0.08);
    transition: background 0.2s;
  }
  .volver-btn:hover {
    background: #5e35b1;
  }
  /* Contenedor principal */
  .init-page {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(135deg, #fffde4 0%, #ffe9c6 60%, #ffd6a5 100%);
    /* neutro-cálido bienvenida */
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
  