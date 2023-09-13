class SummaryPage
{
    getHeaderText()
    {
        return cy.get('h1')
    }

    getExpandAllButton()
    {
        return cy.get('[datatest="expand-button"]')
    }

    getConfirmButton()
    {
        return cy.get('[date-test="continue"]')
    }
}
 
export default SummaryPage