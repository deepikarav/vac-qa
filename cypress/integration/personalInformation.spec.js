import SignInPage from "../support/pageObjects/SignInPage.js"
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage"
import HomePage from "../support/pageObjects/HomePage"
import PersonalInformationPage from "../support/pageObjects/PersonalInformationPage.js"


describe('Test Suite', function()
{
    const signInPage = new SignInPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
    const homePage = new HomePage()
    const personalInformationPage = new PersonalInformationPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Personal Information Test', function()
    {
        
        
        cy.visit(Cypress.env('url') + 'signin')
        signInPage.getUsernameTBox().type(this.data.signInUserName)
        signInPage.getPasswordTBox().type(this.data.signInPassword)
        signInPage.getContinueButton().click()
        signInPage.getVerificationCodeTBox().should('be.visible').wait(15000)
        signInPage.getSignInButton().click()
        cy.url().should('include', '/termsconditions')
        termsAndConditionsPage.getAcceptButton().click()
        homePage.getHomePageTitle().should('have.text', this.data.homePageTitleEn)
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal and navigated to Home page")
        homePage.getNewApplicationLink().click().then (function()
        {
            cy.wait(5000)
            cy.url().should('include', '/client/general/personal-details')
        })

        personalInformationPage.getHeader().should('have.text', this.data.generalInformationPageHeader)
        personalInformationPage.getSubpageHeader().should('have.text', this.data.personalInformationPageHeader)
        personalInformationPage.getLastNameTBox().clear().first().type(this.data.lastName).should('have.value',this.data.lastName)
        personalInformationPage.getFirstNameTBox().clear().first().type(this.data.firstName).should('have.value', this.data.firstName)
        personalInformationPage.getPastNameNoRadio().click()
        personalInformationPage.getGenderFemaleRadio().click()
        personalInformationPage.getDobYearTBox().clear({force:true}).first().type(this.data.year).should('have.value', this.data.year)
        personalInformationPage.getDobMonthTBox().clear({force:true}).first().type(this.data.month).should('have.value', this.data.month)
        personalInformationPage.getDobDayTBox().clear({force:true}).first().type(this.data.day).should('have.value', this.data.day)
        personalInformationPage.getBirthCountryTBox().clear().type(this.data.birthCountry).should('have.value', this.data.birthCountry)
        personalInformationPage.getBirthCityTBox().clear().type(this.data.birthCity).should('have.value', this.data.birthCity)
        personalInformationPage.getCitizenshipCountryTBox().click()
        personalInformationPage.getAnotherCitizenshipRadio().click()
        personalInformationPage.getCountryOfResidenceDropdown().clear().type(this.data.residentCountry).should('have.value', this.data.residentCountry)
        personalInformationPage.getCountryOfResidenceStatusDropdown().click()
        personalInformationPage.getCountryOfResidenceStatusOption().click()
        personalInformationPage.getSaveAndContinueButton().click()
        cy.url().should('include','/marital-status')
        cy.log("Personal Information Form is successfully completed")
    })
})

