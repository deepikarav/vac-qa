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
        return cy.get("[app-card[ng-reflect-key='New-Application'] mat-card[class='mat-card mat-focus-indicator card']")
    }

    getNewApplicationLink()
    {
        return cy.get("app-card[ng-reflect-key='New-Application'] button[class='card-button button btn btn-primary ng-star-inserted']")
    }

    getApplicationHistoryCard()
    {
        return cy.get("app-card[ng-reflect-key='Application-History'] mat-card[class='mat-card mat-focus-indicator card']")
    }

    getApplicationHistoryLink()
    {
        return cy.get("app-card[ng-reflect-key='Application-History'] button[class='card-button button btn btn-primary ng-star-inserted']")
    }


    getEditButton()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > app-basic-button > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
    }

    getDeleteButton()
    {
        return cy.get(':nth-child(3) > :nth-child(5) > app-basic-button > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
    }
}

export default HomePage