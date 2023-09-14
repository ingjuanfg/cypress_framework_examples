/// <reference types="cypress"/>

import login_task from '../../tasks/login_task'
import login_question from '../../questions/login_question'


describe('Screenplay con Cypress', () => {
    const realizar = new login_task();
    const loginRealizado = new login_question();

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.title().should('eq', 'Swag Labs')
    })


    it('Autenticación exitosa con Screenplay', () =>{
        realizar.loginExitoso('standard_user', 'secret_sauce')
        loginRealizado.exitoso()
    })
})