class DocumentsPage {
  getHeaderText() {
    return cy.get("h1").eq(0);
  }

  getExpandAllButton()
    {
        return cy.get('[datatest="expand-button"]')
    }

  getPassportUploadButton() {
    return cy.get("#docId-10");
  }

  getDocumentNameText() {
    return cy.get(".body2.file-info", { timeout: 1000 }).eq(0);
  }

  getDocumentDeleteButton() {
    return cy.get("");
  }

  getSaveAndContinueButton() {
    return cy.get('[date-test="continue"]');
  }
}
export default DocumentsPage;
