class MaritalStatusPage
{
    getHeader()
    {
        return cy.get('.general-info')
    }

    getSubpageHeader()
    {
        return cy.get('.temp-subtitle')
    }
    
    getMaritalStatusDropdown()
    {
        return cy.get('[data-test="mat-select-relationshipStatus-test"]')
    }

    getMaritalStatusOption(option)
    {
        return cy.get(`[data-test="relationshipStatus-${option}"]`)
    }
    
    getCurrentSpouseLastNameTBox()
    {
        return cy.get('[data-test="lastName-test"]').eq(0)
    }

    getCurrentSpouseFirstNameTBox()
    {
        return cy.get('[data-test="firstName-test"]').eq(0)
    }

    getCurrentRelationshipTypeRadio(option)
    {
        return cy.get(`[data-test="relationshipType-${option}"]`)
    }
    
    getCurrentRelationshipStartYearDropdown()
    {
        return cy.get('[data-test="year-lbl"]').eq(0)
    }

    getCurrentRelationshipStartMonthDropdown()
    {
        return cy.get('[data-test="month-lbl"]').eq(0)
    }

    getCurrentRelationshipStartDayDropdown()
    {
        return cy.get('[data-test="day-lbl"]').eq(0)
    }

    getPreviousRelationshipRadio(option)
    {
        return cy.get(`[data-test="isPreviousPartner-${option}"]`)
    }

    getAddRelationshipButton()
    {
        return cy.get('[date-test="addButton"]')
    }

    getPreviousSpouseLastNameTBox()
    {
        return cy.get('[data-test="lastName-test"]').eq(1)
    }

    getPreviousSpouseFirstNameTBox()
    {
        return cy.get('[data-test="firstName-test"]').eq(1)
    }

    getPreviousRelationshipDateOfBirthYearDropdown()
    {
        return cy.get('[data-test="year-lbl"]').eq(1)
    }

    getPreviousRelationshipDateOfBirthMonthDropdown()
    {
        return cy.get('[data-test="month-lbl"]').eq(1)
    }

    getPreviousRelationshipDateOfBirthDayDropdown()
    {
        return cy.get('[data-test="day-lbl"]').eq(1)
    }

    getPreviousRelationshipTypeRadio(option)
    {
        return cy.get(`[data-test="relationshipType-${option}"]`)
    }

    getPreviousRelationshipStartYearDropdown()
    {
        return cy.get('[data-test="year-lbl"]').eq(2)
    }

    getPreviousRelationshipStartMonthDropdown()
    {
        return cy.get('[data-test="month-lbl"]').eq(2)
    }

    getPreviousRelationshipStartDayDropdown()
    {
        return cy.get('[data-test="day-lbl"]').eq(2)
    }

    getPreviousRelationshipEndYearDropdown()
    {
        return cy.get('[data-test="year-lbl"]').eq(3)
    }

    getPreviousRelationshipEndMonthDropdown()
    {
        return cy.get('[data-test="month-lbl"]').eq(3)
    }

    getPreviousRelationshipEndDayDropdown()
    {
        return cy.get('[data-test="day-lbl"]').eq(3)
    }
    getSaveRelationshipButton()
    {
        return cy.get('#get-submit-lbl')
    }

    getSaveAndContinueButton()
    {
        return cy.get('#save-and-continue-lbl')
    }
}
export default MaritalStatusPage