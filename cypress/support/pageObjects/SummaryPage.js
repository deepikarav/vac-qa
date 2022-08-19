class SummaryPage
{
    getHeaderText()
    {
        return cy.get('h1')
    }

    getExpandAllButton()
    {
        return cy.get('[data-test="basic-button"]').eq(2)
    }

    getConfirmButton()
    {
        return cy.get('[data-test="primary-button"]').eq(2)
    }
}
 
export default SummaryPage