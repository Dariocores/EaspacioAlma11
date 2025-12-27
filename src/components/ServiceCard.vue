<template>
  <article class="service-card" :aria-label="title">
    <div class="card-icon">{{ icon }}</div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-sub">{{ subtitle }}</p>
    <p class="card-desc">{{ description }}</p>
    <div class="card-meta">
      <span class="card-duration">{{ duration }}</span>
      <span class="card-price">{{ price }}</span>
    </div>
    <button class="card-cta" @click="$emit('request', title)">Solicitar</button>
  </article>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    description: { type: String, default: '' },
    duration: { type: String, default: '' },
    price: { type: String, default: '' },
    icon: { type: String, default: '🔆' }
  }
}
</script>

<style scoped>
.service-card {
  background: linear-gradient(180deg, var(--color-background-mute), var(--color-background-soft));
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  box-shadow: 0 8px 20px rgba(43,16,85,0.04);
}
.card-icon { font-size: 1.8rem; }
.card-title { margin: 0; color: var(--color-heading); }
.card-sub { margin: 0; color: rgba(43,16,85,0.7); font-weight: 600; }
.card-desc { color: var(--color-text); font-size: 0.95rem; }
.card-meta { display:flex; justify-content: space-between; color: rgba(43,16,85,0.6); font-size: 0.9rem; }
.card-cta { margin-top: auto; background: var(--color-accent); color: white; border: none; padding: 0.6rem; border-radius: 8px; cursor: pointer; }
.card-cta:hover { filter: brightness(0.95); }

@media (prefers-color-scheme: dark) {
  .service-card { background: linear-gradient(180deg, var(--color-background), var(--color-background-soft)); }
}
</style>
