import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import EducationHistoryPage from "../support/pageObjects/EducationHistoryPage.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const educationHistoryPage = new EducationHistoryPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Education History form fill test", function () {
    cy.visit(Cypress.env("url") + "signin");
    signInPage.getUsernameTBox().type(this.data.signInUserName);
    signInPage.getPasswordTBox().type(this.data.signInPassword);
    signInPage.getContinueButton().click().wait(2000);
    signInPage.getVerificationCodeTBox().type(this.data.verificationCode);
    signInPage.getSignInButton().click();
    cy.url().should("include", "/termsconditions");
    termsAndConditionsPage.getAcceptButton().click();
    homePage.getHomePageTitle().should("have.text", this.data.homePageTitleEn);
    cy.url().should("include", "/home");
    cy.log(
      "User successfully logged into VAC Portal and navigated to Home page"
    );
    homePage
      .getNewApplicationLink()
      .click()
      .then(function () {
        cy.wait(2000);
        cy.url().should("include", "/client/general/personal-details");
      });
    navigation.getNavbarEducationHistory().click();
    educationHistoryPage
      .getHeader()
      .should("have.text", this.data.educationPageHeader)
      .wait(2000);
    educationHistoryPage
      .getEducationHistoryRadio(this.data.educationHistory)
      .click()
      .wait(2000)
      .then(function () {
        if (this.data.educationHistory === "Yes") {
          educationHistoryPage.getAddEducationButton().click();
          cy.wait(2000);
          educationHistoryPage
            .getEducationHistoryDialogHeader()
            .should("have.text", this.data.educationDialogHeader);
          educationHistoryPage
            .getFromYearDropDown()
            .clear()
            .type(this.data.educationFromYear);
          educationHistoryPage
            .getFromMonthDropDown()
            .clear()
            .type(this.data.educationFromMonth);
          if (this.data.educationOngoing) {
            educationHistoryPage.getOngoingCheckbox().click();
          } else {
            educationHistoryPage
              .getToYearDropDown()
              .clear()
              .type(this.data.educationToYear);
            educationHistoryPage
              .getToMonthDropDown()
              .clear()
              .type(this.data.educationToMonth);
          }
          educationHistoryPage
            .getInstituteTBox()
            .clear()
            .type(this.data.instituteName);
          educationHistoryPage
            .getCityTBox()
            .clear()
            .type(this.data.educationCity);
          educationHistoryPage
            .getCountryDropDown()
            .clear()
            .type(this.data.educationCountry);

          educationHistoryPage.getFieldDropDown().click();
          educationHistoryPage
            .getFieldStudyOption(this.data.educationField)
            .click({ force: true });
          if (this.data.educationCountry === "Canada") {
            educationHistoryPage
              .getEducationProvinceDropdown()
              .clear()
              .type(this.data.educationProvince);
          } else if (
            this.data.educationCountry === "United States of America"
          ) {
            educationHistoryPage
              .getEducationStateDropdown()
              .clear()
              .type(this.data.educationState);
          }
          educationHistoryPage.getAddEducationHistoryButton().click();

          educationHistoryPage
            .getEducationTableInstituteNameText()
            .should("have.text", this.data.instituteName);
          educationHistoryPage
            .getEducationTableCountryNameText()
            .should("have.text", this.data.educationCountry);
          educationHistoryPage
            .getEducationTableMajorText()
            .should("have.text", this.data.educationField);
        }
      });
    educationHistoryPage.getSaveAndContinueButton().click();
    cy.url().should("include", "employment-history");
    cy.log("Education History details Form is successfully completed");
  });
});
