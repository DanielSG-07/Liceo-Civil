// =============================================================================
// REVISTA DIGITAL — LICEO ÁNGEL MARÍA DUQUE
// FUENTE CENTRAL DE DATOS: Proyectos de Investigación
// =============================================================================
//
// TEMPLATE PARA AGREGAR UN NUEVO PROYECTO
// Copia el bloque de abajo, pégalo dentro del array `projectsData`,
// y rellena los campos. ¡No olvides la coma al final!
//
// {
//   id: 7,                        // Número único incremental
//   titulo: "Título del Proyecto",
//   resumen: "Breve descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
//   autores: ["Autor Principal", "Coautor 1", "Coautor 2"],
//   mencion: "Ciencias",          // Solo dos opciones: "Ciencias" o "Humanidades"
//   año: 2025,
//   portadaURL: "https://URL-de-la-imagen-de-portada.jpg",
//   contenidoURL: "#",            // URL al PDF o página de contenido completo
// },
//
// =============================================================================

const projectsData = [
  {
    id: 1,
    titulo: "Análisis de Calidad del Agua en Ríos Urbanos",
    resumen: "Estudio de los niveles de contaminación en fuentes hídricas del área metropolitana usando técnicas de espectrometría. Se identificaron índices de pH, metales pesados y coliformes en 8 puntos de muestreo.",
    autores: ["María González", "Carlos Pérez", "Ana Rodríguez"],
    mencion: "Ciencias",
    año: 2024,
    portadaURL: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop",
    contenidoURL: "#",
  },
  {
    id: 2,
    titulo: "Impacto de las Redes Sociales en la Identidad Cultural Juvenil",
    resumen: "Investigación cualitativa sobre la influencia de plataformas digitales en la construcción de identidad cultural entre jóvenes de 14 a 18 años. Se analizaron 200 perfiles y se realizaron 40 entrevistas.",
    autores: ["Laura Martínez", "Diego Sánchez"],
    mencion: "Humanidades",
    año: 2024,
    portadaURL: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop",
    contenidoURL: "#",
  },
  {
    id: 3,
    titulo: "Desarrollo de una App de Monitoreo de Ecosistemas Locales",
    resumen: "Diseño y prototipado de una aplicación móvil para el registro georreferenciado de biodiversidad en ecosistemas del estado. Incluye reconocimiento de especies mediante inteligencia artificial.",
    autores: ["Andrés Vargas", "Sofía Blanco", "Emilio Torres"],
    mencion: "Ciencias",
    año: 2024,
    portadaURL: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    contenidoURL: "#",
  },
  {
    id: 4,
    titulo: "Energías Renovables en La Grita",
    resumen: "Investigación sobre el potencial de implementación de fuentes de energía solar y eólica en el municipio Jáuregui de La Grita, estado Táchira. El proyecto evaluó la irradiación solar promedio, la velocidad del viento y propuso un modelo de microrred energética sostenible para comunidades rurales de la región.",
    autores: ["Roberto Chacón", "Valentina Mora", "José Guerrero"],
    mencion: "Ciencias",
    año: 2025,
    portadaURL: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
    contenidoURL: "#",
  },
  {
    id: 5,
    titulo: "Energías Renovables en el Municipio Jáuregui",
    resumen: "Investigación sobre el potencial de implementación de fuentes de energía solar y eólica en el municipio Jáuregui de La Grita, estado Táchira. El proyecto evaluó la irradiación solar promedio, la velocidad del viento y propuso un modelo de microrred energética sostenible para comunidades rurales de la región.",
    autores: ["Roberto Chacón", "Valentina Mora", "José Guerrero"],
    mencion: "Ciencias",
    año: 2026,
    portadaURL: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
    contenidoURL: "#",
  },
];


export default projectsData;
