class CheckoutPage{

    elements={
        nombreUsuarioInput : () => cy.get("#first-name"),
        apellidoInput : () =>  cy.get("#last-name"),
        codigoPostalInput : () =>  cy.get("#postal-code"),
        registarButton : () =>  cy.get(".btn_primary"),
        confirmarDatosButton : () =>  cy.get(".btn_action")
    }

    diligenciarInfoComprador(nombre, apellido, codigoPostal){
        this.elements.nombreUsuarioInput().type(nombre)
        this.elements.apellidoInput().type(apellido)
        this.elements.codigoPostalInput().type(codigoPostal)
        this.elements.registarButton().click()
    }

    confirmarDatosCompra(){
        this.elements.confirmarDatosButton().click()
    }
}

export default CheckoutPage;