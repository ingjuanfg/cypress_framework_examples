/// <reference types="cypress"/>


//Ejemplo de lectura de un archivo JSON con unicas credenciales 
//(Este login no tienen assert, solo se quiere probar la lectura del archivo JSON)
//Este login se hace manipulando la tecla TAB

describe('Login usando JSON para extraer Data', () => {

  before(function(){
    cy.fixture('login_saucedemo').as("datos")
  })

    it('Autenticación Individual', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get("@datos").then((datos_login)=>{
              cy.get("#user-name").type(datos_login.username).tab().
              type(datos_login.password).tab().
              type("{enter}")
            })
        })
    })

  require('cypress-plugin-tab')