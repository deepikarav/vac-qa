class TermsAndConditionsPage{

    getHeader()
    {
        return cy.get('.title')
    }

    getLanguageToggle()
    {
        return cy.get('#language-toggle > span')
    }

    getAcceptButton()
    {
        return cy.get('#accept-button-lbl')
    }

    getDoNotAcceptButton()
    {
        return cy.get('#decline-lbl')
    }

}

export default TermsAndConditionsPage