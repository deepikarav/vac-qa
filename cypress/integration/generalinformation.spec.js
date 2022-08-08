import HomePage from "../support/pageObjects/HomePage"
import LoginPage from "../support/pageObjects/LoginPage.js"
import GeneralInformationPage from "../support/pageObjects/GeneralInformationPage.js"


describe('Test Suite', function()
{

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('General Information Test', function()
    {
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const generalInformationPage = new GeneralInformationPage()
        
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
        cy.wait (2000)
        homePage.getEditButton().should('be.visible').click()

        generalInformationPage.getHeader().should('have.text', this.data.generalInformationPageHeader)
        generalInformationPage.getLastNameTBox().clear({force:true}).first().type(this.data.lastName).should('have.value',this.data.lastName)
        generalInformationPage.getFirstNameTBox().clear({force:true}).first().type(this.data.firstName).should('have.value', this.data.firstName)
        generalInformationPage.getPastNameNoRadio().click()
        generalInformationPage.getGenderFemaleRadio().click()
        generalInformationPage.getDobYearTBox().clear({force:true}).first().type(this.data.year).should('have.value', this.data.year)
        generalInformationPage.getDobMonthTBox().clear({force:true}).first().type(this.data.month).should('have.value', this.data.month)
        generalInformationPage.getDobDayTBox().clear({force:true}).first().type(this.data.day).should('have.value', this.data.day)
        generalInformationPage.getCountryTBox().clear().type(this.data.birthCountry).should('have.value', this.data.birthCountry)
        generalInformationPage.getCityTBox().clear().type(this.data.birthCity).should('have.value', this.data.birthCity)
        generalInformationPage.getMaritalStatusTBox().type(this.data.relationshipStatus)
        generalInformationPage.getRelationshipSingleRadio().click()
        generalInformationPage.getPrevPartnerNoRadio().click()
        generalInformationPage.getSaveAndContinueButton().click()
        cy.url().should('include','languages')
        cy.log("General Information Form is successfully completed")
    })
    
})
