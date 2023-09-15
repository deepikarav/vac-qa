import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import AdditionalApplicationInfo from "../support/pageObjects/AdditionalApplicationInfo.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const additionalApplicationInfo = new AdditionalApplicationInfo();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Additional application information form fill test", function () {
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
    navigation.getNavbarAdditionalInfo().click();
    cy.url().should("include", "/additional-information").then(function (){
      if (this.data.iPRMSExists){
        cy.wait(2000)
        additionalApplicationInfo.getIPRMSTBox().clear().type(this.data.iPRMSreceipt);
      }
      if(this.data.biometricsExists){
        additionalApplicationInfo.getBiometricsTBox().clear().type(this.data.biometrics);
      }
      if(this.data.spcExits)
      additionalApplicationInfo
      .getSPCCodeTBox()
      .clear()
      .type(this.data.spcCode)
      .type("{downarrow}")
      .type("{enter}");
    })
    additionalApplicationInfo.getSaveAndContinueButton().click();
    cy.url().should("include", "/consent");
    cy.log("Additional application form is successfully completed");
  });
});
