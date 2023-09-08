
import SignInPage from "../support/pageObjects/SignInPage.js"
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage"
import HomePage from "../support/pageObjects/HomePage.js"
import EducationHistoryPage from "../support/pageObjects/EducationHistoryPage.js"
import Navigation from "../support/pageObjects/Navigation.js"


describe('Test Suite', function()
{
    const signInPage = new SignInPage()
    const termsAndConditionsPage = new TermsAndConditionsPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const educationHistoryPage = new EducationHistoryPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Education History form fill test', function()
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
        navigation.getNavbarStudyDetails().click()
        navigation.getNavbarEducationHistory().click()
        educationHistoryPage.getHeader().should('have.text', this.data.educationPageHeader )
        educationHistoryPage.getEducationHistoryYesRadio().click({force:true})
        educationHistoryPage.getAddEducationButton().click({force:true}).then (function()
        {
            educationHistoryPage.getEducationHistoryDialogHeader().should('have.text', this.data.educationDialogHeader)
            educationHistoryPage.getFromYearDropDown().clear().type(this.data.educationFromYear)
            educationHistoryPage.getFromMonthDropDown().clear().type(this.data.educationFromMonth)
            educationHistoryPage.getToYearDropDown().clear().type(this.data.educationToYear)
            educationHistoryPage.getToMonthDropDown().clear().type(this.data.educationToMonth)
            educationHistoryPage.getInstituteTBox().clear().type(this.data.instituteName)
            educationHistoryPage.getCityTBox().clear().type(this.data.educationCity)
            educationHistoryPage.getCountryDropDown().clear().type(this.data.educationCountry)
            cy.get("mat-option[role='option']").each(($e1, index, $list) => {

                const countryName = $e1.text()
                if (countryName.includes('Canada'))
                {
                    cy.wrap($e1).click()
                }
                else 
                {
                    cy.log($e1.text())
                }
            })
            educationHistoryPage.getMajorDropDown().click()
            cy.get("mat-option[role='option']").each(($e1, index, $list) =>{

                const majorName = $e1.text()
                if (majorName.includes('Computer'))
                {
                    cy.wrap($e1).click()
                }
                else
                {
                    cy.log($e1.text())
                }
            })
            educationHistoryPage.getCompletedStatusRadio().click()
            educationHistoryPage.getSubmitButton().click()
        })
        educationHistoryPage.getEducationTableInstituteNameText().should('have.text', this.data.instituteName)
        educationHistoryPage.getEducationTableCountryNameText().should('have.text', this.data.educationCountry)
        educationHistoryPage.getEducationTableMajorText().should('have.text', this.data.majorName)
        educationHistoryPage.getSaveAndContinueButton().click()
        cy.url().should('include','employment-history')
        cy.log("Education History details Form is successfully completed")
    })

})
