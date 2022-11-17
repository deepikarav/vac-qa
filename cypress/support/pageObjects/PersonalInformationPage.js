class PersonalInformationPage
{
    getHeader()
    {
        return cy.get('.general-info')
    }

    getSubpageHeader()
    {
        return cy.get('.temp-subtitle')
    }

    getLastNameTBox()
    {
        return cy.get('[data-test="lastName-test"]')
    }

    getFirstNameTBox()
    {
        return cy.get('[data-test="firstName-test"]')
    }

    getPastNameNoRadio()
    {
        return cy.get('[data-test="pastName-No"]')
    }

    getGenderFemaleRadio()
    {
        return cy.get('[data-test="gender-Female"]')
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
  
    getCityTBox()
    {
        return cy.get('[data-test="city-test"]')
    }

    getCountryTBox()
    {
        return cy.get('[data-test="countryOfBirth-lbl"]')
    }

    getCitizenshipByBirthRadio()
    {
        return cy.get('[data-test="citizenship-Yes"]')
    }

    getAnotherCitizenshipRadio()
    {
        return cy.get('[data-test="hasAnotherCitizenship-No"]')
    }

    getCountryOfResidenceDropdown()
    {
        return cy.get('[data-test="currentCountryOfResidence-lbl"]')
    }
    
    getCountryOfResidenceStatusDropdown()
    {
        return cy.get('.mat-select-placeholder')
    }

    getCountryOfResidenceStatusOption()
    {
        return cy.get('[data-test="currentCountryIMMStatus-Permanent resident"]')
    }
    
    getSaveAndContinueButton()
    {
        return cy.get('#save-and-continue-lbl')
    }
}

export default PersonalInformationPage