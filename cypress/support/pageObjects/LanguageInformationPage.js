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

    getCommunicationLanguageRadio()
    {
        //return cy.get("input[value='both']")
        return cy.get('[data-test="commLanguage-PersonalDetails.Page1.q9EnFrOption1"]') 
    }

    getPreferredLanguageRadio()
    {
        return cy.get('[data-test="officialLanguage-English"]')
    }

    getProficiencyTestRadio()
    {
        return cy.get('[data-test="langProficiency-No"]')
    }
    
    getSaveAndContinueButton()
    {
        return cy.get('#save-and-continue-lbl')
    }

}
 
export default LanguageInformationPage