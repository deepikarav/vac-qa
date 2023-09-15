import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const backgroundInfoPage = new BackgroundInformationPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Background Information form fill test", function () {
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
    navigation.getNavbarBackgroundInfo().click();
    cy.url().should("include", "/background");
    backgroundInfoPage.getTuberculosisRadio().click();
    backgroundInfoPage.getDisorderRadio().click();
    backgroundInfoPage.getRemainedBeyondRadio().click();
    backgroundInfoPage.getRefusedToLeaveRadio().click();
    backgroundInfoPage.getPreviouslyAppliedRadio().click();
    backgroundInfoPage.getOffenceRadio().click();
    backgroundInfoPage.getMilitaryServiceRadio().click();
    backgroundInfoPage.getPoliticalRadio().click();
    backgroundInfoPage.getWitnessedRadio().click();
    backgroundInfoPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/summary");
    cy.log("Background Information Form is successfully completed");
  });
});