import LoginPage from "../support/pageObjects/LoginPage.js"
import SignUpPage from "../support/pageObjects/SignUpPage.js"
import HomePage from "../support/pageObjects/HomePage.js"

describe('Test Suite', function()
{

    const signUpPage = new SignUpPage()
    const loginPage = new LoginPage()
    const homePage = new HomePage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Login Test', function()
    {
        cy.visit(Cypress.env('url') + 'login')
        loginPage.getLogo().should('be.visible')
        loginPage.getTitle().should('have.text', this.data.loginPageTitleEn)
        loginPage.getEmailTBox().type(this.data.loginEmail)
        loginPage.getNextButton().click()
        loginPage.getPasswordTBox().type(this.data.loginPassword)
        loginPage.getLoginButton().click()
        {
            loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.loginVerificationCode)
            loginPage.getConfirmCodeButton().click()
        }
        homePage.getAddApplicationButton().should('be.visible')
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal")

    })

    it('Sign Up Test', function()
    {
        cy.visit(Cypress.env('url') + 'login')
        loginPage.getSignUpLink().should('be.visible').click()
        cy.url().should('include', '/signup')

        signUpPage.getLogo().should('be.visible')
        signUpPage.getTitle().should('have.text', this.data.signUpPageTitleEn)
        /*signUpPage.getEmailTBox().type(this.data.signUpEmail) 
        signUpPage.getNextButton().click()
        signUpPage.getPasswordTBox().type(this.data.signUpPassword)
        signUpPage.getSignUpButton().click()
        {
            cy.wait(1000)
            loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.signUpVerificationCode)
            loginPage.getConfirmCodeButton().click()
        }
        homePage.getAddApplicationButton().should('be.visible')
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal")
        */
    })

})