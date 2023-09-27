class EmploymentHistoryPage{

    getHeader()
    {
        return cy.get('h1')
    }

    getAddEmploymentButton()
    {
        return cy.get('[date-test="addButton"]')
    }

    getEmploymentHistoryDialogHeader()
    {
        return cy.get('.mat-dialog-title')
    }

    getEmployerNameTBox()
    {
        return cy.get('[data-test="employer-test"]')
    }

    getFromYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(0)
    }

    getFromMonthDropDown()
    {
        return cy.get('[data-test="month-lbl"]').eq(0)
    }

    getOngoingCheckbox(){
        return cy.get('[data-test= "mat-checkbox-ongoing"]')
    }

    getToYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(1)
    }

    getToMonthDropDown()
    {
        return cy.get('[data-test$="month-lbl"]').eq(1)
    }

    getOccupationTBox()
    {
        return cy.get('[data-test="occupation-test"]')
    }

    getCityTBox()
    {
        return cy.get('[data-test="city-test"]')
    }

    getCountryDropDown()
    {
        return cy.get('[data-test="country-lbl"]')
    }

    getProvinceDropDown()
    {
        return cy.get('[data-test="province-lbl"]')
    }

    getStateDropDown()
    {
        return cy.get('[data-test="state-lbl"]')
    }

    getSubmitButton()
    {
        return cy.get('#get-submit-lbl')
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
        return cy.get('#save-and-continue-lbl')
    }
    
}

export default EmploymentHistoryPage