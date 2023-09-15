/// <reference types="cypress"/>
import login_page from '../pages/login_page';
import lists_products_page from '../pages/lists_products_page'
import product_page from '../pages/product_page'
import checkout_page from '../pages/checkout_page'


describe('Page Object Model con Cypress', () => {
    const loginPage = new login_page();
    const listaProductos = new lists_products_page();
    const producto = new product_page();
    const checkout = new checkout_page();

    loginPage.abrirPaginaWeb()


    //Implementación de Page Object Model sin usar los elementos a nivel general en la capa Page
    //Es decir que los elementos estan directamente en los metodos de interacción.
    it('Compra de Producto Exitosa en Saucedemo', () => {
        loginPage.digitarUsuario('standard_user')
        loginPage.digitarClave('secret_sauce')
        loginPage.clickParaAutenticarse()
        listaProductos.agregarProductoCarrito()
        producto.abrirCarrito()
        checkout.diligenciarInfoComprador()
        checkout.confirmarDatosCompra()
        cy.get('.complete-header').should('contain.text','THANK YOU FOR YOUR ORDER')
    })
})