/// <reference types="cypress" />

describe('Add Product', () => {
  it('should add a product', () => {
    cy.visit('/');
    cy.visit('/');
    // log the url and check if href exists
    cy.get('a[data-testid="banner-advert-link"]')
      .should('have.attr', 'href')
      .then((href) => {
        cy.log("Link:", href);
      });
    cy.get('a[data-testid="banner-advert-link"]')
      .invoke('text')
      .then((text) => {
        cy.log("Anchor text:", text);
      });
    cy.get('a[data-testid="banner-advert-link"]')
      .invoke('attr', 'href')
      .then((link) => {
        cy.request(link).then((response) => {
          expect(response.status).to.eq(200);
        });
      });

    cy.get('[data-testid="add-a-product-button"]').should('be.visible').contains('Add a Product').click();
    cy.url().should('include', '/add-product');
    cy.get('h1').should('be.visible').contains('Add');
    cy.get('form').should('be.visible');
    cy.get('[data-testid="product-textbox"]')
      .should('have.attr', 'placeholder', 'Enter a product name').type('Testing Product 5');
    cy.get('[data-testid="price-textbox"]').should('have.attr', 'placeholder', 'Enter a price').type('10000');
    cy.get('[data-testid="date-stocked"]')
      .type('2025-08-29')
      .should('have.value', '2025-08-29');
    cy.get('[data-testid="submit-form"]').click();
    cy.url('https://commitquality.com/');
    cy.get('.product-list-container').should('be.visible');
    cy.get('.product-list-container').should('have.length.greaterThan', 0);

    cy.get('.product-list-container thead tr').within(() => {
      cy.contains('th', 'ID');
      cy.contains('th', 'Name');
      cy.contains('th', 'Price');
      cy.contains('th', 'Date Stocked');
    });
  });

  describe('Product Table Validation', () => {
    it('Check each row has valid structure', () => {
    cy.visit('https://commitquality.com/');
      
      cy.get('tbody tr').each(($row) => {
        cy.wrap($row).find('td').should('have.length', 4);

        cy.wrap($row).find('td[data-testid="id"]')
          .invoke('text')
          .then((text) => {
            expect(Number(text)).to.be.a('number');
          });

        cy.wrap($row).find('td[data-testid="name"]')
          .invoke('text')
          .should('not.be.empty');

        cy.wrap($row).find('td[data-testid="price"]')
          .invoke('text')
          .then((price) => {
            expect(Number(price)).to.be.greaterThan(0);
          });

        cy.wrap($row).find('td[data-testid="dateStocked"]')
          .invoke('text')
          .then((date) => {
            const regex = /^\d{4}-\d{2}-\d{2}$/;
            expect(date).to.match(regex);
          });
      });
    });
    it('displays correct data for product with ID 5', () => {
      cy.visit('https://commitquality.com/');
  cy.get('[data-testid="product-row-5"]').within(() => {
    cy.get('[data-testid="id"]').should('contain', '5')
    cy.get('[data-testid="name"]').should('contain', 'Product 1')
    cy.get('[data-testid="price"]').should('contain', '10')
    cy.get('[data-testid="dateStocked"]').should('contain', '2021-01-01')
  })
})
it('filters products by name', () => {
  cy.visit('https://commitquality.com/');


cy.get('[data-testid^="product-row"]').each(($row) => {
  const id = $row.find('[data-testid="id"]').text().trim();
  const name = $row.find('[data-testid="name"]').text().trim();

  if (id === '3' && name === 'Product 1') {
    // Do something with this specific row
    cy.wrap($row).within(() => {
      cy.get('[data-testid="price"]').should('have.text', '10');
      cy.get('[data-testid="dateStocked"]').should('have.text', '2021-01-01');
    });
  }
});

 
})


  });
});














