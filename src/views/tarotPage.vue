<template>
    <div class="init-page">
      <h1>Tarot</h1>
      <p class="explicacion">El Tarot es una herramienta de autoconocimiento y guía espiritual.</p>

      <section class="cards-grid" aria-label="Opciones de Tarot">
        <ServiceCard title="Tirada Completa" subtitle="60 min" description="Lectura completa para temáticas profundas." duration="60 min" price="$45" icon="🎴" @request="openContact" />
        <ServiceCard title="Tirada Rápida" subtitle="20 min" description="Respuesta directa a una pregunta." duration="20 min" price="$20" icon="🃏" @request="openContact" />
        <ServiceCard title="Lectura Amor" subtitle="45 min" description="Enfoque en relaciones y vínculos." duration="45 min" price="$35" icon="💖" @request="openContact" />
        <ServiceCard title="Lectura Trabajo" subtitle="45 min" description="Orientación para el ámbito profesional." duration="45 min" price="$35" icon="⚖️" @request="openContact" />
      </section>

      <button class="volver-btn" @click="$router.push({ name: 'homePage' })">Volver al inicio</button>
      <ContactForm :show="showContact" @close="showContact = false" />
    </div>
  </template>
  
  <script>
  export default {
    name: "TarotPage",
    components: {
      ServiceCard: () => import('../components/ServiceCard.vue'),
      ContactForm: () => import('../components/ContactForm.vue')
    },
    data() { return { showContact: false }; },
    methods: {
      openContact() { this.showContact = true; }
    }
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
        background: linear-gradient(135deg, #ffd700 0%, #b388ff 60%, #6a1b9a 100%);
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
    color: rgb(255, 255, 255);
    
  }
  </style>
  