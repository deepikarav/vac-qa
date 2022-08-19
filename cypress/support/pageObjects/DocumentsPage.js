class DocumentsPage
{
    getHeaderText()
    {
        return cy.get('h1').eq(0)
    }

    getPassportUploadButton()
    {
        return cy.get('[data-test="basic-button"]').eq(3)
    }

    getDocumentNameText()
    {
        return cy.get('.body2.file-info',{timeout : 1000}).eq(0)
    }

    getDocumentDeleteButton()
    {
        return cy.get('[data-test="basic-button"]').eq(3)
    }

    getSaveAndContinueButton()
    {
        return cy.get('[data-test="primary-button"]')
    }

}

export default DocumentsPage