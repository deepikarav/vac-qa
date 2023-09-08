import SignInPage from "../support/pageObjects/SignInPage.js"
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage"
import HomePage from "../support/pageObjects/HomePage.js"
import VisitDetailsPage from "../support/pageObjects/VisitDetailsPage.js"
import Navigation from "../support/pageObjects/Navigation.js"


describe('Test Suite', function()
{
    const signInPage = new SignInPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const visitDetailsPage = new VisitDetailsPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Visit Details form fill test', function()
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
        navigation.getNavbarVisitDetails().click()
        visitDetailsPage.getVisitDetailsHeader().should('have.text', this.data.visitDetailsPageHeader)
        visitDetailsPage.getVisitPurposeDropDown().click()
        cy.get("mat-option[role='option']").each(($e1, index, $list) =>{

                const visitPurpose = $e1.text()
                if (visitPurpose.includes('Tourism'))
                {
                    cy.wrap($e1).click()
                }
                else
                {
                    cy.log($e1.text())
                }
            })
        visitDetailsPage.getFromYearDropDown().clear().type(this.data.visitFromYear)
        visitDetailsPage.getFromMonthDropDown().clear().type(this.data.visitFromMonth)
        visitDetailsPage.getFromDayDropDown().clear().type(this.data.visitFromDay)
        visitDetailsPage.getToYearDropDown().clear().type(this.data.visitToYear)
        visitDetailsPage.getToMonthDropDown().clear().type(this.data.visitToMonth)
        visitDetailsPage.getToDayDropDown().clear().type(this.data.visitToDay)
        visitDetailsPage.getFundsTBox().clear().type(this.data.visitFunds)
        visitDetailsPage.getAddLocationButton().click().then (function()
        {
            visitDetailsPage.getVisitDialogHeader().should('have.text', this.data.visitDialogHeader)
            visitDetailsPage.getNameTBox().clear().type(this.data.visitLocationName)
            visitDetailsPage.getRelationshipDropDown().click()
            visitDetailsPage.getSelectRelationshipDropDown().click()
            visitDetailsPage.getAddress().clear().type(this.data.visitLocationAddress)
            visitDetailsPage.getAddLocationDialogButton().click()
        })
        //visitDetailsPage.getVisitDetailsGridName().should('have.text', this.data.visitLocationName)
        //visitDetailsPage.getVisitDetailsGridRelationship().should('have.text', this.data.visitLocationRelationship)
        //visitDetailsPage.getVisitDetailsGridAddress().should('have.text', this.data.visitLocationAddress)
        visitDetailsPage.getSaveAndContinueButton().click()
        cy.url().should('include','education-history')
        cy.log("Visit details Form successfully completed")
    })

})
