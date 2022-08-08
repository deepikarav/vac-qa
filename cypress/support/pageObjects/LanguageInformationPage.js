class LanguageInformationPage
{
    getHeaderText()
    {
        return cy.get('h1')
    }

    getNativeLanguageDropDown()
    {
        return cy.get("input[role='combobox']")
    }

    getCommunicationLanguageRadio()
    {
        //return cy.get("input[value='both']")
        return cy.get('[data-test="commLanguage-PersonalDetails.Page1.q9EnFrOption3"]') 
    }

    getPreferredLanguageRadio()
    {
        return cy.get('[data-test="easeLanguage-English"]')
    }

    getProficiencyTestRadio()
    {
        return cy.get('[data-test="langProficiency-Yes"]')
    }
    
    getSaveAndContinueButton()
    {
        return cy.get('[data-test="primary-button"]')
    }

}
 
export default LanguageInformationPage