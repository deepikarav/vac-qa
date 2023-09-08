import SignInPage from "../support/pageObjects/SignInPage.js"
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage"
import HomePage from "../support/pageObjects/HomePage"
import Navigation from "../support/pageObjects/Navigation.js"
import MaritalStatusPage from "../support/pageObjects/MaritalStatusPage.js"

describe('Test Suite', function()
{
    const signInPage = new SignInPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const maritalStatusPage = new MaritalStatusPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Marital Status Test', function()
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
        navigation.getNavbarMaritalStatus().click()
        cy.url().should('include', '/marital-status')
        maritalStatusPage.getHeader().should('have.text', this.data.generalInformationPageHeader)
        maritalStatusPage.getSubpageHeader().should('have.text', this.data.maritalStatusPageHeader)
        maritalStatusPage.getMaritalStatusDropdown().click()
        maritalStatusPage.getMaritalStatusOption().click()
        maritalStatusPage.getPreviousRelationshipRadio().click()
        maritalStatusPage.getPreviousSpouseLastNameTBox().type(this.data.previousSpouseLastName).should('have.value', this.data.previousSpouseLastName)
        maritalStatusPage.getPreviousSpouseLastNameTBox().clear().type(this.data.previousSpouseFirstName).should('have.value', this.data.previousSpouseFirstName)
        maritalStatusPage.getPreviousRelationshipTypeRadio().click()
        maritalStatusPage.getPreviousRelationshipStartYearDropdown().clear({force:true}).first().type(this.data.startYear).should('have.value', this.data.startYear)
        maritalStatusPage.getPreviousRelationshipStartMonthDropdown().clear({force:true}).first().type(this.data.startMonth).should('have.value', this.data.startMonth)
        maritalStatusPage.getPreviousRelationshipStartDayDropdown().clear({force:true}).first().type(this.data.startDay).should('have.value', this.data.startDay)
        maritalStatusPage.getPreviousRelationshipEndYearDropdown().clear({force:true}).first().type(this.data.endYear).should('have.value', this.data.endYear)
        maritalStatusPage.getPreviousRelationshipEndMonthDropdown().clear({force:true}).first().type(this.data.endMonth).should('have.value', this.data.endMonth)
        maritalStatusPage.getPreviousRelationshipEndDayDropdown().clear({force:true}).first().type(this.data.endDay).should('have.value', this.data.endDay)


        cy.log("Marital Status Form is successfully completed")
    })
    
})