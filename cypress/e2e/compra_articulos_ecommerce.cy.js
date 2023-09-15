/// <reference types="cypress"/>
import home_page from '../pages/home_page';
import producto_page from '../pages/producto_page';
import checkout_page from '../pages/checkout_page';
import confirm_order from '../pages/confirm_order';


describe('Page Object Model con Cypress - Ecommerce', () => {
    const home = new home_page();
    const producto = new producto_page();
    const checkout = new checkout_page();
    const confirmOrder = new confirm_order();

    before(function(){
        cy.fixture('datos_facturacion').as("datos_factura")
    })

    home.abrirPaginaWeb()

    it('Compra de Producto en Ecommerce', () => {
        home.seleccionarCategoriaTrigger()
        producto.seleccionarElemento()
        producto.comprarProductoAhora()
        checkout.diligenciarDatosPersonales()
        cy.get("@datos_factura").then((data)=>{
            checkout.diligenciarInformacionFacturacion(data.compania, data.direccionUno, data.direccionDos, data.ciudad, data.codigoPostal, data.pais, data.zonaPago)
        })
        checkout.aceptarTermsCondiciones()
        checkout.guardarFormulario()
        confirmOrder.confirmarOrden()
        cy.get(".page-title").should("contain.text", "Your order has been placed!")
    })
})