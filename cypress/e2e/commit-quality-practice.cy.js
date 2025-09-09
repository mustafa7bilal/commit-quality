/// <reference types="cypress" />

describe('General Components commit Quality',()=>{

    it('Buttons with normal click',()=>{
cy.visit('https://commitquality.com/practice')
cy.url('https://commitquality.com/practice')
cy.get('.container > :nth-child(1) > :nth-child(1)').should('be.visible').contains('Note to user: This page is likely to be updated - Things may move around and extra items will be added.')
cy.get('[data-testid="practice-general"]').should('be.visible').contains('General Components')
cy.get('.container-text.extra-info').each(($el)=>{
if($el.text().includes('Buttons')){
cy.wrap($el).click({force:true})



};
cy.url().should('include', '/practice-general-components');
cy.get('.buttons-container').should('be.visible').contains('Buttons')
cy.get('.button-container').should('be.visible').contains('Click me')
cy.get('[data-testid="basic-click"]')
  .click()
  .then(() => {
    cy.get('p').should('have.text', 'Button clicked');
  });
}

)

    })
    it('Double Click',()=>{
        cy.visit('https://commitquality.com/practice-general-components')
        cy.url('https://commitquality.com/practice-general-components')
        cy.get('[data-testid="double-click"]').should('be.visible').contains('Double click me').dblclick().then(()=>{

       cy.get('p').should('have.text','Button double clicked');



        }

        )



    
})
it('Right Click',()=>{

cy.visit('https://commitquality.com/practice-general-components')
cy.get('[data-testid="right-click"]').rightclick().then(()=>{
cy.get('p').should('have.text','Button right mouse clicked')

}

)
    
})
it('Radio Buttons',()=>{
    cy.visit('https://commitquality.com/practice-general-components')
    cy.get('.radio-buttons-container').should('be.visible').contains('Radio buttons')
    cy.get('.radio-buttons-container > .component-container')
  .children()
  .should('have.length', 2);
  cy.get('.radio-button-container input[type="radio"]').check().then(()=>{
    cy.get('p').should('have.text','option1 clicked')
  }

  )

})
it('Select an option',()=>{
cy.visit('https://commitquality.com/practice-general-components')
cy.get('.dropdown-container').should('be.visible').contains('Select an option')
cy.get('select').select('Option 1')


})
it('Checkboxes',()=>{
  cy.visit('https://commitquality.com/practice-general-components')
cy.get('.checkbox-container.container-outline').should('be.visible').contains('Checkboxes')
cy.get('.checkbox-container').should('be.visible').contains('Checkbox 1')
cy.get('[data-testid="checkbox1"]').check().then(()=>{
  cy.get('p').should('be.visible').contains('Checkbox 1 checked')
  cy.get('[data-testid="checkbox1"]').should('be.checked')

}

)



  
})
it('Verify link texts are correct',()=>{
cy.visit('https://commitquality.com/practice-general-components')
cy.get('.links-container.container-outline')
cy.get('[data-testid="link-same-tab"]').should('have.text','My Youtube')
cy.get('[data-testid="link-newtab"]').should('have.text','Open my youtube in a new tab')
cy.get('[data-testid="link-newtab-practice"]').should('have.text','Go to practice page')




})
 it("Verify same-tab link navigation", () => {
  cy.visit('https://commitquality.com/practice-general-components')
    cy.get('[data-testid="link-same-tab"]')
      .should("have.attr", "href", "https://www.youtube.com/@commitquality")
      .and("not.have.attr", "target"); // should open in same tab
  });
  it("Verify external new-tab link attributes", () => {
    cy.visit('https://commitquality.com/practice-general-components')
    cy.get('[data-testid="link-newtab"]')
      .should("have.attr", "href", "https://www.youtube.com/@commitquality")
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noreferrer");
  });
  it("Verify internal new-tab link attributes", () => {
    cy.visit('https://commitquality.com/practice-general-components')
    cy.get('[data-testid="link-newtab-practice"]')
      .should("have.attr", "href", "/practice")
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noreferrer");
  });
   it("Verify all links are visible and clickable", () => {
     cy.visit('https://commitquality.com/practice-general-components')
    cy.get(".links-container a").each(($el) => {
      cy.wrap($el).should("be.visible").and("not.be.disabled");

    });
  });
  
      it("Verify links are not broken (no 404/500)", () => {
        cy.visit('https://commitquality.com/practice-general-components')
    cy.get(".links-container a").each(($el) => {
      const href = $el.prop("href");
      if (href) {
        cy.request(href).its("status").should("be.oneOf", [200, 301, 302]);
      }
    });
    });
     it("Verify no link has missing href attribute", () => {
      cy.visit('https://commitquality.com/practice-general-components')
    cy.get(".links-container a").each(($el) => {
      cy.wrap($el).should("have.attr", "href");
    });
  });
  
})
