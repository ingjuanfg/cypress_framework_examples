class ProductoPage{

    elements={
        ipodNanoImagen : () => cy.get(":nth-child(5) > .product-thumb > .caption > .title > .text-ellipsis-2"),
        comprarAhoraButton : () => cy.get(".button-buynow")
    }

    seleccionarElemento(){
        this.elements.ipodNanoImagen().click()
    }

    comprarProductoAhora(){
        this.elements.comprarAhoraButton().click()
    }
}

export default ProductoPage;
require('cypress-xpath');