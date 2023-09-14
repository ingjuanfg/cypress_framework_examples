class LoginPage{

    elements={
        usernameInput : () => cy.get("#user-name"),
        passwordInput : () =>  cy.get("#password"),
        loginButton : () =>  cy.get("#login-button")
    }
}

export default LoginPage;