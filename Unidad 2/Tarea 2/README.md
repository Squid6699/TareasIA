# Red Semántica de Spotify

## Descripción
Este apartado contiene la estructura de una red semántica para Spotify, organizando su información en nodos y arcos para representar las relaciones clave dentro de la plataforma. 

## Contenido
- **Introducción**: Explicación breve sobre Spotify y su modelo de negocio.
- **Descripción del Negocio**: Características principales y tecnología de recomendación.
- **Red Semántica**:
  - **Nodo Central**: Spotify.
  - **Nodos y Arcos**: Usuario, Artista, Planes, Biblioteca, Configuración.
  - **Conexiones Clave** entre los nodos.

## Estructura de la Red Semántica
La información de Spotify se organiza en los siguientes nodos y relaciones:

### Nodos y Arcos
- **Usuario** → Preferencias, Playlists, Historial, Seguimientos, Amigos.
- **Artista** → Álbumes, Canciones, Giras.
- **Planes** → Free, Premium Individual, Premium Familiar, Premium Duo, Estudiantes.
- **Biblioteca** → Canciones Guardadas, Álbumes Favoritos, Podcasts Seguidos, Playlists Creadas.
- **Configuración** → Modo Oscuro, Calidad de Audio, Notificaciones, Privacidad.

### Conexiones Relevantes
- **Usuario** ↔ **Playlists**: Creación y seguimiento de listas.
- **Usuario** ↔ **Historial**: Almacenamiento de reproducciones.
- **Usuario** ↔ **Amigos**: Ver lo que escuchan otros usuarios.
- **Artista** ↔ **Álbumes**: Publicación de colecciones de canciones.
- **Artista** ↔ **Giras**: Información sobre conciertos.
- **Planes** ↔ **Premium Individual**: Acceso sin anuncios.
- **Biblioteca** ↔ **Canciones Guardadas**: Acceso rápido a favoritos.
- **Configuración** ↔ **Calidad de Audio**: Ajuste de calidad según preferencia.
- **Configuración** ↔ **Privacidad**: Configuración de visibilidad y seguridad.

