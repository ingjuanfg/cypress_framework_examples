/// <reference types="cypress"/>

describe('Parametros SEO de una imagen en la vista de ejecucion de Cypress', () => {
    it('Buscar imagen y mostrar parametros SEO', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('.bot_column').then($img => {
        const imageUrl = $img.prop('src');
        console.log('Image URL:', imageUrl);

        const altText = $img.prop('alt');
        console.log('ALT Text:', altText);

        const imageTypeMatch = imageUrl.match(/\.(jpeg|jpg|png|gif)$/);
        const imageType = imageTypeMatch ? imageTypeMatch[0] : 'Unknown';
        
        console.log('Image Type:', imageType);
        cy.request(imageUrl).then(response => {
          const imageSize = response.headers['content-length'];
          console.log('Image Size:', imageSize, 'bytes');
        });
      });
    });
  });