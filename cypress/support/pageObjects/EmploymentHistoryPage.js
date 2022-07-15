class EmploymentHistoryPage{

    getHeader()
    {
        return cy.get('h1')
    }

    getEmploymentHistoryYesRadio()
    {
        return cy.get('[data-test="previouslyEmployed-Yes"] > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
    }

    getAddEmploymentButton()
    {
        return cy.get('.button1')
    }

    getEmploymentHistoryDialogHeader()
    {
        return cy.get('.mat-dialog-title')
    }

    getEmployerTBox()
    {
        return cy.get('[data-test="employer-test"]')
    }

    getFromYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(0)
    }

    getFromMonthDropDown()
    {
        return cy.get('[data-test$="month-lbl"]').eq(0)
    }

    getToYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(1)
    }

    getToMonthDropDown()
    {
        return cy.get('[data-test$="month-lbl"]').eq(1)
    }

    getCountryDropDown()
    {
        return cy.get('[data-test="country-lbl"]')
    }

    getEmployerAddressTBox()
    {
        return cy.get('[data-test="input-address"]')
    }

    getApartmentNumberTBox()
    {
        return cy.get('[data-test="unit-test"]')
    }

    getCityTBox()
    {
        return cy.get('[data-test="city-test"]')
    }

    getProvinceDropDown()
    {
        return cy.get('[data-test="province-lbl"]')
    }

    getPostalCodeTBox()
    {
        return cy.get('[data-test="postalCode-test"]')
    }

    getJobDesciptionTBox()
    {
        return cy.get('[data-test="description-test"]')
    }

    getJobTitleTBox()
    {
        return cy.get('[data-test="occupation-test"]')
    }

    getSupervisorNameTBox()
    {
        return cy.get('[data-test="supervisorName-test"]')
    }

    getSupervisorNumberTBox()
    {
        return cy.get('[data-test="supervisorNumber-test"]')
    }

    getSubmitButton()
    {
        return cy.get('[data-test="form-table-dialog-submit-button"]')
    }

    getEmploymentTableEmployerNameText()
    {
        return cy.get(':nth-child(1) > [data-test="mat-cell-0"] > [data-test="mat-cell-0-value"]')
    }

    getEmploymentTableCountryNameText()
    {
        return cy.get(':nth-child(1) > [data-test="mat-cell-3"]')
    }

    getEmploymentTableSupervisorNumberText()
    {
        return cy.get(':nth-child(1) > [data-test="mat-cell-8"] > [data-test="mat-cell-8-value"]')
    }

    getEmploymentTableGridEdit()
    {
        return cy.get('[data-test="action-button-edit-0"]')
    }

    getEmploymentTableGridDelete()
    {
        return cy.get('[data-test="action-button-delete-0"]')
    }

    getSaveAndContinueButton()
    {
        return cy.get('[data-test="primary-button"]')
    }
    
}

export default EmploymentHistoryPage