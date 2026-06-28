<template>
  <div class="testimonials-section">
    <h2 class="section-title">Lo que dicen quienes ya vivieron la experiencia</h2>

    <div class="testimonials-grid">
      <div
        v-for="(t, i) in testimonials"
        :key="i"
        class="testimonial-card"
        :style="{ animationDelay: `${i * 0.1}s` }"
      >
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">"{{ t.text }}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">
            <img v-if="t.avatar" :src="t.avatar" :alt="t.name" />
            <span v-else class="avatar-placeholder">{{ t.name.charAt(0) }}</span>
          </div>
          <div>
            <strong>{{ t.name }}</strong>
            <span class="author-service">{{ t.service }}</span>
          </div>
        </div>
      </div>
    </div>

    <p class="add-testimonial">
      ¿Tuviste una experiencia? 
      <button class="link-btn" @click="openContact">Compartí tu testimonio</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  inject: ['openContact'],
  data() {
    return {
      testimonials: [
        {
          text: 'La sesión de Registros Akáshicos fue reveladora. Sentí una claridad que no había tenido en años. Muy agradecida por esta experiencia.',
          name: 'María L.',
          service: 'Registros Akáshicos',
          avatar: ''
        },
        {
          text: 'El Reiki me ayudó a liberar tensiones que cargaba hace meses. Después de la sesión sentí una paz profunda. Lo recomiendo totalmente.',
          name: 'Carlos G.',
          service: 'Reiki',
          avatar: ''
        },
        {
          text: 'La limpieza energética fue justo lo que necesitaba para cerrar un ciclo difícil. Me fui sintiendo ligera y renovada.',
          name: 'Ana P.',
          service: 'Limpieza Energética',
          avatar: ''
        },
        {
          text: 'La lectura de tarot fue muy precisa. Me dio las respuestas que estaba buscando y una nueva perspectiva sobre mi presente.',
          name: 'Sofía R.',
          service: 'Tarot',
          avatar: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials-section {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--primary-deep);
  text-align: center;
  margin-bottom: 3rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.testimonial-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  animation: fadeUp 0.6s ease-out both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.stars {
  color: #f5b342;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.testimonial-text {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), #80deea);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.testimonial-author strong {
  display: block;
  color: var(--primary-deep);
  font-size: 0.95rem;
}

.author-service {
  font-size: 0.8rem;
  color: var(--primary);
}

.add-testimonial {
  text-align: center;
  margin-top: 3rem;
  color: var(--text-light);
  font-size: 0.95rem;
}

.link-btn {
  background: none;
  border: none;
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.95rem;
}

.link-btn:hover {
  color: var(--primary-dark);
}
</style>
