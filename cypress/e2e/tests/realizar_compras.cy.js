/// <reference types="cypress"/>
import login_page from '../../pages/login_page';
import lists_products_page from '../../pages/lists_products_page'
import product_page from '../../pages/product_page'
import checkout_page from '../../pages/checkout_page'


describe('Page Object Model con Cypress', () => {
    const loginPage = new login_page();
    const listProducts = new lists_products_page();
    const product = new product_page();
    const checkout = new checkout_page();

    loginPage.abrirPaginaWeb()

    it('Compra de Producto', () => {
        loginPage.digitarUsuario('standard_user')
        loginPage.digitarClave('secret_sauce')
        loginPage.clickParaAutenticarse()
        listProducts.agregarProductoCarrito()
        product.abrirCarrito()
        checkout.diligenciarInfoComprador()
        checkout.confirmarDatosCompra()
        cy.get('.complete-header').should('contain.text','THANK YOU FOR YOUR ORDER')
    })


    it('Login Exitoso', () => {
        loginPage.digitarUsuario('standard_user')
        loginPage.digitarClave('secret_sauce')
        loginPage.clickParaAutenticarse()
    })
    
    it('Login Bloqueado', () => {
        loginPage.digitarUsuario('locked_out_user')
        loginPage.digitarClave('secret_sauce')
        loginPage.clickParaAutenticarse()
    })

})