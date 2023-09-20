import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import PersonalInformationPage from "../support/pageObjects/PersonalInformationPage.js";
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const personalInformationPage = new PersonalInformationPage();
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
    personalInformationPage.getPastNameRadio().then(($text) => {
      if ($text.text().includes("Yes")) {
        personalInformationPage.getPastNameRadio().click();
        personalInformationPage.getAddButtonLink().first().click().wait(2000);
        personalInformationPage.getLastNameTBox().last().type("xxx");
        personalInformationPage.getFirstNameTBox().last().type("yyy");
        personalInformationPage.getAddNameButton().click();
      } else {
        personalInformationPage.getPastNameRadio().click();
      }
    });
    personalInformationPage.getGenderRadio().click();
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
    personalInformationPage.getCountryOfResidenceStatusOption().click();
    personalInformationPage.getCountryOfApplicationRadio().click();
    personalInformationPage.getCountryOfPastResidenceRadio().click();
    personalInformationPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/marital-status");
    cy.log("Personal Information Form is successfully completed").then(
      function () {
        navigation.getNavbarBackgroundInfo().click();
        cy.url().should("include", "/background").wait(2000);
        backgroundInfoPage
          .getTuberculosisRadio(this.data.tuberculosisRadio)
          .click()
          .wait(2000)
          .then(function () {
            backgroundInfoPage
              .getDisorderRadio(this.data.disorderRadio)
              .click();
            if ((this.data.tuberculosisRadio == "Yes") || (this.data.disorderRadio == "Yes")) {
              backgroundInfoPage.getDetailsOneTBox().type(this.data.detailsOne);
            }
          });
        backgroundInfoPage
          .getRemainedBeyondRadio(this.data.remainedBeyondRadio)
          .click()
          .then(function () {
            backgroundInfoPage
              .getRefusedToLeaveRadio(this.data.refusedToLeaveRadio)
              .click();
            if ((this.data.remainedBeyondRadio == "Yes") || (this.data.refusedToLeaveRadio == "Yes")) {
              backgroundInfoPage.getDetailsTwoTBox().type(this.data.detailsTwo);
            }
          });
        backgroundInfoPage
          .getPreviouslyAppliedRadio(this.data.previouslyAppliedRadio)
          .click();
        backgroundInfoPage
          .getOffenceRadio(this.data.offenceRadio)
          .click()
          .then(function () {
            if (this.data.offenceRadio == "Yes") {
              backgroundInfoPage
                .getDetailsThreeTBox()
                .type(this.data.detailsThree);
            }
          });
        backgroundInfoPage
          .getMilitaryServiceRadio(this.data.militaryServiceRadio)
          .click()
          .then(function () {
            if (this.data.militaryServiceRadio == "Yes") {
              backgroundInfoPage
                .getDetailsFourTBox()
                .type(this.data.detailsFour);
            }
          });
        backgroundInfoPage.getPoliticalRadio(this.data.politicalRadio).click();
        backgroundInfoPage.getWitnessedRadio(this.data.witnessedRadio).click();
        backgroundInfoPage.getSaveAndContinueButton().click();
        cy.url().should("include", "/summary");
        cy.log("Background Information Form is successfully completed");
      }
    );
  });
});
