class BackgroundInformationPage
{
    getHeaderText()
    {
        return cy.get('h1')
    }

    getAgeGroupRadio()
    {
        return cy.get('[data-test="is18OrOlder-Yes"]')
    }

    getTuberulosisRadio()
    {
        return cy.get('[data-test="isTuberculosis_1-No"]')
    }

    getDisorderRadio()
    {
        return cy.get('[data-test="isDisorder_1-No"]')
    }

    getRemainedBeyondRadio()
    {
        return cy.get('[data-test="isRemainedBeyond_2-No"]')
    }

    getRefusedToLeaveRadio()
    {
        return cy.get('[data-test="isRefusedToLeave_2-Yes"]')
    }

    getPreviouslyAppliedRadio()
    {
        return cy.get('[data-test="isPreviouslyApplied_2-Yes"]')
    }

    getVisaStatusDetailsTBox()
    {
        return cy.get('[data-test="details_2-test"]')
    }

    getOffenceRadio()
    {
        return cy.get('[data-test="isOffence_3-No"]')
    }

    getMilitaryServiceRadio()
    {
        return cy.get('[data-test="isServedMilitary_4-Yes"]')
    }

    getServiceDetailsTBox()
    {
        return cy.get('[data-test="details_4-test"]')
    }

    getPoliticalRadio()
    {
        return cy.get('[data-test="isPoliticalPartyMember_5-Yes"]')
    }

    getWitnessedRadio()
    {
        return cy.get('[data-test="isWitnessed_6-Yes"]')
    }

    getSaveAndContinueButton()
    {
        return cy.get('[data-test="primary-button"]')
    }

}
 
export default BackgroundInformationPage