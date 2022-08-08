class PassportPage
{
    getPassportHeader()
    {
        return cy.get('h1')
    }

    getPassportNumberTBox()
    {
        return cy.get('[data-test="number-test"]')
    }

    getCountryDropDown()
    {
        return cy.get('[data-test="mat-select-countryCode-test"]')
    }

    getCountryIssueSelect()
    {
        return cy.get('[data-test="countryCode-Canada"]')
    }

    getIssueYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(0)
    }

    getIssueMonthDropDown()
    {
        return cy.get('[data-test="month-lbl"]').eq(0)
    }

    getIssueDayDropDown()
    {
        return cy.get('[data-test="day-lbl"]').eq(0)
    }

    getExpiryYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(1)
    }

    getExpiryMonthDropDown()
    {
        return cy.get('[data-test="month-lbl"]').eq(1)
    }

    getExpiryDayDropDown()
    {
        return cy.get('[data-test="day-lbl"]').eq(1)
    }

    getPassportTypeDropDown()
    {
        return cy.get('[data-test="mat-select-type-test"]')
    }

    getDiplomaticTypeSelect()
    {
        return cy.get('[data-test="type-Diplomatic"]')
    }

    getTaiwanRadio()
    {
        return cy.get('[data-test="isTaiwan-Yes"]')
    }

    getIsraelRadio()
    {
        return cy.get('[data-test="isIsrael-Yes"]')
    }

    getNationalIDRadio()
    {
        return cy.get('[data-test="isNationalId-Yes"]')
    }

    getNationalIDDocumentNumberTBox()
    {
        return cy.get('[data-test="nationalDocumentNumber-test"]')
    }

    getNationalIDCountryIssueDropDown()
    {
        return cy.get('[data-test="mat-select-country-test"]')
    }

    getNationalIDCountrySelect()
    {
        return cy.get('[data-test="country-Canada"]')
    }

    getNationalIDIssueYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(2)
    }

    getNationalIDIssueMonthDropDown()
    {
        return cy.get('[data-test="month-lbl"]').eq(2)
    }

    getNationalIDCIssueDayDropDown()
    {
        return cy.get('[data-test="day-lbl"]').eq(2)
    }

    getNationalIDExpiryYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(3)
    }

    getNationalIDExpiryMonthDropDown()
    {
        return cy.get('[data-test="month-lbl"]').eq(3)
    }

    getNationalIDExpiryDayDropDown()
    {
        return cy.get('[data-test="day-lbl"]').eq(3)
    }

    getUSPRStatusRadio()
    {
        return cy.get('[data-test="isUsPr-Yes"]')
    }

    getUSPRDocumentNumberTBox()
    {
        return cy.get('[data-test="usPrNumber-test"]')
    }

    getUSPRExpiryYearDropDown()
    {
        return cy.get('[data-test="year-lbl"]').eq(4)
    }

    getUSPRExpiryMonthDropDown()
    {
        return cy.get('[data-test="month-lbl"]').eq(4)
    }

    getUSPRxpiryDayDropDown()
    {
        return cy.get('[data-test="day-lbl"]').eq(4)
    }

    getSaveAndContinueButton()
    {
        return cy.get('[data-test="primary-button"]')
    }

}

export default PassportPage