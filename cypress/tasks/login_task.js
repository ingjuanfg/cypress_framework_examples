import login_page from '../pages/saucedemo/login_page';

class LoginTask{
    constructor(){
        this.loginPage = new login_page();
    }

    loginExitoso(usuario, clave){
        this.loginPage.elements.usernameInput().type(usuario)
        this.loginPage.elements.passwordInput().type(clave)
        this.loginPage.elements.loginButton().click()
    }
}

export default LoginTask;