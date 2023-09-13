import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import SummaryPage from "../support/pageObjects/SummaryPage.js";
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const summaryPage = new SummaryPage();
  const backgroundInfoPage = new BackgroundInformationPage();
  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Summary Screen test", function () {
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
    navigation.getNavbarSummary().click();
    cy.url().should("include", "/summary");
    summaryPage.getExpandAllButton().click();
    summaryPage.getConfirmButton().click();
    cy.url().should("include", "/documents");
    cy.log("Application form successfully reviewed");
  });
});
