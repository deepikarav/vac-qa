class Navigation
{
    getNavbarPersonalInformation()
    {
        return cy.get('.contentsubitems').eq(0)
    }

    getNavbarMaritalStatus()
    {
        return cy.get('.contentsubitems').eq(2)
    }

    getNavbarLanguageInfo()
    {
        return cy.get('.contentsubitems').eq(3)
    }

    getNavbarContactInfo()
    {
        return cy.get('.contentsubitems').eq(4)
    }

    getNavbarTravelID()
    {
        return cy.get('.contentsubitems').eq(5)
    }

    getNavbarVisitDetails()
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

    getNavbarSummary()
    {
        return cy.get('.mat-list-item-content').eq(10)
    }

    getNavbarDocuments()
    {
        return cy.get('.mat-list-item-content').eq(11)
    }

    getNavbarAdditionalInfo()
    {
        return cy.get('.mat-list-item-content').eq(12)
    }

}

export default Navigation