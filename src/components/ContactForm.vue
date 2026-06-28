<template>
  <div class="contact-form-overlay" v-if="show" @click.self="close">
    <div class="contact-form">
      <button class="close-btn" @click="close">&times;</button>

      <div v-if="status === 'idle'">
        <h2>Contacto</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="service">Servicio</label>
            <select id="service" v-model="formData.service" required>
              <option value="">Selecciona un servicio</option>
              <option value="registros">Registros Akáshicos</option>
              <option value="tarot">Tarot</option>
              <option value="limpieza">Limpieza Energética</option>
              <option value="reiki">Reiki</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" v-model="formData.message" required></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="sending">
            {{ sending ? 'Enviando...' : 'Enviar' }}
          </button>
        </form>
      </div>

      <div v-else-if="status === 'success'" class="feedback success">
        <span class="feedback-icon">✓</span>
        <h2>¡Mensaje enviado!</h2>
        <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
        <button class="submit-btn" @click="close">Cerrar</button>
      </div>

      <div v-else-if="status === 'error'" class="feedback error">
        <span class="feedback-icon">✗</span>
        <h2>Error al enviar</h2>
        <p>{{ errorMsg }}</p>
        <button class="submit-btn" @click="status = 'idle'">Intentar de nuevo</button>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactForm',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: { name: '', email: '', service: '', message: '' },
      status: 'idle',
      errorMsg: ''
    }
  },
  computed: {
    sending() {
      return this.status === 'loading'
    }
  },
  methods: {
    close() {
      this.reset()
      this.$emit('close')
    },
    reset() {
      this.formData = { name: '', email: '', service: '', message: '' }
      this.status = 'idle'
      this.errorMsg = ''
    },
    async handleSubmit() {
      this.status = 'loading'
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: this.formData.name,
            email: this.formData.email,
            service: this.formData.service,
            message: this.formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        this.status = 'success'
      } catch (e) {
        this.status = 'error'
        this.errorMsg = 'No se pudo enviar el mensaje. Verificá tu conexión o intentá más tarde.'
      }
    }
  }
}
</script>

<style scoped>
.contact-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.contact-form {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-light);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

input, select, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

textarea {
  height: 120px;
  resize: vertical;
}

.submit-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: var(--primary-dark);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.feedback {
  text-align: center;
  padding: 1rem 0;
}

.feedback-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.feedback.success .feedback-icon { color: #4caf50; }
.feedback.error .feedback-icon { color: #e53935; }

.feedback h2 {
  margin-bottom: 0.5rem;
  color: var(--primary-deep);
}

.feedback p {
  color: var(--text-light);
  margin-bottom: 1.5rem;
}
</style>
