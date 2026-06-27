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

    <FooterPage />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ContactForm from './components/ContactForm.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ContactForm,
    FooterPage
  },
  data() {
    return {
      showContact: false
    }
  },
  provide() {
    return {
      openContact: this.openContact
    }
  },
  methods: {
    openContact() {
      this.showContact = true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #7e57c2;
  --primary-dark: #5e35b1;
  --primary-deep: #2b1055;
  --primary-light: #f3f0f8;
  --text-dark: #333;
  --text-muted: #555;
  --text-light: #666;
  --bg-body: #ddd8d0;
  --bg-card: #e8e4dd;
  --white: #ffffff;
  --shadow-sm: 0 2px 10px rgba(0,0,0,0.1);
  --shadow-md: 0 10px 20px rgba(0,0,0,0.05);
  --shadow-lg: 0 20px 40px rgba(0,0,0,0.05);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
}

* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background: var(--bg-body);
  color: var(--text-dark);
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
  padding-top: 70px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.service-page-container {
  min-height: calc(100vh - 70px);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #b2ebf2 0%, #e0f7fa 100%);
  color: var(--primary-deep);
}
</style>

