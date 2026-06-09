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
    resumen: "El presente proyecto de investigación-acción tuvo como propósito fundamental implementar el Diseño Universal para el Aprendizaje (DUA) como estrategia pedagógica inclusiva para optimizar el rendimiento académico y prevenir el acoso escolar (bullying) por estigma social en estudiantes con neurodiversidad (Discapacidad Auditiva, TEA y TDAH) del 3er Año Sección B del Liceo Nacional Ángel María Duque, ubicado en La Grita, estado Táchira. Epistemológicamente, el estudio se adscribió al paradigma cualitativo bajo un diseño de campo y un nivel descriptivo-transformador. La muestra de informantes clave estuvo constituida por cuatro estudiantes seleccionados bajo muestreo intencional no probabilístico, representando perfiles de Sordera, TEA, TDAH y un alumno neurotípico regular. Como técnica de recolección de datos se empleó la encuesta y como instrumento la guía de entrevista semiestructurada, previamente validada mediante consentimiento informado en estricto cumplimiento del Artículo 32-A de la LOPNNA. La información recabada se procesó mediante las técnicas de categorización y triangulación teórica (Strauss y Corbin, 2002). Los resultados diagnósticos evidenciaron la prevalencia de barreras de corte fonocéntrico, monocultura evaluativa escrita y dinámicas latentes de exclusión en los equipos de aula y laboratorios debidas a la rigidez didáctica tradicional del entorno. Estos hallazgos científicos justificaron el codiseño y la ejecución de la propuesta metodológica titulada Aulas Sin Barreras: Manual de Estrategias DUA y Protocolo de Convivencia para la Neurodiversidad. Se concluye que la flexibilización de los medios de representación, acción/expresión e implicación reduce de forma inmediata los índices de frustración académica, desmitifica el estigma y erradica las micro-agresiones, transformando el aula en un ecosistema andragógico seguro, equitativo y protector de la diversidad humana.",
    autores: ["Guerrero Alba","Labrador Duvana","Batista Erianny","Fajardo Jesus","Marquez Alejandro","Bermudez Wilson","Barrera Angel"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID6.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID6.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID6.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 7,
    titulo: "Diseño de Modulos Interactivos Digitales que Permitan a los Estudiantes Indagar Aspectos Basicos de Diferentes Profesiones",
    resumen: "La elección de una carrera universitaria constituye una decisión crítica para los estudiantes de educación media, sin embargo, en muchas instituciones venezolanas existe una marcada carencia vocacional y de herramientas tecnológicas que faciliten el acceso a información sobre carreras universitarias. Ante esta problemática, la presente investigación tuvo como objetivo diseñar una página web como módulo interactivo digital que permita a los estudiantes del Liceo Nacional Ángel María Duque indagar sobre los aspectos básicos de las diferentes carreras universitarias.  Este estudio se enmarcó en un enfoque cuantitativo, con nivel descriptivo y diseño no experimental de tipo transeccional. La población estuvo conformada por 510 estudiantes de tercero, cuarto y quinto año aproximadamente, seleccionándose una muestra intencional de 30 estudiantes. Como técnica se aplicó una encuesta, utilizando un cuestionario estructurado con preguntas cerradas y abiertas. Los resultados evidenciaron que el 53% de los estudiantes presenta un nivel regular de certeza sobre su carrera futura, el 46% ha recibido poca orientación vocacional, el 57% desconoce las carreras universitarias existentes y el 83% no conoce la oferta académica regional. Ante esta realidad, se diseñó una página web con secciones de exploración profesional, fichas técnicas y recursos multimedia. Se concluye que el diseño de módulos interactivos digitales constituye una solución práctica, accesible y de bajo costo que contribuye a reducir la incertidumbre mejorando el acceso a información confiable sobre educación superior",
    autores: ["Freddy Enrique Guerrero Perez","Neyluz Elimar Tapiza Ramirez","Ander Jose Zambrano Perez","Jhonder Alejandro Moncada Gonzales","Jhonalber Josue Garcia Pernia","Luis Alberto Pineda","Lismar Angelica Montila","Derlyn Valentina Garcia Colmenares"],
    mencion: "Tecnologia",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID7.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID7.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID7.pdf",
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
    resumen: "La presente investigación tiene como objetivo fundamental diagnosticar lainfluencia de las noticias falsas en la toma de decisiones sobre las relacionesinterpersonales en los jóvenes cursantes de quinto año de bachillerato del LiceoNacional “Ángel María Duque”, ubicado en la ciudad de La Grita, MunicipioJáuregui del Estado Táchira. La naturaleza de la investigación se enmarca en lamodalidad de campo, tipo descriptivo-correlacional. Como instrumento se utilizó uncuestionario de dieciocho (18) ítemes con respuesta tipo escala de estimación,aplicado a cuarenta (40) estudiantes. El procesamiento de los datos se realizómediante tabulación y aplicación del programa Microsoft Word. El análisis einterpretación de los resultados se hizo como corresponde a los estudioscuantitativos y permitió concluir en el objetivo 1 que la mayoría de los encuestadosmanifiestan que la falsa información si los impacta profundamente y les lleva agenerar ansiedad, distorsión de la realidad y problemas de convivencia familiar ysocial. En el objetivo 2 manifiestan que las noticias falsas de alto impacto losafecta en la toma de decisiones porque son noticias programadas para generarconflicto emocional y, referente a lo planteado en el objetivo 3, se observa que losadolescentes investigados se desenvuelven bien en las relaciones interpersonalesporque, aun cuando están sujetos al impacto diario de información falsa, lamayoría buscan alternativas para evitar la confrontación y crean vínculos a fin demantener buenas relaciones interpersonales familiares, grupales y sociales. Deacuerdo a estos resultados se formularon recomendaciones sobre la realizaciónde charlas, talleres y guiaturas que permitan superar las debilidades encontradas.",
    autores: ["Angelo Contreras","Roxmeri Duque","Rosa Rodriguez","Raydenil Navarrro","Menalnny Briceño","Milagros Morales"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID13.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID13.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID13.pdf",
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
  },
  {
    id: 15,
    titulo: "Calidad de sueño y su incidencia en el rendimiento academico de los estudiantes del liceo nacional angel maria duque",
    resumen: "La calidad del sueño impacta directamente en el rendimiento académico al alterar procesos cognitivos clave para el aprendizaje. Bajo esta premisa, este proyecto presenta como objetivo general: analizar la incidencia de la calidad del sueño en el rendimiento escolar de los estudiantes del Liceo Nacional Ángel María Duque, ubicado en La Grita, municipio Jáuregui del estado Táchira, durante el período escolar 2025-2026. De tal modo, el estudio se corresponde metodológicamente bajo una investigación de enfoque cuantitativo con un diseño de campo y un nivel descriptivo. La población de estudio estuvo constituida por 29 estudiantes de quinto año, Sección “B”, de la mencionada institución. A través de un muestreo aleatorio simple, se seleccionó una muestra final de diez (10) estuantes de la misma sección. Para la recolección de datos, se empleó la técnica de la encuesta mediante un instrumento llamado cuestionario el cual constó de quince (15) ítems, cuyas alternativas de respuesta fueron: Siempre, Casi Siempre y Nunca. Los resultados obtenidos se organizaron y presentaron en cuadros y gráficos para su respectivo análisis. Se concluye que la mayoría de los estudiantes muestra una actitud receptiva y reconoce que recibir orientación sobre pautas de higiene del sueño, junto con técnicas de estudio eficientes, sería una herramienta de gran ayuda para revertir el descanso deficiente y potenciar sus promedios académicos. Finalmente, se recomienda la implementación de una serie de estrategias enfocadas en mejorar la calidad del sueño para optimizar el rendimiento escolar de los alumnos. ",
    autores: ["Yorgelis Arianny Rojas","Cristofher Abraham Mora","Luis Alejandro Quintini","Dilan Stiven Duque","Eirimar Alexandra Depablos","Melkis Adana Lubo","Sofhia Evangeline Camargo","Luis Fernando Zambrano"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID15.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID15.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID15.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },{
    id: 16,
    titulo: "LA PRÁCTICA DEPORTIVA COMO HERRAMIENTA PEDAGÓGICA PARA LA DISMINUCIÓN DEL TIEMPO DE OCIO DIGITAL EN LOS ADOLESCENTES DEL SECTOR SAN VICENTE",
    resumen: "La práctica deportiva actúa como una estrategia clave para combatir el sedentarismo y el tiempo excesivo de pantalla. Promueve la educación del ocio y transforma el tiempo libre en una oportunidad para el desarrollo físico, emocional y cognitivo, enseñando valores fundamentales como la disciplina y el trabajo en equipo. El proyecto presenta como objetivo general: Proponer la práctica deportiva como una herramienta pedagógica orientada a la disminución del uso excesivo del tiempo de ocio digital en los adolescentes del sector San Vicente de La Grita, municipio Jáuregui, estado Táchira. De tal modo, el estudio se corresponde con una investigación de enfoque cuantitativo, se utilizó un tipo de investigación proyectiva en fases que según Orozco y otros (2002), son: (a) Diagnóstico; (b) Factibilidad; y (c) Diseño de la Propuesta, además, es un estudio de Campo. La población de estudio estuvo constituida por 40 adolescentes que hacen vida dentro del sector San Vicente. A través de un muestreo intencional, se seleccionó una muestra final de diez (10) adolescentes. Para la recolección de datos, se empleó la técnica de la encuesta mediante un instrumento llamado cuestionario el cual constó de doce (12) ítems, con alternativas de respuesta múltiples. Los resultados obtenidos se organizaron y presentaron en cuadros y gráficos para su respectivo análisis. Se concluye que la principal barrera para la práctica deportiva en el sector San Vicente no es la falta de interés, sino la ausencia de planificación y liderazgo. Finalmente, se recomienda crear un cronograma fijo de encuentros de Fútbol y Baloncesto (las disciplinas más votadas). La regularidad es la clave para combatir el hábito del ocio digital.",
    autores: ["Apolinar Avendaño Diego","Garcia Omaña Wilmer","Lopez Vega Abel","Montilva vega Mariagny","Perugini Perez Anchely","Peruguini Perez Franchesca","Pulido Duarte Tatiana","Ramirez Lubo Edixon"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID16.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID16.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID16.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
{
    id: 17,
    titulo: "RESTRUCTURACIÓN Y MEJORAMIENTO DEL HUERTO ESCOLAR ORGANOPÓNICO COMO ESTRATEGIA PARA LA SOBERANÍA ALIMENTARIA EN LA COMUNIDAD DEL LICEO NACIONAL ANGEL MARÍA DUQUE",
    resumen: "Actualmente para el bienestar integral de las comunidades se propicia el aprovechamiento de las áreas verdes existentes en los contextos locales. Por tal razón, el estudio tuvo como objetivo desarrollar acciones para la reestructuración y mejoramiento del huerto escolar organopónico como estrategia para el fortalecimiento de la soberanía alimentaria en la comunidad educativa del Liceo Nacional Ángel María Duque, La Grita, municipio Jáuregui, estado Táchira, durante el periodo escolar 20252026. Se corresponde con el enfoque cualitativo, carácter descriptivo, diseño de investigación acción y modalidad investigación acción participativa (IAP). Los informantes fueron (04) cuatro personas: (01) un docente directivo; (01) docente especialista del PTMS y (02) dos voceros del consejo educativo escolar.  Se utilizó como técnica la entrevista semi estructurada y la observación. El instrumento aplicado fue una guía de entrevista y notas de campo. Los resultados indican que el huerto se encuentra en un estado de abandono parcial o con áreas descuidadas. Parte del personal percibe que el espacio está apto, cuenta con un sistema de riego operativo e incluso mantiene una producción mínima y activa de rubros específicos como el cebollín, bajo las orientaciones del programa institucional Todas las Manos a la Siembra. Para otros, existen problemas como la pérdida de fertilidad de la tierra, ausencia de abono orgánico o compostero y necesidad de una mejor organización de las áreas de cultivo, carencia de semillas y herramientas, así como desaprovechamiento de sus fines académicos. Se recomienda formular el cronograma de actividades del huerto dentro de la planificación general del liceo, asegurando que todos los docentes conozcan sus turnos y responsabilidades para evitar la falta de información detectada. ",
    autores: ["Jhoiner Ruíz, Yusneiby Duque", "Fabiola Contreras", "Daisibel Zambrano","Kiomar Marchant", "María Sánchez", "José Sánchez"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID17.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID17.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID17.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
},
{
    id: 18,
    titulo: "INFLUENCIA DE LOS VIDEOJUEGOS EN EL COMPORTAMIENTO DE LOS ADOLESCENTES DE 2DO AÑO DEL LICEO NACIONAL ANGEL MARIA DUQUE",
    resumen: "El estudio tuvo como objetivo general Determinar la influencia de los videojuegos en el comportamiento de los adolescentes de 2do año del Liceo Nacional “Ángel María Duque”, ubicado en La Grita, Municipio Jáuregui del Estado Táchira, durante el año escolar 2025-2026. Metodológicamente, el proyecto se inscribió dentro del paradigma cuantitativo, bajo un diseño de investigación de campo y de tipo descriptivo. La población estuvo constituida por 167 adolescentes y se extrajo una muestra de 30 adolescentes mediante un muestreo al azar sistemático (constante K=6). Para la recolección de los datos primarios se seleccionó la técnica de la encuesta y como instrumento un cuestionario dicotómico (SÍ/NO) compuesto por 20 ítems, cuya validez se determinó a través del contenido, constructo y el juicio de tres expertos, asegurando además su confiabilidad metodológica. Los resultados y conclusiones determinaron que el consumo frecuente de títulos de tipo Shooter y de acción multijugador (Free Fire, Fortnite, Call of Duty), sumado a la falta de supervisión parental por extensas jornadas laborales, ejerce una influencia deconstructiva en los jóvenes. Se evidenciaron alteraciones conductuales severas tales como impulsividad, agresividad por imitación de avatares, aislamiento social y sedentarismo. Asimismo, se comprobó una correlación directa entre las horas de juego y la evasión de los deberes escolares, lo que genera dificultades de aprendizaje y lesiona severamente el rendimiento académico integral de la población estudiantil",
    autores: ["Jorianna Villamizar", "Jhonny Quiroz", "Luissa Franco", "Guadalupe Moreno", "Maryuri Avendaño", "Alonxibe Casanova"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID18.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID18.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID18.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
},
{
    id: 19,
    titulo: "Creación del Consejo Científico y Productivo Estudiantil en el Liceo Ángel María Duque de La Grita",
    resumen: "La presente investigación tuvo como objetivo general proponer la creación de un Consejo Científico y Productivo Estudiantil en el Liceo Nacional Ángel María Duque, ubicado en La Grita, estado Táchira, concebido como una alternativa formal para canalizar el potencial creativo, organizativo y de liderazgo de la población juvenil. Teóricamente, el estudio se fundamentó en los principios pedagógicos del constructivismo, el aprendizaje significativo y la pedagogía productiva. Metodológicamente, se enmarcó bajo un enfoque mixto (cuanti-cualitativo), con un tipo de investigación descriptivo-explicativo y un diseño no experimental de corte transversal. La población y muestra de carácter censal estuvo constituida por veinticinco (25) estudiantes pertenecientes a cuarto año de educación media general. Para la recolección de los datos cuantitativos se diseñó un cuestionario dicotómico de diez (10) ítems, complementado en el área cualitativa mediante un guion de entrevista semiestructurada dirigido al personal docente del plantel. Los resultados estadísticos evidenciaron una necesidad institucional y un respaldo estudiantil casi unánime del 96% a favor del establecimiento del organismo. Asimismo, se constató un 100% de aprobación respecto a la pertinencia de articular la teoría con la praxis escolar a través de proyectos piloto. Se concluye que la propuesta posee una alta factibilidad comunitaria y geográfica, proyectando la ejecución de líneas de acción en huertos escolares, reciclaje autogestionado y publicaciones digitales para fortalecer la soberanía educativa, científica y productiva de la localidad.",
    autores: ["Valery Nahomi Duarte Solano", "Miguel Alfonso Bello Suárez", "Jhonadyth Alejandro Gandica Contreras", "Alegría Antonella Arrieta Frasca", "Kevin Rances Acevedo Silva"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID19.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID19.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID19.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  },
  {
    id: 20,
    titulo: "INFLUENCIA DE LA CAMPAÑA “CONÉCTATE CON CONSCIENCIA” EN LA PERCEPCIÓN Y HÁBITOS DE USO DE LAS REDES SOCIALES EN ADOLESCENTES",
    resumen: "La presente investigación tuvo como objetivo evaluar la influencia de la campaña “Conéctate con Consciencia” en el fomento del uso responsable de las redes sociales en adolescentes de 4to y 5to año del Liceo Nacional Ángel María Duque, La Grita, Estado Táchira. El estudio se fundamentó en un enfoque positivista, bajo un diseño descriptivo y de campo, con carácter transversal. La población estuvo constituida por los estudiantes de educación media general de la institución, seleccionándose una muestra intencional. Para la recolección de datos, se aplicó un instrumento tipo cuestionario (Escala Likert) antes y después de la implementación de la campaña, lo cual permitió medir cambios significativos en la percepción, los hábitos de uso y la higiene digital de los adolescentes. Los resultados permitieron identificar una prevalencia de dependencia digital y una necesidad imperante de fortalecer las competencias críticas frente al contenido en línea. Se concluyó que la aplicación de estrategias de concientización, como el Workshop “Mi Huella Digital”, promueve una mayor autorregulación y comprensión de la privacidad, mitigando riesgos asociados a la sobreexposición. Se recomienda institucionalizar estas jornadas como parte de la formación permanente para consolidar una ciudadanía digital responsable y saludable en la comunidad estudiantil.",
    autores: ["Molina G. José M.","Orduz M. Franyimar A.","Rodríguez G. Génesis J.","Uribe N. Sofía A.","Villalba C. Luissana V."],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID20.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID20.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID20.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  }, 
  {
    id: 21,
    titulo: "CONTENEDORES DE RECICLAJE COMO ESTRATEGIA PARA LA SELECCIÓN DE RESIDUOS SÓLIDOS EN LA GRAN FAMILIA ANMADUQUENSE",
    resumen: "El presente trabajo de investigación tuvo como finalidad Fabricar contenedores de reciclaje como estrategia para la selección de residuos sólidos en la Gran Familia ANMADUQUENSE de La Grita, en el Municipio Jáuregui del Estado Táchira. La metodológicamente, este estudio se enmarcó bajo el paradigma cuantitativo, desarrollándose a través de una investigación de campo de nivel descriptivo, lo que permitió recolectar la información directamente de la realidad en su contexto natural. La población objeto de estudio estuvo conformada por un total de novecientos sesenta y seis (966) personas que integran la comunidad educativa de la institución. Para el proceso de recolección de datos, el grupo investigador utilizó la técnica de la encuesta, para la cual diseñó un (01) instrumento de tipo cuestionario basado en una escala de respuestas dicotómicas (SÍ / NO), contentivo de una batería de veinte (20) ítems, aplicado a una muestra intencional de treinta (30) personas pertenecientes al plantel. La importancia de esta investigación radica en su profundo valor ecológico, pedagógico y de salud pública dentro del entorno escolar y genera un efecto de desbordamiento positivo, donde los estudiantes trasladan estos hábitos a sus hogares, consolidando así un compromiso ético y ambiental sostenible en toda la sociedad jaureguina.",
    autores: ["Yoselin Sánchez", "Rosbely Pérez", "Jennifer Gómez", "Yhoan Rojas", "Alanny Barragan", "Albanny Barragan", "Juan Bello", "Maikel Moran"],
    mencion: "Ciencias",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID21.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID21.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID21.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]                                      
  },
  {
    id: 22,
    titulo: "DISPENSADORES DE ALIMENTOS PARA PERROS EN SITUACIÓN DE CALLE EN LA URBANIZACION “PORTACHUELO” DE LA GRITA MUNICIPIO JÁUREGUI DEL ESTADO TÁCHIRA",
    resumen: "La presente investigación tuvo como objetivo principal la Implementación de dispensadores de alimento para perros en situación de calle en la urbanización “Portachuelo” de La Grita, Municipio Jáuregui del Estado Táchira. El estudio se enmarcó en un paradigma cuantitativo, bajo una modalidad de investigación de campo de tipo descriptiva, orientada a analizar la realidad social y sanitaria vinculada a la sobrepoblación canina itinerante en el sector. La población estuvo constituida por 100 habitantes de la urbanización, de la cual se extrajo una muestra probabilística de 70 personas. Para la recolección de datos, se empleó como técnica la encuesta y como instrumento un cuestionario estructurado con 22 ítems de escala dicotómica (SI/NO). Asimismo, el desarrollo de la propuesta tecnológica implicó una fase técnica de diseño, asesoramiento especializado con expertos en metalurgia y albañilería, y la elaboración física de los dispensadores utilizando materiales resistentes y reutilizables. Los resultados obtenidos validan la necesidad de ejecutar mecanismos de asistencia alimentaria como estrategia de mitigación ante los riesgos epidemiológicos y el maltrato animal. Se concluye que el uso de dispensadores, diseñados bajo criterios técnicos y funcionales, representa una solución viable, económica y sostenible para mejorar el bienestar animal y las condiciones sanitarias de la comunidad de la urbanización, fomentando a su vez la participación ciudadana en la preservación del medio ambiente.",
    autores: ["Avendaño Eliangi", "Antolínez Wilmar", "Caraballo Juliana", "Franco Leyfrank", "García Monserrat", "Guerrero Yoneiber", "Mora Enderson", "Oliveros Noel"],
    mencion: "Humanidades",
    año: 2026,
    caratulaURL: process.env.PUBLIC_URL + "/Caratulas/C_ID22.png",
    portadaURL: process.env.PUBLIC_URL + "/Portadas/ID22.png",
    videoURL: "https://www.youtube.com/embed/PGIFXHmw_js",
    documentoURL: "process.env.PUBLIC_URL + /Proyectos/ProyectoID22.pdf",
    anexos: [{ titulo: "Tablas de Muestreo", url: "#" }]
  }
];


export default projectsData;
