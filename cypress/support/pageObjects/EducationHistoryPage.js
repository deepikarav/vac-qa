class EducationHistoryPage {
  getHeader() {
    return cy.get("h1");
  }

  getEducationHistoryRadio(option) {
    return cy
      .get(`[data-test="previouslyEducated-${option}"]`)
      .find("label")
      .find("span")
      .eq(0);
  }

  getEducationHistoryDialogHeader() {
    return cy.get(".mat-dialog-title");
  }
  getAddEducationButton() {
    return cy.get('[date-test="addButton"]').contains("Add education");
  }

  getFromYearDropDown() {
    return cy.get('[data-test="year-lbl"]').eq(0);
  }

  getFromMonthDropDown() {
    return cy.get('[data-test$="month-lbl"]').eq(0);
  }

  getToYearDropDown() {
    return cy.get('[data-test="year-lbl"]').eq(1);
  }

  getToMonthDropDown() {
    return cy.get('[data-test$="month-lbl"]').eq(1);
  }

  getOngoingCheckbox() {
    return cy.get('[data-test="mat-checkbox-ongoing"]').find("span").eq(0);
  }

  getInstituteTBox() {
    return cy.get('[data-test="instituteName-test"]');
  }

  getCityTBox() {
    return cy.get('[data-test="city-test"]');
  }

  getCountryDropDown() {
    return cy.get('[data-test="country-lbl"]');
  }

  getFieldDropDown() {
    return cy.get('[data-test="mat-select-major-test"]');
  }

  getFieldStudyOption(option) {
    return cy.get(`[data-test="major-${option}"]`);
  }
  /*
  getCompletedStatusRadio() {
    return cy.get('[data-test="completed-yes"]');
  }
  */

  getEducationProvinceDropdown() {
    return cy.get('[data-test="province-lbl"]');
  }

  getEducationStateDropdown() {
    return cy.get('[data-test="state-lbl"]');
  }

  getEducationProvince(province) {
    return cy.contains(` ${province} `);
  }
  getEducationState(state) {
    return cy.contains(` ${state} `);
  }

  getEducationTableInstituteNameText() {
    return cy.get('[data-test="mat-cell-0-value"]');
  }

  getEducationTableCountryNameText() {
    return cy.get('[data-test="mat-cell-4-value"]');
  }

  getAddEducationHistoryButton() {
    return cy.get('[data-test="form-table-dialog-submit-button"]');
  }
  getEducationTableMajorText() {
    return cy.get('[data-test="mat-cell-1-value"]');
  }

  getEductaionTableGridEdit() {
    return cy.get('[data-test="action-button-edit-0"]');
  }

  getEductaionTableGridDelete() {
    return cy.get('[data-test="action-button-delete-0"]');
  }

  getSaveAndContinueButton() {
    return cy.get("#save-and-continue-lbl");
  }
}

export default EducationHistoryPage;
