class LanguageInformationPage
{
    getHeaderText()
    {
        return cy.get('h3')
    }

    getNativeLanguageDropDown()
    {
        return cy.get("[data-test='nativeLanguage-lbl']")
    }

    getCommunicationLanguageRadio(option)
    {
        return cy.get(`[data-test="commLanguage-PersonalDetails.Page1.q9EnFrOption${option}"]`) 
    }

    getPreferredLanguageRadio(option)
    {
        return cy.get(`[data-test="officialLanguage-${option}"]`)
    }

    getProficiencyTestRadio(option)
    {
        return cy.get(`[data-test="langProficiency-${option}"]`)
    }
    
    getSaveAndContinueButton()
    {
        return cy.get('#save-and-continue-lbl')
    }

}
 
export default LanguageInformationPage