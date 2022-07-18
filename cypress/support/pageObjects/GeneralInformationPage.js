<<<<<<< HEAD:cypress/support/pageObjects/GeneralInformationPage.js
=======
class GeneralInformationPage
{
    getHeader()
    {
        return cy.get('h1')
    }

    getLastNameTBox()
    {
        return cy.get('[data-test="lastName-test"]')
    }
    getFirstNameTBox()
    {
        return cy.get('[data-test="firstName-test"]')
    }
    getCountryTBox()
    {
        return cy.get('[data-test="country-lbl"]')
    }
    getCityTBox()
    {
        return cy.get('[data-test="city-test"]')
    }
    getDobYearTBox()
    {
        return cy.get('[data-test="year-lbl"]')
    }
    getDobMonthTBox()
    {
        return cy.get('[data-test="month-lbl"]')
    }
    getDobDayTBox()
    {
        return cy.get('[data-test="day-lbl"]')
    }
    getPastNameNoRadio()
    {
        return cy.get('[data-test="pastName-No"] > .mat-radio-label')
    }
    getGenderFemaleRadio()
    {
        return cy.get('[data-test="gender-Female"] > .mat-radio-label')
    }
    getPrevPartnerNoRadio()
    {
        return cy.get('[data-test="isPreviousPartner-No"] > .mat-radio-label')
    }
    getRelationshipStsDropdown()
    {
        return cy.get('.mat-form-field-infix')
    }
    getRelationshipSingleDropdown()
    {
        return cy.get('[data-test="relationshipStatus-Single"] > .mat-option-text')
    }
    getSaveAndContinueButton()
    {
        return cy.get('[data-test="primary-button"]')
    }
}

export default GeneralInformationPage
>>>>>>> feature2:cypress/support/pageObjects/GeneralInformationPage.js
