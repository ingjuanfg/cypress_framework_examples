const titulos = require('../../pages/saucedemo_v2/lists_products_page');

Cypress.Commands.add("loginExitoso", ()  => {
    cy.get(titulos.TITULO_LABEL).should("contains.text", "Products")
})