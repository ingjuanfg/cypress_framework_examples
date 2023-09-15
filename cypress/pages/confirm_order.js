class HomePage{

    elements={
        confirmOrderButton : () => cy.get("#button-confirm"),
    }

    confirmarOrden(){
        this.elements.confirmOrderButton().click()
    }
}

export default HomePage;
require('cypress-xpath');