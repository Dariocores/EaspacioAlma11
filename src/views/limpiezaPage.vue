<template>
    <div class="init-page">
      <h1>Limpieza Energética</h1>
      <p class="explicacion">La limpieza energética te ayuda a liberar bloqueos y recuperar tu bienestar.</p>

      <section class="cards-grid" aria-label="Opciones de Limpieza Energética">
        <ServiceCard title="Limpieza Básica" subtitle="30 min" description="Limpieza energética rápida para liberaciones puntuales." duration="30 min" price="$20" icon="✨" @request="openContact" />
        <ServiceCard title="Limpieza Profunda" subtitle="60 min" description="Sesión completa para liberar patrones profundos." duration="60 min" price="$45" icon="🕊️" @request="openContact" />
        <ServiceCard title="Limpieza con Cristales" subtitle="60 min" description="Soporte con cristales para amplificar la limpieza." duration="60 min" price="$50" icon="🔮" @request="openContact" />
        <ServiceCard title="Limpieza a Distancia" subtitle="45 min" description="Sesión remota para limpieza energética" duration="45 min" price="$35" icon="📡" @request="openContact" />
      </section>

      <button class="volver-btn" @click="$router.push({ name: 'homePage' })">Volver al inicio</button>
      <ContactForm :show="showContact" @close="showContact = false" />
    </div>
  </template>
  
  <script>
  export default {
    name: "LimpiezasPage",
    components: {
      ServiceCard: () => import('../components/ServiceCard.vue'),
      ContactForm: () => import('../components/ContactForm.vue')
    },
    data() { return { showContact: false }; },
    methods: { openContact() { this.showContact = true; } },
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
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 3rem 1rem 4rem;
    background: linear-gradient(135deg, #a8e063 0%, #56c6e6 60%, #43cea2 100%);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    width: 100%;
    max-width: 1100px;
    margin: 1.5rem 0 2rem;
  }

  h1 {
    color: rgb(255, 255, 255);;
    
  }
  </style>
  