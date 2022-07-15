class ContactInformationPage{

    getHeader()
    {
        return cy.get('h1')
    }
    
    getPOTBox()
    {
        return cy.get('[data-test="mailing-poBox-test"]')
    }

    getApartmentUnitTBox()
    {
        return cy.get('[data-test="mailing-unit-test"]')
    }

    getAddressTBox()
    {
        return cy.get('[data-test="mailing-address-test"]')
    }

    getCityTownTBox()
    {
        return cy.get('[data-test="mailing-city-test"]')
    }

    getCountryDropDown()
    {
        return cy.get("[data-test='mat-select-mailing-country-test']")
    }

    getCountryDropDownInput()
    {
        return cy.get('[data-test="mailing-country-Canada"] > .mat-option-text')
    }

    getProvinceTBox()
    {
        return cy.get('[data-test="mailing-province-test"]')
    }

    getPostalCodeTBox()
    {
        return cy.get('[data-test="mailing-postalCode-test"]')
    }

    getDistrictTBox()
    {
        return cy.get('[data-test="mailing-district-test"]')
    }

    getMailingAddressRadio()
    {
        return cy.get('[data-test="isSameAddressLabel-Yes"]')
    }

    getEmailAddressTBox()
    {
        return cy.get('[data-test="email-test"]')
    }

    getAddTelephoneButton()
    {
        return cy.get('.button1')
    }

    getTelephoneFromGrid()
    {
        return cy.get('[data-test="mat-cell-4"]').eq(-1)
    }

    getSaveButton()
    {
        return cy.get('[data-test="primary-button"]')
    }

    getPrimaryNumberRadio()
    {
        return cy.get('[data-test="primary-Yes"]')
    }

    getTelephoneCountry()
    {
        return cy.get('[data-test="country-Canada/US"]')
    }

    getTelephoneType()
    {
        return cy.get('[data-test="teleType-Cellular"]')
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
        return cy.get('[data-test="extention-test"]')
    }

    getAddNumberButton()
    {
        return cy.get("button[type='submit']")
    }

    getCancelButton()
    {
        return cy.get('[data-test="form-table-dialog-close-button]')
    }
    
    getCloseButton()
    {
        return cy.get('.mat-icon.notranslate.close-x-btn.material-icons.mat-icon-no-color')
    }

}

export default ContactInformationPage