import SignInPage from "../support/pageObjects/SignInPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import ContactInformationPage from "../support/pageObjects/ContactInformationPage";
import Navigation from "../support/pageObjects/Navigation.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
  const contactInformationPage = new ContactInformationPage();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Contact Information Form Fill Test", function () {
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
    navigation.getNavbarContactInfo().click();
    cy.url().should("include", "/contact-information");
    contactInformationPage
      .getCountryDropDown()
      .click()
      .clear()
      .wait(2000)
      .type(this.data.country)
      .then(function () {
        contactInformationPage.getCountryDropDown().then(($text) => {
          if ($text.text().includes("Canada")) {
            contactInformationPage
              .getProvinceTBox()
              .click()
              .clear()
              .type(this.data.province)
              .should("have.value", this.data.province);
            contactInformationPage
              .getPostalCodeTBox()
              .clear()
              .type(this.data.postalCode)
              .should("have.value", this.data.canadaPostalCode);
          }
          if ($text.text().includes("United States")) {
            contactInformationPage
              .getStateTBox()
              .click()
              .clear()
              .type(this.data.state)
              .should("have.value", this.data.state);
            contactInformationPage
              .getPostalCodeTBox()
              .clear()
              .type(this.data.postalCode)
              .should("have.value", this.data.usPostalCode);
          } else {
            contactInformationPage
              .getDistrictTBox()
              .clear()
              .type(this.data.district)
              .should("have.value", this.data.district);
            contactInformationPage
              .getPostalCodeTBox()
              .clear()
              .type(this.data.otherPostalCode)
              .should("have.value", this.data.otherPostalCode);
          }
        });
        contactInformationPage
          .getApartmentUnitTBox()
          .clear()
          .type(this.data.aptUnit)
          .should("have.value", this.data.aptUnit);
        contactInformationPage
          .getStreetNumberTBox()
          .type(this.data.streetNumber);
        contactInformationPage.getStreetNameTBox().type(this.data.streetName);
        contactInformationPage
          .getCityTownTBox()
          .clear()
          .type(this.data.cityTown)
          .should("have.value", this.data.cityTown);
      });
    contactInformationPage.getMailingAddressRadio().click();
    contactInformationPage
      .getEmailAddressTBox()
      .clear()
      .type(this.data.emailAddress)
      .should("have.value", this.data.emailAddress);

    contactInformationPage.getAddTelephoneButton().then(function () {
      if (this.data.telephoneNumberExists) {
        contactInformationPage.getAddTelephoneButton().click();
        contactInformationPage.getTelephonePrimaryRadio().click();
        contactInformationPage.getTelephoneType().click();
        contactInformationPage
          .getTelephoneCountryRadio()
          .click()
          .then(($text) => {
            if ($text.text().includes("Canada/US")) {
              contactInformationPage
                .getTelephoneNumberTBox()
                .clear()
                .type(this.data.telephoneNumber)
                .should("have.value", this.data.telephoneNumber);
              contactInformationPage
                .getExtensionTBox()
                .clear()
                .type(this.data.extension)
                .should("have.value", this.data.extension);
            } else {
              contactInformationPage
                .getDialCodeTBox()
                .clear()
                .type(this.data.dialCode)
                .should("have.value", this.data.dialCode);
              contactInformationPage
                .getTelephoneNumberTBox()
                .clear()
                .type(this.data.telephoneNumber)
                .should("have.value", this.data.telephoneNumber);
            }
          });
        contactInformationPage.getSaveTelephoneButton().click();
      }
    });
    contactInformationPage.getFaxNumberRadio().click();
    contactInformationPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/passport");
    cy.log("Contact Information Form successfully completed");
  });
});
