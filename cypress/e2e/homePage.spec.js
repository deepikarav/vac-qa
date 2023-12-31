import SignInPage from "../support/pageObjects/SignInPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage"

describe('Test Suite', function()
{
    const signInPage = new SignInPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
    const homePage = new HomePage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it(' HomePage test', function()
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
        //homePage.getUserDetailsText().should('have.text',)
        //homePage.getVACLocationText.should('have.text',)
        homePage.getNewApplicationCard().should('be.visible')
        homePage.getNewApplicationLink().should('be.visible')
        homePage.getSignOutButton().should('be.visible').click()
        cy.url().should('include', '/signin')
        cy.log("Homepage is validated and user is signed out successfully")
    })
    // it(' HomePage Add application test', function()
    // {
    //     cy.visit(Cypress.env('url') + 'signin')
    //     signInPage.getUsernameTBox().type(this.data.signInUserName)
    //     signInPage.getPasswordTBox().type(this.data.signInPassword)
    //     signInPage.getContinueButton().click()
    //     cy.url().should('include', '/termsconditions')
    //     termsAndConditionsPage.getAcceptButton().click()
    //     homePage.getHomePageTitle().should('have.text', this.data.homePageTitleEn)
    //     cy.url().should('include', '/home')
    //     cy.log("User successfully logged into VAC Portal and navigated to Home page")
    //     homePage.getNewApplicationCard().should('be.visible')
    //     homePage.getNewApplicationLink().click().then (function()
    //     {
    //         cy.wait(5000)
    //         cy.url().should('include', '/client/general/personal-details')
    //         })
    //     cy.log("User successfully created a new application")
    // })

    // it('HomePage Edit application test', function()
    // {

    //     cy.visit(Cypress.env('url') + 'signin')
    //     signInPage.getUsernameTBox().type(this.data.signInUserName)
    //     signInPage.getPasswordTBox().type(this.data.signInPassword)
    //     signInPage.getContinueButton().click()
    //     cy.url().should('include', '/termsconditions')
    //     termsAndConditionsPage.getAcceptButton().click()
    //     homePage.getHomePageTitle().should('have.text', this.data.homePageTitleEn)
    //     cy.url().should('include', '/home')
    //     cy.log("User successfully logged into VAC Portal and navigated to Home page")
    //     homePage.getApplicationHistoryCard().should('be.visible')
    //     homePage.getApplicationHistoryLink().click().then (function()
    //     {
    //         cy.wait(5000)
    //         cy.url().should('include', '/application-history')
    //         homePage.getApplicationIdColumn().each(($e1, index, $list) => {
        
    //             const applicationId= $e1.text()
    //             if(applicationId.includes('4e43436b'))
    //             {
    //                 cy.log(applicationId)
    //                 homePage.getEditButton().eq(index).click({force:true})
    //             }
    //             cy.url().should('include', '/personal-details')
    //         })
    //     })
    //     cy.log("User successfully navigated to edit application")
    // })
})
