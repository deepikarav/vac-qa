class SubmissionPage
{
    getHeaderText()
    {
        return cy.get('h1')
    }

    getAgreeCheckbox()
    {
        return cy.get('.mat-checkbox-label')
    }

    getSubmitApplicationButton()
    {
        return cy.get('#save-and-continue-lbl')
    }
}
 
export default SubmissionPage