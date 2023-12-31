import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage";
import PersonalInformationPage from "../support/pageObjects/PersonalInformationPage.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const personalInformationPage = new PersonalInformationPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Personal Information Test", function () {
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
    personalInformationPage
      .getHeader()
      .should("have.text", this.data.generalInformationPageHeader);
    personalInformationPage
      .getSubpageHeader()
      .should("have.text", this.data.personalInformationPageHeader);
    personalInformationPage
      .getLastNameTBox()
      .clear()
      .first()
      .type(this.data.lastName)
      .should("have.value", this.data.lastName);
    personalInformationPage
      .getFirstNameTBox()
      .clear()
      .first()
      .type(this.data.firstName)
      .should("have.value", this.data.firstName);
    personalInformationPage
      .getPastNameRadio(this.data.pastNameExists)
      .click()
      .then(function () {
        if (this.data.pastNameExists == "Yes") {
          personalInformationPage.getAddButtonLink().first().click().wait(2000);
          personalInformationPage
            .getLastNameTBox()
            .last()
            .type(this.data.pastFirstName);
          personalInformationPage
            .getFirstNameTBox()
            .last()
            .type(this.data.pastLastName);
          personalInformationPage.getAddNameButton().click();
        }
      });
    personalInformationPage.getGenderRadio(this.data.gender).click();
    personalInformationPage
      .getDobYearTBox()
      .first()
      .type(this.data.year)
      .should("have.value", this.data.year);
    personalInformationPage
      .getDobMonthTBox()
      .first()
      .type(this.data.month)
      .should("have.value", this.data.month);
    personalInformationPage
      .getDobDayTBox()
      .first()
      .type(this.data.day)
      .should("have.value", this.data.day);
    personalInformationPage
      .getBirthCountryTBox()
      .clear()
      .type(this.data.birthCountry)
      .should("have.value", this.data.birthCountry);
    personalInformationPage
      .getBirthCityTBox()
      .clear()
      .type(this.data.birthCity)
      .should("have.value", this.data.birthCity);
    personalInformationPage
      .getCitizenshipCountryTBox()
      .clear()
      .type(this.data.citizenshipCountry)
      .should("have.value", this.data.citizenshipCountry);
    personalInformationPage.getAnotherCitizenshipRadio().click();
    personalInformationPage
      .getCountryOfResidenceDropdown()
      .clear()
      .type(this.data.residentCountry)
      .should("have.value", this.data.residentCountry);
    personalInformationPage.getCountryOfResidenceStatusDropdown().click();
    personalInformationPage
      .getCountryOfResidenceStatusOption(this.data.residentStatus)
      .click();
    personalInformationPage.getCountryOfApplicationRadio().click();
    personalInformationPage.getCountryOfPastResidenceRadio().click();
    personalInformationPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/marital-status");
    cy.log("Personal Information Form is successfully completed");
  });
});
