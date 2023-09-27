import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import EmploymentHistoryPage from "../support/pageObjects/EmploymentHistoryPage.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const employmentHistoryPage = new EmploymentHistoryPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Employment History form fill test", function () {
    cy.visit(Cypress.env("url") + "signin");
    signInPage.getUsernameTBox().type(this.data.signInUserName);
    signInPage.getPasswordTBox().type(this.data.signInPassword);
    signInPage.getContinueButton().click().wait(20000);
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
        cy.url().should("include", "/personal-details");
      });
    navigation.getNavbarEmploymentHistory().click();
    cy.url().should("include", "/employment-history");
    employmentHistoryPage
      .getAddEmploymentButton()
      .click()
      .then(function () {
        employmentHistoryPage
          .getEmployerNameTBox()
          .clear()
          .type(this.data.employerName);
        employmentHistoryPage
          .getFromYearDropDown()
          .clear()
          .type(this.data.employmentFromYear);
        employmentHistoryPage
          .getFromMonthDropDown()
          .clear()
          .type(this.data.employmentFromMonth);
        if (this.data.employmentOngoing) {
          employmentHistoryPage.getOngoingCheckbox().click();
        } else {
          employmentHistoryPage
            .getToYearDropDown()
            .clear()
            .type(this.data.employmentToYear);
          employmentHistoryPage
            .getToMonthDropDown()
            .clear()
            .type(this.data.employmentToMonth);
        }
        employmentHistoryPage
          .getOccupationTBox()
          .type(this.data.jobDescription);
        employmentHistoryPage.getCityTBox().type(this.data.employmentCity);
        employmentHistoryPage
          .getCountryDropDown()
          .clear()
          .wait(2000)
          .type(this.data.employmentCountry)
          .type("{downarrow}")
          .type("{enter}")
          .then(function () {
            if (this.data.employmentCountry.includes("Canada")) {
              employmentHistoryPage
                .getProvinceDropDown()
                .click()
                .clear()
                .type(this.data.employmentProvince)
                .should("have.value", this.data.employmentProvince);
            }
            if (
              this.data.employmentCountry.includes("United States of America")
            ) {
              employmentHistoryPage
                .getStateDropDown()
                .click()
                .clear()
                .type(this.data.employmentState)
                .should("have.value", this.data.employmentState);
            }
            employmentHistoryPage.getSubmitButton().click();
          });
      });
    cy.wait(2000);
    employmentHistoryPage.getSaveAndContinueButton().click();
    cy.url().should("include", "background");
    cy.log("Employment History details Form successfully completed");
  });
});
