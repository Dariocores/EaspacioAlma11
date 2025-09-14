<template>
    <div class="init-page">
      <!-- Aquí va el contenido de tu componente -->
  <h1>Tarot</h1>
  <p class="explicacion">El Tarot es una herramienta de autoconocimiento y guía espiritual. A través de sus cartas, puedes recibir orientación sobre tu presente, futuro y los desafíos que enfrentas.</p>
  <button class="volver-btn" @click="$router.push({ name: 'homePage' })">Volver al inicio</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "TarotPage",
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
    .init-page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #ffd700 0%, #b388ff 60%, #6a1b9a 100%);
      /* dorado-morado misterio */
    }

  h1 {
    color: rgb(255, 255, 255);
    
  }
  </style>
  