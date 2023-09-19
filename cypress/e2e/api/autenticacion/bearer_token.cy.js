/// <reference types="cypress"/>

describe('Obtener Bearer Token de API', () => {
    it('Obtiene un Bearer Token', () => {
      // Realiza una solicitud HTTP para obtener el token de la API
      cy.request({
        method: "POST",
        url: "https://simple-books-api.glitch.me/api-clients/", // Reemplaza con la URL correcta de tu API
        body: {
            clientName: "ingjuanfg100",
            clientEmail: "ingjuanfg100@test.com"
        }
      }).then(response => {
        // Verifica que la solicitud se haya completado correctamente
        expect(response.status).to.equal(201)
  
        // Extrae el token de la respuesta JSON (puedes ajustar esto según la estructura de tu respuesta)
        const token = response.body.accessToken
  
        // Verifica que el token no sea nulo o indefinido
        
        expect(token).to.not.be.null
  
        // Guarda el token en una variable de Cypress para usarlo en otras pruebas
        cy.setCookie('accessTokenBooks', token)
  
        // Puedes imprimir el token en la consola para verificar
        cy.log(`Bearer Token: ${token}`)
      })
    })

  });
  