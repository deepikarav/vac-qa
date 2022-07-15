///<reference types="Cypress"/>
import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"

describe('Test Suite', function()
{

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it(' HomePage Add application test', function()
    {

        const loginPage = new LoginPage()
        const homePage = new HomePage()

        cy.visit(Cypress.env('url') + 'login')
        loginPage.getEmailTBox().type(this.data.loginEmail)
        loginPage.getNextButton().click()
        loginPage.getPasswordTBox().type(this.data.loginPassword)
        loginPage.getLoginButton().click()
        {
            loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.loginVerificationCode)
            loginPage.getConfirmCodeButton().click()
        }
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal")

        homePage.getAddApplicationButton().click().then (function()
        {
            //cy.wait(5000)
            homePage.getDeleteButton().should('be.visible').click()
            homePage.getApplicationIdColumn().each(($e1, index, $list) => {
        
                const applicationId= $e1.text()
                if(applicationId.includes('44e5'))
                {
                    cy.log(applicationId)
                    homePage.getEditButton().eq(index).click({force:true})
                }
                cy.url().should('include', '/personal-details')
            
            })

        })

    })

    it('HomePage Edit application test', function()
    {

    })

    it('HomePage Delete application test', function()
    {

    })

})
