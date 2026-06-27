<template>
  <div id="home-page" class="friendly-home">
    <!-- Hero -->
    <div class="hero-section">
      <div class="hero-bg">
        <svg class="hero-blob blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(126,87,194,0.08)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.6C87,15.2,81.3,30.3,72.4,43.5C63.5,56.7,51.4,67.9,37.5,75.8C23.6,83.7,7.9,88.3,-7.5,87.8C-22.9,87.3,-38.2,81.7,-51.2,72.1C-64.2,62.5,-75.1,48.8,-81.1,33.1C-87.1,17.4,-88.4,-0.3,-83.8,-15.9C-79.3,-31.5,-68.9,-45,-56.5,-52.8C-44.1,-60.6,-29.8,-62.7,-16.6,-68.7C-3.4,-74.7,8.7,-84.6,22.4,-85.5C36.2,-86.4,30.6,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg class="hero-blob blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(128,222,234,0.08)" d="M39.9,-62.2C54.6,-58.3,71.5,-54.3,79.9,-43.1C88.3,-31.9,88.3,-13.5,83.8,2.8C79.3,19,70.3,33,59.1,44.1C47.8,55.2,34.4,63.3,19.9,69.1C5.5,74.9,-10.1,78.4,-24.7,74.8C-39.3,71.2,-52.8,60.5,-62.3,47C-71.8,33.5,-77.3,17.1,-78.1,0.4C-78.9,-16.3,-75,-33.4,-65.2,-46C-55.4,-58.6,-39.7,-66.8,-24.5,-68.9C-9.3,-71,5.4,-67.1,16.7,-60.4C28,-53.7,25.2,-66,39.9,-62.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div class="welcome-section">
        <div class="welcome-icon">
          <svg viewBox="0 0 100 100" width="80" height="80">
            <defs>
              <linearGradient id="sun-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#7e57c2" />
                <stop offset="100%" stop-color="#80deea" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="20" fill="url(#sun-grad)" />
            <g stroke="url(#sun-grad)" stroke-width="2.5" stroke-linecap="round">
              <line x1="50" y1="10" x2="50" y2="22" />
              <line x1="50" y1="78" x2="50" y2="90" />
              <line x1="10" y1="50" x2="22" y2="50" />
              <line x1="78" y1="50" x2="90" y2="50" />
              <line x1="22.5" y1="22.5" x2="31" y2="31" />
              <line x1="69" y1="69" x2="77.5" y2="77.5" />
              <line x1="22.5" y1="77.5" x2="31" y2="69" />
              <line x1="69" y1="31" x2="77.5" y2="22.5" />
            </g>
          </svg>
        </div>
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

.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-blob {
  position: absolute;
  width: 600px;
  height: 600px;
}

.blob-1 {
  top: -200px;
  right: -150px;
}

.blob-2 {
  bottom: -200px;
  left: -150px;
}

.welcome-section {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 3rem 1rem 3rem;
}

.welcome-icon {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
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
  border: 1px solid transparent;
  border-radius: var(--radius-lg);
  padding: 2.5rem 1.5rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow-md);
  color: var(--primary-deep);
  position: relative;
  overflow: hidden;
}

.service-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(126,87,194,0.03), rgba(128,222,234,0.03));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-btn:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--primary);
  box-shadow: 0 20px 40px rgba(126, 87, 194, 0.2);
}

.service-btn:hover::before {
  opacity: 1;
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
  border-radius: var(--radius-xl);
  padding: 3rem;
  margin: 2rem 1rem;
  box-shadow: var(--shadow-lg);
  transition: all 0.4s ease;
}

.connect-section:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px rgba(126, 87, 194, 0.1);
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
  border-radius: var(--radius-xl);
  text-align: center;
  transition: all 0.4s ease;
}

.philosophy-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px rgba(126, 87, 194, 0.1);
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

