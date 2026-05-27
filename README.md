Completar el archivo:  clientes-crud.spec.md con las especificaciones de un pequeño sistema de una pantalla,  con tecnología conocida, editar nombre del archivo si fuera necesario , respetar consistencia



Desarrollo con IA:

Elegir el prompt, a utilizar dentro de los pressentes en la plantilla:

implementar  y correr según  indicaciones  en sus plataformas para revisión  

21:15 vemos la revision



Informar:

IA utilizada
Si cumplió el objetivo
Hubo que hacerle algun ajuste




PROMPTS:

=========



# ESTRATEGIAS  



# Prompt 1 — Revisión de especificación  



# TAREA 1: REVISION DE ESPECIFICACION SDD

  Voy a darte un archivo de especificación llamado:



  `clientes-crud.spec.md`



  Tu tarea NO es generar código todavía.



  Primero debés revisar la especificación y responder:



  1. Si el objetivo del sistema está claro.

  2. Si las funciones principales están completas.

  3. Si el modelo de datos es suficiente.

  4. Si las reglas de negocio son consistentes.

  5. Si las validaciones están bien definidas.

  6. Si la arquitectura esperada es razonable.

  7. Si las tecnologías indicadas son compatibles entre sí.

  8. Si los casos de prueba cubren los escenarios mínimos.

  9. Si hay contradicciones, ambigüedades o datos faltantes.

  10. Qué harías en la etapa de implementación, pero sin generar código.



  Si encontrás inconsistencias importantes, indicá claramente qué debe corregirse antes de programar.

  No generes código.



  # ARCHIVO DE ESPECIFICACION



  <clientes-crud.spec.md>



  PEGAR AQUI EL CONTENIDO COMPLETO DEL ARCHIVO clientes-crud.spec.md



  </clientes-crud.spec.md>





# Prompt 2 — Generación controlada

(Este se usa solo después de corregir o aprobar la especificación).  

  

# TAREA 2: GENERACION DE SOLUCION DESDE ESPECIFICACION SDD



  Usa el archivo `clientes-crud.spec.md` como contrato de desarrollo.



  Tu tarea es generar una solución respetando estrictamente la especificación.



  Antes de escribir código, indicá:



  1. Cómo entendiste el objetivo del sistema.

  2. Qué archivos vas a crear.

  3. Qué responsabilidad tendrá cada archivo.

  4. Qué validaciones implementarás.

  5. Qué casos de prueba manuales deberían verificarse.



  Luego generá el código.



  Reglas obligatorias:



  - No agregues funcionalidades no solicitadas.

  - No elimines validaciones.

  - No ignores restricciones técnicas.

  - No uses librerías o frameworks no permitidos.

  - No concentres toda la lógica en un único bloque si la especificación pide separación de responsabilidades.

  - No modifiques el modelo de datos sin justificarlo.

  - Si algo falta o es ambiguo, detené la generación y explicá qué información falta.



  # ARCHIVO DE ESPECIFICACION



  <clientes-crud.spec.md>



  PEGAR AQUI EL CONTENIDO COMPLETO DEL ARCHIVO clientes-crud.spec.md



  </clientes-crud.spec.md>









# Prompt 3 — Versión one-shot controlada



  # EJECUCION CON SDD



  Usa el archivo `clientes-crud.spec.md` como contrato de desarrollo.



  Primero realizá una revisión de consistencia de la especificación.



  Debés verificar:



  - objetivo general;

  - funciones principales;

  - modelo de datos;

  - reglas de negocio;

  - arquitectura esperada;

  - tecnologías indicadas;

  - validaciones;

  - casos de prueba;

  - restricciones;

  - criterios de aceptación.



  Si encontrás inconsistencias, contradicciones o información insuficiente, NO generes código.  

  Primero indicá qué debe corregirse.



  Si la especificación es consistente, entonces:



  1. resumí cómo entendiste el sistema;

  2. indicá qué archivos vas a crear;

  3. explicá la responsabilidad de cada archivo;

  4. generá la solución;

  5. incluí casos de prueba manuales;

  6. indicá qué patrones o principios se pueden identificar.



  No agregues funcionalidades no solicitadas.



  # ARCHIVO DE ESPECIFICACION



  <clientes-crud.spec.md>



  PEGAR AQUI EL CONTENIDO COMPLETO DEL ARCHIVO clientes-crud.spec.md



  </clientes-crud.spec.md>









# Prompt 4 — Pre-flight crítico con GRILL-ME



  # EJECUCIÓN CON SDD + GRILL-ME

  Usá el archivo `clientes-crud.spec.md` como contrato de desarrollo.

  Antes de generar cualquier código, realizá una revisión crítica de consistencia de la especificación aplicando la técnica **GRILL-ME**.



  ## Técnica GRILL-ME

  Actuá como un arquitecto de software senior.

  Tu tarea es revisar críticamente los 16 puntos de la especificación para detectar:



  - vacíos de especificación;

  - ambigüedades funcionales o técnicas;

  - tecnologías no especificadas;

  - reglas de negocio incompletas o contradictorias;

  - criterios de aceptación insuficientes;

  - restricciones ausentes;

  - problemas de arquitectura, persistencia, validación, pruebas, instalación o despliegue.



  ## Regla de bloqueo

  - Si encontrás información faltante, ambigua o contradictoria, detené el proceso de desarrollo.

  - NO generes código.

  - NO avances a ninguna fase de implementación.

  - Primero devolvé una lista de hasta 5 preguntas críticas que yo deba responder para cerrar esos vacíos.



  ## Formato obligatorio de respuesta

  Respondé únicamente con esta estructura:



  1. **Estado de la especificación:** Completa / Incompleta / Ambigua.

  2. **Resumen breve del problema detectado.**

  3. **Hasta 5 preguntas críticas para continuar.**

  4. **Confirmación de bloqueo:** indicar que el desarrollo queda detenido hasta recibir mis respuestas.







=========================================================================





# ARCHIVO DE ESPECIFICACION - SPEC FILE - CONTRATO  

NOMBRE DEL ARCHIVO SUGERIDO: clientes-crud.spec.md  



  <clientes-crud.spec.md>



  ## 01_NOMBRE_DEL_SISTEMA_O_COMPONENTE

  Indicar el nombre del sistema, módulo o componente que será desarrollado.



  ## 02_OBJETIVO_GENERAL

  Describir brevemente qué problema resuelve el sistema y cuál es su propósito principal.



  ## 03_FUNCIONES_PRINCIPALES

  Listar las acciones principales que el sistema debe permitir realizar.



  ## 04_MODELO_DE_DATOS

  Definir las entidades, campos, tipos de datos e identificadores que administra el sistema.



  ## 05_REGLAS_DE_NEGOCIO

  Indicar las condiciones y reglas que el sistema debe cumplir siempre.



  ## 06_ARQUITECTURA_ESPERADA

  Describir la organización general esperada de la solución y la separación de responsabilidades.



  ## 07_LENGUAJE_TECNOLOGIAS_Y_LIBRERIAS

  Especificar el lenguaje, runtime, frameworks, librerías permitidas y librerías prohibidas.



  ## 08_CONFIGURACION_Y_ENTORNO

  Definir variables de entorno, archivos de configuración y parámetros necesarios para ejecutar el sistema.



  ## 09_PERSISTENCIA_DE_DATOS

  Indicar cómo se almacenarán, recuperarán y conservarán los datos del sistema.



  ## 10_INTERFAZ_O_INTERACCION_ESPERADA

  Describir cómo interactúa el usuario con el sistema y qué información debe visualizar.



  ## 11_VALIDACIONES_Y_MANEJO_DE_ERRORES

  Definir las validaciones requeridas y los errores que deben detectarse o informarse.



  ## 12_CASOS_DE_PRUEBA_ESPERADOS

  Especificar situaciones de prueba con entrada, acción y resultado esperado.



  ## 13_RESTRICCIONES

  Indicar límites técnicos, funcionales o de diseño que la solución no debe incumplir.



  ## 14_CRITERIOS_DE_ACEPTACION

  Definir las condiciones mínimas para considerar que la solución está completa y correcta.



  ## 15_PATRONES_O_PRINCIPIOS_A_IDENTIFICAR

  Indicar los patrones, principios o decisiones de diseño que el alumno deberá reconocer y justificar.



  ## 16_INSTALACION_EJECUCION_Y_DEPLOY

  Describir los pasos básicos para instalar, ejecutar localmente y desplegar el proyecto.



  </clientes-crud.spec.md>

