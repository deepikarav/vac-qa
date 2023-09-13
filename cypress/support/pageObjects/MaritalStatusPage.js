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

    getMaritalStatusOption()
    {
        return cy.get('[data-test="relationshipStatus-Single"]')
    }
    
    getPreviousRelationshipRadio()
    {
        return cy.get('[data-test="isPreviousPartner-No"]')
    }

    getPreviousSpouseLastNameTBox()
    {
        return cy.get(':nth-child(7) > .ng-touched > .form-container > :nth-child(2) > [_ngcontent-cju-c227=""] > jlcl-text-field.ng-star-inserted > .tf-container > [data-test="lastName-test"]')
    }

    getPreviousSpouseFirstNameTBox()
    {
        return cy.get(':nth-child(7) > .ng-touched > .form-container > :nth-child(3) > [_ngcontent-xpb-c227=""] > jlcl-text-field.ng-star-inserted > .tf-container > [data-test="firstName-test"]')
    }

    getPreviousRelationshipTypeRadio()
    {
        return cy.get('[data-test="relationshipType-Married"]')
    }
    
    getPreviousRelationshipStartYearDropdown()
    {
        return cy.get(':nth-child(7) > .ng-touched > .form-container > :nth-child(5) > [_ngcontent-hru-c227=""] > jlcl-datepicker.ng-star-inserted > [_ngcontent-hru-c232=""][ng-reflect-form="[object Object]"] > .datepicker-input-group > :nth-child(1) > span.ng-star-inserted > jlcl-static-autocomplete.ng-star-inserted > .tf-container > [data-test="year-lbl"]')
    }

    getPreviousRelationshipStartMonthDropdown()
    {
        return cy.get(':nth-child(7) > .ng-touched > .form-container > :nth-child(5) > [_ngcontent-hru-c227=""] > jlcl-datepicker.ng-star-inserted > [_ngcontent-hru-c232=""][ng-reflect-form="[object Object]"] > .datepicker-input-group > :nth-child(2) > span.ng-star-inserted > jlcl-static-autocomplete.ng-star-inserted > .tf-container > [data-test="month-lbl"]')
    }

    getPreviousRelationshipStartDayDropdown()
    {
        return cy.get(':nth-child(7) > .ng-touched > .form-container > :nth-child(5) > [_ngcontent-hru-c227=""] > jlcl-datepicker.ng-star-inserted > [_ngcontent-hru-c232=""][ng-reflect-form="[object Object]"] > .datepicker-input-group > :nth-child(3) > span.ng-star-inserted > jlcl-static-autocomplete.ng-star-inserted > .tf-container > [data-test="day-lbl"]')
    }

    getPreviousRelationshipEndYearDropdown()
    {
        return cy.get(':nth-child(6) > [_ngcontent-hru-c227=""] > jlcl-datepicker.ng-star-inserted > [_ngcontent-hru-c232=""][ng-reflect-form="[object Object]"] > .datepicker-input-group > :nth-child(1) > span.ng-star-inserted > jlcl-static-autocomplete.ng-star-inserted > .tf-container > [data-test="year-lbl"]')
    }

    getPreviousRelationshipEndMonthDropdown()
    {
        return cy.get(':nth-child(6) > [_ngcontent-hru-c227=""] > jlcl-datepicker.ng-star-inserted > [_ngcontent-hru-c232=""][ng-reflect-form="[object Object]"] > .datepicker-input-group > :nth-child(2) > span.ng-star-inserted > jlcl-static-autocomplete.ng-star-inserted > .tf-container > [data-test="month-lbl"]')
    }

    getPreviousRelationshipEndDayDropdown()
    {
        return cy.get(':nth-child(6) > [_ngcontent-hru-c227=""] > jlcl-datepicker.ng-star-inserted > [_ngcontent-hru-c232=""][ng-reflect-form="[object Object]"] > .datepicker-input-group > :nth-child(3) > span.ng-star-inserted > jlcl-static-autocomplete.ng-star-inserted > .tf-container > [data-test="day-lbl"]')
    }

    getAddRelationshipButton()
    {
        return cy.get('#get-submit-lbl')
    }

    getSaveAndContinueButton()
    {
        return cy.get('#save-and-continue-lbl')
    }
}

export default MaritalStatusPage