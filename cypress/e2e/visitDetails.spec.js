import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import VisitDetailsPage from "../support/pageObjects/VisitDetailsPage.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const visitDetailsPage = new VisitDetailsPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Visit Details form fill test", function () {
    cy.visit(Cypress.env("url") + "signin");
    signInPage.getUsernameTBox().type(this.data.signInUserName);
    signInPage.getPasswordTBox().type(this.data.signInPassword);
    signInPage.getContinueButton().click();
    signInPage.getVerificationCodeTBox().should("be.visible").wait(2000);
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
    navigation.getNavbarVisitDetails().click();
    cy.url().should("include", this.data.visitDetailsUrl);
    cy.wait(2000);
    visitDetailsPage.getVisaCategoryButton(this.data.visaCategory).click();
    if (this.data.visaCategory.includes("Visitor visa")) {
      visitDetailsPage.getVisitPurposeDropDown().click();
      visitDetailsPage.getVisitPurposeOption(this.data.visitPurpose).click();
      if (this.data.visaCategory.includes("Other")) {
        visitDetailsPage
          .getOtherPurposeDescription()
          .clear()
          .type(this.data.visitOtherPurpose);
      }
      visitDetailsPage.getFundsTBox().clear().type(this.data.visitFunds);
    }
    visitDetailsPage
      .getFromYearDropDown()
      .clear()
      .type(this.data.visitFromYear);
    visitDetailsPage
      .getFromMonthDropDown()
      .clear()
      .type(this.data.visitFromMonth);
    visitDetailsPage.getFromDayDropDown().clear().type(this.data.visitFromDay);
    visitDetailsPage.getToYearDropDown().clear().type(this.data.visitToYear);
    visitDetailsPage.getToMonthDropDown().clear().type(this.data.visitToMonth);
    visitDetailsPage.getToDayDropDown().clear().type(this.data.visitToDay);
    visitDetailsPage
      .getAddLocationButton()
      .click()
      .then(function () {
        visitDetailsPage
          .getVisitDialogHeader()
          .should("have.text", this.data.visitDialogHeader);
        visitDetailsPage
          .getNameTBox()
          .clear()
          .type(this.data.visitLocationName);
        if (this.data.visaCategory.includes("Transit visa")) {
          visitDetailsPage.getRelationshipDropDown("Transit").click();
          visitDetailsPage
            .getSelectRelationshipOption(
              `Transit-${this.data.visitLocationRelationship}`
            )
            .click();
        } else {
          visitDetailsPage.getRelationshipDropDown("").click();
          visitDetailsPage
            .getSelectRelationshipOption(
              `-${this.data.visitLocationRelationship}`
            )
            .click();
        }
        if (this.data.visitLocationRelationship == "Other") {
          visitDetailsPage
            .getOtherRealtionshipTBox()
            .type(this.data.visitRelationshipOther);
        }
        visitDetailsPage
          .getAddress()
          .clear()
          .type(`${this.data.visitLocationAddress}`)
          .wait(1000);
        visitDetailsPage.getAddLocationDialogButton().click();
      });
    cy.wait(1000);
    visitDetailsPage.getSaveAndContinueButton().click();
    cy.url().should("include", "education-history");
    cy.log("Visit details Form successfully completed");
  });
});
