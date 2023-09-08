import SignInPage from "../support/pageObjects/SignInPage.js"
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage"
import DocumentsPage from "../support/pageObjects/DocumentsPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    const signInPage = new SignInPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
    const documentsPage =  new DocumentsPage()
    const homePage = new HomePage()
    const navigation = new Navigation()

    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Document Upload Test ', function()
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
        navigation.getNavbarDocuments().click()   
        documentsPage.getHeaderText().should('have.text', this.data.documentsPageHeader)
        cy.get('input[type="file"]')
        .attachFile('canada-flag.jpeg',{timeout : 2000})
        {
            cy.wait(2000)
           //documentsPage.getDocumentNameText().should('contain', this.data.documentName)
           documentsPage.getDocumentDeleteButton().click()
        }
        documentsPage.getSaveAndContinueButton().click({force : true})
        cy.url().should('include','/summary')
        cy.log("Document is successfully uploaded")
    })

})

