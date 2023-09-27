import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import LanguageInformationPage from "../support/pageObjects/LanguageInformationPage.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const languageInfoPage = new LanguageInformationPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Language Information form fill test", function () {
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
    navigation.getNavbarLanguageInfo().click();
    cy.url().should("include", "/languages");
    languageInfoPage
      .getNativeLanguageDropDown()
      .click()
      .clear()
      .wait(2000)
      .type(this.data.nativeLanguage)
      .then(function () {
        languageInfoPage
          .getCommunicationLanguageRadio(this.data.communicationLanguage)
          .click()
          .then(function () {
            if (
              this.data.communicationLanguage == "3" ||
              this.data.communicationLanguage == "4"
            )
              languageInfoPage
                .getPreferredLanguageRadio(this.data.preferredLanguage)
                .click();
          });
      });
    languageInfoPage
      .getProficiencyTestRadio(this.data.proficiencyTestExists)
      .click();
    languageInfoPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/contact-information");
    cy.log("Language Information Form is successfully completed");
  });
});
