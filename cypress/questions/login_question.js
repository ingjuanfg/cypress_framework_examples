import lists_products_page from '../pages/saucedemo/lists_products_page'

class LoginQuestion{

    constructor(){
        this.listaProductos = new lists_products_page();
    }

    exitoso(){
        this.listaProductos.elements.tituloLabel().should("contain.text", "Products")
    }

}

export default LoginQuestion;