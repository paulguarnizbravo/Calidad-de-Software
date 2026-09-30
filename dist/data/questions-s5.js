window.QUESTIONS_S5 = [
  {
    "id": 1,
    "type": "choice",
    "title": "¿Cuál es el estándar internacional histórico de la IEEE que define el formato de la documentación de pruebas de software?",
    "options": [
      "IEEE 829 (ahora ISO/IEC/IEEE 29119)",
      "IEEE 802.11",
      "ISO 9001",
      "CMMI Nivel 1"
    ],
    "correct": 0,
    "why": "IEEE 829 definió el estándar para planes de prueba, casos de prueba e informes.",
    "cat": "Artefactos de Prueba"
  },
  {
    "id": 2,
    "type": "choice",
    "title": "En un Plan de Pruebas (Test Plan), los 'Criterios de Entrada' (Entry Criteria) definen:",
    "options": [
      "Las condiciones previas que deben cumplirse antes de que las pruebas puedan comenzar (ej. entorno desplegado, datos listos).",
      "El dinero que se cobra a los usuarios para entrar a la aplicación.",
      "La lista de contraseñas de los usuarios de prueba.",
      "El número de horas de almuerzo del equipo."
    ],
    "correct": 0,
    "why": "Los Criterios de Entrada aseguran que el entorno y los componentes estén listos para ser probados sin bloqueos.",
    "cat": "Artefactos de Prueba"
  },
  {
    "id": 3,
    "type": "choice",
    "title": "En un Caso de Prueba formal, la diferencia entre 'Resultado Esperado' y 'Resultado Obtenido' es:",
    "options": [
      "El esperado se especifica previamente según requisitos; el obtenido se documenta al ejecutar la prueba en el software real.",
      "Son términos sinónimos y significan que la prueba pasó.",
      "El esperado lo redacta el cliente y el obtenido el programador.",
      "El esperado solo se llena si la prueba falla."
    ],
    "correct": 0,
    "why": "Si el obtenido no coincide con el esperado, se reporta una discrepancia o defecto.",
    "cat": "Artefactos de Prueba"
  },
  {
    "id": 4,
    "type": "choice",
    "title": "¿Cuál es la función principal de la Matriz de Trazabilidad de Requisitos (RTM)?",
    "options": [
      "Relacionar bidireccionalmente los requerimientos con sus casos de prueba para garantizar cobertura total y evaluar impacto de cambios.",
      "Monitorear la temperatura del procesador del servidor.",
      "Calcular las comisiones de ventas de marketing.",
      "Generar números de serie aleatorios."
    ],
    "correct": 0,
    "why": "La RTM asegura que no haya requisitos huérfanos sin probar y permite analizar el impacto de modificaciones.",
    "cat": "Artefactos de Prueba"
  },
  {
    "id": 5,
    "type": "choice",
    "title": "En un Reporte de Defectos (Bug Report), ¿qué define la 'Severidad' frente a la 'Prioridad'?",
    "options": [
      "Severidad mide el impacto técnico y funcional en el sistema; Prioridad mide la urgencia de negocio para corregirlo.",
      "Severidad la escribe el tester y Prioridad el diseñador gráfico.",
      "Son exactamente lo mismo en cualquier herramienta como Jira.",
      "Severidad se mide en dólares y Prioridad en horas."
    ],
    "correct": 0,
    "why": "Severidad = impacto técnico; Prioridad = urgencia comercial o de negocio.",
    "cat": "Artefactos de Prueba"
  },
  {
    "id": 6,
    "type": "tf",
    "title": "Un Caso de Prueba sin pasos detallados ni datos de prueba es completamente reproducible por cualquier evaluador.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. Sin pasos precisos ni datos específicos, otra persona no podrá reproducir la prueba de forma consistente.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 7,
    "type": "tf",
    "title": "Los Criterios de Salida (Exit Criteria) de un Plan de Pruebas determinan cuándo se puede finalizar formalmente la fase de testing.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Evalúan condiciones como porcentaje de cobertura y ausencia de defectos bloqueantes.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 8,
    "type": "tf",
    "title": "Un defecto puede tener Severidad Crítica pero Prioridad Baja para el negocio.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Si el módulo crítico solo lo utiliza un administrador una vez al año y tiene workaround.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 9,
    "type": "tf",
    "title": "Un error ortográfico en el logotipo principal de la empresa tiene Alta Prioridad comercial pero Baja Severidad técnica.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. No rompe el sistema técnicamente, pero daña gravemente la imagen institucional de la marca.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 10,
    "type": "tf",
    "title": "El Test Summary Report es el documento que recomienda formalmente la decisión Go / No-Go para el pase a producción.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Sintetiza métricas, cobertura y riesgos residuales para la toma de decisión gerencial.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 11,
    "type": "tf",
    "title": "La Matriz de Trazabilidad solo debe elaborarse después de que el software esté instalado en producción.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. Debe crearse desde el inicio del proyecto junto con el análisis de requerimientos.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 12,
    "type": "tf",
    "title": "Los pasos para reproducir un defecto deben ser claros, secuenciales y permitir recrear la falla inequívocamente.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Sin pasos reproducibles, los desarrolladores no pueden diagnosticar ni solucionar el bug.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 13,
    "type": "tf",
    "title": "Un caso de prueba en estado 'Blocked' significa que no se puede ejecutar debido a que otra falla previa impide llegar a él.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Por ejemplo, si el login falla, las pruebas del carrito de compras quedan bloqueadas.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 14,
    "type": "tf",
    "title": "En un Bug Report, adjuntar capturas de pantalla, logs del servidor y datos de entrada acelera la corrección del problema.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Provee evidencia forense inmediata para los desarrolladores.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 15,
    "type": "tf",
    "title": "La decisión de 'No-Go' en un comité de calidad significa cancelar definitivamente el desarrollo de por vida.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. Significa posponer el lanzamiento a producción hasta resolver los defectos críticos detectados.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 16,
    "type": "input",
    "title": "Escribe las siglas en inglés de la Matriz de Trazabilidad de Requisitos (Requirements Traceability Matrix):",
    "correct": [
      "rtm",
      "matriz rtm"
    ],
    "why": "RTM (Requirements Traceability Matrix) conecta requerimientos con casos de prueba.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 17,
    "type": "input",
    "title": "Escribe el nombre del documento de alto nivel que define el alcance, estrategia y recursos de las pruebas (Test ...):",
    "correct": [
      "plan",
      "test plan",
      "plan de pruebas"
    ],
    "why": "El Plan de Pruebas (Test Plan) es la hoja de ruta integral del proceso de evaluación.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 18,
    "type": "input",
    "title": "Escribe el término que mide el daño o impacto técnico que un defecto produce en el sistema (Severidad o Prioridad):",
    "correct": [
      "severidad",
      "severity"
    ],
    "why": "La Severidad clasifica el grado de impacto técnico en la funcionalidad del software.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 19,
    "type": "input",
    "title": "Escribe el término que mide la urgencia comercial para resolver un defecto (Severidad o Prioridad):",
    "correct": [
      "prioridad",
      "priority"
    ],
    "why": "La Prioridad define el orden y premura con que el negocio exige la corrección.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 20,
    "type": "input",
    "title": "Escribe el estado de un caso de prueba que no pudo ejecutarse debido a una falla bloqueante previa (ejemplo: Blocked):",
    "correct": [
      "blocked",
      "bloqueado"
    ],
    "why": "Blocked indica que una precondición o fallo anterior impide correr la prueba.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 21,
    "type": "choice",
    "title": "Pregunta de Evaluación #21 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 22,
    "type": "choice",
    "title": "Pregunta de Evaluación #22 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 23,
    "type": "choice",
    "title": "Pregunta de Evaluación #23 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 24,
    "type": "choice",
    "title": "Pregunta de Evaluación #24 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 25,
    "type": "choice",
    "title": "Pregunta de Evaluación #25 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 26,
    "type": "choice",
    "title": "Pregunta de Evaluación #26 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 27,
    "type": "choice",
    "title": "Pregunta de Evaluación #27 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 28,
    "type": "choice",
    "title": "Pregunta de Evaluación #28 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 29,
    "type": "choice",
    "title": "Pregunta de Evaluación #29 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 30,
    "type": "choice",
    "title": "Pregunta de Evaluación #30 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 31,
    "type": "choice",
    "title": "Pregunta de Evaluación #31 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 32,
    "type": "choice",
    "title": "Pregunta de Evaluación #32 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 33,
    "type": "choice",
    "title": "Pregunta de Evaluación #33 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 34,
    "type": "choice",
    "title": "Pregunta de Evaluación #34 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 35,
    "type": "choice",
    "title": "Pregunta de Evaluación #35 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 36,
    "type": "choice",
    "title": "Pregunta de Evaluación #36 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 37,
    "type": "choice",
    "title": "Pregunta de Evaluación #37 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 38,
    "type": "choice",
    "title": "Pregunta de Evaluación #38 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 39,
    "type": "choice",
    "title": "Pregunta de Evaluación #39 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 40,
    "type": "choice",
    "title": "Pregunta de Evaluación #40 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 41,
    "type": "choice",
    "title": "Pregunta de Evaluación #41 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 42,
    "type": "choice",
    "title": "Pregunta de Evaluación #42 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 43,
    "type": "choice",
    "title": "Pregunta de Evaluación #43 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 44,
    "type": "choice",
    "title": "Pregunta de Evaluación #44 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 45,
    "type": "choice",
    "title": "Pregunta de Evaluación #45 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 46,
    "type": "choice",
    "title": "Pregunta de Evaluación #46 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 47,
    "type": "choice",
    "title": "Pregunta de Evaluación #47 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 48,
    "type": "choice",
    "title": "Pregunta de Evaluación #48 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 49,
    "type": "choice",
    "title": "Pregunta de Evaluación #49 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 50,
    "type": "choice",
    "title": "Pregunta de Evaluación #50 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 51,
    "type": "choice",
    "title": "Pregunta de Evaluación #51 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 52,
    "type": "choice",
    "title": "Pregunta de Evaluación #52 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 53,
    "type": "choice",
    "title": "Pregunta de Evaluación #53 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 54,
    "type": "choice",
    "title": "Pregunta de Evaluación #54 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 55,
    "type": "choice",
    "title": "Pregunta de Evaluación #55 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 56,
    "type": "choice",
    "title": "Pregunta de Evaluación #56 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 57,
    "type": "choice",
    "title": "Pregunta de Evaluación #57 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 58,
    "type": "choice",
    "title": "Pregunta de Evaluación #58 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 59,
    "type": "choice",
    "title": "Pregunta de Evaluación #59 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 60,
    "type": "choice",
    "title": "Pregunta de Evaluación #60 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 61,
    "type": "choice",
    "title": "Pregunta de Evaluación #61 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 62,
    "type": "choice",
    "title": "Pregunta de Evaluación #62 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 63,
    "type": "choice",
    "title": "Pregunta de Evaluación #63 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 64,
    "type": "choice",
    "title": "Pregunta de Evaluación #64 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 65,
    "type": "choice",
    "title": "Pregunta de Evaluación #65 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 66,
    "type": "choice",
    "title": "Pregunta de Evaluación #66 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 67,
    "type": "choice",
    "title": "Pregunta de Evaluación #67 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 68,
    "type": "choice",
    "title": "Pregunta de Evaluación #68 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 69,
    "type": "choice",
    "title": "Pregunta de Evaluación #69 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 70,
    "type": "choice",
    "title": "Pregunta de Evaluación #70 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 71,
    "type": "choice",
    "title": "Pregunta de Evaluación #71 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 72,
    "type": "choice",
    "title": "Pregunta de Evaluación #72 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 73,
    "type": "choice",
    "title": "Pregunta de Evaluación #73 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 74,
    "type": "choice",
    "title": "Pregunta de Evaluación #74 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 75,
    "type": "choice",
    "title": "Pregunta de Evaluación #75 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 76,
    "type": "choice",
    "title": "Pregunta de Evaluación #76 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 77,
    "type": "choice",
    "title": "Pregunta de Evaluación #77 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 78,
    "type": "choice",
    "title": "Pregunta de Evaluación #78 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 79,
    "type": "choice",
    "title": "Pregunta de Evaluación #79 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 80,
    "type": "choice",
    "title": "Pregunta de Evaluación #80 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 81,
    "type": "choice",
    "title": "Pregunta de Evaluación #81 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 82,
    "type": "choice",
    "title": "Pregunta de Evaluación #82 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 83,
    "type": "choice",
    "title": "Pregunta de Evaluación #83 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 84,
    "type": "choice",
    "title": "Pregunta de Evaluación #84 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 85,
    "type": "choice",
    "title": "Pregunta de Evaluación #85 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 86,
    "type": "choice",
    "title": "Pregunta de Evaluación #86 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 87,
    "type": "choice",
    "title": "Pregunta de Evaluación #87 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 88,
    "type": "choice",
    "title": "Pregunta de Evaluación #88 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 89,
    "type": "choice",
    "title": "Pregunta de Evaluación #89 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 90,
    "type": "choice",
    "title": "Pregunta de Evaluación #90 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 91,
    "type": "choice",
    "title": "Pregunta de Evaluación #91 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 92,
    "type": "choice",
    "title": "Pregunta de Evaluación #92 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 93,
    "type": "choice",
    "title": "Pregunta de Evaluación #93 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 94,
    "type": "choice",
    "title": "Pregunta de Evaluación #94 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 95,
    "type": "choice",
    "title": "Pregunta de Evaluación #95 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 96,
    "type": "choice",
    "title": "Pregunta de Evaluación #96 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 97,
    "type": "choice",
    "title": "Pregunta de Evaluación #97 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 98,
    "type": "choice",
    "title": "Pregunta de Evaluación #98 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 99,
    "type": "choice",
    "title": "Pregunta de Evaluación #99 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  },
  {
    "id": 100,
    "type": "choice",
    "title": "Pregunta de Evaluación #100 (Artefactos de Prueba): En una reunión de liberación de software, el líder de QA presenta el Test Summary Report donde se evidencia que el 99% de los casos pasaron, pero persiste un defecto de seguridad que permite ver datos personales de clientes. ¿Cuál debe ser el dictamen técnico?",
    "options": [
      "NO-GO (No lanzamiento a producción hasta subsanar la brecha de seguridad).",
      "GO (Lanzar inmediatamente porque el 99% es una nota aprobatoria).",
      "Ignorar el reporte y lanzar el software de madrugada.",
      "Eliminar el caso de prueba de la matriz para que dé 100%."
    ],
    "correct": 0,
    "why": "Un defecto de seguridad crítico bloqueante impide el pase a producción sin importar el porcentaje global.",
    "cat": "Artefactos y Gestión de Pruebas"
  }
];
