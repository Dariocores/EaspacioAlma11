<template>
    <div id="home-page">
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-content">
          <!-- Icono PNG -->
          <img src="@/assets/icons/espacio-exterior.png" alt="Icono Galaxia" class="navbar-icon" />

          <h1>Espacio Alma 11</h1>
          
        </div>
      </nav>
  
      <!-- Contenido principal -->
      <div class="content-wrapper">
        <!-- Sidebar -->
        <div class="sidebar">
          <ul>
            <li><button @click="activeView = 'limpiezaPage'">Limpieza energética</button></li>
            <li><button @click="activeView = 'registrosPage'">Registros</button></li>
            <li><button @click="activeView = 'reikiPage'">Reiki</button></li>
            <li><button @click="activeView = 'tarotPage'">Tarot</button></li>
            <li><button @click="activeView = 'initPage'">Inicio</button></li>
          </ul>
        </div>
  
        <!-- Contenido dinámico -->
        <div class="main-content">
          <component :is="currentComponent"></component>
        </div>
      </div>
    </div>
  </template>
  

  <script>
  // Importa las vistas dinámicas
  import LimpiezaPage from './limpiezaPage.vue';
  import RegistrosPage from './registrosPage.vue';
  import ReikiPage from './reikiPage.vue';
  import TarotPage from './tarotPage.vue';
  import InitPage from './initPage.vue';
  
  const HomePageComponent = {
    template: `<div><h2>Bienvenido a la página principal</h2></div>`,
  };
  
  export default {
    data() {
      return {
        username: this.$route.query.username || 'Usuario',
        menuVisible: false,
        activeView: 'initPage', // Vista predeterminada
      };
    },
    computed: {
      currentComponent() {
        switch (this.activeView) {
          case 'limpiezaPage':
            return 'LimpiezaPage';
          case 'registrosPage':
            return 'RegistrosPage';
          case 'reikiPage':
            return 'ReikiPage';
          case 'tarotPage':
            return 'TarotPage';
          case 'homePage':
            return 'HomePage';
          default:
            return 'InitPage';
        }
      },
    },
    components: {
      LimpiezaPage,
      RegistrosPage,
      ReikiPage,
      TarotPage,
      InitPage,
      HomePage: HomePageComponent, // Registro explícito del componente HomePage
    },
    
  };
  </script>
  <style scope>
  #home-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  /* Navbar */
  .navbar {
    background: linear-gradient(45deg, #560c88,#565fbb, #290a5c, #a80fad);
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-content {
    display: flex;
  align-items: center;
  justify-content: center; /* Centra horizontalmente */
  width: 100%; /* Ocupa todo el espacio horizontal */
  position: relative; /* Permite posicionar otros elementos si es necesario */
    
  }
  
  .navbar-icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 50%;
    filter: invert(1) brightness(2);
    position: absolute;
  left: 20px; /* Ajusta la posición del icono al lado izquierdo */
  
  }
  
  .navbar h1 {
    margin: 0;
    font-size: 30px;
    font-weight: bold;

    
  }
  
  /* Contenido principal */
  .content-wrapper {
  display: flex;
  flex: 1;
  height: calc(100vh - 60px); /* Todo el espacio menos el navbar */
  overflow: hidden; /* Evita overflow inesperado */
}
  
.sidebar {
  width: 13%; /* El sidebar ocupa el 20% */
  background: linear-gradient(45deg, #a80fad,#1f28a8, #03203d, #a80fad);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
}
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar ul li button {
    width: 100%;
    background: linear-gradient(45deg, #1f28a8, #03203d);
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    
  }

  .sidebar ul li button:hover {
    background: linear-gradient(45deg, #03203d, #1f28a8); /* Invertir colores */
    color: #ffd700; /* Cambiar color del texto */
    transform: scale(1.05); /* Agrandar ligeramente el botón */
}
  
  

  .main-content {
  flex: 1;
  width: 100%; /* Asegura que ocupe el 100% del ancho restante */
  padding: 0; /* Elimina cualquier padding extra */
  margin: 0; /* Elimina cualquier margen extra */
  background-color: #f4f4f4;
  overflow-y: auto;
}
  
    
  </style>
