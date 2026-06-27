<template>
  <div class="service-page-container">
    <div class="content-card">
      <h1>{{ service.title }}</h1>
      <div class="description">
        <p v-for="(p, i) in service.description" :key="i">{{ p }}</p>
      </div>
      <div class="info-box">
        <h3>{{ service.listTitle }}</h3>
        <ul>
          <li v-for="(item, i) in service.listItems" :key="i">{{ item }}</li>
        </ul>
      </div>
      <button class="action-btn" @click="openContact">{{ service.cta }}</button>
      <button class="volver-btn" @click="$router.push('/')">Volver al inicio</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicePage',
  inject: ['openContact'],
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.content-card {
  background: var(--bg-card);
  padding: 3rem;
  border-radius: 32px;
  max-width: 800px;
  width: 90%;
  color: var(--text-dark);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

h1 {
  color: var(--primary-deep);
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: left;
}

.info-box {
  text-align: left;
  background: var(--primary-light);
  padding: 1.5rem;
  border-radius: 16px;
  margin-bottom: 2rem;
}

.info-box h3 {
  margin-top: 0;
  color: var(--primary);
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 0.5rem;
}

.action-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: var(--primary-dark);
  transform: scale(1.05);
}

.volver-btn {
  background: transparent;
  color: var(--primary);
  border: 2px solid #7e57c2;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.volver-btn:hover {
  background: var(--primary-light);
}

@media (max-width: 600px) {
  .content-card {
    padding: 2rem 1.5rem;
  }
  .action-btn {
    width: 100%;
    margin-bottom: 1rem;
  }
  .volver-btn {
    width: 100%;
  }
}
</style>
