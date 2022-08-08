///<reference types="Cypress"/>
import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import LanguageInformationPage from "../support/pageObjects/LanguageInformationPage.js"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const languageInfoPage = new LanguageInformationPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Language Information form fill test', function()
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
        navigation.getNavbarLanguageInfo().click()

        languageInfoPage.getHeaderText().should('have.text', this.data.languagePageHeader )
        languageInfoPage.getNativeLanguageDropDown().clear().type(this.data.nativeLanguage).click({force:true})
        languageInfoPage.getCommunicationLanguageRadio().click()
        languageInfoPage.getPreferredLanguageRadio().click()
        languageInfoPage.getProficiencyTestRadio().click()
        languageInfoPage.getSaveAndContinueButton().click()
        cy.url().should('include','/contact-information')
        cy.log("Language Information Form is successfully completed")
    })

})
