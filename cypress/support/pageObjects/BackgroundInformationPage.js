class BackgroundInformationPage {
  getHeaderText() {
    return cy.get("h1");
  }

  getTuberculosisRadio(dynamicInput) {
    return cy.get('[data-test="isTuberculosis_1-${dynamicInput}"]');
  }

  getDisorderRadio(dynamicInput) {
    return cy.get('[data-test="isDisorder_1-${dynamicInput}"]');
  }

  getDetailsOneTBox() {
    return cy.get('[data-test="details_1-test"]');
  }

  getRemainedBeyondRadio($dynamicInput) {
    return cy.get('[data-test="isRemainedBeyond_2-${dynamicInput}"]');
  }

  getRefusedToLeaveRadio(dynamicInput) {
    return cy.get('[data-test="isRefusedToLeave_2-${dynamicInput}"]');
  }

  getPreviouslyAppliedRadio(dynamicInput) {
    return cy.get('[data-test="isPreviouslyApplied_2-${dynamicInput}"]');
  }

  getDetailsTwoTBox() {
    return cy.get('[data-test="details_2-test"]');
  }

  getOffenceRadio(dynamicInput) {
    return cy.get('[data-test="isOffence_3-${dynamicInput}"]');
  }

  getDetailsThreeTBox() {
    return cy.get('[data-test="details_3-test"]');
  }

  getMilitaryServiceRadio(dynamicInput) {
    return cy.get('[data-test="isServedMilitary_4-${dynamicInput}"]');
  }

  getDetailsFourTBox() {
    return cy.get('[data-test="details_4-test"]');
  }

  getPoliticalRadio(dynamicInput) {
    return cy.get('[data-test="isPoliticalPartyMember_5-${dynamicInput}"]');
  }

  getWitnessedRadio(dynamicInput) {
    return cy.get('[data-test="isWitnessed_6-${dynamicInput}"]');
  }

  getSaveAndContinueButton() {
    return cy.get("#save-and-continue-lbl");
  }
}

export default BackgroundInformationPage;
