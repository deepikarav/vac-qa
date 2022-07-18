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

    it('Home Test', function()
    {
        const homePage = new HomePage()
        const generalInformationPage = new GeneralInformationPage()
        //Login section
        const loginPage = new LoginPage()
        cy.visit(Cypress.env('url') + 'login')
        loginPage.getEmailTBox().type(this.data.loginEmail)
        loginPage.getNextButton().click()
        loginPage.getPasswordTBox().type(this.data.loginPassword)
        loginPage.getLoginButton().click()
        {
            loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.loginVerificationCode)
            loginPage.getConfirmCodeButton().click()
        }
        //Homepage section
        //cy.visit(Cypress.env('url') + "home")
        cy.url().should('include', '/home')
        homePage.getAddApplicationButton().should('be.visible')
        homePage.getAddApplicationButton().should('be.enabled')
        homePage.getAddApplicationButton().click()
        cy.wait (3000)
        homePage.getDeleteApplicationButton().should('be.visible')
        homePage.getDeleteApplicationButton().click()
    
        homePage.getEditApplicationButton().should('be.visible').click()

        generalInformationPage.getHeader().should('be.visible')
        
        cy.log('Home Page is successfully validated')

        generalInformationPage.getHeader().should('be.visible')
        generalInformationPage.getHeader().should('have.text', this.data.generalInformationPageHeader)
        generalInformationPage.getLastNameTBox().clear({force:true})
        generalInformationPage.getLastNameTBox().first().type(this.data.lstName).should('have.value',this.data.lstName)
        generalInformationPage.getFirstNameTBox().clear({force:true})
        generalInformationPage.getFirstNameTBox().first().type(this.data.firstName).should('have.value', this.data.firstName)
        generalInformationPage.getPastNameNoRadio().click()
        generalInformationPage.getGenderFemaleRadio().click()
        generalInformationPage.getDobYearTBox().clear({force:true}).first().type(this.data.year).should('have.value', this.data.year)
        generalInformationPage.getDobMonthTBox().clear({force:true}).first().type(this.data.month).should('have.value', this.data.month)
        generalInformationPage.getDobDayTBox().clear({force:true}).first().type(this.data.day).should('have.value', this.data.day)
        generalInformationPage.getCountryTBox().clear({force:true}).type(this.data.birthCountry).should('have.value', this.data.birthCountry)
        generalInformationPage.getCityTBox().clear({force:true}).type(this.data.birthCity).should('have.value', this.data.birthCity)
        generalInformationPage.getRelationshipStsDropdown().type(this.data.relationshipStatus)
        generalInformationPage.getRelationshipSingleDropdown().click({force:true})

        generalInformationPage.getPrevPartnerNoRadio().click()
        generalInformationPage.getSaveAndContinueButton().click()
        cy.log('General Information Page is successfully validated')
        
    })
    
})
