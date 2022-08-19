import LoginPage from "../support/pageObjects/LoginPage.js"
import DocumentsPage from "../support/pageObjects/DocumentsPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    const loginPage = new LoginPage()
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
        cy.visit(Cypress.env('url') + 'login')
        loginPage.getLogo().should('be.visible')
        loginPage.getTitle().should('have.text', this.data.loginPageTitleEn)
        loginPage.getEmailTBox().type(this.data.loginEmail)
        loginPage.getNextButton().click()
        loginPage.getPasswordTBox().type(this.data.loginPassword)
        loginPage.getLoginButton().click()
        {
            loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.loginVerificationCode)
            loginPage.getConfirmCodeButton().click()
        }
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal")
        cy.wait(2000)
        homePage.getEditButton().click()
        cy.url().should('include', '/personal-details')
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

