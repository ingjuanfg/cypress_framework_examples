class ProductPage{

    elements={
        productoComprarLabel : () => cy.get(".shopping_cart_link"),
        abrirCarritoButton : () =>  cy.get(".btn_action")
    }

    abrirCarrito(){
        this.elements.productoComprarLabel().click()
        this.elements.abrirCarritoButton().click()
    }

}

export default ProductPage;