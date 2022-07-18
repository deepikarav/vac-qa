class HomePage
{
    getAddApplicationButton()
    {
        return cy.get('[data-test="primary-button"]')
    }
<<<<<<< HEAD:cypress/support/pageObjects/HomePage.js

    getApplicationIdColumn()
    {
        //return cy.get('tr td:nth-child(1)')
        //return cy.get('tr:nth-child(2) td:nth-child(1)')
        return cy.get('tr:nth-child(2) td:nth-child(1)')
    }

    getEditButton()
    {
        //return cy.get('tr td:nth-child(4) > app-basic-button > [data-test="basic-button"] > span')
        return cy.get(':nth-child(2) > :nth-child(4) > app-basic-button > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
       
    }

    getDeleteButton()
=======
    getEditApplicationButton()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > app-basic-button > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
    }
    getDeleteApplicationButton()
>>>>>>> feature2:cypress/support/pageObjects/HomePage.js
    {
        return cy.get(':nth-child(3) > :nth-child(5) > app-basic-button > [data-test="basic-button"] > .mat-button-wrapper > .button-contents > span')
    }
}

export default HomePage