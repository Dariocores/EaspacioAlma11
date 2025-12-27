<template>
    <div class="init-page">
      <h1>Registros Akáshicos</h1>
      <p class="explicacion">Los Registros Akáshicos son una memoria energética donde se guarda toda la información de tu alma, experiencias y aprendizajes.</p>

      <section class="cards-grid" aria-label="Opciones de Registros">
        <ServiceCard
          title="Lectura Individual"
          subtitle="Sesión 60 min"
          :description="'Exploración profunda de tu alma y guía personalizada.'"
          duration="60 min"
          price="$40"
          icon="🔮"
          @request="openContact"
        />
        <ServiceCard
          title="Sesión Intro"
          subtitle="Sesión 30 min"
          :description="'Sesión breve para preguntas puntuales.'"
          duration="30 min"
          price="$25"
          icon="📘"
          @request="openContact"
        />
        <ServiceCard
          title="Reporte Escrito"
          subtitle="Entrega 3 días"
          :description="'Resumen escrito con hallazgos y recomendaciones.'"
          duration="—"
          price="$60"
          icon="✍️"
          @request="openContact"
        />
        <ServiceCard
          title="Seguimiento"
          subtitle="Sesiones mensuales"
          :description="'Acompañamiento para integrar procesos.'"
          duration="45 min"
          price="$30"
          icon="🌿"
          @request="openContact"
        />
      </section>

      <button class="volver-btn" @click="$router.push({ name: 'homePage' })">Volver al inicio</button>

      <ContactForm :show="showContact" @close="showContact = false" />
    </div>
  </template>
  
  <script>
  export default {
    name: "RegistrosPage",
    components: {
      ServiceCard: () => import('../components/ServiceCard.vue'),
      ContactForm: () => import('../components/ContactForm.vue')
    },
    data() {
      return { showContact: false };
    },
    methods: {
      openContact(service) {
        // prefill could be added later; for now just open modal
        this.showContact = true;
      }
    },
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
      background: linear-gradient(135deg, #6a5acd 0%, #b39ddb 60%, #512da8 100%);
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
  