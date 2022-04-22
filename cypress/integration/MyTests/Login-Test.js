/// <reference types="cypress" />

import {data} from '../../fixtures/logindata.json'


describe('Login-Test-Suite',()=>{    
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
    
    it('Test for Login ',()=>{
        cy.visit('/login')
        cy.get('.card-body').contains('Log In').should('have.text','Log In') 
        cy.get('[data-testid="email"]').type('james24@gmail.com')
        cy.get('[data-testid="password"]').type('james24')
        cy.get('[data-testid="submit"]').click()
        cy.url().should('not.include','/login')
        cy.get('.mt-2 > .btn').click()
        cy.get('[data-testid="error"]').should('not.exist')
    })

    console.log(data);
    data.forEach((item,i)=>{
        it(`create Login ${i+1}`,()=>{
            cy.visit('/login')
            cy.get('.card-body').contains('Log In').should('have.text','Log In') 
            cy.get('[data-testid="email"]').type(item.email)
            cy.get('[data-testid="password"]').type(item.password)
            cy.get('[data-testid="submit"]').click()
            cy.url().should('not.include','/login')
        })
    })    
    
    it('Test for Failed Login ',()=>{
        cy.visit('/login')
        cy.get('.card-body').contains('Log In').should('have.text','Log In') 
        cy.get('[data-testid="email"]').type('notexist@gmail.com')
        cy.get('[data-testid="password"]').type('notexists')
        cy.get('[data-testid="submit"]').click()
        cy.url().should('include','/login')
        cy.get('[data-testid="error"]').should('exist')
    })
})

