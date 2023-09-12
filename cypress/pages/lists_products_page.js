class ListsProductsPage{

    
    elements={
        listaProductosComprar : () => cy.get("#item_4_title_link"),
        agregarCarritoButton : () =>  cy.get(".btn_primary")
    }


    agregarProductoCarrito(){
        this.elements.listaProductosComprar().click()
        this.elements.agregarCarritoButton().click()
    }

}

export default ListsProductsPage;