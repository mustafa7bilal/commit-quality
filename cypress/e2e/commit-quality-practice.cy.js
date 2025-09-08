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
})