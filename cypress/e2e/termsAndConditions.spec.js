
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage.js"
import DeclinePage from "../support/pageObjects/DeclinePage.js"
import LoginPage from "../support/pageObjects/LoginPage.js"



describe('Test Suite', function()
{
    const loginPage = new LoginPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
    const declinePage = new DeclinePage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Terms and Conditions Test', function()
    {
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
        cy.visit(Cypress.env('url') + "termsconditions")
        termsAndConditionsPage.getHeader().should('have.text', this.data.termsAndConditionsPageHeaderEn)
        termsAndConditionsPage.getLanguageToggle().click().then (function()
        {
            termsAndConditionsPage.getHeader().should('have.text', this.data.termsAndConditionsPageHeaderFr)
            termsAndConditionsPage.getAcceptButton().should('have.text', this.data.acceptButtonFr)
            termsAndConditionsPage.getDoNotAcceptButton().should('have.text', this.data.declineButtonFr)
        })

        termsAndConditionsPage.getLanguageToggle().click()
        termsAndConditionsPage.getAcceptButton().should('be.enabled')
        termsAndConditionsPage.getDoNotAcceptButton().click()
        cy.url().should('include', this.data.declinePageUrl) 
        declinePage.getHeader().should('have.text', this.data.declinePageHeaderEn)
        declinePage.getLanguageToggle().click().then(function() 
        {
            declinePage.getHeader().should('have.text', this.data.declinePageHeaderFr)
        })

        declinePage.getExitButton().should('be.enabled')
        declinePage.getBackButton().click()
        cy.url().should('include', this.data.termsAndConditionsPageUrl) 

        cy.log('Terms and Conditions is successfully validated')
    })

})