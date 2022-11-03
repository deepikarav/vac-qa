import SignInPage from "../support/pageObjects/SignInPage.js"
import ResetPasswordPage from "../support/pageObjects/ResetPasswordPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage"

describe('Test Suite', function()
{

    const signInPage = new SignInPage()
    const resetPasswordPage = new ResetPasswordPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
    const homePage = new HomePage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Sign In Test', function()
    {
        cy.visit(Cypress.env('url') + 'signin')
        signInPage.getLogo().should('be.visible')
        signInPage.getTitle().should('have.text', this.data.signInPageTitleEn)
        signInPage.getUsernameTBox().type(this.data.signInUserName)
        signInPage.getPasswordTBox().type(this.data.signInPassword)
        signInPage.getContinueButton().click()
        cy.url().should('include', '/termsconditions')
        termsAndConditionsPage.getHeader().should('have.text', this.data.termsAndConditionsPageHeaderEn)
        termsAndConditionsPage.getAcceptButton().should('be.visible')
        termsAndConditionsPage.getDoNotAcceptButton().should('be.visible')
        termsAndConditionsPage.getAcceptButton().click()
        cy.log('Terms and Conditions is successfully validated')
        homePage.getHomePageTitle().should('have.text', this.data.homePageTitleEn)
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal")
    })

    it('Reset Password Test', function()
    {
        cy.visit(Cypress.env('url') + 'signin')
        signInPage.getResetPasswordLink().click()
        resetPasswordPage.getResetPasswordPageTitle().should('have.text', this.data.resetPasswordPageTitleEn)
        resetPasswordPage.getResetPasswordEmailAddressTBox().type(this.data.resetPasswordEmailAddress)
        resetPasswordPage.getRequestPasswordResetButton().click()
        {
            resetPasswordPage.getVerifyYourEmailPageTitle().should('have.text', this.data.verifyEmailPageTitleEn)
            cy.wait(20000)
            resetPasswordPage.getVerificationCodeTBox().type(this.data.resetPasswordVerificationCode)
        }
        resetPasswordPage.getNewPasswordTBox().type(this.data.newPassword)
        resetPasswordPage.getConfirmPasswordTBox().type(this.data.confirmPassword)
        resetPasswordPage.getUpdatePasswordButton().click()
        resetPasswordPage.getPasswordResetSuccessfulHeader().should('have.text', this.data.passwordResetSuccessfulHeaderEn)
        resetPasswordPage.getPasswordResetSuccessfullMessage().should('have.text', this.data.passwordResetSuccessfulMessageEn)
        resetPasswordPage.getBackToSignInLink().click()
        signInPage.getUsernameTBox().type(this.data.signInUserName)
        signInPage.getPasswordTBox().type(this.data.newPassword)
        signInPage.getContinueButton().click()
        termsAndConditionsPage.getAcceptButton().click()
        cy.log('Terms and Conditions is successfully validated')
        homePage.getHomePageTitle().should('have.text', this.data.homePageTitleEn)
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal with new password")
        // {
        //     cy.wait(1000)
        //     loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.signUpVerificationCode)
        //     loginPage.getConfirmCodeButton().click()
        // }
        // homePage.getAddApplicationButton().should('be.visible')
        // cy.url().should('include', '/home')
        // cy.log("User successfully logged into VAC Portal")
    })
})