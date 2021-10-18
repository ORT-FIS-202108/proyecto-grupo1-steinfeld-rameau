# Informe académico entrega 1

Fecha de entrega: 18/10/2021

|Nombre| Nro. de estudiante|
|----|----|
| Alvaro Rameau | 182035 |
| Stella Steinfeld | 229398 |

## Repositorio Git

Creación y uso de repositorios locales y remotos

Comandos Git ejecutados desde terminal y desde el IDE

**El repositorio utilizado para la entrega es el siguiente:** https://github.com/ORT-FIS-202108/proyecto-grupo1-steinfeld-rameau

## Versionado

Buenas prácticas de versionado

Uso de ramas separadas de 'main'

Resumen de commits y evolución del proyecto

## Elicitación

### Evidencia de actividades de investigación

Para la elaboración de este documento nos basamos en las diapositivas mostradas en curso 2021 de Fundamentos de Ingeniería de Software de la Universidad ORT del Uruguay.

El equipo utilizó como técnica extra, una encuesta para validar diferentes puntos de interés.
A continuación se encuentra la información obtenida y nuestras conclusiones.

#### Encuesta

Link de la encuesta: https://forms.gle/Xxk9gwaaHmC2rUbr6

Como técnica extra de elicitación, se decidió hacer una encuesta abierta al público con el objetivo de recopilar información.
El eje principal de la misma estaba enfocado en determinar el interés de las personas en finanzas personales y en saber si piensan que la tecnología podría ayudar a mejorar las finanzas o llevar un orden de las mismas.

A continuación se detallan los resultados de la encuesta, vale la pena aclarar que se obtuvieron en total 99 respuestas.
Debajo de cada gráfico, se encontrarán las conclusiones a las cuales el equipo llegó.

![Edad](./investigacion/encuesta/1-edad.png)

La mayor cantidad de respuestan pertenecen a personas cuyas edades están en el rango de 25 a 34 años. Esto es bueno ya que son nuestro público objetivo, personas familiarizadas con la tecnología, con una vida laboral activa.
Es muy bueno observar que también se obtuvieron buenos resultados en la franja anterior (18 a 24) y la posterior (35 a 44). Estas franjas también cumplen con algunas de las características que esperamos de nuestro publico objetivo.

![Genero](./investigacion/encuesta/2-genero.png)

En el caso del género, no encontramos diferencias, las respuestas fueron divididas. A efectos del sistema a desarrollar, el género no hace la deiferencia, pero era muy bueno poder determinar si en realidad los datos arrojaban otra cosa, un mayor porcentaje de uno u otro.

![Lugar de residencia](./investigacion/encuesta/3-residencia.png)

Nuestro mayor interés son las personas de nuestro mercado, es decir, Uruguay. Como se aprecia en el gráfico, un 94% de las respuestas son de personas de Uruguay. Consideramos que esto es bueno ya que nos brindará datos de mucho valor.

![Interés en finanzas](./investigacion/encuesta/4-interes.png)

Un 98% de las personas que respondieron tienen interés en sus finanzas personales. Es un dato de mucho valor ya que son potenciales usuarios del sistema. Un interés tan marcado hace suponer que el sistema podría tener éxito.

![App](./investigacion/encuesta/5-app-mejora.png)

En esta respuesta se nota un poco la resistencia a la incorporación de la tecnología. Un 38,4% de las respuestas indican que no están seguros de que una aplicación les facilite el control de sus finanzas.
Es un dato importante ya que sabemos que debemos convencerlos o mostrarles porqué un sistema en el área debería simplificar el control de sus finanzas.

![Registro actual](./investigacion/encuesta/6-registro-actual.png)

No llama la atención que estos porcentajes sean tan divididos, el registro de gastos es algo que historicamente ha sido muy complejo de lograr. Requiere de mucha disciplina y control. Nuevamente obtenemos información que nos da a entender que si bien hay mucha gente que lo hace, hay parte de nuestro público objetivo que aún se resiste a registrar este tipo de información.

![Forma de registro](./investigacion/encuesta/7-forma-registro.png)

Estos resultados osn muy interesantes, vemos que hay personas que ya utilizan algún tipo de app para llevar control de sus finanzas. Esto es un buen indicador.
También vemos otro grupo de personas que lo hace mediante documentos o planillas electrónicos, esto también es bueno, indica que están familiarizados con la tecnología y que tienen el hábito de registrar incorporado.
Nuestra tarea tal vez pueda enfocarse en generar para estos usuarios una experiencia similar a la que obtienen con esos "documentos".

![Caracteristicas de registro](./investigacion/encuesta/8-importancia.png)

Si bien los puntos en esta pregunta son similares, hay una marcada tendencia por la practicidad y fácilidad de realizar un registro de gastos. Es sumamente importante que el usuario del sistema pueda realizar sus registros de forma fácil y rápida, si esto no ocurre, tal vez esos usuarios se conviertan en casos negativos.

![Información sobre finanzas](./investigacion/encuesta/9-info.png)

El enfoque de esta pregunta radica en determinar el interés por las finanzas y la disponibilidad para aprender sobre las mismas.
No solo es necesario desarrollar un sistema, es necesario educar a nuestros usuarios en finanzas. Los medios pueden ser muchos, pero es optimista saber que mas de la mitad de nuestros potenciales usuarios están interesados en informarse sobre el tema.

![Pago de app](./investigacion/encuesta/10-pago.png)

Normalmente las personas no estan dispuestas a pagar por algo que no conocen o que no les ha dado resultado. Esto es muy importante, la calidad del producto debe ser muy buena para que los usuarios se conviertan en "clientes" y paguen por utilizar un sistema.

**Conclusión general**

Basados en las respuestas y conclusiones anteriores, creemos que el desarrollo de un sistema para manejar las finanzas personales es algo qeu tiene mucho futuro, hemos visto que hoy en día no hay un sistema líder en esto.
Se siguen utilizando planillas o documentos electrónicos para este fin.
Sabemos que para que un sistema de finanzas personales tenga éxito, debe tener un diferencial con el resto, y creemos que ese diferencial radica en la fácilidad de uso del mismo, ya que este es uno de los princioales obstáculos a la hora de generar el hábito de registro de gastos.


### Referencias a fuentes de información

### Caracterización de usuarios: User Personas

Parte del trabajo de investigación incluyó la creación de 5 diferentes User Personas, a continuación se detalla cada uno de los casos. Se eligieron personas de diferentes edades y con diferentes actividades diarias (trabajo, estudio, ocio, etc.).

![Ana Laura Lopez](./investigacion/userpersonas/AnaLauraLopez.png)

![Daniel Ruiz Diaz](./investigacion/userpersonas/DanielRuizDiaz.png)

![Javier Gutierrez](./investigacion/userpersonas/JavierGutierrez.png)

![Leandro Pereira](./investigacion/userpersonas/LeandroPereira.png)

![Monica Gonzalez](./investigacion/userpersonas/MonicaGonzalez.png)

Entendemos que cualquiera de estas personas puede ser un potencial usuario del sistema, analizamos las diferentes actividades y estilos de vida que los mismos llevan. 
Un objetivo recurrente es el interés en balancear sus finanzas personales, es decir, llevar un control sobre las mismas.

### Modelo conceptual del problema

Se trabajó en un modelo conceptual sencillo y fácil de entender.
Con este modelo entendemos fácilmente las interacciones y objetivos que un usuario o persona tiene al llevar un control de sus gastos. Nos ayuda a pe
Se modelaron 5 entidades y sus relaciones.
Básicamente el modelo conceptual describe lo siguiente: una persona mantiene un registro de sus gastos. Ésta realiza un monitoreo de los mismos para poder tomar desiciones y mejorar de esta forma sus finanzas.

A continuación se encuentra el diagrama del modelo conceptual.

![Modelo Conceptual](./investigacion/ModeloConceptual.png)

## Especificación

### Definición de requerimientos funcionales y no funcionales

#### Requerimientos funcionales

1) El sistema deberá permitir el ingreso, modificación y eliminación de movimientos, siendo estos: gastos ó ingresos.
2) Se deberá diferenciar visualmente los gastos de los ingresos.
3) El sistema solo permite operar con una moneda a la vez.
4) El sistema deberá permitir categorizar los movimientos.
5) El sistema deberá permitir el ingreso y eliminación de categorías de movimientos.
6) El sistema permitirá listar los movimientos y filtrarlos basándose en diferentes criterios.
7) El sistema permitirá exportar el resultado de los listados en formato de hoja de cálculo.
8) El sistema ofrecerá la posibilidad de visualizar diferentes gráficos basándose en diferentes criterios.

#### Requerimientos no funcionales

1) El sistema deberá ser escrito en el lenguaje **JavaScript**, utilizando **Node JS**.
2) El sistema deberá ser responsive, adaptándose a una plataforma web y mobile.
3) El sistema deberá utilizar **Material Design** como sistema de diseño.
4) El sistema deberá contar con testing unitario, utilizando para el mismo **Jest**.
5) La documentación del proyecto deberá ser escrita en formato **Markdown**.

### User Stories / Use Cases detallados

#### User Stories

**ID:** #1

**Título:** Ingreso de movimientos

**Narrativa:** Como usuario del sistema, quiero poder registrar de forma fácil mis ingresos y egresos para poder llevar un control de los mismos.

**Criterios de aceptación:**
- Se debe permitir el registro de movimientos desde un formulario sencillo.
- Cada movimiento debe incluir: monto, descripción, tipo, categoría y fecha.
- Se debe diferenciar los movimientos del tipo "gasto" de los del tipo "ingreso".

***

**ID:** #2

**Título:** Listado de movimientos

**Narrativa:** Como usuario del sistema, quiero poder ver una lista de todos los movimientos que ingresé.

**Criterios de aceptación:**
- Se deben listar los movimientos ordenados por fecha.
- Se debe permitir ordenar los movimientos por monto (mayor a menor).
- Se debe permitir filtrar los movimientos por período de tiempo.
- Se debe permitir filtrar los movimientos por tipo.
- Se debe permitir filtrar los movimientos por categoría.
- Los filtros son excluyentes, solo se aplica uno a la vez.

***

**ID:** #3

**Título:** Modificación de movimientos

**Narrativa:** Como usuario del sistema, quiero poder modificar un movimiento previamente ingresado para poder corregir errores cometidos al ingresarlo.

**Criterios de aceptación:**
- Desde la lista de movimientos se debe permitir editar el movimiento seleccionado.
- La edición del movimiento permite la modificación de todos sus campos.
- La edición del movimiento se realiza en el mismo formulario de ingreso de movimientos.

***

**ID:** #4

**Título:** Eliminación de movimientos

**Narrativa:** Como usuario del sistema, quiero poder eliminar un movimiento previamente ingresado por error.

**Criterios de aceptación:**
- Desde la lista de movimientos se debe permitir eliminar el movimiento seleccionado.
- La eliminación de un movimiento no requiere confirmación extra.

***

**ID:** #5

**Título:** Selección de moneda

**Narrativa:** Como usuario del sistema, quiero poder seleccionar una moneda por defecto para mis gastos.

**Criterios de aceptación:**
- Se debe permitir seleccionar una moneda "general" a todo el sistema.
- Cada vez que un usuario cambia de moneda, esta se aplica a todos los movimientos.
- La selección de moneda debe estar visible desde el menú del sistema.
- La lista de monedas disponibles será: peso uruguayo (UYU), peso argentino (ARS), dólar estadounidense (USD) y real (BRL).

***

**ID:** #6

**Título:** Ingreso de categorías de movimientos

**Narrativa:** Como usuario del sistema, quiero poder ingresar diferentes categorías para aplicar a movimientos. De esta forma puedo visualizar fácilmente en qué áreas estoy gastando mi dinero.

**Criterios de aceptación:**
- Se debe permitir ingresar una categoría para ser utilizada en la clasificación de movimientos.
- La categoría debe incluir: título, descripción y tipo.
- Los tipos de las categorías son los mismos que aplican a los movimientos: gasto ó ingreso.

***

**ID:** #7

**Título:** Listado de categorías de movimientos

**Narrativa:** Como usuario del sistema, quiero poder ver una lista de las categorías que he ingresado, pudiendo de esta forma, decidir si necesito agregar alguna nueva o eliminar alguna existente.

**Criterios de aceptación:**
- Se deben listar las categorías por orden alfabético, usando el título para generar el orden.
- El sistema tiene una categoría por defecto ya creada, esta es "Otros" y la misma no se puede eliminar.

***

**ID:** #8

**Título:** Eliminación de categorías de movimientos

**Narrativa:** Como usuario del sistema, quiero poder eliminar una categoría si no necesito mas de ella.

**Criterios de aceptación:**
- Desde la lista de categorías se debe permitir eliminar una categoría seleccionada.
- La eliminación de una categoría no necesita una confirmación extra.
- So se debe permitir eliminar la categoría "Otros".

***

**ID:** #9

**Título:** Exportación de movimientos

**Narrativa:** Como usuario del sistema, quiero poder exportar mis movimientos para poder trabajar con los mismos fuera del sistema.

**Criterios de aceptación:**
- Desde la lista de movimientos se debe permitir exportar la lista de movimientos a un archivo en formato CSV.
- La lista a exportar será la resultante de los filtros aplicados en el moment de hacer el "export".

***

**ID:** #10

**Título:** Visualización de movimientos en gráficos

**Narrativa:** Como usuario del sistema, quiero ver gráficos de mis movimientos, de esta forma puedo entender visualmente en que categorías hay mas movimientos, y en hacer una comparativa de gastos mes a mes.

**Criterios de aceptación:**
- Se deberán mostrar dos gráficos de "torta" de movimientos por categoría del mes actual (uno para ingresos y otro para egresos).
- Las categorías que no tengan movimientos no se deberán mostrar en el gráfico.
- Se deberá mostrar un gráfico de "barras o líneas" mostrando todos los ingresos y egresos en un período de tiempo. Este gráfico mostrará información de hasta 12 meses atrás.
- Se deberán mostrar datos con una antiguedad no mayor a 12 meses y desde el momento del cual se tenga registro.

***

**ID:** #11

**Título:** Menú

**Narrativa:** Como usuario del sistema, quiero ver en un menú las diferentes funcionalidades que puedo hacer con el sistema.

**Criterios de aceptación:**
- Se deberá incluir un menú de usuarios para dar fácil acceso a las funcionalidades del sistema.
- El menú deberá incluir: "Movimientos", "Categorías", "Moneda" y "Gráficos".

#### Use cases

**Título:** Ingreso de movimiento

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Movimientos" en el menú | 2. Se abre la pantalla de "Movimientos" |
| 3. Presiona el botón de "Agregar movimiento" | 4. Se despliega el formulario de ingreso de movimiento |
| 5. Completa los datos del movimiento |  |
| 6. Presiona "Guardar movimiento" | 7. Se guarda el movimiento y se muestra la pantalla de "Movimientos" |

**Curso alterno**

7.1: El sistema no puede guardar el movimiento, el usuario continúa viendo el formulario con los datos ingresados.

****

**Título:** Listado de movimientos

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Movimientos" en el menú | 2. Se abre la pantalla de "Movimientos" |
|  | 3. Se muestra la lista de movimientos |

**Curso alterno**

3.1: Aún no hay movimientos, se muestra un mensaje: "Aún no se han registrado movimientos.".

****

**Título:** Modificación de movimiento

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Movimientos" en el menú | 2. Se abre la pantalla de "Movimientos" |
| 3. Selecciona un movimiento a modificar | 4. Se muestra un formulario con los campos del movimiento a modificar |
| 5. Se modifican los campos del formulario | |
| 6. Presiona "Guardar movimiento" | 7. Se guarda el movimiento y se muestra la pantalla de "Movimientos" |

**Curso alterno**

7.1: El sistema no puede guardar el movimiento, el usuario continúa viendo el formulario con los datos ingresados.

****

**Título:** Eliminación de movimiento

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Movimientos" en el menú | 2. Se abre la pantalla de "Movimientos" |
| 3. Selecciona un movimiento a eliminar | 4. Se elimina el movimiento |
|  | 5. Se muestra la pantalla de "Movimientos" |

**Curso alterno**

4.1: El sistema no puede eliminar el movimiento, se muestra la pantalla de "Movimientos".

****

**Título:** Seleccionar moneda

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Selecciona una moneda desde un combo en el menú | 2. Se aplica la moneda al sistema |

**Curso alterno**

4.1: El sistema no puede aplicar la moneda, se muestra un mensaje de error "No se pudo aplicar la moneda, intente nuevamente.".

****

**Título:** Ingresar categoría

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Categorías" en el menú | 2. Se abre la pantalla de "Categorías" |
| 3. Presiona el botón de "Agregar categoría"  | 4. Se despliega el formulario de ingreso de categoría |
| 5. Completa los datos del movimiento |  |
| 6. Presiona "Guardar categoría" | 7. Se guarda la categoría y se muestra la pantalla de "Categorías" |

**Curso alterno**

7.1: El sistema no puede guardar la categoría, el usuario continúa viendo el formulario con los datos ingresados.

****

**Título:** Listado de categorías

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Categorías" en el menú | 2. Se abre la pantalla de "Categorías" |
|  | 3. Se muestra la lista de categorías |

**Curso alterno**

3.1: Aún no hay categorías, se muestra un mensaje: "Aún no se han registrado categorías.".

****

**Título:** Eliminación de categoría

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Categorías" en el menú | 2. Se abre la pantalla de "Categorías" |
| 3. Selecciona la categoría a eliminar | 4. Se elimina la categoría |
|  | 5. Se muestra la pantalla de "Categorías" |

**Curso alterno**

4.1: La categoría a eliminar tiene algún movimiento asociado, se muestra un mensaje "No se permite eliminar una categoría con movimientos asociados.".
4.2: La categoría a eliminar es "Otros", se muestra un mensaje "No se permite eliminar una categoría creada por el sistema.".
4.3: El sistema no puede eliminar la categoría, se muestra la pantalla de "Categorías".

****

**Título:** Exportar movimientos

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Movimientos" en el menú | 2. Se abre la pantalla de "Movimientos" |
| 3. Aplica los filtros que crea conveniente a los movimientos | 4. Se muestra el listado de movimientos filtrados |
| 5. Presiona el botón "Exportar a CSV" | 5. Se descarga un archivo CSV que contiene la lista de movimientos |

**Curso alterno**

5.1: El sistema no puede descargar el archivo, se muestra un mensaje de error "No se pudo exportar la lista, intente nuevamente.".

****

**Título:** Graficar movimientos por categoría

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Gráficos" en el menú | 2. Se abre la pantalla de "Gráficos" |
| 3. Selecciona "Movimientos por Categoría" | 4. Se muestra un gráfico de movimientos por categoría para el mes actual |

****

**Título:** Graficar balance

**Actor:** Usuario del sistema

**Curso Normal:**

| Acción de los actores | Respuesta del sistema |
|----------|------------|
| 1. Presiona "Gráficos" en el menú | 2. Se abre la pantalla de "Gráficos" |
| 3. Selecciona "Balance" | 4. Se muestra un gráfico de movimientos mes a mes comenzando 12 meses atrás |

### Bocetos de IU

[Aquí encontrará los bocetos para la version web y mobile del sistema.](bocetosiu/README.md)

## Validación y verificación

### Verificar la especificación

#### Checklist de requerimientos

| Completitud | Cumple |
| ---- | ---|
| Los requerimientos están correctamente priorizados | Si |
| Están identificadas las clases de usuarios y sus características | Si |
| Respetan la especificación, la estructura y apartados del estándar | Si |
| Se identifican y describen dependencias con otros sistemas | No existen dependencias con otros sistemas |
| Las características de calidad se tienen en cuenta en la especificación | Si |

| Verificabilidad y no ambigüedad | Cumple |
| ---- | ---|
| Cada requerimiento tiene una única interpretación | Si |
| Cada requerimiento puede ser demostrado por alguna prueba, demostración, revisión o análisis | Si |

| Correctitud y consistencia  | Cumple |
| ---- | ---|
| Los requerimientos están escritos en forma consistente y a un nivel de detalle adecuado | Si |
| Existe duplicación de requerimientos o duplicación de los mismos | Si |
| Cada requerimiento está dentro del alcance a resolver | Si |
| Los requerimientos evitan incluir aspectos de diseño o implementación de la solución | Si |

| Trazabilidad  | Cumple |
| ---- | ---|
| Cada requerimiento puede ser identificado correctamente y en forma única | Si |
| Se referencian correctamente los requerimientos entre sí | No se agregaron referencias entre requerimientos |
| Cada requerimiento puede ser referenciado hasta su origen | No |

#### Checklist de requerimientos

| Completitud | Cumple |
| ---- | ---|
| Cada caso de uso cumple un único objetivo o tarea | Si |
| El objetivo es un resultado medible para el usuario | Si |
| Queda claro que actores participan o se benefician del caso de uso | Si |
| Existe una lógica secundaria que ayuda a entender la transacción entre un actor y el sistema | No |
| El nivel de abstracción de las transacciones es adecuado para el caso de uso | Si |
| El caso de uso es libre de detalles de implementación y posibles soluciones | Si |
| Están documentados los posibles cursos alternos y excepcionales | Si |
| Existen pre y post condiciones que contextualicen correctamente el caso de uso | No |

### Validar la solución con personas no involucradas en el proyecto

Para la validación de la solución se realizó un Walktrough por los use cases con 3 personas ajenas al desarrollo del sistema. Vale aclarar que estas 3 personas son potenciales usuarios del sistema.  
A continuación se detallan los comentarios obtenidos y nuestra opinión al respecto, al final de la lista se encuentra una lista con las modificaciones que se aceptaron y se implementarán.

**Sería bueno contar con una opción de "Gasto compartido". Este gasto sería dividido entre diferentes usuarios.**

Entendemos la motivación del comentario, pero pensamos que esto complicaría demasiado el sistema. Si el sistema llega a un estado en el cual es usado por muchas personas, seguramente esto sea un feature a agregar. Como se mencionó antes, primero hay que educar a los usuarios de manera sencilla.

**Manejo de múltiples monedas**

Sin duda esto es prioridad en la lista de mejoras. Dado que la primera versión es dirigida a un mercado local, creemos que el uso de una sola moneda da simplicidad, sin embargo nos hace cuestionar si es necesario poder cambiar de monedas.
Optamos por dejar el feature tal como fue planteado, ya que si bien nuestro enfoque está en el mercado local, nadie descarta que no se pueda utilizar en otro lugar, o que alguien no quiera utilizarlo para gastos en otra moneda que no sea el peso uruguayo.

**Además de exportar los datos en CSV les gustaría poder hacerlo en PDF**

Entendemos que actualmente es muy fácil pasar de un archivo CSV a un PDF desde cualquier dispositivo. Pero tenemos en cuanta usuarios que no manejan la tecnología con tanta facilidad, por ende, decidimos agregar la opción de expotar a PDF.

**Los gráficos suelen ser confusos (en general)**

Muchas personas no suelen valerse de gráficos para entender o visualizar información. Creemos que la solución a esto está en educar a los usuarios a que utilicen esta herramienta, y entendemos que si a un usuario le resulta confuso, puede prescinidr de la misma.

**No todos los campos del movimiento deben ser obligatorios**

La justificación que nos dieron es que alguien puede ver de alguna forma la información que están manipulando y puede uqe existan gastos que no quieran que se sepa a que corresponden.
Entendemos que es un punto importante, por ende se tomó la desición de hacer obligatorio únicamente el tipo, la fecha y la categoría.

**Les gustaría tener una "Papelera de movimientos" para recuperar movimientos eliminados por accidente**

No encontramos una justificación muy grande para implementar este requerimiento, entendemos que si se elimina un movimiento or accidente, un usuario podría volver a ingresarlo fácilmente.

**Movimiento periódicos o recurrentes**

Sin duda es otro punto muy importante, y que esta en los primeros lugares de features a implementar. Para una primera versión creemos que es suficiente con registrar un movimiento en el momento en el que se hace. Además, implementar recurrencia implica bastante trabajo desde el punto de vista del desarrollo, para hacerlo en una versión 1.

**Compartir listados por mail u otras aplicaciones**

Además de la opción de exportar, creen que sería buena idea poder compartir los listados por otros medios. Entendemos que es una buena idea pero creemos que hace falta mayor refinamiento en la idea, hay que determinar cuáles serían los medios relevantes y hay que determinar si esto realmente aporta, ya que con la versión 1, un usuario podría descargarse un reporte y enviarlo por donde crea conveniente.
También creemos que esto se va un poco fuera del campo de "Finanzas personales".

#### Listado de funcionalidades a modificar:

**Hacer obligatorios los campos de fecha, tipo y categoría**

**ID:** #1

**Título:** Ingreso de movimientos

**Narrativa:** Como usuario del sistema, quiero poder registrar de forma fácil mis ingresos y egresos para poder llevar un control de los mismos.

**Criterios de aceptación:**
- Se debe permitir el registro de movimientos desde un formulario sencillo.
- Cada movimiento debe incluir: monto, descripción, tipo, categoría y fecha.
- Se debe diferenciar los movimientos del tipo "gasto" de los del tipo "ingreso".
- Se deberán exigir de forma obligatoria los siguientes campos: fecha, tipo y categoría.
- En caso de que el usuario no ingrese un título, este campo se nombrará por defecto con un string que representa la fecha y hora de creación.

***

**Exportar en formato PDF**

**ID:** #9

**Título:** Exportación de movimientos

**Narrativa:** Como usuario del sistema, quiero poder exportar mis movimientos para poder trabajar con los mismos fuera del sistema.

**Criterios de aceptación:**
- Desde la lista de movimientos se debe permitir exportar la lista de movimientos a un archivo en formato CSV o PDF.
- La lista a exportar será la resultante de los filtros aplicados en el moment de hacer el "export".

## Reflexión

### Detalle del trabajo individual

**Alvaro Rameau:**
- User Personas
- Modelo conceptual
- Documentación y conclusiones de encuesta
- User stories
- Use cases
- Estructuración del documento 
- Validación y verificación

**Stella Steinfeld:**
- Creación del repositorio
- User Personas
- Modelo conceptual
- User stories
- Bocetos UI
- Elaboración de encuesta
- Validación y verificación

### Técnicas aplicadas y aprendizajes

Utilizamos las siguientes técnicas para la primera entrega del proyecto:
- **User Personas**: en principio fue una técnica un tanto difícil de aplicar, luego de ver varios ejemplos en clase y buscando online se pudo entender el objetivo de esta técnica y como estructurar un User persona.
- **Encuesta:** como es de esperarse estábamos más familiarizados con esta técnica, nos resultó entretenida y de mucha utilidad.
- **Modelo conceptual:** inicialmente subestimábamos un poco el valor del modelo conceptual, pero cuando hicimos el ejercicio en clase, nos ayudó a ver que nuestro enfoque inicial sobre como encarar el proyecto estaba un tanto equivocado.
- **User stories:** Nos ayudó a bajar a tierra las ideas y ver posibles errores o faltantes que teníamos en nuestros pensamientos iniciales de como implementar las diferentes funcionalidades.
- **Use cases:** Similar al caso anterior nos ayudó a entender que hay mas que solo implementar, hay que tener en consideración los posibles errores y diferentes escenarios que se puedan presentar.
- **Walktrough:** El feedback obtenido fue de mucha ayuda, ver como una persona que es un potencial usuario, reacciona a lo que le proponemos es fundamental para entender si el producto que queremos desarrollar tiene sentido.
- **Checklist de requerimientos y casos de uso:** si bien es un check interno, nos ayudó a ver si teníamos las cosas en su lugar.

Normalmente en ambientes de trabajo se aplican algunas de estas técnicas, es posible que uno pueda formar parte del proceso de alguna de estas. Tener una idea generalizada del valor que todas ellas aportan es fundamental, para aprender y poder aplicarlo en un futuro, ya sea en nuestros propios desarrollos o en un ámbito laboral.

 









    