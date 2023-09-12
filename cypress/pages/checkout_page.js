class CheckoutPage{

    elements={
        nombreUsuarioInput : () => cy.get("#first-name"),
        apellidoInput : () =>  cy.get("#last-name"),
        codigoPostalInput : () =>  cy.get("#postal-code"),
        registarButton : () =>  cy.get(".btn_primary"),
        confirmarDatosButton : () =>  cy.get(".btn_action")
    }

    diligenciarInfoComprador(){
        this.elements.nombreUsuarioInput().type("Juan")
        this.elements.apellidoInput().type("Fernandez")
        this.elements.codigoPostalInput().type("0500022")
        this.elements.registarButton().click()
    }

    confirmarDatosCompra(){
        this.elements.confirmarDatosButton().click()
    }


}


export default CheckoutPage;