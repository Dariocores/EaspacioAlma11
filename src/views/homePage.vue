<template>
  <div id="home-page" class="friendly-home">
    <!-- Bienvenida principal -->
    <div class="welcome-section">
      <div class="welcome-icon"> <span class="icon-sun">&#9728;</span> </div>
      <h1>Bienvenido a tu<br>espacio de sanación</h1>
      <p class="subtitle">Encuentra equilibrio, claridad y paz interior a través de nuestras terapias holísticas.</p>
      
      <div class="service-buttons">
        <router-link to="/registrosPage" class="service-btn">
          <span class="service-icon">🔮</span>
          <span>Registros Akáshicos</span>
        </router-link>
        <router-link to="/tarotPage" class="service-btn">
          <span class="service-icon">🎴</span>
          <span>Tarot</span>
        </router-link>
        <router-link to="/limpiezaPage" class="service-btn">
          <span class="service-icon">✨</span>
          <span>Limpieza Energética</span>
        </router-link>
        <router-link to="/reikiPage" class="service-btn">
          <span class="service-icon">🌟</span>
          <span>Reiki</span>
        </router-link>
      </div>
    </div>

    <!-- Sección de conexión y llamada a la acción -->
    <div class="connect-section">
      <div class="connect-info">
        <h2>¿Qué son los Registros Akáshicos?</h2>
        <p>Es una memoria universal de la existencia, un espacio multidimensional donde se archivan todas las experiencias del alma. Acceder a ellos te brinda guía y sanación profunda.</p>
        <button class="cta-btn" @click="openContact">Reservar sesión</button>
      </div>
      <div class="connect-icon">
        <span class="icon-book">&#128214;</span>
      </div>
    </div>

    <!-- Sección sobre mí o filosofía -->
    <div class="philosophy-section">
      <div class="philosophy-card">
        <h3>Nuestra Filosofía</h3>
        <p>En Espacio Alma 11, creemos que cada ser posee la capacidad innata de sanar. Nuestro propósito es acompañarte en ese proceso de recordar quién eres realmente.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  inject: ['openContact'],
};
</script>

<style scoped>
.friendly-home {
  padding-bottom: 4rem;
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-section {
  text-align: center;
  margin: 4rem 1rem 3rem 1rem;
}

.welcome-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

h1 {
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  color: var(--primary-deep);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto 3rem auto;
}

.service-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
}

.service-btn {
  text-decoration: none;
  background: var(--bg-card);
  border: 1px solid #eee;
  border-radius: 24px;
  padding: 2.5rem 1.5rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  color: var(--primary-deep);
}

.service-btn:hover {
  transform: translateY(-10px);
  border-color: #7e57c2;
  box-shadow: 0 15px 30px rgba(126, 87, 194, 0.15);
}

.service-icon {
  font-size: 3rem;
}

.service-btn span:last-child {
  font-weight: 600;
  font-size: 1.1rem;
}

.connect-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  background: var(--bg-card);
  border-radius: 32px;
  padding: 3rem;
  margin: 2rem 1rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.connect-info {
  flex: 1;
}

.connect-info h2 {
  font-size: 2rem;
  color: var(--primary-deep);
  margin-bottom: 1rem;
}

.connect-info p {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-btn {
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

.cta-btn:hover {
  background: var(--primary-dark);
  transform: scale(1.05);
}

.connect-icon {
  font-size: 5rem;
  flex-shrink: 0;
}

.philosophy-section {
  margin: 4rem 1rem;
}

.philosophy-card {
  background: var(--primary-light);
  padding: 3rem;
  border-radius: 32px;
  text-align: center;
}

.philosophy-card h3 {
  font-size: 1.8rem;
  color: var(--primary-deep);
  margin-bottom: 1rem;
}

.philosophy-card p {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .connect-section {
    flex-direction: column-reverse;
    text-align: center;
    padding: 2rem;
  }
  
  .connect-icon {
    font-size: 4rem;
  }
  
  .service-buttons {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .service-buttons {
    grid-template-columns: 1fr;
  }
}
</style>

