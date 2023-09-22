/// <reference types="cypress"/>

describe('Intercept para Cypress', () => {

    it('creating posts en json server', () => {
        //Se usa intercept para capturar los mensajes que devuelve una petición HTTP. En este caso se usa el ejemplo de json server
        //Con la que se hizo el ejemplo de API y se usa metodo POST para el endpoint de /posts
        //Intercept se encarga de tomar las respuestas de un endpoint para hacer validaciones adicionales.
        cy.intercept('POST', '/posts').as('createPosts') // as es un alias para el endpoint que estoy interceptando
        cy.visit('http://localhost:3000/')
        cy.wait('@createPosts').then(({response}) => { // invocamos el alias para que nos traiga toda la información
          expect(response.statusCode).to.eq(201)
          expect(response.body.name).to.eq('title') // desde el response podemos obtener la info como codigo o parametros del response.
        })
      })

    it('Stubs - maneja una solicitud GET exitosa', () => {
      // Stub de la función fetchDataFromApi para simular una respuesta exitosa
      // Stubs nos permite simular respuesta de nuestros endpoints
      cy.stub(window, 'fetch').resolves({
        ok: true,
        json: () => Promise.resolve({ data: 'Respuesta exitosa' }),
      });

      // Llamamos a la función en la aplicación
      cy.visit('http://localhost:3000/');
      cy.get('.mensaje-de-exito').should('contain', 'Respuesta exitosa');  //Cambiar los mensajes segun el mensaje que retorne la api
    });


    it('Stubs - maneja una solicitud GET fallida', () => {
      // Stub de una funcion para simular una respuesta fallida
      cy.stub(window, 'fetch').rejects(new Error('Error en la solicitud'));

      // Llamamos a la función en la aplicación
      cy.visit('http://localhost:3000/');
      cy.get('.mensaje-de-error').should('contain', 'Error en la solicitud'); //Cambiar los mensajes segun el mensaje que retorne la api
    });

})