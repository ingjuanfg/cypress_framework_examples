class Actions{

    clickEnElemento(selector){
        cy.get(selector).click();
    }

}

export default Actions;