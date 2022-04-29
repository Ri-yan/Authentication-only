/// <reference types="cypress" />
describe('Login-Test-Suite',()=>{  
    it('Get request',()=>{
        cy.request({
            method:'GET',
            url:'https://httpbin.org/get'
        }).then((response)=>{
                expect(response.body).have.property('url')
            })
        })
    it('Post request',()=>{
        cy.request({
            method:'POST',
            url:'https://httpbin.org/post',
            body : {
                "name":"Riyan",
                "place":"UP"
            },
            headers : {
                'content-type':'application/json'
            }
        }).then((response)=>{
                expect(response.body).have.property('json')
                expect(response.body.json).to.deep.equal({
                    "name":"Riyan",
                    "place":"UP"
                })
            })
    })
 })