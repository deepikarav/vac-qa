class EmploymentHistoryPage
{
    getHeader()
    {
        return cy.get('.general-info')
    }

    getEmploymentHistoryYesRadio()
    {
        return cy.get('[data-test="previouslyEmployed-Yes"] > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
    }

    getAddEmploymentButton()
    {
        return cy.get('.add-item-card > app-button > .mat-focus-indicator > .mat-button-wrapper')
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

    getActivityOccupation()
    {
        return cy.get('[data-test="occupation-test"]')
    }

    getCityOfOccupation()
    {
        return cy.get('[data-test="city-test"]')
    }
    
    getCountryDropDown()
    {
        return cy.get('[data-test="country-lbl"]')
    }
   
    getProvinceOfOccupation()
    {
        return cy.get('[data-test="province-lbl"]')
    }
    
    getAddCurrentWork()
    {
        return cy.get('#get-submit-lbl')
    }    
    
    getSaveAndContinueButton()
    {
        return cy.get('#save-and-continue-lbl')
    }
    
}
export default EmploymentHistoryPage