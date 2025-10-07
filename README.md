# Instrucciones para el profesor - Calculadora de Edad

## Contexto

Esta aplicación fue desarrollada cumpliendo las especificaciones de la tarea **ISWZ2202 - Diseño y Arquitectura de Software**:  

- Implementación de **caché** para optimizar las consultas.  
- Implementación del **patrón Proxy** mediante un interceptor que registra todas las peticiones al backend.  
- Desarrollo del **frontend** utilizando React, generado con ayuda de IA, que consume los endpoints del backend.  
- Resolución de problemas de **CORS** para ambientes de desarrollo (`localhost`).

---

## Estructura del proyecto

- **Backend**: carpeta `complete` (Intelligent IDEA / Spring Boot)  
- **Frontend**: carpeta `frontend-react` (React + Vite)  

---

## Ejecución

1. **Backend**:  
   - Abrir `complete` en IntelliJ IDEA.  
   - Ejecutar la clase principal `RestServiceApplication.java`.  
   - Mantenerlo corriendo; el backend escucha en `http://localhost:8080`.

2. **Frontend**:  
   - Abrir `frontend-react` en IntelliJ IDEA o cualquier editor compatible.  
   - Abrir la terminal en la carpeta del frontend y ejecutar:  
     ```bash
     npm install   # instalar dependencias (solo la primera vez)
     npm run dev   # iniciar servidor de desarrollo
     ```  
   - Abrir el navegador en `http://localhost:5175` para usar la calculadora.

---

## Funcionamiento

- Ingresar la fecha de nacimiento en el frontend y presionar "Calcular".  
- El backend calcula la edad utilizando la fecha proporcionada.  
- Si la misma fecha se consulta nuevamente, se obtiene la respuesta **desde la caché**, evitando recalcular.  
- Todas las peticiones pasan por el **proxy (interceptor)** que registra la solicitud en la consola.  

---

## Notas

- Backend y frontend deben ejecutarse **simultáneamente** para que la aplicación funcione correctamente.  
- El frontend está configurado para permitir peticiones desde `http://localhost:5175` gracias a CORS.  
- Esta aplicación está preparada para **ambientes de desarrollo local**, siguiendo la consigna de la tarea.

---
