QA Checklist - Espacio Alma 11

1. General
- [ ] Abrir http://localhost:5173 y verificar que la página carga sin errores en consola.
- [ ] Comprobar responsive en móviles, tablet y desktop (resize).
- [ ] Verificar que el `skip-link` es visible al tabular y salta a contenido.

2. Navegación
- [ ] Menú principal: los botones navegan a las vistas correctas.
- [ ] Menú móvil: botón hamburguesa abre/cierra el menú y botones navegan.

3. Formulario de contacto
- [ ] Abrir modal de contacto y verificar que el foco se posa en el primer campo.
- [ ] Cerrar modal con la tecla Escape.
- [ ] Tras cerrar, el foco vuelve al elemento que abrió el modal.
- [ ] Probar envío por Email (abre cliente) y WhatsApp (abre wa.me).

4. Accesibilidad
- [ ] Todos los botones son focuseables y muestran outline visible.
- [ ] Contraste de texto/íconos es legible en modo claro y oscuro.

5. Estética y UX
- [ ] Verificar consistencia de colores (lavanda principal, teal acento, crema fondo).
- [ ] Microinteracciones: hover y active en botones.

6. Errores y mejoras
- Documentar en este archivo cualquier bug encontrado y capturas de pantalla.

Notas:
- Para envíos automáticos sin abrir cliente, considerar integrar EmailJS o crear un endpoint backend.
