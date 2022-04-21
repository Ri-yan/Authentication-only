/// <reference types="cypress" />


describe('Test',()=>{    
    //  beforeEach(()=>{
    //     cy.visit('/login')
    // })
    cy.visit('/login')
    it('Test for checking heading',()=>{
    cy.get('.card-body').contains('Log In').should('have.text','Log In') 
    })

})
