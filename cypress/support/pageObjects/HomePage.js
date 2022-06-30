class HomePage
{
    getAddApplicationButton()
    {
        return cy.get('[data-test="primary-button"]')
    }
}

export default HomePage