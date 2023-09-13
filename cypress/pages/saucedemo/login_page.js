class LoginPage{

    elements={
        usernameInput : () => cy.get("#user-name"),
        passwordInput : () =>  cy.get("#password"),
        loginButton : () =>  cy.get("#login-button")
    }

    abrirPaginaWeb(){
        beforeEach(()=>{
            cy.visit("https://www.saucedemo.com/v1/index.html")
            cy.title().should('eq', 'Swag Labs')
        })
    }

    digitarUsuario(usuario){
        this.elements.usernameInput().type(usuario)
    }

    digitarClave(clave){
        this.elements.passwordInput().type(clave)
    }

    clickParaAutenticarse(){
        this.elements.loginButton().click()
    }

}

export default LoginPage;