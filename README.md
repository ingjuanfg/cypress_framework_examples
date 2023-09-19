# Cypress Framework - Ejemplos de Automatización

Este proyecto esta creado con fines educativos. Contiene ejemplos desde los más básicos hasta implementación de patrones de diseño para automatización como Page Object Model y Screenplay.

### Links de Interes
- Documentación Cypres
	- https://docs.cypress.io/guides/overview/why-cypress
	- https://docs.cypress.io/api/table-of-contents/
- Articulo Hover
	- https://filiphric.com/hover-in-cypress
- Crea data fake en diferentes formatos (JSON, CSV, Xlsx)
	- https://www.mockaroo.com/
	- https://github.com/joke2k/faker
	


### Las páginas a usar son
- [https://www.saucedemo.com/v1/index.html](https://www.saucedemo.com/v1/index.html)
- [https://ecommerce-playground.lambdatest.io/](https://ecommerce-playground.lambdatest.io/)
- [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

### Herramientas y lenguaje a usar
- Navegador Instalado (Ej. Chrome, Firefox, Edge)
- IDE (Visual Studio Code)
- NodeJs
- Cypress
- Javascript

### Ramas

- [main](https://github.com/ingjuanfg/cypress_framework_examples/tree/main): Esta rama contiene ejemplos basicos como
	- Template archivo de pruebas
	- Explicación del only
	- Manejo de teclado como TAB, Enter, PageUp, etc.
	- Implementación de Commands
	- Lectura de JSON
	- Lectura de JSON con múltiple data
	- Configuraciones en Cypress.config.js
	- CRUD con API Local.
	- Uso de Bearer Token, Key y Basic Authentication
	
- [page_object_v1](https://github.com/ingjuanfg/cypress_framework_examples/tree/page_object_v1): Esta rama toma el ejemplo de la rama main definido como linea base y se ajusta aplicando el patrón Page Object Model.

- [page_object_v2](https://github.com/ingjuanfg/cypress_framework_examples/tree/page_object_v2). Esta rama toma el ejemplo de la rama anterior y se ajusta para dar un mejor manejo a los elementos y sus llamados a interactuar con ellos.

- [pom_ecommerce](https://github.com/ingjuanfg/cypress_framework_examples/tree/pom_ecommerce): Esta rama se crea con la segunda página mencionada y se crea un ejemplo mucho mas robusto con Page Object Model, aplicando buenas prácticas y creando capa Utils para crear un método y dar mayor contexto sobre como emplear la logica en estos ejercicios. Ademas se ejecuta la lectura de archivos JSON para manejo de data de 2 formas para que se identifiquen diferentes formas de usarlo.

- [screenplay_v1](https://github.com/ingjuanfg/cypress_framework_examples/tree/screenplay_v1): Esta rama modifica el ejemplo realizado en la rama **page_object_v1** aplicando el patrón Screenplay con un enfoque de programación orientado a objetos.

- [screenplay_v2](https://github.com/ingjuanfg/cypress_framework_examples/tree/screenplay_v2): Esta rama tambien aplica el patrón Screenplay pero esta vez no con POO sino utilizando más las ventajas y caracteristicas de Cypress y Javascript.

## Configuración luego de clonar el proyecto

Luego de clonar el proyecto, puedes ejecutar los siguientes comandos por CMD en la ruta donde se ha guardado o abrirlo en tu IDE de preferencia para luego ejecutar los comandos y que el proyecto descargue los paquetes e información necesaria para su correcta ejecución.

Instalar Cypress para que se descarguen todos los archivos necesarios para su ejecución.
```sh
npm install cypress --save-dev
```
Instalar **npx** para ejecutar comandos por consola mucho mas fácil. 

```sh
npm install -g npx
```

Y los siguientes plugins
```sh
npm install -D cypress-xpath
npm install -D cypress-plugin-tab
```

### Para configurar la sección de API

Se usará la API local mencionada arriba

Ejecuta los siguientes comandos

Clona el proyecto de la API en una ruta que desees

```sh
git clone https://github.com/typicode/json-server.git
```

Ingresa a la ruta y ejecuta estos comandos

```sh
npm install 
```

Y luego

```sh
npm install -g json-server
```
Una vez finalizada esta parte, puedes ejecutar la API con este comando

```sh
npm run start
```

Ingresa a la URL


```sh
http://localhost:3000
```

Y la API estará lista para usarse!

Confirma que todo esta funcionando correctamente lanzando el siguiente comando.
```sh
npx cypress open
```
Te deberia lanzar una ventana como la siguiente:

![](https://i.postimg.cc/RVw3Dbqz/Captura-de-pantalla-2023-09-16-012439.png)

Al dar Click, seleccionas el navegador de tu preferencia.

![](https://i.postimg.cc/FFyN5tbG/Captura-de-pantalla-2023-09-16-012546.png)

Esto abrirá tu navegador con la siguiente vista

![](https://i.postimg.cc/sxNJHH2W/Screenshot-1.png)

Y aqui solo resta darle Click al test que quieres ejecutar y este abrira tu test.

![](https://i.postimg.cc/vBjXH8Jj/Captura-de-pantalla-2023-09-16-012859.png)

### Importante

#### Este proceso aplica para todas las ramas.


### Troubleshooting
- Si tienes problemas instalando Cypress, ejecuta este comando.
```sh
npm cypress install --force
```
- Si no te deja ejecutar tus test o Cypress parece bloquearse, ejecuta este comando y luego vuelves a instalar con el comando mencionado arriba o en el punto anterior.
```sh
cypress clear cache
```
- Si no te deja ejecutar con el comando **npx cypress open** intenta con este comando.  Si tampoco funciona, reinstala Cypress nuevamente.
```sh
cypress run --browser chrome
```

Espero que el proyecto sea de ayuda. 

Cualquier cosa que requieras, no dudes en comentar, crear un issue o contactarme por medio de mis redes, con gusto atenderé a la mayor brevedad posible.

Muchas gracias

**Juan de Jesús Fernández Graciano**

**Happy testing!**
