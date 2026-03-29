<template>
  <div class="service-page-container">
    <div class="content-card">
      <h1>Limpieza Energética</h1>
      <div class="description">
        <p>La limpieza energética te ayuda a liberar bloqueos, energías negativas y cargas emocionales. Es ideal para recuperar tu bienestar y armonía interior.</p>
        <p>A través de diferentes técnicas, trabajamos en tu campo sutil para restaurar el flujo vital y permitir que la luz vuelva a brillar en tu interior.</p>
      </div>
      <div class="benefits">
        <h3>Beneficios:</h3>
        <ul>
          <li>Mayor claridad mental</li>
          <li>Reducción del estrés y ansiedad</li>
          <li>Mejora en el descanso nocturno</li>
          <li>Sensación de ligereza y paz</li>
        </ul>
      </div>
      <button class="action-btn" @click="$emit('open-contact')">Solicitar sesión</button>
      <button class="volver-btn" @click="$router.push('/')">Volver al inicio</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LimpiezasPage",
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

.benefits {
  text-align: left;
  background: #f3f0f8;
  padding: 1.5rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.benefits h3 {
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

  