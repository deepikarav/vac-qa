class AdditionalApplicationInfo {
  getIPRMSTBox() {
    return cy.get('[data-test="IPRMSPaymentReceiptNumber-test"]');
  }

  getBiometricsTBox() {
    return cy.get('[data-test="bioID-test"]');
  }

  getSPCCodeTBox() {
    return cy.get('[data-test="specialProgramCodes-lbl"]');
  }

  getSaveAndContinueButton() {
    return cy.get("#save-and-continue-lbl");
  }
}

export default AdditionalApplicationInfo;
