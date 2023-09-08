import SignInPage from "../support/pageObjects/SignInPage.js"
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage"
import HomePage from "../support/pageObjects/HomePage.js"
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    const signInPage = new SignInPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
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
