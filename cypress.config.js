const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Configuración de tamaño del navegador para ejecutar con unas dimensiones especificas a nivel global.
  viewportWidth : 1920,
  viewportHeight : 1080,
  e2e: {
    //Deshabilitar las opciones de seguridad del navegador
    chromeWebSecurity: false, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
