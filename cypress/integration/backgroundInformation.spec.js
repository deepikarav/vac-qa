///<reference types="Cypress"/>
import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const backgroundInfoPage = new BackgroundInformationPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Background Information form fill test', function()
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

        backgroundInfoPage.getHeaderText().should('have.text', this.data.backgroundInfoPageHeader )
        backgroundInfoPage.getAgeGroupRadio().click()
        backgroundInfoPage.getTuberulosisRadio().click()
        backgroundInfoPage.getDisorderRadio().click()
        backgroundInfoPage.getRemainedBeyondRadio().click()
        backgroundInfoPage.getRefusedToLeaveRadio().click()
        backgroundInfoPage.getPreviouslyAppliedRadio().click()
        backgroundInfoPage.getVisaStatusDetailsTBox().clear().type(this.data.visaStatusDetails)
        backgroundInfoPage.getOffenceRadio().click()
        backgroundInfoPage.getMilitaryServiceRadio().click()
        backgroundInfoPage.getServiceDetailsTBox().clear().type(this.data.serviceDetails)
        backgroundInfoPage.getPoliticalRadio().click()
        backgroundInfoPage.getWitnessedRadio().click()
        backgroundInfoPage.getSaveAndContinueButton().click()
        cy.url().should('include','/documents')
        cy.log("Background Information Form is successfully completed")
    })

})
