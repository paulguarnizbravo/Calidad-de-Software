window.QUESTIONS_S4 = [
  {
    "id": 1,
    "type": "choice",
    "title": "¿Cuál es la diferencia técnica entre un Error, un Defecto y una Falla?",
    "options": [
      "El error es la acción humana equivocada; el defecto es la imperfección introducida en el código; la falla es el comportamiento erróneo observable en ejecución.",
      "El error lo comete el cliente; el defecto la computadora; la falla el gerente.",
      "Son sinónimos exactos y pueden usarse indistintamente en cualquier contexto.",
      "La falla solo ocurre si el código está escrito en C++."
    ],
    "correct": 0,
    "why": "Secuencia estándar ISTQB: Error humano -> Defecto en código -> Falla visible en ejecución.",
    "cat": "Fundamentos Testing"
  },
  {
    "id": 2,
    "type": "choice",
    "title": "La 'Verificación' se define según la IEEE como:",
    "options": [
      "El proceso de evaluar si los productos intermedios de una fase cumplen las especificaciones establecidas ('¿construimos el producto correctamente?').",
      "El proceso de evaluar si el producto final satisface las necesidades del usuario ('¿construimos el producto correcto?').",
      "La instalación de parches de seguridad en los servidores.",
      "El pago de las facturas de desarrollo."
    ],
    "correct": 0,
    "why": "Verificación confirma el apego a especificaciones; Validación evalúa idoneidad para el usuario.",
    "cat": "Fundamentos Testing"
  },
  {
    "id": 3,
    "type": "choice",
    "title": "¿Cuál es la característica principal de las 'Pruebas Estáticas'?",
    "options": [
      "Evalúan el código o documentación sin ejecutar el software (ej. revisiones de código, análisis estático).",
      "Se ejecutan únicamente en bases de datos desconectadas.",
      "Requieren que el usuario final use la app durante 10 horas seguidas.",
      "Solo se aplican a archivos PDF."
    ],
    "correct": 0,
    "why": "Pruebas estáticas encuentran anomalías sin correr el programa (Shift-Left).",
    "cat": "Fundamentos Testing"
  },
  {
    "id": 4,
    "type": "choice",
    "title": "En pruebas de Caja Blanca, la 'Cobertura de Sentencias' (Statement Coverage) evalúa:",
    "options": [
      "El porcentaje de sentencias ejecutables del código que han sido ejecutadas al menos una vez por los casos de prueba.",
      "La cantidad de palabras en el manual de usuario.",
      "El número de declaraciones juradas del equipo.",
      "Si el código tiene licencia GPL."
    ],
    "correct": 0,
    "why": "Cobertura de sentencias mide cuántas líneas de código se ejecutaron durante los tests.",
    "cat": "Fundamentos Testing"
  },
  {
    "id": 5,
    "type": "choice",
    "title": "En pruebas de Caja Negra, el 'Análisis de Valores Límite' (BVA) se enfoca en:",
    "options": [
      "Probar valores en las fronteras exactas y adyacentes de las particiones válidas e inválidas.",
      "Probar únicamente números enteros positivos pares.",
      "Verificar la memoria física de la tarjeta de video.",
      "Escribir nombres de usuario de 500 letras."
    ],
    "correct": 0,
    "why": "Los errores estadísticamente se concentran en los bordes y límites de los rangos (<, <=, >, >=).",
    "cat": "Fundamentos Testing"
  },
  {
    "id": 6,
    "type": "tf",
    "title": "Las pruebas de software pueden demostrar que no existen defectos en un programa.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso (Principio ISTQB). Las pruebas demuestran la presencia de defectos, no su ausencia total.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 7,
    "type": "tf",
    "title": "Las pruebas de caja blanca requieren acceso directo y conocimiento del código fuente interno.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Evalúan rutas, bucles, condiciones y sentencias de la estructura interna.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 8,
    "type": "tf",
    "title": "Las pruebas unitarias evalúan el comportamiento aislado de funciones, métodos o clases individuales.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Se ejecutan en el nivel más granular de desarrollo.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 9,
    "type": "tf",
    "title": "Las pruebas de regresión se realizan para confirmar que un cambio reciente no ha introducido nuevos defectos en funciones preexistentes.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Verifican que lo que funcionaba antes no se haya roto tras una modificación.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 10,
    "type": "tf",
    "title": "El Análisis Estático mediante herramientas como SonarQube es un ejemplo de prueba dinámica.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. Es una prueba estática automatizada porque analiza el código sin ejecutarlo.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 11,
    "type": "tf",
    "title": "La Complejidad Ciclomática de McCabe mide el número de caminos independientes en un programa.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. V(G) = E - N + 2P define el número mínimo de pruebas para cubrir todas las ramas.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 12,
    "type": "tf",
    "title": "Las pruebas de aceptación (UAT) son realizadas habitualmente por los usuarios finales o el cliente de negocio.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Validan si el producto está listo para operar en el negocio real.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 13,
    "type": "tf",
    "title": "En la técnica de Partición de Equivalencia, se asume que todos los valores de una misma partición se comportan de manera idéntica.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Por ello basta con probar un solo valor representativo de cada clase.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 14,
    "type": "tf",
    "title": "Las pruebas de caja gris combinan conocimiento parcial de la estructura interna con pruebas de comportamiento externo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "why": "Verdadero. Común en pruebas de APIs y servicios web.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 15,
    "type": "tf",
    "title": "Un defecto en el código siempre provoca una falla inmediata visible para el usuario.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "why": "Falso. Un defecto puede permanecer latente durante años si la ruta o condición de ejecución nunca se activa.",
    "cat": "Verdadero o Falso"
  },
  {
    "id": 16,
    "type": "input",
    "title": "Escribe el nombre de la técnica de caja negra que divide el rango de entrada en clases válidas e inválidas (Partición de ...):",
    "correct": [
      "equivalencia",
      "particion de equivalencia"
    ],
    "why": "Partición de equivalencia divide los datos en grupos que se tratan de igual manera.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 17,
    "type": "input",
    "title": "Escribe el nombre del nivel de pruebas que evalúa la interacción y comunicación entre dos o más módulos integrados:",
    "correct": [
      "integracion",
      "pruebas de integracion",
      "integration"
    ],
    "why": "Pruebas de Integración verifican las interfaces y contratos entre componentes.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 18,
    "type": "input",
    "title": "Escribe el término que describe el comportamiento observable y erróneo del sistema en ejecución (Error, Defecto o Falla):",
    "correct": [
      "falla",
      "failure"
    ],
    "why": "Falla (Failure) es la manifestación visible en ejecución de un defecto en el código.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 19,
    "type": "input",
    "title": "Escribe el tipo de pruebas que analizan la estructura interna del código (Caja ...):",
    "correct": [
      "blanca",
      "caja blanca",
      "white box"
    ],
    "why": "Pruebas de caja blanca o estructurales examinan el código fuente directamente.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 20,
    "type": "input",
    "title": "Escribe el tipo de pruebas que no requieren ejecutar el código fuente (Estáticas o Dinámicas):",
    "correct": [
      "estaticas",
      "pruebas estaticas",
      "estatica"
    ],
    "why": "Pruebas estáticas analizan requisitos, diseño y código sin ejecución.",
    "cat": "Respuesta Escrita"
  },
  {
    "id": 21,
    "type": "choice",
    "title": "Pregunta de Evaluación #21 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 22,
    "type": "choice",
    "title": "Pregunta de Evaluación #22 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 23,
    "type": "choice",
    "title": "Pregunta de Evaluación #23 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 24,
    "type": "choice",
    "title": "Pregunta de Evaluación #24 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 25,
    "type": "choice",
    "title": "Pregunta de Evaluación #25 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 26,
    "type": "choice",
    "title": "Pregunta de Evaluación #26 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 27,
    "type": "choice",
    "title": "Pregunta de Evaluación #27 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 28,
    "type": "choice",
    "title": "Pregunta de Evaluación #28 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 29,
    "type": "choice",
    "title": "Pregunta de Evaluación #29 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 30,
    "type": "choice",
    "title": "Pregunta de Evaluación #30 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 31,
    "type": "choice",
    "title": "Pregunta de Evaluación #31 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 32,
    "type": "choice",
    "title": "Pregunta de Evaluación #32 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 33,
    "type": "choice",
    "title": "Pregunta de Evaluación #33 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 34,
    "type": "choice",
    "title": "Pregunta de Evaluación #34 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 35,
    "type": "choice",
    "title": "Pregunta de Evaluación #35 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 36,
    "type": "choice",
    "title": "Pregunta de Evaluación #36 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 37,
    "type": "choice",
    "title": "Pregunta de Evaluación #37 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 38,
    "type": "choice",
    "title": "Pregunta de Evaluación #38 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 39,
    "type": "choice",
    "title": "Pregunta de Evaluación #39 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 40,
    "type": "choice",
    "title": "Pregunta de Evaluación #40 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 41,
    "type": "choice",
    "title": "Pregunta de Evaluación #41 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 42,
    "type": "choice",
    "title": "Pregunta de Evaluación #42 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 43,
    "type": "choice",
    "title": "Pregunta de Evaluación #43 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 44,
    "type": "choice",
    "title": "Pregunta de Evaluación #44 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 45,
    "type": "choice",
    "title": "Pregunta de Evaluación #45 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 46,
    "type": "choice",
    "title": "Pregunta de Evaluación #46 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 47,
    "type": "choice",
    "title": "Pregunta de Evaluación #47 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 48,
    "type": "choice",
    "title": "Pregunta de Evaluación #48 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 49,
    "type": "choice",
    "title": "Pregunta de Evaluación #49 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 50,
    "type": "choice",
    "title": "Pregunta de Evaluación #50 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 51,
    "type": "choice",
    "title": "Pregunta de Evaluación #51 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 52,
    "type": "choice",
    "title": "Pregunta de Evaluación #52 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 53,
    "type": "choice",
    "title": "Pregunta de Evaluación #53 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 54,
    "type": "choice",
    "title": "Pregunta de Evaluación #54 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 55,
    "type": "choice",
    "title": "Pregunta de Evaluación #55 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 56,
    "type": "choice",
    "title": "Pregunta de Evaluación #56 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 57,
    "type": "choice",
    "title": "Pregunta de Evaluación #57 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 58,
    "type": "choice",
    "title": "Pregunta de Evaluación #58 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 59,
    "type": "choice",
    "title": "Pregunta de Evaluación #59 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 60,
    "type": "choice",
    "title": "Pregunta de Evaluación #60 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 61,
    "type": "choice",
    "title": "Pregunta de Evaluación #61 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 62,
    "type": "choice",
    "title": "Pregunta de Evaluación #62 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 63,
    "type": "choice",
    "title": "Pregunta de Evaluación #63 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 64,
    "type": "choice",
    "title": "Pregunta de Evaluación #64 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 65,
    "type": "choice",
    "title": "Pregunta de Evaluación #65 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 66,
    "type": "choice",
    "title": "Pregunta de Evaluación #66 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 67,
    "type": "choice",
    "title": "Pregunta de Evaluación #67 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 68,
    "type": "choice",
    "title": "Pregunta de Evaluación #68 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 69,
    "type": "choice",
    "title": "Pregunta de Evaluación #69 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 70,
    "type": "choice",
    "title": "Pregunta de Evaluación #70 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 71,
    "type": "choice",
    "title": "Pregunta de Evaluación #71 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 72,
    "type": "choice",
    "title": "Pregunta de Evaluación #72 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 73,
    "type": "choice",
    "title": "Pregunta de Evaluación #73 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 74,
    "type": "choice",
    "title": "Pregunta de Evaluación #74 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 75,
    "type": "choice",
    "title": "Pregunta de Evaluación #75 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 76,
    "type": "choice",
    "title": "Pregunta de Evaluación #76 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 77,
    "type": "choice",
    "title": "Pregunta de Evaluación #77 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 78,
    "type": "choice",
    "title": "Pregunta de Evaluación #78 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 79,
    "type": "choice",
    "title": "Pregunta de Evaluación #79 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 80,
    "type": "choice",
    "title": "Pregunta de Evaluación #80 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 81,
    "type": "choice",
    "title": "Pregunta de Evaluación #81 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 82,
    "type": "choice",
    "title": "Pregunta de Evaluación #82 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 83,
    "type": "choice",
    "title": "Pregunta de Evaluación #83 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 84,
    "type": "choice",
    "title": "Pregunta de Evaluación #84 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 85,
    "type": "choice",
    "title": "Pregunta de Evaluación #85 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 86,
    "type": "choice",
    "title": "Pregunta de Evaluación #86 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 87,
    "type": "choice",
    "title": "Pregunta de Evaluación #87 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 88,
    "type": "choice",
    "title": "Pregunta de Evaluación #88 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 89,
    "type": "choice",
    "title": "Pregunta de Evaluación #89 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 90,
    "type": "choice",
    "title": "Pregunta de Evaluación #90 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 91,
    "type": "choice",
    "title": "Pregunta de Evaluación #91 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 92,
    "type": "choice",
    "title": "Pregunta de Evaluación #92 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 93,
    "type": "choice",
    "title": "Pregunta de Evaluación #93 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 94,
    "type": "choice",
    "title": "Pregunta de Evaluación #94 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 95,
    "type": "choice",
    "title": "Pregunta de Evaluación #95 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 96,
    "type": "choice",
    "title": "Pregunta de Evaluación #96 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 97,
    "type": "choice",
    "title": "Pregunta de Evaluación #97 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 98,
    "type": "choice",
    "title": "Pregunta de Evaluación #98 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 99,
    "type": "choice",
    "title": "Pregunta de Evaluación #99 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  },
  {
    "id": 100,
    "type": "choice",
    "title": "Pregunta de Evaluación #100 (Técnicas de Pruebas): Para un campo de formulario que acepta edades entre 18 y 65 años, ¿cuál de los siguientes conjuntos representa valores de prueba óptimos según el Análisis de Valores Límite (BVA)?",
    "options": [
      "17, 18, 19 y 64, 65, 66",
      "10, 30 y 80",
      "Solo 18 y 65",
      "0 y 100"
    ],
    "correct": 0,
    "why": "BVA prueba la frontera exacta, justo debajo y justo arriba de cada límite válido.",
    "cat": "Técnicas de Caja Negra"
  }
];
