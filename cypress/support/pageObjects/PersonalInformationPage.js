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

    getPastNameRadio()
    {
        return cy.get('[data-test="pastName-No"]')
    }

    getAddButtonLink()
    {
        return cy.get('[date-test="addButton"]')
    }

    getAddNameButton()
    {
        return cy.get('#get-submit-lbl')
    }

    getGenderRadio()
    {
        return cy.get('[data-test="gender-Male"]')
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
  
    getBirthCityTBox()
    {
        return cy.get('[data-test="city-test"]')
    }

    getBirthCountryTBox()
    {
        return cy.get('[data-test="countryOfBirth-lbl"]')
    }

    getCitizenshipCountryTBox()
    {
        return cy.get('[data-test="primaryCitizenshipCountry-lbl"]')
    }

    getAnotherCitizenshipRadio()
    {
        return cy.get('[data-test="hasAnotherCitizenship-No"]')
    }

    getCountryOfResidenceDropdown()
    {
        return cy.get('[data-test="countryOfResidence-lbl"]')
    }
    
    getCountryOfResidenceStatusDropdown()
    {
        return cy.get('[data-test="mat-select-currentCountryIMMStatus-test"]')
    }

    getCountryOfResidenceStatusOption()
    {
        return cy.get('[data-test="currentCountryIMMStatus-Citizen"]')
    }
    
    getCountryOfApplicationRadio()

    {
        return cy.get('[data-test="isApplyingSameASResidentCountry-Yes"]')
    }

    getCountryOfPastResidenceRadio()

    {
        return cy.get('[data-test="isLivedOtherCountries-No"]')
    }
    
    getSaveAndContinueButton()
    {
        return cy.get('#save-and-continue-lbl')
    }
}

export default PersonalInformationPage
