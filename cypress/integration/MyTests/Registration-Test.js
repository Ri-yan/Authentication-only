let rowsLength;
    describe ('Registration-Test-Suite (Using Excel FIle)', () =>{
      before(() => {
         cy.task('readXlsx', { file: 'cypress/fixtures/UserData.xls', sheet: "Sheet1" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
          })
            cy.visit("http://localhost:3000/login");
            cy.get('.mt-2 > a').click()

          })
          
        it ('Data Driven: Register User', () => {
          cy.fixture('xlsxData').then((data) => {
             for ( let i = 0; i < rowsLength; i++) {
              cy.visit('/signup')
              cy.url().should('include', '/signup').then(()=>{
                cy.get('[data-testid="Reg_email"]').type(data.rows[i].email);
                cy.get('[data-testid="Reg_password"]').type(data.rows[i].password);
                cy.get('[data-testid="Reg_passwordConfirm"]').type(data.rows[i].confirmpassword);
                cy.get('.btn-primary').click();
                cy.get('[data-testid="Reg_error"]').should('not.exist')
                cy.url().should('include', '/')
                // cy.get('alert').should('have.text', data.rows[i].message);
              })
            }
          })     
         })
         
        })
    
    




// let rowsLength;
//     describe ('Data Driven Testing Using Excel FIle', () =>{
//       before(() => {
//          cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
//             rowsLength = rows.length;
//             cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
//           })
//             cy.visit("https://angular-7-registration-login-example.stackblitz.io/login?returnUrl=%2F");
//             cy.get('button').click()
//           })
//         it ('Data Driven: Register User', () => {
//           cy.fixture('xlsxData').then((data) => {
//              for ( let i = 0; i < rowsLength; i++) {
//                 cy.get('.btn-link').click();
//                 cy.url().should('include', '/register').then(()=>{
//                 cy.get('input[formcontrolname="firstName"]').type(data.rows[i].firstName);
//                 cy.get('input[formcontrolname="lastName"]').type(data.rows[i].lastName);
//                 cy.get('input[formcontrolname="username"]').type(data.rows[i].username);
//                 cy.get('input[formcontrolname="password"]').type(data.rows[i].password);
//                 cy.get('.btn-primary').click();
//                 cy.get('alert').should('have.text', data.rows[i].message);
//               })
//             }
//           })     
//          })
         
//         })
    

