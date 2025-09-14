<template>
    <div class="init-page">
      <!-- Aquí va el contenido de tu componente -->
  <h1>Limpieza Energética</h1>
  <p class="explicacion">La limpieza energética te ayuda a liberar bloqueos, energías negativas y cargas emocionales. Es ideal para recuperar tu bienestar y armonía interior.</p>
  <button class="volver-btn" @click="$router.push({ name: 'homePage' })">Volver al inicio</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "LimpiezasPage",
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
    background: linear-gradient(135deg, #a8e063 0%, #56c6e6 60%, #43cea2 100%);
    /* verde-azul sanación */
  }

  h1 {
    color: rgb(255, 255, 255);;
    
  }
  </style>
  