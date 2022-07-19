class Navigation
{

    getNavbarPersonalDetails()
    {
        return cy.get('.contentsubitems').eq(0)
    }

    getNavbarContactInfo()
    {
        return cy.get('.contentsubitems').eq(3)
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

}

export default Navigation