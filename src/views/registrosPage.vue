<template>
  <div class="service-page-container">
    <div class="content-card">
      <h1>Registros Akáshicos</h1>
      <div class="description">
        <p>Los Registros Akáshicos son una memoria energética donde se guarda toda la información de tu alma, experiencias y aprendizajes. Es como una gran biblioteca de tu existencia.</p>
        <p>Acceder a tus registros te permite obtener respuestas claras, comprender patrones repetitivos y recibir la guía necesaria para tu evolución presente.</p>
      </div>
      <div class="how-it-works">
        <h3>¿Qué puedes consultar?</h3>
        <ul>
          <li>Tu propósito de vida</li>
          <li>Relaciones y vínculos</li>
          <li>Talentos y dones naturales</li>
          <li>Origen de bloqueos emocionales</li>
        </ul>
      </div>
      <button class="action-btn" @click="$emit('open-contact')">Agendar Lectura</button>
      <button class="volver-btn" @click="$router.push('/')">Volver al inicio</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrosPage",
};
</script>

<style scoped>
.content-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 32px;
  max-width: 800px;
  width: 90%;
  color: #333;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

h1 {
  color: #2b1055;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: left;
}

.how-it-works {
  text-align: left;
  background: #f3f0f8;
  padding: 1.5rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.how-it-works h3 {
  margin-top: 0;
  color: #7e57c2;
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 0.5rem;
}

.action-btn {
  background: #7e57c2;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: #5e35b1;
  transform: scale(1.05);
}

.volver-btn {
  background: transparent;
  color: #7e57c2;
  border: 2px solid #7e57c2;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.volver-btn:hover {
  background: #f3f0f8;
}

@media (max-width: 600px) {
  .content-card {
    padding: 2rem 1.5rem;
  }
  .action-btn {
    width: 100%;
    margin-bottom: 1rem;
  }
  .volver-btn {
    width: 100%;
  }
}
</style>

  