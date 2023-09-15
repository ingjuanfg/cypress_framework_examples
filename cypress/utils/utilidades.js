class Utilidades{

    constructor(){
        this.dominios = ["gmail.com","outlook.com","yahoo.es"]
    }

    generarCorreoAleatorio(){
        const dominios = ["gmail.com","outlook.com","yahoo.es"];
        const nombreUsuario = Math.random().toString(36).substring(2,10);
        const eleccionDominioAleatorio  = dominios[Math.floor (Math.random() * dominios.length)];

        const emailAleatorio = `${nombreUsuario}@${eleccionDominioAleatorio}`;
        return emailAleatorio;
    }
}

export default Utilidades;