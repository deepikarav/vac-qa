import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage";
import Navigation from "../support/pageObjects/Navigation.js";
import MaritalStatusPage from "../support/pageObjects/MaritalStatusPage.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const maritalStatusPage = new MaritalStatusPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Marital Status Test", function () {
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

    navigation.getNavbarMaritalStatus().click();
    cy.url().should("include", "/marital-status");
    maritalStatusPage
      .getHeader()
      .should("have.text", this.data.generalInformationPageHeader);
    maritalStatusPage
      .getSubpageHeader()
      .should("have.text", this.data.maritalStatusPageHeader);
    maritalStatusPage.getMaritalStatusDropdown().click();
    maritalStatusPage
      .getMaritalStatusOption(this.data.maritalStatus)
      .wait(2000)
      .click()
      .then(function () {
        if (
          this.data.maritalStatus == "Common-Law" ||
          this.data.maritalStatus == "Married"
        ) {
          maritalStatusPage
            .getCurrentSpouseLastNameTBox()
            .clear()
            .type(this.data.currentSpouseLastName)
            .should("have.value", this.data.currentSpouseLastName);
          maritalStatusPage
            .getCurrentSpouseFirstNameTBox()
            .clear()
            .type(this.data.currentSpouseFirstName)
            .should("have.value", this.data.currentSpouseFirstName);
          maritalStatusPage
            .getCurrentRelationshipStartYearDropdown()
            .clear()
            .type(this.data.currentStartYear)
            .should("have.value", this.data.currentStartYear);
          maritalStatusPage
            .getCurrentRelationshipStartMonthDropdown()
            .clear()
            .type(this.data.currentStartMonth)
            .should("have.value", this.data.currentStartMonth);
          maritalStatusPage
            .getCurrentRelationshipStartDayDropdown()
            .clear()
            .type(this.data.currentStartDay)
            .should("have.value", this.data.currentStartDay);
        }
        maritalStatusPage
          .getPreviousRelationshipRadio(this.data.previousMaritalStatus)
          .click()
          .then(function () {
            if (this.data.previousMaritalStatus == "Yes") {
              maritalStatusPage.getAddRelationshipButton().click().wait(2000);
              maritalStatusPage
                .getPreviousSpouseLastNameTBox()
                .clear()
                .type(this.data.previousSpouseLastName)
                .should("have.value", this.data.previousSpouseLastName);
              maritalStatusPage
                .getPreviousSpouseFirstNameTBox()
                .clear()
                .type(this.data.previousSpouseFirstName)
                .should("have.value", this.data.previousSpouseFirstName);
              maritalStatusPage
                .getPreviousRelationshipDateOfBirthYearDropdown()
                .clear()
                .type(this.data.prevSpouseDOBYear)
                .should("have.value", this.data.prevSpouseDOBYear);
              maritalStatusPage
                .getPreviousRelationshipDateOfBirthMonthDropdown()
                .clear()
                .type(this.data.prevSpouseDOBMonth)
                .should("have.value", this.data.prevSpouseDOBMonth);
              maritalStatusPage
                .getPreviousRelationshipDateOfBirthDayDropdown()
                .clear()
                .type(this.data.prevSpouseDOBDay)
                .should("have.value", this.data.prevSpouseDOBDay);
              maritalStatusPage
                .getPreviousRelationshipTypeRadio(
                  this.data.prevRelationshipType
                )
                .click();
              maritalStatusPage
                .getPreviousRelationshipStartYearDropdown()
                .clear()
                .type(this.data.startYear)
                .should("have.value", this.data.startYear);
              maritalStatusPage
                .getPreviousRelationshipStartMonthDropdown()
                .clear()
                .type(this.data.startMonth)
                .should("have.value", this.data.startMonth);
              maritalStatusPage
                .getPreviousRelationshipStartDayDropdown()
                .clear()
                .type(this.data.startDay)
                .should("have.value", this.data.startDay);
              maritalStatusPage
                .getPreviousRelationshipEndYearDropdown()
                .clear()
                .type(this.data.endYear)
                .should("have.value", this.data.endYear);
              maritalStatusPage
                .getPreviousRelationshipEndMonthDropdown()
                .clear()
                .type(this.data.endMonth)
                .should("have.value", this.data.endMonth);
              maritalStatusPage
                .getPreviousRelationshipEndDayDropdown()
                .clear()
                .type(this.data.endDay)
                .should("have.value", this.data.endDay);
              maritalStatusPage.getSaveRelationshipButton().click();
            }
          });
      });
    maritalStatusPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/languages");
    cy.log("Marital Status Form is successfully completed");
  });
});
