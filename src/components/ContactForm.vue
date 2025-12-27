<template>
	<div class="contact-form-overlay" v-if="show" @click.self="close" role="dialog" aria-modal="true" aria-labelledby="contact-title">
		<div class="contact-form" role="document">
			<button class="close-btn" @click="close" aria-label="Cerrar formulario">&times;</button>
			<h2 id="contact-title">Contacto</h2>
			<form @submit.prevent="handleSubmit">
				<div class="form-group">
					<label for="name">Nombre</label>
					<input ref="nameInput" type="text" id="name" v-model="formData.name" required />
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" v-model="formData.email" required />
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
					<label for="preferred">Preferencia de contacto</label>
					<select id="preferred" v-model="formData.preferredContact" required>
						<option value="email">Email</option>
						<option value="whatsapp">WhatsApp</option>
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
import * as emailjs from '@emailjs/browser';
import emailConfig from '../emailConfig.js';

export default {
	name: 'ContactForm',
	props: {
		show: { type: Boolean, default: false }
	},
	data() {
		return {
			formData: {
				name: '',
				email: '',
				service: '',
				message: '',
				preferredContact: 'email'
			},
			lastFocusBeforeOpen: null
		};
	},
	methods: {
		close() {
			this.$emit('close');
			if (this.lastFocusBeforeOpen && typeof this.lastFocusBeforeOpen.focus === 'function') {
				this.lastFocusBeforeOpen.focus();
			}
		},
		onKeydown(e) {
			if (e.key === 'Escape') this.close();
		},
		handleSubmit() {
			const subject = `Consulta - ${this.formData.service || 'Servicio'}`;
			const bodyLines = [
				`Nombre: ${this.formData.name}`,
				`Email: ${this.formData.email}`,
				`Servicio: ${this.formData.service}`,
				'',
				this.formData.message
			];
			const body = bodyLines.join('\n');

			// Si EmailJS está configurado, usarlo para enviar automáticamente
			if (emailConfig && emailConfig.PUBLIC_KEY) {
				try {
					emailjs.init(emailConfig.PUBLIC_KEY);
					const templateParams = {
						subject,
						message: body,
						from_name: this.formData.name,
						from_email: this.formData.email,
						service: this.formData.service
					};
					emailjs.send(emailConfig.SERVICE_ID, emailConfig.TEMPLATE_ID, templateParams)
						.then(() => {
							window.alert('Mensaje enviado correctamente. Gracias.');
							this.close();
						})
						.catch((err) => {
							console.error('EmailJS error:', err);
							// fallback a mailto
							const fallback = `mailto:dario33154@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
							window.location.href = fallback;
						});
					return;
				} catch (e) {
					console.error('EmailJS init error', e);
				}
			}

			// Fallback: abrir mailto o WhatsApp según preferencia
			const encodedSubject = encodeURIComponent(subject);
			const encodedBody = encodeURIComponent(body);
			if (this.formData.preferredContact === 'email') {
				const recipient = 'dario33154@hotmail.com';
				const mailto = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
				window.location.href = mailto;
			} else if (this.formData.preferredContact === 'whatsapp') {
				const text = encodeURIComponent(`Consulta\n\n${body}`);
				const waNumber = '2224447258';
				const waUrl = `https://wa.me/${waNumber}?text=${text}`;
				window.open(waUrl, '_blank');
			}

			console.log('Formulario enviado (fallback):', this.formData);
			this.close();
		}
	},
	watch: {
		show(newVal) {
			if (newVal) {
				this.lastFocusBeforeOpen = document.activeElement;
				this.$nextTick(() => {
					if (this.$refs.nameInput) this.$refs.nameInput.focus();
				});
				document.addEventListener('keydown', this.onKeydown);
			} else {
				document.removeEventListener('keydown', this.onKeydown);
			}
		}
	},
	beforeUnmount() {
		document.removeEventListener('keydown', this.onKeydown);
	}
};
</script>

<style scoped>
.contact-form-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.45);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.contact-form {
	background: var(--color-background-soft);
	padding: 1.5rem;
	border-radius: 12px;
	width: 100%;
	max-width: 520px;
	position: relative;
	color: var(--color-text);
	box-shadow: 0 8px 30px rgba(43,16,85,0.06);
}

.close-btn {
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	color: var(--color-text);
}

.form-group {
	margin-bottom: 1rem;
}

label {
	display: block;
	margin-bottom: 0.4rem;
	color: var(--color-heading);
	font-weight: 600;
}

input, select, textarea {
	width: 100%;
	padding: 0.8rem;
	border: 1px solid var(--color-border);
	border-radius: 8px;
	font-size: 1rem;
	background: white;
}

textarea { height: 120px; resize: vertical; }

input:focus, select:focus, textarea:focus { outline: 3px solid rgba(77,182,172,0.18); outline-offset: 2px; }

.submit-btn {
	background: var(--color-primary);
	color: white;
	border: none;
	padding: 0.9rem 1.2rem;
	border-radius: 8px;
	font-size: 1rem;
	cursor: pointer;
	width: 100%;
	transition: transform 0.12s ease, filter 0.12s ease;
}

.submit-btn:hover { transform: translateY(-2px); filter: brightness(0.98); }

.submit-btn:focus { outline: 3px solid rgba(77,182,172,0.22); outline-offset: 2px; }
</style>
