const titulos = require('../pages/lists_products_page');

Cypress.Commands.add("loginExitoso", ()  => {
    cy.get(titulos.TITULO_LABEL).should("contains.text", "Products")
})