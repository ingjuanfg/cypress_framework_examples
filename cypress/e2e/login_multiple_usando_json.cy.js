/// <reference types="cypress"/>


//Ejemplo de lectura de un archivo JSON con multiples objetos. Usando 4 usuarios para realizar la autenticación. 
//(Estos login no tienen assert, solo se quiere probar la lectura del archivo JSON)

describe('Login usando JSON para extraer Data', () => {

    it('Autenticación multiple', () => {
        cy.fixture("login_multiple").then(credenciales =>{
            credenciales.forEach(credencial => {
            const d_username=credencial.username;
            const d_password=credencial.password;

            cy.visit('https://www.saucedemo.com/v1/index.html')
            cy.get("#user-name").type(d_username)
            cy.get("#password").type(d_password)
            cy.get("#login-button").click()
          })
        })
      })
  })