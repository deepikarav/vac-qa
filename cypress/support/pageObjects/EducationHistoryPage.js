class EducationHistoryPage
{

    getHeader()
    {
        return cy.get('h1')
    }

    getEducationHistoryYesRadio()
    {
        return cy.get('[data-test="previouslyEducated-Yes"] > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
    }

    getAddEducationButton()
    {
        return cy.get('.button1')
    }

    getEducationHistoryDialogHeader()
    {
        return cy.get('.mat-dialog-title')
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

    getInstituteTBox()
    {
        return cy.get('[data-test="instituteName-test"]')
    }

    getCityTBox()
    {
        return cy.get('[data-test="city-test"]')
    }
    
    getCountryDropDown()
    {
        return cy.get('[data-test="country-lbl"]')
    }

    getMajorDropDown()
    {
        return cy.get('[data-test="mat-select-major-test"]')
    }

    getCompletedStatusRadio()
    {
        return cy.get('[data-test="completed-yes"]')
    }

    getSubmitButton()
    {
        return cy.get('[data-test="form-table-dialog-submit-button"]')
    }

    getEducationTableInstituteNameText()
    {
        return cy.get(':nth-child(1) > [data-test="mat-cell-2"] > [data-test="mat-cell-2-value"]')
    }

    getEducationTableCountryNameText()
    {
        return cy.get(':nth-child(1) > [data-test="mat-cell-4"] > [data-test="mat-cell-4-value"]')
    }

    getEducationTableMajorText()
    {
        return cy.get(':nth-child(1) > [data-test="mat-cell-5"] > [data-test="mat-cell-5-value"]')
    }


    getEductaionTableGridEdit()
    {
        return cy.get('[data-test="action-button-edit-0"]')
    }

    getEductaionTableGridDelete()
    {
        return cy.get('[data-test="action-button-delete-0"]')
    }

    getSaveAndContinueButton()
    {
        return cy.get('[data-test="primary-button"]')
    }
    
}

export default EducationHistoryPage