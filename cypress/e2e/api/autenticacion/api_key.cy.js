/// <reference types="cypress"/>

describe('Autenticación con Key', () => {

    it('Consulta GET', () => {
        cy.request({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=4USIQv029c1go92dMci0yTDUM6ng7FbE2om0ewAh",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))
            cy.log(datos)
            cy.log(datos.title)
            cy.log(datos.explanation)
        })
    })

})
