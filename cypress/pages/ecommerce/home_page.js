class HomePage{

    elements={
        categoriasButton : () => cy.xpath("//span[contains(., ' Mega Menu')]"),
        lgOpcion : () => cy.xpath("//a[contains(., 'LG')]"),
        celularImagen : () => cy.xpath("(//img[@class='lazy-load' and @title= 'HTC Touch HD'])[4]")
    }

    abrirPaginaWeb(){
        beforeEach(()=>{
            cy.visit("https://ecommerce-playground.lambdatest.io/")
            cy.title().should('eq', 'Your Store')
        })
    }

    seleccionarCategoriaTrigger(){
        this.elements.categoriasButton().trigger('mouseover')
        this.elements.lgOpcion().click()
    }

    seleccionarCategoriaInvoke(){
        this.elements.celularImagen().invoke('show').click()
    }

}

export default HomePage;
require('cypress-xpath');