class LoginPage{

    abrirPaginaWeb(){
        beforeEach(()=>{
            cy.visit("https://www.saucedemo.com/v1/index.html")
            cy.title().should('eq', 'Swag Labs')
        })
    }

    digitarUsuario(usuario){
        cy.get("#user-name").type(usuario)
    }

    digitarClave(clave){
        cy.get("#password").type(clave)
    }

    clickParaAutenticarse(){
        cy.get("#login-button").click()
    }

}

export default LoginPage;