class HomePage {
  visit() {
    cy.visit('/');
  }

  clickAddProduct() {
    cy.get('[data-testid="add-a-product-button"]').click();
  }

  verifyBannerLink() {
    cy.get('a[data-testid="banner-advert-link"]')
      .should('have.attr', 'href')
      .then((href) => cy.request(href).its('status').should('eq', 200));
  }
}

export default new HomePage();
