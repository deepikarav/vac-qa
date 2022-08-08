///<reference types="Cypress"/>
import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import SummaryPage from "../support/pageObjects/SummaryPage.js"
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js"
import Navigation from "../support/pageObjects/Navigation.js"


describe('Test Suite', function()
{
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const summaryPage = new SummaryPage()
    const backgroundInfoPage = new BackgroundInformationPage()
    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    it('Summary Screen test', function()
    {
        cy.visit(Cypress.env('url') + 'login')
        loginPage.getEmailTBox().type(this.data.loginEmail)
        loginPage.getNextButton().click()
        loginPage.getPasswordTBox().type(this.data.loginPassword)
        loginPage.getLoginButton().click().then(function()
        {
            loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.loginVerificationCode)
            loginPage.getConfirmCodeButton().click()
        })
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal")
        cy.wait(2000)
        homePage.getEditButton().click()
        cy.url().should('include', '/personal-details')
        navigation.getNavbarBackgroundInfo().click()
        backgroundInfoPage.getSaveAndContinueButton().click()
        summaryPage.getHeaderText().should('have.text', this.data.summaryPageHeader)
        summaryPage.getExpandAllButton().click()
        summaryPage.getConfirmButton().click()
        cy.log("Application form successfully submitted")
    })
})
