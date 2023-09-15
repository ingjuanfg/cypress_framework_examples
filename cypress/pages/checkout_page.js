import utilidades from '../utils/utilidades'

class CheckoutPage{

    constructor(){
        this.utilidad = new utilidades();
    }

    elements={
        firstNameInput : () => cy.get("#input-payment-firstname"),
        lastNameInput : () => cy.get("#input-payment-lastname"),
        emailInput : () => cy.get("#input-payment-email"),
        telephoneInput : () => cy.get("#input-payment-telephone"),
        passwordInput : () => cy.get("#input-payment-password"),
        passwordConfirmInput : () => cy.get("#input-payment-confirm"),
        companyInput : () => cy.get("#input-payment-company"),
        addressUnoInput : () => cy.get("#input-payment-address-1"),
        addressDosInput : () => cy.get("#input-payment-address-2"),
        cityInput : () => cy.get("#input-payment-city"),
        postCodeInput : () => cy.get("#input-payment-postcode"),
        countryInput : () => cy.get("#input-payment-country"),
        paymentZoneInput : () => cy.get("#input-payment-zone"),
        privacyPolicyCheck : () => cy.get("#input-account-agree"),
        termsCheck : () => cy.get("#input-comment"),
        termsCheckbox : () => cy.get("[type='checkbox']"),
        saveButton : () => cy.get("#button-save")
    }


    //Metodo leyendo archivo JSON dentro del page
    diligenciarDatosPersonales(){
        cy.fixture('datos_comprador').as("comprador")
        cy.get("@comprador").then((data)=>{
            this.elements.firstNameInput().type(data.nombre)
            this.elements.lastNameInput().type(data.apellido)
            this.elements.emailInput().type(this.utilidad.generarCorreoAleatorio())
            this.elements.telephoneInput().type(data.telefono)
            this.elements.passwordInput().type(data.password)
            this.elements.passwordConfirmInput().type(data.confirmarPassword)
        })
    }

    //Metodo recibiendo data como parametros, enviada desde un JSON desde el archivo cy.js
    diligenciarInformacionFacturacion(compania, direccionUno, direccionDos, ciudad, codigoPostal, pais,zonaPago){
        this.elements.companyInput().type(compania)
        this.elements.addressUnoInput().type(direccionUno)
        this.elements.addressDosInput().type(direccionDos)
        this.elements.cityInput().type(ciudad)
        this.elements.postCodeInput().type(codigoPostal)
        this.elements.countryInput().select(pais)
        this.elements.paymentZoneInput().select(zonaPago)
    }

    //SELECCIONAR LOS CHECK EN GRUPO
    aceptarTermsCondiciones(){
        this.elements.termsCheck().type("{pageup}")
        this.elements.termsCheckbox().check({force: true})   
    }

    //SELECCIONAR LOS CHECK DE MANERA INDEPENDIENTE (No se esta llamando el método, queda como referencia)
    aceptarTermsCondicionesIndividuales(){
        this.elements.privacyPolicyCheck().check({force: true})
        this.elements.termsCheck().check({force: true})  
    }

    guardarFormulario(){
        this.elements.saveButton().click()
        cy.wait(1000)
    }
}

export default CheckoutPage;
require('cypress-xpath');