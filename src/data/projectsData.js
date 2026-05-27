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
    resumen: "Este proyecto de investigación, desarrollado en 2026 en el Liceo Nacional “Ángel María Duque” (La Grita, Estado Táchira), consistió en el diseño y desarrollo de un portal web interactivo como una alternativa tecnológica y ecológica para la recopilación y difusión de los proyectos científicos escolares de quinto año de educación media general. Enmarcado bajo la modalidad de proyecto factible con un enfoque cuantitativo y un diseño de campo descriptivo, el estudio trabajó con una muestra censal de treinta grupos de investigación a los que se les aplicó un cuestionario estructurado de doce ítems. El diagnóstico reveló que, mientras el sistema de archivo impreso tradicional genera invisibilidad académica y provoca que el 70% de los alumnos sufra dificultades críticas para acceder a antecedentes, existe una factibilidad óptima debido a que el 77% de los estudiantes cuenta con dispositivos electrónicos, el 83% valida la superioridad pedagógica de las interfaces digitales y el 87% está dispuesto a desmaterializar las entregas en papel para reducir costos y el impacto ambiental. La propuesta se consolidó de manera exitosa en un entorno virtual centralizado y perenne compuesto por espacios personalizados que integran resúmenes normativos, galerías dinámicas de campo, audiovisuales de las defensas y un sistema de enrutamiento por códigos alfanuméricos rápidos, logrando democratizar y preservar con seguridad la memoria intelectual de la institución.",
    autores: [""],
    mencion: "Tecnologia",
    año: 2026,
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID1.png",
    caratulaURL: process.env.PUBLIC_URL + "/Portadas/ID1.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: process.env.PUBLIC_URL + "/Proyectos/ProyectoID1.pdf",
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
    documentoURL: process.env.PUBLIC_URL + "/Proyectos/ProyectoID2.pdf",
  },
  {
    id: 3,
    titulo: "Prototipo de sensor sísmico para la prevención y seguridad escolar en el Liceo Nacional Ángel María Duque",
    resumen: "Este proyecto de investigación, desarrollado en mayo de 2026 en el Liceo Nacional Ángel María Duque (La Grita, Municipio Jáuregui, Estado Táchira), consistió en el diseño de un prototipo de sensor sísmico orientado a fortalecer la prevención y la seguridad escolar ante el riesgo telúrico latente en la región. Enmarcado bajo la modalidad de proyecto factible con una metodología de campo, nivel descriptivo y enfoque cuantitativo, el estudio evaluó una muestra de la comunidad educativa mediante un cuestionario estructurado de diecisiete ítems. El diagnóstico evidenció la necesidad crítica de implementar medidas tecnológicas preventivas en el plantel para reducir el pánico y optimizar los tiempos de respuesta, demostrando además una alta aceptación por parte de los estudiantes y docentes hacia el uso de herramientas automatizadas de alerta temprana. El prototipo desarrollado se consolidó como una alternativa viable, económica y técnica que facilita una evacuación más organizada y mitiga la vulnerabilidad física de la institución, robusteciendo de manera significativa los planes de emergencia y sembrando una cultura de prevención tecnológica para resguardar la integridad de la población estudiantil.",
    autores: ["Alexandra Mendez","Lizmar Meza","Oriana Perez","Maria Duque","Daniela Lima","Barbara Diaz","Dixon Zambrano"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID3.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID3.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: process.env.PUBLIC_URL + "/Proyectos/ProyectoID3.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 4,
    titulo: "Catalogo de Aves Autóctonas en el Municipio Jáuregui",
    resumen: "Este proyecto de investigación, desarrollado en mayo de 2026 en el Liceo Nacional Ángel María Duque (La Grita, Municipio Jáuregui, Estado Táchira), consistió en el diseño de un catálogo ilustrado y descriptivo de las especies de aves comunes como herramienta para la educación ambiental y la valoración del patrimonio natural local. Enmarcado bajo la modalidad de proyecto factible con un diseño de campo descriptivo y un enfoque cuantitativo, el estudio evaluó una muestra de veinte estudiantes mediante una encuesta estructurada de quince ítems con preguntas cerradas. El diagnóstico evidenció que la población posee un conocimiento limitado o empírico sobre la avifauna y determinó una alta disposición hacia el uso de un catálogo (especialmente en formato digital) para mitigar la desconexión cognitiva con el entorno. El prototipo desarrollado se consolidó como una alternativa pedagógica y divulgativa eficaz que sistematiza características taxonómicas, morfológicas y ecológicas, promoviendo el potencial del aviturismo regional y sembrando una cultura de preservación frente a amenazas locales como la expansión agrícola y la contaminación ambiental.",
    autores: ["Sanchez Wuilson","Villamizar Luis","Gomez Crismar","Hernandez Liliana","Rosales Anthony","Guerrrero Any","Moreno Caren"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID4.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID4.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: process.env.PUBLIC_URL + "/Proyectos/ProyectoID4.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 5,
    titulo: "Implementacion de Hojas de Calculo en el proceso de Inventario y Reacondicionamiento del laboratorio de Fisica y Quimica",
    resumen: "El control interno resulta una tarea prioritaria que permite dar respuesta de forma oportuna a los riesgos relacionados con los activos de una organización.  Por tal razón, el proyecto tiene como objetivo implementar un sistema de inventario basado en hojas de cálculo para el laboratorio de física y química del Liceo Nacional Ángel María Duque, que permita el registro eficiente de los bienes y equipos, contribuyendo a la mejora del control interno y la calidad del servicio educativo. Corresponde al enfoque cualitativo, nivel descriptivo, diseño de investigación acción bajo la modalidad participativa. Los informantes son 04 (cuatro) docentes especialistas que asisten al laboratorio de física y química. Para la obtención y recolección de la información se siguió como técnica la entrevista y la observación. Como instrumentos se recurrió a la guía de entrevista y las notas de observación. El análisis de los resultados se realizó bajo el proceso de categorización. Se concluye que el laboratorio opera bajo un modelo de gestión de inventarios rudimentario y desactualizado, caracterizado por el uso exclusivo del soporte físico (cuadernos). A tal efecto, se presentó como aporte de la investigación una herramienta digital (hoja de cálculo para inventario) cuyos campos de información facilitan la revisión y registro de los materiales y su mantenimiento. Se recomienda establecer de manera obligatoria el uso de la hoja de cálculo diseñada como el único instrumento válido para el control, registro y fiscalización de los bienes del laboratorio al inicio y cierre de cada año escolar. ",
    autores: ["Danelys Palencia","Eliana Alvarez","Gregory Davila","Iriany Villamizar","Gillhey Monsalve","Isabella Moreno","Yangel Rosales"],
    mencion: "Tecnologia",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID5.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID5.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: process.env.PUBLIC_URL + "/Proyectos/ProyectoID5.pdf",
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
    resumen: "El presente trabajo investigativo tuvo como objetivo general Proponer un conjunto de actividades físicas (recreativas) como herramienta para el desarrollo de la autoestima y la salud mental en los adolescentes de 5to año, sección “B”, del Liceo Nacional Ángel María Duque, en La Grita, municipio Jáuregui del Estado Táchira. La investigación llevada a cabo se fundamentó en un Enfoque Cuantitativo, el cual estuvo basado en la modalidad  de Proyecto Factible, al mismo tiempo apoyada en una investigación de campo, de Carácter Descriptivo. La población estuvo conformada por 30 (treinta) estudiantes. La muestra, quedó conformada por la misma cantidad de individuos de la población objeto de estudio. Se utilizó como técnica la encuesta y como instrumento un cuestionario con un total de  20 (veinte) ítems y con tres alternativas descritas como Siempre  (S), A Veces (AV) y Nunca (N). La validez se realizó a través de un juicio de expertos y su confiabilidad por medio de una prueba piloto para luego someterla al procedimiento de Alpha de Cronbach donde se determinó su confiabilidad en 0,87. Los resultados reflejaron como conclusión que actividades físicas (recreativas) como herramienta para el desarrollo de la autoestima y la salud mental en adolescentes son altamente efectivas y beneficiosas. Asimismo las actividades desarrolladas forman parte de un recurso valioso para promover acciones que ayudan a los estudiantes de 5to años sección “B” a mantener una buena autoestima y salud mental. Por ende se recomienda practicar actividades físicas (recreativas) que coadyuven en el bienestar general de los adolescentes.  ",
    autores: ["Rocío Pérez","Cristhiam Pérez", "Milangel Pérez", "Vicente Pérez", "Mariangel Escalante", "Crismar Sanchez", "Camilo Zambrano", "Gustavo Gandica" ],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID10.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID10.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: process.env.PUBLIC_URL + "/Proyectos/ProyectoID10.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 11,
    titulo: "Elaboración de Compota artesanal a base de Tomate de árbol para personas diabéticas",
    resumen: "El presente estudio tuvo como objetivo general validar la factibilidad técnica y la aceptabilidad sensorial de una compota funcional de tomate de árbol (Solanum betaceum) para su uso como alternativa dietética en pacientes diabéticos del sector San Vicente de La Grita, estado Táchira. Metodológicamente, la investigación se adscribió a un enfoque cuantitativo, con un diseño de campo y de carácter experimental. La muestra intencional estuvo constituida por seis (06) pacientes diagnosticados con Diabetes Mellitus Tipo 2. Para la recolección de los datos, se aplicaron dos instrumentos previamente validados: una guía de observación experimental para registrar los parámetros técnicos de laboratorio y un cuestionario analítico basado en una escala hedónica de cinco puntos para la evaluación sensorial. Los resultados de la fase experimental permitieron estandarizar una formulación óptima de 500 gramos de pulpa pura y 2,5 gramos de estevia, procesados a una temperatura controlada de 85 °C durante 20 minutos, garantizando un costo accesible de 140,00 VES por lote. Por otra parte, la prueba de campo demostró una aceptación unánime del 100% en los atributos organolépticos de sabor, color, textura y olor, concentrando un 83,33% en la máxima escala de agrado. Asimismo, se reportó un 83,33% de respuestas afirmativas respecto a la intención de sustitución de snacks comerciales industrializados. Se concluye que el producto desarrollado es plenamente viable, económicamente sustentable y socialmente aceptado, consolidándose como una alternativa alimentaria con alto potencial hipoglucemiante capaz de favorecer la adherencia nutricional en la comunidad. ",
    autores: ["Samantha Briceño", "Marianny Pernia", "Wilmary Guerro", "Rozbely Zambrano", "Juan Miguel Duque", "Abrahan Chacón", "Paulina Jacome" ],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID11.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID11.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: process.env.PUBLIC_URL + "/Proyectos/ProyectoID11.pdf",
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
