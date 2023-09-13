class ContactInformationPage{

    getHeader()
    {
        return cy.get('h1')
    }
    
    getCountryDropDown()
    {
        return cy.get("[data-test='currentCountry-lbl']")
    }

    getApartmentUnitTBox()
    {
        return cy.get('[data-test="currentUnit-test"]')
    }

    getStreetNumberTBox()
    {
        return cy.get('[data-test="currentStreetNumber-test"]')
    }

    getStreetNameTBox()
    {
        return cy.get('[data-test="currentStreetName-test"]')
    }

    getCityTownTBox()
    {
        return cy.get('[data-test="currentCity-test"]')
    }

    getProvinceTBox()
    {
        return cy.get('[data-test="currentProvince-lbl"]')
    }

    getStateTBox()
    {
        return cy.get('[data-test="currentState-lbl"]')
    }

    getPostalCodeTBox()
    {
        return cy.get('[data-test="currentPostalCode-test"]')
    }

    getPostalCodeCanadaTBox()
    {
        return cy.get('[data-test="currentPostalCodeCanada-test"]')
    }

    getPostalCodeUSTBox()
    {
        return cy.get('[data-test="currentZipCode-test"]')
    }

    getDistrictTBox()
    {
        return cy.get('[data-test="currentDistrict-test"]')
    }

    getMailingAddressRadio()
    {
        return cy.get('[data-test="isSameAddress-Yes"]')
    }

    getEmailAddressTBox()
    {
        return cy.get('[data-test="email-test"]')
    }

    getAddTelephoneButton()
    {
        return cy.get('[date-test="addButton"]')
    }

    getTelephonePrimaryRadio()
    {
        return cy.get('[data-test="primary-Yes"]')
    }

    getTelephoneType()
    {
        return cy.get('[data-test="teleType-Cellular"]')
    }

    getTelephoneCountryRadio()
    {
        return cy.get('[data-test="country-Other"]')
    }

    getDialCodeTBox()
    {
        return cy.get('[data-test="code-test"]')
    }

    getTelephoneNumberTBox()
    {
        return cy.get('[data-test="number-test"]')
    }

    getExtensionTBox()
    {
        return cy.get('[data-test="extensionCanada-test"]')
    }

    getSaveTelephoneButton()
    {
        return cy.get('[data-test="form-table-dialog-submit-button"]')
    }

    getFaxNumberRadio()
    {
        return cy.get('[data-test="hasFax-No"]')
    }

    getCancelButton()
    {
        return cy.get('[data-test="form-table-dialog-close-button]')
    }
    
    getCloseButton()
    {
        return cy.get('.mat-icon.notranslate.close-x-btn.material-icons.mat-icon-no-color')
    }

    getSaveAndContinueButton()
    {
        return cy.get('#save-and-continue-lbl')
    }
}

export default ContactInformationPage