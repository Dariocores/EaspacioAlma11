<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="navbar-left" @click="$router.push('/')" style="cursor: pointer;">
        <img src="@/assets/icons/espacio-exterior.png" alt="Icono Galaxia" class="navbar-icon" />
        <h2 class="navbar-title">Espacio Alma 11</h2>
      </div>
      
      <!-- Desktop Menu -->
      <div class="navbar-right">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/registrosPage" class="nav-link">Registros</router-link>
        <router-link to="/tarotPage" class="nav-link">Tarot</router-link>
        <router-link to="/limpiezaPage" class="nav-link">Limpieza</router-link>
        <router-link to="/reikiPage" class="nav-link">Reiki</router-link>
        <button class="contact-btn" @click="$emit('open-contact')">Contacto</button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="menu-btn" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <span v-if="!isMobileMenuOpen">&#9776;</span>
        <span v-else>&times;</span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <router-link to="/" class="mobile-link" @click="isMobileMenuOpen = false">Inicio</router-link>
        <router-link to="/registrosPage" class="mobile-link" @click="isMobileMenuOpen = false">Registros</router-link>
        <router-link to="/tarotPage" class="mobile-link" @click="isMobileMenuOpen = false">Tarot</router-link>
        <router-link to="/limpiezaPage" class="mobile-link" @click="isMobileMenuOpen = false">Limpieza</router-link>
        <router-link to="/reikiPage" class="mobile-link" @click="isMobileMenuOpen = false">Reiki</router-link>
        <button class="contact-btn mobile" @click="$emit('open-contact'); isMobileMenuOpen = false">Contacto</button>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMobileMenuOpen: false
    }
  }
}
</script>

<style scoped>
.navbar {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
  display: flex;
  align-items: center;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.navbar-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-deep);
  margin: 0;
}

.navbar-icon {
  width: 40px;
  height: 40px;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  font-size: 0.95rem;
  color: var(--text-muted);
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after, 
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link:hover, 
.router-link-active {
  color: var(--primary);
}

.contact-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(126, 87, 194, 0.2);
}

.contact-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(126, 87, 194, 0.3);
}

.menu-btn {
  display: none;
  background: var(--primary-light);
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  color: var(--text-dark);
}

.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: var(--bg-card);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.5rem;
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.mobile-link {
  text-decoration: none;
  color: var(--text-dark);
  padding: 1rem;
  border-radius: 12px;
  font-weight: 500;
  transition: background 0.2s;
}

.mobile-link:hover, .mobile-link.router-link-active {
  background: var(--primary-light);
  color: var(--primary);
}

.contact-btn.mobile {
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
}

@media (max-width: 850px) {
  .navbar-right {
    display: none;
  }
  .menu-btn {
    display: block;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
