class BackgroundInformationPage {
  getHeaderText() {
    return cy.get("h1");
  }

  getTuberculosisRadio(option) {
    return cy.get(`[data-test="isTuberculosis_1-${option}"]`);
  }

  getDisorderRadio(option) {
    return cy.get(`[data-test="isDisorder_1-${option}"]`);
  }

  getDetailsOneTBox() {
    return cy.get('[data-test="details_1-test"]');
  }

  getRemainedBeyondRadio(option) {
    return cy.get(`[data-test="isRemainedBeyond_2-${option}"]`);
  }

  getRefusedToLeaveRadio(option) {
    return cy.get(`[data-test="isRefusedToLeave_2-${option}"]`);
  }

  getPreviouslyAppliedRadio(option) {
    return cy.get(`[data-test="isPreviouslyApplied_2-${option}"]`);
  }

  getDetailsTwoTBox() {
    return cy.get('[data-test="details_2-test"]');
  }

  getOffenceRadio(option) {
    return cy.get(`[data-test="isOffence_3-${option}"]`);
  }

  getDetailsThreeTBox() {
    return cy.get('[data-test="details_3-test"]');
  }

  getMilitaryServiceRadio(option) {
    return cy.get(`[data-test="isServedMilitary_4-${option}"]`);
  }

  getDetailsFourTBox() {
    return cy.get('[data-test="details_4-test"]');
  }

  getPoliticalRadio(option) {
    return cy.get(`[data-test="isPoliticalPartyMember_5-${option}"]`);
  }

  getWitnessedRadio(option) {
    return cy.get(`[data-test="isWitnessed_6-${option}"]`);
  }

  getSaveAndContinueButton() {
    return cy.get("#save-and-continue-lbl");
  }
}

export default BackgroundInformationPage;
