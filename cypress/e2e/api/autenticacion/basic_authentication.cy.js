/// <reference types="cypress"/>

describe('REST API con Cypress', () => {

    it('Basic Authentication con Usuario y Contrasena', () => {

        const username = 'postman';
        const password = 'password';
    
        // Codifica las credenciales en base64
        const base64Credentials = btoa(`${username}:${password}`);
    
        // Define los encabezados con la autorización
        const headers = {
          Authorization: `Basic ${base64Credentials}`
        };

        cy.request({
            method: "GET",
            url: "https://www.postman-echo.com/basic-auth",
            headers: headers
        }).then(response => {
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))
            cy.log(datos)
        })
    })

})
