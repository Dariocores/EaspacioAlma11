<template>
    <div class="init-page">
      <!-- Aquí va el contenido de tu componente -->
  <h1>Reiki</h1>
  <p class="explicacion">El Reiki es una técnica de sanación energética que utiliza la imposición de manos para equilibrar tu cuerpo, mente y espíritu, promoviendo la salud y el bienestar.</p>
  <button class="volver-btn" @click="$router.push({ name: 'homePage' })">Volver al inicio</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReikiPage",
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
      background: linear-gradient(135deg, #f8bbd0 0%, #ce93d8 60%, #ba68c8 100%);
      /* rosa-púrpura energía y paz */
    }

  h1 {
    color: rgb(255, 255, 255);;
   
  }
  </style>
  