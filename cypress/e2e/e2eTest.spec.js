import SignInPage from "../support/pageObjects/SignInPage.js";
import ResetPasswordPage from "../support/pageObjects/ResetPasswordPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import Navigation from "../support/pageObjects/Navigation.js";
import PersonalInformationPage from "../support/pageObjects/PersonalInformationPage.js";
import MaritalStatusPage from "../support/pageObjects/MaritalStatusPage.js"
import LanguageInformationPage from "../support/pageObjects/LanguageInformationPage.js";
import ContactInformationPage from "../support/pageObjects/ContactInformationPage";
import PassportPage from "../support/pageObjects/PassportPage.js";
import VisitDetailsPage from "../support/pageObjects/VisitDetailsPage.js";
import EducationHistoryPage from "../support/pageObjects/EducationHistoryPage.js";
import EmploymentHistoryPage from "../support/pageObjects/EmploymentHistoryPage.js";
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js";
import SummaryPage from "../support/pageObjects/SummaryPage.js";
import DocumentsPage from "../support/pageObjects/DocumentsPage.js";
import AdditionalApplicationInfo from "../support/pageObjects/AdditionalApplicationInfo.js"


describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation()
  const personalInformationPage = new PersonalInformationPage();
  const maritalStatusPage = new MaritalStatusPage();
  const languageInfoPage = new LanguageInformationPage();
  const contactInformationPage = new ContactInformationPage();
  const passportPage = new PassportPage();
  const visitDetailsPage = new VisitDetailsPage();
  const educationHistoryPage = new EducationHistoryPage();
  const employmentHistoryPage = new EmploymentHistoryPage();
  const backgroundInfoPage = new BackgroundInformationPage();
  const documentsPage = new DocumentsPage();
  const summaryPage = new SummaryPage();
  const additionalApplicationInfo = new AdditionalApplicationInfo();

  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("End to End Application Test ", function () {
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
    cy.log("Personal Information Form is successfully completed");
    maritalStatusPage.getMaritalStatusDropdown().click();
    maritalStatusPage
      .getMaritalStatusOption()
      .wait(5000)
      .then(function () {
        maritalStatusPage.getMaritalStatusOption().click();
        maritalStatusPage.getPreviousRelationshipRadio().then(($text) => {
          if ($text.text().includes("Yes")) {
            maritalStatusPage.getPreviousRelationshipRadio().click();
            maritalStatusPage
              .getPreviousSpouseLastNameTBox()
              .type(this.data.previousSpouseLastName)
              .should("have.value", this.data.previousSpouseLastName);
            maritalStatusPage
              .getPreviousSpouseFirstNameTBox()
              .clear()
              .type(this.data.previousSpouseFirstName)
              .should("have.value", this.data.previousSpouseFirstName);
            maritalStatusPage.getPreviousRelationshipTypeRadio().click();
            maritalStatusPage
              .getPreviousRelationshipStartYearDropdown()
              .clear({ force: true })
              .first()
              .type(this.data.startYear)
              .should("have.value", this.data.startYear);
            maritalStatusPage
              .getPreviousRelationshipStartMonthDropdown()
              .clear({ force: true })
              .first()
              .type(this.data.startMonth)
              .should("have.value", this.data.startMonth);
            maritalStatusPage
              .getPreviousRelationshipStartDayDropdown()
              .clear({ force: true })
              .first()
              .type(this.data.startDay)
              .should("have.value", this.data.startDay);
            maritalStatusPage
              .getPreviousRelationshipEndYearDropdown()
              .clear({ force: true })
              .first()
              .type(this.data.endYear)
              .should("have.value", this.data.endYear);
            maritalStatusPage
              .getPreviousRelationshipEndMonthDropdown()
              .clear({ force: true })
              .first()
              .type(this.data.endMonth)
              .should("have.value", this.data.endMonth);
            maritalStatusPage
              .getPreviousRelationshipEndDayDropdown()
              .clear({ force: true })
              .first()
              .type(this.data.endDay)
              .should("have.value", this.data.endDay);
            maritalStatusPage.getAddRelationshipButton().click();
          } else {
            maritalStatusPage.getPreviousRelationshipRadio().click();
          }
        });
      });
    maritalStatusPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/languages");
    cy.log("Marital Status Form is successfully completed");
    languageInfoPage
      .getNativeLanguageDropDown()
      .click()
      .clear()
      .wait(2000)
      .type(this.data.nativeLanguage)
      .then(function () {
        languageInfoPage.getCommunicationLanguageRadio().then(($text) => {
          if (
            $text.text().includes("Both") ||
            $text.text().includes("Neither")
          ) {
            languageInfoPage.getCommunicationLanguageRadio().click();
            languageInfoPage.getPreferredLanguageRadio().click();
          } else {
            languageInfoPage.getCommunicationLanguageRadio().click();
          }
        });
      });
    languageInfoPage.getProficiencyTestRadio().click();
    languageInfoPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/contact-information");
    cy.log("Language Information Form is successfully completed");
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
    passportPage
      .getPassportNumberTBox()
      .clear({ force: true })
      .type(this.data.passportNumber);
    passportPage
      .getCountryDropDown()
      .click()
      .clear()
      .wait(2000)
      .type(this.data.country)
      .type("{downarrow}")
      .type("{downarrow}")
      .type("{enter}")
      .then(function () {
        passportPage.getCountryDropDown().then(($text) => {
          if ($text.text().includes("Taiwan")) {
            passportPage.getTaiwanRadio().click();
          }
          if ($text.text().includes("Israel")) {
            passportPage.getIsraelRadio().click();
          }
        });
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

    navigation.getNavbarBackgroundInfo().click();
    cy.url().should("include", "/background");
    backgroundInfoPage.getTuberculosisRadio('Yes').click();
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

    summaryPage.getExpandAllButton().click();
    summaryPage.getConfirmButton().click();
    cy.url().should("include", "/documents");
    cy.log("Application form successfully reviewed");

    documentsPage.getExpandAllButton().click().wait(5000)
    cy.get('input[type="file"]').attachFile("canada-flag.jpeg", {
      timeout: 2000,
    });
      cy.wait(50000);
      //documentsPage.getDocumentNameText().should('contain', this.data.documentName)
    
    documentsPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/additional-information");
    cy.log("Document is successfully uploaded");

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
