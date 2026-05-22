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
//   caratulaURL: "https://URL-de-la-caratula.jpg", // Imagen de carátula
//   videoURL: "https://www.youtube.com/embed/ejemplo", // URL del video (YouTube o local)
//   documentoURL: "#",            // URL al PDF o documento de texto
//   anexos: [                     // Lista opcional de anexos
//     { titulo: "Anexo A - Gráficos", url: "#" }
//   ]
// },
//
// =============================================================================

const projectsData = [
  {
    id: 1,
    titulo: "Portal Interactivo Web Interactivo",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: [""],
    mencion: "Tecnologia",
    año: 2026,
    portadaURL: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop",
    caratulaURL: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 2,
    titulo: "Integración de la Realidad Aumentada en la Enseñanza y Aprendizaje de las Ciencias Naturales",
    resumen: "La Integración de la Realidad Aumentada en la enseñanza de las Ciencias Naturales representa una transformación pedagógica que supera las limitaciones de los métodos tradicionales de instrucción. Esta tecnología permite la superposición de elementos digitales interactivos (modelos 3D, animaciones y datos) sobre el entorno físico real, facilitando la visualización de fenómenos científicos que suelen ser abstractos o difíciles de observar a simple vista, como los ciclos biogeoquímicos, la anatomía humana o la estructura celular.",
    autores: ["Daniela Arrieta", "Sirley Cárdenas", "Yeccire Villamizar", "Arianna contreras", "Alba Zambrano", "Leoryibel García", "Daniel García"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID2.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID2.jpg",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
  },
  {
    id: 3,
    titulo: "Prototipo de sensor sísmico para la prevención y seguridad escolar en el Liceo Nacional Ángel María Duque",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Pendientes"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID3.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID3.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 4,
    titulo: "Aves autónomas del municipio jauregui",
    resumen: "Pendientes descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Pendientes"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID4.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID4.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 5,
    titulo: "Implementacion de Hojas de Calculo en el proceso de Inventario y Reacondicionamiento del laboratorio de Fisica y Quimica",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Pendientes"],
    mencion: "Tecnologia",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID5.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID5.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 6,
    titulo: "Diseño universal para el aprendizaje (DUA) como estrategia pedagógica inclusiva",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Pendientes"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID6.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID6.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 7,
    titulo: "Diseño de Modulos Interactivos Digitales que Permitan a los Estudiantes Indagar Aspectos Basicos de Diferentes Profesiones",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Pendientes"],
    mencion: "Tecnologia",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID7.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID7.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 8,
    titulo: "Influencia de los juegos didacticos en el rendimiento escolar de los estudiantes de 1er año",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Jean Natera","Jose Arellano","Marianyily Zambrano","Arianny Gandica","Yonalber Arellano","Thaidy Valderrama","Yendy Villalobos","Yeidy Villalobos"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID8.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID8.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 9,
    titulo: "Vinculación de los espacios verdes al entorno educativo, por medio del reordenamiento",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Santiago gauta", "José David Contreras", "Jarianny Contreras", "Diego Rodríguez", "Karibel Sánchez", "Vaiolet mora", "Angy Aguilar" ],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID9.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID9.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 10,
    titulo: "Impacto de las actividades físicas (recreativas)como herramienta para el desarrollo de la autoestima y la salud mental en los adolescentes",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Rocío Pérez","Cristhiam Pérez", "Milangel Pérez", "Vicente Pérez", "Mariangel Escalante", "Crismar Sanchez", "Camilo Zambrano", "Gustavo Gandica" ],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID10.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID10.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 11,
    titulo: "Elaboración de Compota artesanal a base de Tomate de árbol para personas diabéticas",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Samantha Briceño", "Marianny Pernia", "Wilmary Guerro", "Rozbely Zambrano", "Juan Miguel Duque", "Abrahan Chacón", "Paulina Jacome" ],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID11.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID11.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
   {
    id: 12,
    titulo: "Sistema de riego por goteo",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Jeanderson Guerrero", "Eva Quintero", "Richart Vera", "Greison Beltran", "Barbara Montilva", "Eudymar Pérez" ],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID12.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID12.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
   {
    id: 13,
    titulo: "Las Noticias Falsas y La Toma De Decisiones en las relaciones interpersonales de los Jovenes Cursantes de quinto año ",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Pendientes"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID13.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID13.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 14,
    titulo: "Alfabetización digital para el uso responsable de la inteligencia artificial",
    resumen: "Pendiente descripción del proyecto de investigación. Máximo 2-3 oraciones que expliquen el objetivo y los hallazgos principales.",
    autores: ["Renzo Rojas","Diego Mendez","Brayan Camargo"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID14.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID14.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "#",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  }
];


export default projectsData;
