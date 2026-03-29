<template>
  <div id="app">
    <NavBar @open-contact="showContact = true" />
    
    <main class="main-container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <ContactForm 
      :show="showContact" 
      @close="showContact = false"
    />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ContactForm from './components/ContactForm.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ContactForm
  },
  data() {
    return {
      showContact: false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background: #f8f9fa;
  overflow-x: hidden;
  overflow-y: auto;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  padding-top: 70px; /* Space for fixed navbar */
}

/* Route transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Global Utility Classes */
.service-page-container {
  min-height: calc(100vh - 70px);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #2b1055 0%, #7137a7 100%);
  color: white;
}
</style>

