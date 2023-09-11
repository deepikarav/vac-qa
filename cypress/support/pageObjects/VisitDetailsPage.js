class VisitDetailsPage {
  //visit details

  getVisitDetailsHeader() {
    return cy.get("h1");
  }

  getVisitPurposeDropDown() {
    return cy.get('[data-test="mat-select-purpose-test"]');
  }

  getVisitPurposeOption() {
    cy.get('[data-test="purpose-Tourism"]');
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
    return cy.get('[data-test="relationsLocations-action-button-create"]');
  }

  getVisitDialogHeader() {
    return cy.get(".mat-dialog-title");
  }

  getNameTBox() {
    return cy.get('[data-test="name-test"]');
  }

  getRelationshipDropDown() {
    return cy.get('[data-test="mat-select-relationship-test"]');
  }

  getSelectRelationshipDropDown() {
    return cy.get('[data-test="relationship-Sister"]');
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
    return cy.get('[data-test="action-button-edit-0"]');
  }

  getVisitDetailsGridDeleteButton() {
    return cy.get('[data-test="action-button-delete-0"]');
  }

  getSaveAndContinueButton() {
    return cy.get('[data-test="primary-button"]');
  }
}

export default VisitDetailsPage;
