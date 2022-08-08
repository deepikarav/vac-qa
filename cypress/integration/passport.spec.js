///<reference types="Cypress"/>
import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import PassportPage from "../support/pageObjects/PassportPage.js"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const passportPage = new PassportPage()

    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })

    it('Passport form fill test', function()
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
        navigation.getNavbarPassport().click()
        passportPage.getPassportHeader().should('have.text', this.data.passportPageHeader )
        passportPage.getPassportNumberTBox().clear().type(this.data.passportNumber)
        passportPage.getCountryDropDown().type('C')
        passportPage.getCountryIssueSelect().click()
        passportPage.getIssueYearDropDown().clear().type(this.data.issueYear)
        passportPage.getIssueMonthDropDown().clear().type(this.data.issueMonth)
        passportPage.getIssueDayDropDown().clear().type(this.data.issueDay)
        passportPage.getExpiryYearDropDown().clear().type(this.data.expiryYear)
        passportPage.getExpiryMonthDropDown().clear().type(this.data.expiryMonth)
        passportPage.getExpiryDayDropDown().clear().type(this.data.expiryDay)
        passportPage.getPassportTypeDropDown().click()
        passportPage.getDiplomaticTypeSelect().click()
        passportPage.getTaiwanRadio().click()
        passportPage.getIsraelRadio().click()
        passportPage.getNationalIDRadio().click()
        passportPage.getNationalIDDocumentNumberTBox().clear().type(this.data.nationalIDDocumentNumber)
        passportPage.getNationalIDCountryIssueDropDown().click()
        passportPage.getNationalIDCountrySelect().click()
        passportPage.getNationalIDIssueYearDropDown().clear().type(this.data.issueYear)
        passportPage.getNationalIDIssueMonthDropDown().clear().type(this.data.issueMonth)
        passportPage.getNationalIDCIssueDayDropDown().clear().type(this.data.issueDay)
        passportPage.getNationalIDExpiryYearDropDown().clear().type(this.data.expiryYear)
        passportPage.getNationalIDExpiryMonthDropDown().clear().type(this.data.expiryMonth)
        passportPage.getNationalIDExpiryDayDropDown().clear().type(this.data.expiryDay)
        passportPage.getUSPRStatusRadio().click()
        passportPage.getUSPRDocumentNumberTBox().type(this.data.usPRDocumentNumber)
        passportPage.getUSPRExpiryYearDropDown().type(this.data.expiryYear)
        passportPage.getUSPRExpiryMonthDropDown().type(this.data.expiryMonth)
        passportPage.getUSPRxpiryDayDropDown().type(this.data.expiryDay)
        passportPage.getSaveAndContinueButton().click()
        cy.url().should('include','/visit-details')
        cy.log("Passport Form is successfully completed")
    })
})
