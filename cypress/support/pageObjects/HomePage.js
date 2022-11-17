class HomePage
{

    getHomePageTitle()
    {
        return cy.get('.vac-intake-portal')
    }

    getUserDetailsText()
    {
        return cy.get(".user-details")
    }

    getUserAvatarIcon()
    {
        return cy.get(".mat-icon.notranslate.user-avatar.material-icons-outlined.mat-icon-no-color")
    }

    getVACLocationText()
    {
        return cy.get(".user-location")
    }

    getSignOutButton()
    {
        return cy.get("button[aria-label='back-lbl']")
    }
    
    getNewApplicationCard()
    {
        return cy.get('[ng-reflect-key="New-Application"] > .mat-card')
    }

    getNewApplicationLink()
    {
        return cy.get('[ng-reflect-key="New-Application"] > .mat-card > .card-button')
    }

    getApplicationHistoryCard()
    {
        return cy.get('[ng-reflect-key="Application-History"] > .mat-card')
    }

    getApplicationHistoryLink()
    {
        return cy.get('[ng-reflect-key="Application-History"] > .mat-card > .card-button')
    }

    getApplicationIdColumn()
    {
        return cy.get('table > :nth-child(2) > :nth-child(1)')
    }

    getEditButton()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > #editBtn > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
    }

    getDeleteButton()
    {
        return cy.get(':nth-child(2) > :nth-child(5) > #deleteBtn > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
    }
}

export default HomePage