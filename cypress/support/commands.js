// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('verifyProduct', (id, name, price, date) => {
  cy.get(`[data-testid="product-row-${id}"]`).within(() => {
    cy.get('[data-testid="id"]').should('contain', id);
    cy.get('[data-testid="name"]').should('contain', name);
    cy.get('[data-testid="price"]').should('contain', price);
    cy.get('[data-testid="dateStocked"]').should('contain', date);
  });
});
