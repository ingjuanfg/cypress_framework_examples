/// <reference types="cypress"/>
import home_page from '../../pages/ecommerce/home_page';
import producto_page from '../../pages/ecommerce/producto_page';
import checkout_page from '../../pages/ecommerce/checkout_page';
import confirm_order from '../../pages/ecommerce/confirm_order';


describe('POM con Cypress - Ecommerce', () => {
    const home = new home_page();
    const producto = new producto_page();
    const checkout = new checkout_page();
    const confirmOrder = new confirm_order();

    home.abrirPaginaWeb()

    it('Compra de Producto', () => {
        home.seleccionarCategoriaTrigger()
        producto.seleccionarElemento()
        producto.comprarProductoAhora()
        checkout.diligenciarPersonalDetails()
        checkout.diligenciarBillingAddress()
        checkout.aceptarTermsCondictions()
        checkout.guardarFormulario()
        confirmOrder.confirmarOrden()
        cy.get(".page-title").should("contain.text", "Your order has been placed!")
    })

})