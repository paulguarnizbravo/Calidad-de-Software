window.QUESTIONS_S3 = [
  {
    "id": 1,
    "type": "choice",
    "title": "¿Cuál es la diferencia fundamental de enfoque entre QA (Aseguramiento) y QC (Control de Calidad)?",
    "options": [
      "QA es preventivo y se enfoca en el proceso; QC es reactivo/detectivo y se enfoca en el producto.",
      "QA solo lo hace el cliente y QC los programadores.",
      "QA se hace solo en hardware y QC solo en software.",
      "No existe diferencia; son sinónimos exactos."
    ],
    "correct": 0,
    "why": "QA previene defectos asegurando buenos procesos; QC detecta defectos evaluando los entregables producidos.",
    "cat": "QA vs QC"
  },
  {
    "id": 2,
    "type": "choice",
    "title": "¿Cuál de las siguientes actividades corresponde estrictamente a QA (Aseguramiento de Calidad)?",
    "options": [
      "Definir una política de revisión de código (pull requests) y configurar reglas de calidad en SonarQube.",
      "Probar manualmente si el botón de checkout funciona en Google Chrome.",
      "Ejecutar un script de Selenium para encontrar bugs en el login.",
      "Corregir una variable mal declarada en el código."
    ],
    "correct": 0,
    "why": "Definir estándares y políticas de proceso preventivas es el núcleo de QA.",
    "cat": "QA vs QC"
  },
  {
    "id": 3,
    "type": "choice",
    "title": "En un equipo Scrum, ¿qué es la 'Definition of Done' (DoD)?",
    "options": [
      "Un conjunto explícito de acuerdos de calidad que cada historia de usuario debe cumplir para ser liberada.",
      "La hora a la que termina la jornada de trabajo.",
      "La fecha en que vence el contrato del Scrum Master.",
      "Un documento donde los desarrolladores declaran que no hay bugs."
    ],
    "correct": 0,
    "why": "La DoD asegura que ninguna historia se dé por terminada sin pruebas, revisiones y estándares cumplidos.",
    "cat": "QA vs QC"
  },
  {
    "id": 4,
    "type": "choice",
    "title": "¿Qué busca lograr el enfoque de 'Shift-Left' en el aseguramiento de la calidad?",
    "options": [
      "Mover las actividades de verificación y calidad a las fases más tempranas del desarrollo (requisitos y arquitectura).",
      "Mover a los evaluadores a otra oficina a la izquierda.",
      "Postergar las pruebas de seguridad para el final del año.",
      "Escribir el código en orden alfabético inverso."
    ],
    "correct": 0,
    "why": "Shift-Left previene defectos anticipando pruebas y revisiones desde el inicio del ciclo.",
    "cat": "QA vs QC"
  },
  {
    "id": 5,
    "type": "choice",
    "title": "¿Para qué se utiliza el Diagrama de Ishikawa (Espina de Pescado) en SQA?",
    "options": [
      "Para estructurar visualmente las causas potenciales de un problema de calidad agrupadas por categorías.",
      "Para calcular el sueldo de los desarrolladores.",
      "Para medir la memoria RAM del servidor.",
      "Para diseñar logotipos de aplicaciones."
    ],
    "correct": 0,
    "why": "Ishikawa identifica y organiza las causas raíz de defectos o desviaciones de calidad.",
    "cat": "QA vs QC"
  },
  {
    "id": 6,
    "type": "tf",
    "title": "En Scrum, el tester o QA debe esperar a que termine el Sprint para empezar a trabajar.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. En Scrum el QA colabora desde el día uno en refinamiento, criterios de aceptación y pair testing.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 7,
    "type": "tf",
    "title": "Las pruebas de software (Testing) son un subconjunto de las actividades de Control de Calidad (QC).",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Testing es la técnica de ejecución de software para detectar discrepancias.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 8,
    "type": "tf",
    "title": "Los 5 Porqués es una técnica que profundiza sucesivamente en las causas hasta llegar a la raíz del problema.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Preguntar '¿por qué?' cinco veces ayuda a destapar la deficiencia de proceso.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 9,
    "type": "tf",
    "title": "Un pipeline de CI/CD ayuda al aseguramiento de calidad al ejecutar linters y pruebas automáticas en cada commit.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. La integración continua automatiza el control de calidad en cada cambio.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 10,
    "type": "tf",
    "title": "Quality Gate en SonarQube define las condiciones mínimas de calidad para permitir el despliegue del código.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Bloquea el pase a producción si hay vulnerabilidades o baja cobertura.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 11,
    "type": "tf",
    "title": "El rol de SQA es culpable de que los desarrolladores cometan errores humanos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. SQA busca crear procesos y entornos que ayuden a minimizar y detectar esos errores.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 12,
    "type": "tf",
    "title": "La revisión de pares (Code Review) es una actividad preventiva de calidad de software.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Detecta errores antes de que el código se integre y se despliegue.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 13,
    "type": "tf",
    "title": "En metodologías ágiles, la calidad es responsabilidad exclusiva del Product Owner.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. Toda la célula o equipo ágil es corresponsable de la calidad del producto entregado.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 14,
    "type": "tf",
    "title": "El principio de Pareto en calidad dice que el 80% de los defectos suelen concentrarse en el 20% de los módulos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. El 80/20 de Pareto se cumple de forma muy consistente en software testing.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 15,
    "type": "tf",
    "title": "Automatizar pruebas malas en CI/CD mejora la calidad automáticamente.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. Si las pruebas están mal diseñadas, solo automatizarás la mala detección de errores.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 16,
    "type": "input",
    "title": "Escribe el nombre de la técnica de análisis de causa raíz que utiliza un diagrama con forma de espina de pescado:",
    "correct": [
      "ishikawa",
      "diagrama de ishikawa",
      "espina de pescado",
      "causa efecto"
    ],
    "why": "El Diagrama de Ishikawa (o causa-efecto) fue creado por Kaoru Ishikawa.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 17,
    "type": "input",
    "title": "Escribe las siglas en inglés del Aseguramiento de Calidad del Software (Software Quality Assurance):",
    "correct": [
      "sqa",
      "qa"
    ],
    "why": "SQA (Software Quality Assurance) abarca la planificación y estándares de proceso.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 18,
    "type": "input",
    "title": "Escribe el nombre de la técnica que consiste en preguntar sucesivamente '¿Por qué?' para hallar la causa raíz:",
    "correct": [
      "5 porques",
      "los 5 porques",
      "5 whys",
      "cinco porques"
    ],
    "why": "Los 5 Porqués es una técnica fundamental para llegar al origen del defecto.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 19,
    "type": "input",
    "title": "Escribe la sigla de la Integración Continua y Despliegue Continuo (ejemplo: CI/CD):",
    "correct": [
      "ci/cd",
      "ci cd",
      "cicd"
    ],
    "why": "CI/CD automatiza la compilación, pruebas y entrega de software.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 20,
    "type": "input",
    "title": "Escribe el término ágil para la lista de criterios que indican que una tarea está terminada (Definition of ...):",
    "correct": [
      "done",
      "definition of done",
      "dod"
    ],
    "why": "Definition of Done (DoD) establece los estándares de calidad para dar por cerrado un ítem.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 21,
    "type": "choice",
    "title": "Pregunta de Evaluación #21 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 22,
    "type": "choice",
    "title": "Pregunta de Evaluación #22 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 23,
    "type": "choice",
    "title": "Pregunta de Evaluación #23 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 24,
    "type": "choice",
    "title": "Pregunta de Evaluación #24 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 25,
    "type": "choice",
    "title": "Pregunta de Evaluación #25 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 26,
    "type": "choice",
    "title": "Pregunta de Evaluación #26 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 27,
    "type": "choice",
    "title": "Pregunta de Evaluación #27 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 28,
    "type": "choice",
    "title": "Pregunta de Evaluación #28 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 29,
    "type": "choice",
    "title": "Pregunta de Evaluación #29 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 30,
    "type": "choice",
    "title": "Pregunta de Evaluación #30 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 31,
    "type": "choice",
    "title": "Pregunta de Evaluación #31 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 32,
    "type": "choice",
    "title": "Pregunta de Evaluación #32 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 33,
    "type": "choice",
    "title": "Pregunta de Evaluación #33 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 34,
    "type": "choice",
    "title": "Pregunta de Evaluación #34 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 35,
    "type": "choice",
    "title": "Pregunta de Evaluación #35 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 36,
    "type": "choice",
    "title": "Pregunta de Evaluación #36 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 37,
    "type": "choice",
    "title": "Pregunta de Evaluación #37 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 38,
    "type": "choice",
    "title": "Pregunta de Evaluación #38 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 39,
    "type": "choice",
    "title": "Pregunta de Evaluación #39 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 40,
    "type": "choice",
    "title": "Pregunta de Evaluación #40 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 41,
    "type": "choice",
    "title": "Pregunta de Evaluación #41 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 42,
    "type": "choice",
    "title": "Pregunta de Evaluación #42 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 43,
    "type": "choice",
    "title": "Pregunta de Evaluación #43 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 44,
    "type": "choice",
    "title": "Pregunta de Evaluación #44 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 45,
    "type": "choice",
    "title": "Pregunta de Evaluación #45 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 46,
    "type": "choice",
    "title": "Pregunta de Evaluación #46 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 47,
    "type": "choice",
    "title": "Pregunta de Evaluación #47 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 48,
    "type": "choice",
    "title": "Pregunta de Evaluación #48 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 49,
    "type": "choice",
    "title": "Pregunta de Evaluación #49 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 50,
    "type": "choice",
    "title": "Pregunta de Evaluación #50 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 51,
    "type": "choice",
    "title": "Pregunta de Evaluación #51 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 52,
    "type": "choice",
    "title": "Pregunta de Evaluación #52 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 53,
    "type": "choice",
    "title": "Pregunta de Evaluación #53 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 54,
    "type": "choice",
    "title": "Pregunta de Evaluación #54 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 55,
    "type": "choice",
    "title": "Pregunta de Evaluación #55 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 56,
    "type": "choice",
    "title": "Pregunta de Evaluación #56 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 57,
    "type": "choice",
    "title": "Pregunta de Evaluación #57 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 58,
    "type": "choice",
    "title": "Pregunta de Evaluación #58 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 59,
    "type": "choice",
    "title": "Pregunta de Evaluación #59 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 60,
    "type": "choice",
    "title": "Pregunta de Evaluación #60 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 61,
    "type": "choice",
    "title": "Pregunta de Evaluación #61 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 62,
    "type": "choice",
    "title": "Pregunta de Evaluación #62 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 63,
    "type": "choice",
    "title": "Pregunta de Evaluación #63 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 64,
    "type": "choice",
    "title": "Pregunta de Evaluación #64 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 65,
    "type": "choice",
    "title": "Pregunta de Evaluación #65 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 66,
    "type": "choice",
    "title": "Pregunta de Evaluación #66 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 67,
    "type": "choice",
    "title": "Pregunta de Evaluación #67 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 68,
    "type": "choice",
    "title": "Pregunta de Evaluación #68 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 69,
    "type": "choice",
    "title": "Pregunta de Evaluación #69 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 70,
    "type": "choice",
    "title": "Pregunta de Evaluación #70 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 71,
    "type": "choice",
    "title": "Pregunta de Evaluación #71 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 72,
    "type": "choice",
    "title": "Pregunta de Evaluación #72 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 73,
    "type": "choice",
    "title": "Pregunta de Evaluación #73 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 74,
    "type": "choice",
    "title": "Pregunta de Evaluación #74 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 75,
    "type": "choice",
    "title": "Pregunta de Evaluación #75 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 76,
    "type": "choice",
    "title": "Pregunta de Evaluación #76 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 77,
    "type": "choice",
    "title": "Pregunta de Evaluación #77 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 78,
    "type": "choice",
    "title": "Pregunta de Evaluación #78 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 79,
    "type": "choice",
    "title": "Pregunta de Evaluación #79 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 80,
    "type": "choice",
    "title": "Pregunta de Evaluación #80 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 81,
    "type": "choice",
    "title": "Pregunta de Evaluación #81 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 82,
    "type": "choice",
    "title": "Pregunta de Evaluación #82 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 83,
    "type": "choice",
    "title": "Pregunta de Evaluación #83 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 84,
    "type": "choice",
    "title": "Pregunta de Evaluación #84 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 85,
    "type": "choice",
    "title": "Pregunta de Evaluación #85 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 86,
    "type": "choice",
    "title": "Pregunta de Evaluación #86 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 87,
    "type": "choice",
    "title": "Pregunta de Evaluación #87 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 88,
    "type": "choice",
    "title": "Pregunta de Evaluación #88 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 89,
    "type": "choice",
    "title": "Pregunta de Evaluación #89 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 90,
    "type": "choice",
    "title": "Pregunta de Evaluación #90 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 91,
    "type": "choice",
    "title": "Pregunta de Evaluación #91 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 92,
    "type": "choice",
    "title": "Pregunta de Evaluación #92 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 93,
    "type": "choice",
    "title": "Pregunta de Evaluación #93 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 94,
    "type": "choice",
    "title": "Pregunta de Evaluación #94 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 95,
    "type": "choice",
    "title": "Pregunta de Evaluación #95 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 96,
    "type": "choice",
    "title": "Pregunta de Evaluación #96 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 97,
    "type": "choice",
    "title": "Pregunta de Evaluación #97 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 98,
    "type": "choice",
    "title": "Pregunta de Evaluación #98 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 99,
    "type": "choice",
    "title": "Pregunta de Evaluación #99 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  },
  {
    "id": 100,
    "type": "choice",
    "title": "Pregunta de Evaluación #100 (Aseguramiento de Calidad): ¿Por qué la estrategia de pruebas Shift-Left es fundamental en organizaciones con entregas continuas?",
    "options": [
      "Porque encontrar defectos en las fases de diseño y desarrollo temprano reduce drásticamente el retrabajo y el costo total.",
      "Porque permite que los desarrolladores no escriban pruebas unitarias.",
      "Porque elimina la necesidad de tener entornos de prueba.",
      "Porque hace que las computadoras trabajen el doble de rápido."
    ],
    "correct": 0,
    "why": "Shift-Left traslada el aseguramiento hacia la izquierda para resolver defectos antes de que lleguen a producción.",
    "cat": "SQA y Métodos Ágiles"
  }
];
