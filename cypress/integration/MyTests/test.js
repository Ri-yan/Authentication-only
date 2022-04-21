/// <reference types="cypress" />


describe('Test',()=>{    
    beforeEach(()=>{
        cy.visit('http://localhost:3000/login')
    })
it('Test 1',()=>{
    cy.get('.card-body').contains('Log In').should('have.text','Log In') 
})

})
