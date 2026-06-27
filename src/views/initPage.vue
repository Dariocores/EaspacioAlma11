<template>
  <div class="init-page">
    <h1>Bienvenidos a Espacio Alma 11</h1>
    <p class="explicacion">
      Este es tu espacio de sanación y autodescubrimiento. Aquí encontrarás servicios
      y herramientas para tu bienestar espiritual y emocional.
    </p>
    <p class="descripcion">
      Ofrecemos sesiones de Registros Akáshicos, Lectura de Tarot, Limpieza Energética
      y Reiki. Nuestro objetivo es acompañarte en tu camino de evolución personal,
      brindándote claridad, equilibrio y paz interior.
    </p>
    <button class="volver-btn" @click="$router.push({ name: 'homePage' })">
      Explorar servicios
    </button>
  </div>
</template>

<script>
export default {
  name: "InitPage",
};
</script>

<style scoped>
.init-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  padding: 2rem;
  background: linear-gradient(135deg, #fffde4 0%, #ffe9c6 60%, #ffd6a5 100%);
  text-align: center;
}

.init-page h1 {
  font-size: clamp(2rem, 6vw, 3rem);
  color: var(--primary-deep);
  margin-bottom: 1rem;
}

.explicacion {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 1rem;
}

.descripcion {
  font-size: 1rem;
  color: var(--text-light);
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.volver-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 8px 15px rgba(126, 87, 194, 0.2);
}

.volver-btn:hover {
  background: #5e35b1;
  transform: scale(1.05);
}
</style>
  