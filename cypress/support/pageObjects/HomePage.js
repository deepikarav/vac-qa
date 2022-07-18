class HomePage
{
    getAddApplicationButton()
    {
        return cy.get('[data-test="primary-button"]')
    }
    getEditApplicationButton()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > app-basic-button > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
    }
    getDeleteApplicationButton()
    {
        return cy.get(':nth-child(3) > :nth-child(5) > app-basic-button > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
    }
}

export default HomePage