class ProductTablePage {
  verifyTableStructure() {
    cy.get('.product-list-container thead tr').within(() => {
      cy.contains('th', 'ID');
      cy.contains('th', 'Name');
      cy.contains('th', 'Price');
      cy.contains('th', 'Date Stocked');
    });
  }

  verifyProductById(id, name, price, date) {
    cy.get(`[data-testid="product-row-${id}"]`).within(() => {
      cy.get('[data-testid="id"]').should('contain', id);
      cy.get('[data-testid="name"]').should('contain', name);
      cy.get('[data-testid="price"]').should('contain', price);
      cy.get('[data-testid="dateStocked"]').should('contain', date);
    });
  }
}

export default new ProductTablePage();
