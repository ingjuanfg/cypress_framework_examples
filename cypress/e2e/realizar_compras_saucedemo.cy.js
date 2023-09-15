/// <reference types="cypress"/>
import login_page from '../pages/login_page';
import lists_products_page from '../pages/lists_products_page'
import product_page from '../pages/product_page'
import checkout_page from '../pages/checkout_page'


describe('Page Object Model con Cypress y lectura JSON', () => {
    const loginPage = new login_page();
    const listProducts = new lists_products_page();
    const product = new product_page();
    const checkout = new checkout_page();


    //Este before permite la lectura de archivos JSON desde mi carpeta fixture. El valor dentro del "as" 
    //es un alias o como quiero referenciar mi archivo cuando quiero obtener su data.
    before(function(){
        cy.fixture('info_comprador').as("datos_comprador")
    })

    loginPage.abrirPaginaWeb()

    //Implementación de Page Object Model usando los elementos a nivel general en la capa Page
    //Es decir que los elementos estan definidos dentro de Elements y asi pueden ser reutlizados.
    it('Compra de Producto Exitosa en Saucedemo', () => {
    //Aqui hago el llamado al archivo con el alias definido en el before y obtengo la data para trabajarla sobre mi campo.
        cy.get("@datos_comprador").then((data)=>{
            loginPage.digitarUsuario(data.username)
            loginPage.digitarClave(data.password)
          })

        loginPage.clickParaAutenticarse()
        listProducts.agregarProductoCarrito()
        product.abrirCarrito()

        //Aqui hago el llamado al archivo con el alias definido en el before y obtengo la data para trabajarla sobre mi campo.
        cy.get("@datos_comprador").then((data)=>{
            checkout.diligenciarInfoComprador(data.nombre, data.apellido, data.postal)
          })
        checkout.confirmarDatosCompra()
        cy.get('.complete-header').should('contain.text','THANK YOU FOR YOUR ORDER')
    })
})