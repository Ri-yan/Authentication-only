/// <reference types="cypress" />


describe('Test',()=>{    
    beforeEach(()=>{
        cy.visit('/login')
    })
it('Test 1',()=>{
    cy.get('.card-body').contains('Log In').should('have.text','Log In') 
})

})
