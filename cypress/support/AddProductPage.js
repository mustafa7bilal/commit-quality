class AddProductPage {
  verifyPage() {
    cy.url().should('include', '/add-product');
    cy.get('h1').should('contain', 'Add');
  }

  addProduct(name, price, date) {
    cy.get('[data-testid="product-textbox"]').type(name);
    cy.get('[data-testid="price-textbox"]').type(price);
    cy.get('[data-testid="date-stocked"]').type(date);
    cy.get('[data-testid="submit-form"]').click();
  }
}

export default new AddProductPage();
