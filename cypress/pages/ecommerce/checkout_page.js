class CheckoutPage{

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


    diligenciarPersonalDetails(){
        this.elements.firstNameInput().type("Juan")
        this.elements.lastNameInput().type("Fernandez")
        this.elements.emailInput().type("wwqwwqwse@gmail.com")
        this.elements.telephoneInput().type("323232233")
        this.elements.passwordInput().type("12345678")
        this.elements.passwordConfirmInput().type("12345678")
    }


    diligenciarBillingAddress(){
        this.elements.companyInput().type("plutoTV")
        this.elements.addressUnoInput().type("Sabaneta")
        this.elements.addressDosInput().type("Antioquia")
        this.elements.cityInput().type("Colombia")
        this.elements.postCodeInput().type("Colombia")
        this.elements.countryInput().select("United States")
        this.elements.paymentZoneInput().select("Arizona")
    }

    aceptarTermsCondictions(){
        //this.elements.privacyPolicyCheck().check({force: true})
        //this.elements.termsCheck().check({force: true})
        this.elements.termsCheck().type("{pageup}")
        this.elements.termsCheckbox().check({force: true})   
        cy.wait(1000)
    }

    guardarFormulario(){
        this.elements.saveButton().click()
        cy.wait(1000)
    }
}

export default CheckoutPage;
require('cypress-xpath');