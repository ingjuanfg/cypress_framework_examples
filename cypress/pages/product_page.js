class ProductPage{

    abrirCarrito(){
        cy.get(".shopping_cart_link").click()
        cy.get(".btn_action").click()
    }
}

export default ProductPage;