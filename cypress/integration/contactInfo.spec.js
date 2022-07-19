
import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import ContactInformationPage from "../support/pageObjects/ContactInformationPage"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const contactInformationPage = new ContactInformationPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Contact Information Form Fill Test', function()
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
        navigation.getNavbarContactInfo().click()
        contactInformationPage.getHeader().should('have.text', this.data.contactInformationPageHeader )
        contactInformationPage.getPOTBox().clear().type(this.data.poBox).should('have.value', this.data.poBox)
        contactInformationPage.getApartmentUnitTBox().clear().type(this.data.aptUnit).should('have.value', this.data.aptUnit)
        contactInformationPage.getAddressTBox().clear().type(this.data.address).should('have.value', this.data.address)
        contactInformationPage.getCityTownTBox().clear().type(this.data.cityTown).should('have.value', this.data.cityTown)
        contactInformationPage.getCountryDropDown().type(this.data.country)
        contactInformationPage.getCountryDropDownInput().click()
        contactInformationPage.getProvinceTBox().clear().type(this.data.province).should('have.value', this.data.province)
        contactInformationPage.getPostalCodeTBox().clear().type(this.data.postalCode).should('have.value', this.data.postalCode)
        contactInformationPage.getDistrictTBox().clear().type(this.data.district).should('have.value', this.data.district)
        contactInformationPage.getMailingAddressRadio().click()
        contactInformationPage.getEmailAddressTBox().clear().type(this.data.emailAddress).should('have.value', this.data.emailAddress)
        contactInformationPage.getAddTelephoneButton().click()
        contactInformationPage.getPrimaryNumberRadio().click()
        contactInformationPage.getTelephoneCountry().click()
        contactInformationPage.getTelephoneType().click()
        contactInformationPage.getDialCodeTBox().clear().type(this.data.dialCode).should('have.value', this.data.dialCode)
        contactInformationPage.getTelephoneNumberTBox().clear().type(this.data.telephoneNumber).should('have.value', this.data.telephoneNumber)
        contactInformationPage.getExtensionTBox().clear().type(this.data.extension).should('have.value', this.data.extension)
        contactInformationPage.getAddNumberButton().should('be.enabled').click().then (function()
        {
            contactInformationPage.getTelephoneFromGrid().should('have.text',this.data.telephoneNumber)
            contactInformationPage.getSaveButton().should('be.enabled').click() 
        })
        cy.url().should('include','/passport')
        cy.log("Contact Information Form successfully submitted")
    })

})