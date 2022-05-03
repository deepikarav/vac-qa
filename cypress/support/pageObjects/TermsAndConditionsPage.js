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
        return cy.get('.btn-primary-fill')
    }

    getDoNotAcceptButton()
    {
        return cy.get('.btn-primary-outline')
    }

}

export default TermsAndConditionsPage