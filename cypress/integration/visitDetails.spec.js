///<reference types="Cypress"/>
import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import VisitDetailsPage from "../support/pageObjects/VisitDetailsPage.js"
import Navigation from "../support/pageObjects/Navigation.js"


describe('Test Suite', function()
{
    const loginPage = new LoginPage()
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
