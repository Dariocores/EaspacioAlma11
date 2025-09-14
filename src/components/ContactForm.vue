<template>
  <div class="contact-form-overlay" v-if="show" @click.self="close">
    <div class="contact-form">
      <button class="close-btn" @click="close">&times;</button>
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
        <button type="submit" class="submit-btn">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
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
      formData: {
        name: '',
        email: '',
        service: '',
        message: ''
      }
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleSubmit() {
      // Aquí implementar la lógica de envío del formulario
      console.log('Formulario enviado:', this.formData);
      this.close();
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
  background: white;
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
  color: #666;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
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
  background: #7e57c2;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #5e35b1;
}
</style>
