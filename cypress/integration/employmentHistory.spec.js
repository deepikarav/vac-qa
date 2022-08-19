///<reference types="Cypress"/>
import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import EmploymentHistoryPage from "../support/pageObjects/EmploymentHistoryPage.js"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const employmentHistoryPage = new EmploymentHistoryPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Employment History form fill test', function()
    {
        cy.visit(Cypress.env('url') + 'login')
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
        navigation.getNavbarEmploymentHistory().click()
        employmentHistoryPage.getHeader().should('have.text', this.data.employmentPageHeader)
        employmentHistoryPage.getEmploymentHistoryYesRadio().click({force:true})
        employmentHistoryPage.getAddEmploymentButton().click({force:true}).then (function()
        {
            employmentHistoryPage.getEmploymentHistoryDialogHeader().should('have.text', this.data.employmentDialogHeader)
            employmentHistoryPage.getEmployerTBox().clear().type(this.data.employerName)
            employmentHistoryPage.getFromYearDropDown().clear().type(this.data.employmentFromYear)
            employmentHistoryPage.getFromMonthDropDown().clear().type(this.data.employmentFromMonth)
            employmentHistoryPage.getToYearDropDown().clear().type(this.data.employmentToYear)
            employmentHistoryPage.getToMonthDropDown().clear().type(this.data.employmentToMonth)
            employmentHistoryPage.getCountryDropDown().type(this.data.employmentCountry)
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
            employmentHistoryPage.getEmployerAddressTBox().clear().type(this.data.employmentAddress).then (function(){

                cy.get('.mat-option-text').each(($e1, index, $list) => {

                const addressText = $e1.text()
                if (addressText.includes('900-123 Slater St, Ottawa, ON, K1P 5H2'))
                {
                    cy.wrap($e1).click()
                }
                else
                {
                    cy.log($e1.text())
                }
                })
            })
            employmentHistoryPage.getJobDesciptionTBox().type(this.data.jobDescription)
            employmentHistoryPage.getJobTitleTBox().type(this.data.jobTitle)
            employmentHistoryPage.getSupervisorNameTBox().type(this.data.supervisorName)
            employmentHistoryPage.getSupervisorNumberTBox().type(this.data.supervisorNumber)
            employmentHistoryPage.getSubmitButton().click()
        })
        employmentHistoryPage.getEmploymentTableEmployerNameText().should('have.text', this.data.employerName)
        employmentHistoryPage.getEmploymentTableCountryNameText().should('have.text', this.data.employmentCountry)
        employmentHistoryPage.getEmploymentTableSupervisorNumberText().should('have.text', this.data.supervisorNumber)
        employmentHistoryPage.getSaveAndContinueButton().click()
        cy.url().should('include','background-information')
        cy.log("Employment History details Form successfully completed")
    })

})
