<template>
    <div id="home-page" class="friendly-home">
      <nav class="navbar">
        <div class="navbar-content">
          <div class="navbar-left">
            <img src="@/assets/icons/espacio-exterior.png" alt="Icono Galaxia" class="navbar-icon" />
            <h2 class="navbar-title">Espacio Alma 11</h2>
          </div>
          <div class="navbar-right">
            <button class="nav-link" @click="goTo('homePage')">Inicio</button>
            <button class="nav-link" @click="goTo('registrosPage')">Registros</button>
            <button class="nav-link" @click="goTo('tarotPage')">Tarot</button>
            <button class="nav-link" @click="goTo('limpiezaPage')">Limpieza</button>
            <button class="nav-link" @click="goTo('reikiPage')">Reiki</button>
            <button class="contact-btn" @click="showContactForm">Contacto</button>
          </div>
          <button class="menu-btn">&#9776;</button>
        </div>
      </nav>

      <!-- Bienvenida principal -->
      <div class="welcome-section">
        <div class="welcome-icon"> <span class="icon-sun">&#9728;</span> </div>
        <h1>Bienvenido a tu<br>espacio de sanación</h1>
        <div class="service-buttons">
          <button @click="goTo('registrosPage')" class="service-btn">
            <span class="service-icon">🔮</span>
            <span>Registros Akáshicos</span>
          </button>
          <button @click="goTo('tarotPage')" class="service-btn">
            <span class="service-icon">🎴</span>
            <span>Tarot</span>
          </button>
          <button @click="goTo('limpiezaPage')" class="service-btn">
            <span class="service-icon">✨</span>
            <span>Limpieza Energética</span>
          </button>
          <button @click="goTo('reikiPage')" class="service-btn">
            <span class="service-icon">🌟</span>
            <span>Reiki</span>
          </button>
        </div>
      </div>

      <!-- Sección de conexión y llamada a la acción -->
      <div class="connect-section">
        <div class="connect-info">
          <h2>Conexión con tus<br>Registros Akáshicos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          <button class="cta-btn">Reservar sesión</button>
        </div>
        <div class="connect-icon">
          <span class="icon-book">&#128214;</span>
        </div>
      </div>

      <!-- Contenido dinámico -->
      <div class="main-content">
        <component :is="currentComponent"></component>
      </div>

      <!-- Formulario de contacto -->
      <ContactForm 
        :show="showContact" 
        @close="showContact = false"
      />
    </div>
  </template>
  

  <script>
  // Importa las vistas dinámicas
  import LimpiezaPage from './limpiezaPage.vue';
  import RegistrosPage from './registrosPage.vue';
  import ReikiPage from './reikiPage.vue';
  import TarotPage from './tarotPage.vue';
  import InitPage from './initPage.vue';
  import ContactForm from '../components/ContactForm.vue';
  
  const HomePageComponent = {
    template: `<div><h2>Bienvenido a la página principal</h2></div>`,
  };
  
  export default {
    components: {
      LimpiezaPage,
      RegistrosPage,
      ReikiPage,
      TarotPage,
      InitPage,
      HomePage: HomePageComponent,
      ContactForm
    },
    data() {
      return {
        activeView: 'initPage',
        currentRoute: 'homePage',
        showContact: false
      };
    },
    methods: {
      goTo(page) {
        this.activeView = page;
        this.currentRoute = page;
        this.$router.push({ name: page });
      },
      showContactForm() {
        this.showContact = true;
      }
    },
    computed: {
      getCurrentPageName() {
        const pages = {
          homePage: 'Inicio',
          registrosPage: 'Registros Akáshicos',
          tarotPage: 'Tarot',
          limpiezaPage: 'Limpieza Energética',
          reikiPage: 'Reiki',
        };
        return pages[this.currentRoute] || this.currentRoute;
      },
      currentComponent() {
        switch (this.activeView) {
          case 'limpiezaPage':
            return LimpiezaPage;
          case 'registrosPage':
            return RegistrosPage;
          case 'reikiPage':
            return ReikiPage;
          case 'tarotPage':
            return TarotPage;
          case 'homePage':
            return HomePage;
          default:
            return InitPage;
        }
      }
    },
  };
  </script>
  <style scope>
  .friendly-home {
    font-family: 'Inter', Arial, sans-serif;
    background: linear-gradient(135deg, 
      #2b1055 0%, 
      #4b2c82 25%,
      #7137a7 50%,
      #9263c6 75%,
      #b490e5 100%
    );
    background-attachment: fixed;
    min-height: 100vh;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    padding-top: 60px; /* Espacio para la navbar fija */
    position: relative;
    overflow: hidden;
  }
  
  .friendly-home::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
      radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 20%);
    pointer-events: none;
    z-index: 1;
  }

  .friendly-home > * {
    position: relative;
    z-index: 2;
  }
  .navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    border-radius: 0 0 16px 16px;
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
    gap: 1rem;
  }

  .navbar-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .navbar-icon {
    width: 40px;
    height: 40px;
  }

  .nav-link {
    background: none;
    border: none;
    font-size: 1rem;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.5rem;
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #7e57c2;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .nav-link:hover {
    color: #7e57c2;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .contact-btn {
    background: #7e57c2;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .contact-btn:hover {
    background: #5e35b1;
    transform: translateY(-2px);
  }

  .menu-btn {
    display: none;
    background: #eee;
    border: none;
    border-radius: 8px;
    font-size: 2rem;
    padding: 0.2rem 0.8rem;
    cursor: pointer;
  }

  .breadcrumbs {
    margin-top: 80px;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    font-size: 0.9rem;
  }

  .breadcrumb-item {
    color: #666;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .breadcrumb-item:hover {
    color: #7e57c2;
  }

  .breadcrumb-item.active {
    color: #7e57c2;
    font-weight: 500;
  }

  .breadcrumb-separator {
    margin: 0 0.5rem;
    color: #999;
  }

  @media (max-width: 768px) {
    .navbar-right {
      display: none;
    }
    
    .menu-btn {
      display: block;
    }
  }
  .welcome-section {
    text-align: center;
    margin: 2rem 0 1.5rem 0;
  }
  .welcome-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  .service-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }
  .service-buttons .service-btn {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    font-size: 1.1rem;
    padding: 1.5rem 1rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: relative;
    overflow: hidden;
    color: #2b1055;
  }
  
  .service-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  .service-btn:hover::before {
    left: 100%;
  }
  
  .service-btn:hover {
    border-color: #7e57c2;
    box-shadow: 0 8px 16px rgba(126,87,194,0.15);
    transform: translateY(-2px);
  }
  
  .service-icon {
    width: 48px;
    height: 48px;
    transition: transform 0.3s ease;
  }
  
  .service-btn:hover .service-icon {
    transform: scale(1.1);
  }
  .connect-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 2rem 1rem;
    max-width: 700px;
    margin: 2rem auto 1.5rem auto;
    flex-wrap: wrap;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .connect-info {
    flex: 2;
    min-width: 220px;
  }
  .connect-info h2 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .connect-info p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
  }
  .cta-btn {
    background: #7e57c2;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(126,87,194,0.08);
    transition: background 0.2s;
  }
  .cta-btn:hover {
    background: #5e35b1;
  }
  .connect-icon {
    font-size: 2.5rem;
    flex: 1;
    min-width: 80px;
    text-align: center;
  }
  .main-content {
    margin-top: 2rem;
    padding: 1rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 600px) {
    .connect-section {
      flex-direction: column;
      gap: 1rem;
      padding: 1.2rem 0.5rem;
    }
    .main-content {
      padding: 0.5rem;
    }
    .service-buttons {
      grid-template-columns: 1fr;
      gap: 0.7rem;
    }
  }
  </style>
