/// <reference types="cypress"/>

describe('Parametros SEO de una imagen en la Consola del Navegador', () => {
    it('Buscar imagen y mostrar parametros SEO', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('.bot_column').then($img => {
        const imageUrl = $img.prop('src');
        cy.log('Image URL: ' + imageUrl);
  
        const altText = $img.prop('alt');
        cy.log('ALT Text: ' + altText);
  
        const imageTypeMatch = imageUrl.match(/\.(jpeg|jpg|png|gif)$/);
        const imageType = imageTypeMatch ? imageTypeMatch[0] : 'Unknown';
        cy.log('Image Type: ' + imageType);
  
        cy.request(imageUrl).then(response => {
          const imageSize = response.headers['content-length'];
          cy.log('Image Size: ' + imageSize + ' bytes');
        });
      });
    });
  });