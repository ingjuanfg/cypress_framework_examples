class ListsProductsPage{


    agregarProductoCarrito(){
        cy.get("#item_4_title_link").click()
        cy.get(".btn_primary").click()
    }

}

export default ListsProductsPage;