class Navigation
{
    getNavbarPersonalDetails()
    {
        return cy.get('.contentsubitems').eq(0)
    }

    getNavbarLanguageInfo()
    {
        return cy.get('.contentsubitems').eq(2)
    }

    getNavbarContactInfo()
    {
        return cy.get('.contentsubitems').eq(3)
    }

    getNavbarPassport()
    {
        return cy.get('.contentsubitems').eq(4)
    }

    getNavbarVisitDetails()
    {
        return cy.get('.contentsubitems').eq(5)
    }
    getNavbarStudyDetails()
    {
        return cy.get('.contentsubitems').eq(6)
    }

    getNavbarEducationHistory()
    {
        return cy.get('.contentsubitems').eq(7)
    }

    getNavbarEmploymentHistory()
    {
        return cy.get('.contentsubitems').eq(8)
    }

    getNavbarBackgroundInfo()
    {
        return cy.get('.contentsubitems').eq(9)
    }
}

export default Navigation