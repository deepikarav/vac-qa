class DeclinePage{

    getHeader()
    {
        return cy.get('.title')
    }

    getLanguageToggle()
    {
        return cy.get('#language-toggle > span')
    }

    getExitButton()
    {
        return cy.get('.btn-primary-fill')
    }

    getBackButton()
    {
        return cy.get('.btn-primary-outline')
    }

}

export default DeclinePage