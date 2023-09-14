class VisitDetailsPage {
  //visit details

  getVisitDetailsHeader() {
    return cy.get("h1");
  }
  getVisaCategoryButton(category) {
    return cy
      .get(`[data-test='visaType-${category}']`)
      .find(".mat-radio-container");
  }

  getVisitPurposeDropDown() {
    return cy.get('[data-test="mat-select-purpose-test"]');
  }

  getVisitPurposeOption(purpose) {
    return cy.get(`[data-test="purpose-${purpose}"]`);
  }

  getOtherPurposeDescription() {
    return cy.get('[data-test="otherPurpose-test"]');
  }

  getUCITextbox() {
    return cy.get('[data-test="uci-test"]');
  }

  getFromYearDropDown() {
    return cy.get('[data-test="year-lbl"]').eq(0);
  }

  getFromMonthDropDown() {
    return cy.get('[data-test="month-lbl"]').eq(0);
  }

  getFromDayDropDown() {
    return cy.get('[data-test="day-lbl"]').eq(0);
  }

  getToYearDropDown() {
    return cy.get('[data-test="year-lbl"]').eq(1);
  }

  getToMonthDropDown() {
    return cy.get('[data-test="month-lbl"]').eq(1);
  }

  getToDayDropDown() {
    return cy.get('[data-test="day-lbl"]').eq(1);
  }

  getFundsTBox() {
    return cy.get('[data-test="fundsAvailable-test"]');
  }

  getAddLocationButton() {
    return cy.contains("Add address");
  }

  getVisitDialogHeader() {
    return cy.get(".mat-dialog-title");
  }

  getNameTBox() {
    return cy.get('[data-test="name-test"]');
  }

  getRelationshipDropDown(visa) {
    return cy.get(`[data-test="mat-select-relationship${visa}-test"]`);
    //return cy.get("[id^='mat-select-value-']").eq(2);
  }

  getSelectRelationshipOption(relation) {
    return cy.get(`[data-test="relationship${relation}"]`);
    //return cy.contains(` ${relation} `);
  }
  getAddress() {
    return cy.get('[data-test="input-address"]');
  }

  getAddLocationDialogButton() {
    return cy.get('[data-test="form-table-dialog-submit-button"]');
  }

  getCancelButton() {
    return cy.get('[data-test="form-table-dialog-close-button"]');
  }

  getVisitDetailsGridName() {
    return cy.get('[data-test="mat-cell-0"]');
  }

  getVisitDetailsGridRelationship() {
    return cy.get('[data-test="mat-cell-1"]');
  }

  getVisitDetailsGridAddress() {
    return cy.get('[data-test="mat-cell-2"]');
  }

  getVisitDetailsGridEditButton() {
    return cy.get('[datatest="action-button-edit"]').find("button");
  }

  getVisitDetailsGridDeleteButton() {
    return cy.get('[datatest="action-button-delete"]').find("button");
  }

  getDeleteEntryPopUpDeleteButton() {
    return cy.get("#delete-lbl");
  }

  getDeleteEntryPopUpCancelButton() {
    return cy.get("#close-lbl");
  }

  getDeleteEntryPopUpCloseButton() {
    return cy.get("button[class='close']");
  }

  getVisitDetailsBackButton() {
    return cy.get("[date-test='backButton']").find("button");
  }

  getSaveAndContinueButton() {
    return cy.get("#save-and-continue-lbl");
  }
}

export default VisitDetailsPage;
