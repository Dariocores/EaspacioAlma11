<template>
  <div class="gallery-section">
    <h2 class="section-title">Galería de experiencias</h2>
    <p class="section-subtitle">Espacios, momentos y herramientas que forman parte de este camino de sanación.</p>

    <div class="gallery-grid">
      <div
        v-for="(img, i) in gallery"
        :key="i"
        class="gallery-item"
        :class="{ 'tall': img.tall, 'wide': img.wide }"
        :style="{ animationDelay: `${i * 0.08}s` }"
      >
        <img v-if="img.src" :src="img.src" :alt="img.alt" loading="lazy" />
        <div v-else class="gallery-placeholder" @click="openContact">
          <span class="placeholder-icon">+</span>
          <span class="placeholder-text">{{ img.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GallerySection',
  inject: ['openContact'],
  data() {
    return {
      gallery: [
        { src: '', alt: 'Sesión de Reiki', label: 'Sesión de Reiki', tall: true },
        { src: '', alt: 'Mazo de Tarot', label: 'Lectura de Tarot' },
        { src: '', alt: 'Velas y sahumerios', label: 'Limpieza Energética', wide: true },
        { src: '', alt: 'Cuaderno de Registros', label: 'Registros Akáshicos' },
        { src: '', alt: 'Espacio de sanación', label: 'Nuestro espacio', tall: true },
      ]
    }
  }
}
</script>

<style scoped>
.gallery-section {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--primary-deep);
  text-align: center;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  margin-bottom: 3rem;
  font-size: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}

.gallery-item {
  border-radius: var(--radius-md);
  overflow: hidden;
  animation: fadeUp 0.6s ease-out both;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.gallery-item.tall {
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-light), #e0f7fa);
  border: 2px dashed var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  color: var(--primary);
}

.gallery-placeholder:hover {
  background: linear-gradient(135deg, var(--primary), #80deea);
  color: white;
  border-color: transparent;
}

.placeholder-icon {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1;
}

.placeholder-text {
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  padding: 0 0.5rem;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }
  .gallery-item.wide {
    grid-column: span 2;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
  }
  .gallery-item.tall,
  .gallery-item.wide {
    grid-row: span 1;
    grid-column: span 1;
  }
}
</style>
