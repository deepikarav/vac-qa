import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import PassportPage from "../support/pageObjects/PassportPage.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const passportPage = new PassportPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Passport form fill test", function () {
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
    navigation.getNavbarTravelID().click();
    cy.url().should("include", "/passport");
    passportPage
      .getPassportNumberTBox()
      .clear({ force: true })
      .type(this.data.passportNumber);
    passportPage
      .getCountryDropDown()
      .click()
      .clear()
      .wait(2000)
      .type(this.data.passportIssueCountry)
      .type("{downarrow}")
      .type("{enter}")
      .then(function () {
          if (this.data.passportIssueCountry.includes("Taiwan")) {
            passportPage.getTaiwanRadio().click();
          }
          if (this.data.passportIssueCountry.includes("Israel")) {
            passportPage.getIsraelRadio().click();
          }
        passportPage.getIssueYearDropDown().clear().type(this.data.issueYear);
        passportPage.getIssueMonthDropDown().clear().type(this.data.issueMonth);
        passportPage.getIssueDayDropDown().clear().type(this.data.issueDay);
        passportPage.getExpiryYearDropDown().clear().type(this.data.expiryYear);
        passportPage
          .getExpiryMonthDropDown()
          .clear()
          .type(this.data.expiryMonth);
        passportPage.getExpiryDayDropDown().clear().type(this.data.expiryDay);
      });
    passportPage.getNationalIDRadio().click();
    passportPage.getUSPRStatusRadio().click();
    passportPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/visit-details");
    cy.log("Passport Form is successfully completed");
  });
});
