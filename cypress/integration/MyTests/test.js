/// <reference types="cypress" />


describe('Test',()=>{    
    //  beforeEach(()=>{
    //     cy.visit('/login')
    // })
    it('Test for checking heading',()=>{
    cy.visit('https://authentication-only.netlify.app')
    cy.get('.card-body').contains('Log In').should('have.text','Log In') 
    })
    it('Test for LOCAL PORT',()=>{
        cy.visit('/login')
        cy.get('.card-body').contains('Log In').should('have.text','Log In') 
        })
})
