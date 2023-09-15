class CheckoutPage{

    diligenciarInfoComprador(){
        cy.get("#first-name").type("Juan")
        cy.get("#last-name").type("Fernandez")
        cy.get("#postal-code").type("0500022")
        cy.get(".btn_primary").click()
    }

    confirmarDatosCompra(){
        cy.get(".btn_action").click()
    }
}

export default CheckoutPage;