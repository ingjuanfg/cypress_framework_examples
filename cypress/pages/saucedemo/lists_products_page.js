class ListsProductsPage{

    elements={
        listaProductosComprar : () => cy.get("#item_4_title_link"),
        agregarCarritoButton : () =>  cy.get(".btn_primary"),
        tituloLabel : () =>  cy.get(".product_label")
    }

}

export default ListsProductsPage;