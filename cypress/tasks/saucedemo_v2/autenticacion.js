const login_page = require('../../pages/saucedemo_v2/login_page')

Cypress.Commands.add("loginInSaucedemo", (usuario, clave) => {
    cy.get(login_page.USERNAME_INPUT).type(usuario)
    cy.get(login_page.PASSWORD_INPUT).type(clave)
    cy.get(login_page.LOGIN_BUTTON).click()
})