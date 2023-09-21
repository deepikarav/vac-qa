import SignInPage from "../support/pageObjects/SignInPage.js";
import ResetPasswordPage from "../support/pageObjects/ResetPasswordPage.js";
import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
import HomePage from "../support/pageObjects/HomePage.js";
import Navigation from "../support/pageObjects/Navigation.js";
import PersonalInformationPage from "../support/pageObjects/PersonalInformationPage.js";
import MaritalStatusPage from "../support/pageObjects/MaritalStatusPage.js";
import LanguageInformationPage from "../support/pageObjects/LanguageInformationPage.js";
import ContactInformationPage from "../support/pageObjects/ContactInformationPage";
import PassportPage from "../support/pageObjects/PassportPage.js";
import VisitDetailsPage from "../support/pageObjects/VisitDetailsPage.js";
import EducationHistoryPage from "../support/pageObjects/EducationHistoryPage.js";
import EmploymentHistoryPage from "../support/pageObjects/EmploymentHistoryPage.js";
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js";
import SummaryPage from "../support/pageObjects/SummaryPage.js";
import DocumentsPage from "../support/pageObjects/DocumentsPage.js";
import AdditionalApplicationInfo from "../support/pageObjects/AdditionalApplicationInfo.js";
import SubmissionPage from "../support/pageObjects/SubmissionPage.js";

describe("Test Suite", function () {
  const signInPage = new SignInPage();
  const termsAndConditionsPage = new TermsAndConditionsPage();
  const homePage = new HomePage();
  const navigation = new Navigation();
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
  const submissionPage = new SubmissionPage();

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
    cy.log("Personal Information Form is successfully completed").then(
      function () {
        maritalStatusPage.getMaritalStatusDropdown().click();
        maritalStatusPage
          .getMaritalStatusOption(this.data.maritalStatus)
          .wait(2000)
          .click()
          .then(function () {
            if (
              this.data.maritalStatus == "Common-Law" ||
              this.data.maritalStatus == "Married"
            ) {
              maritalStatusPage
                .getCurrentSpouseLastNameTBox()
                .clear()
                .type(this.data.currentSpouseLastName)
                .should("have.value", this.data.currentSpouseLastName);
              maritalStatusPage
                .getCurrentSpouseFirstNameTBox()
                .clear()
                .type(this.data.currentSpouseFirstName)
                .should("have.value", this.data.currentSpouseFirstName);
              maritalStatusPage
                .getCurrentRelationshipStartYearDropdown()
                .clear()
                .type(this.data.currentStartYear)
                .should("have.value", this.data.currentStartYear);
              maritalStatusPage
                .getCurrentRelationshipStartMonthDropdown()
                .clear()
                .type(this.data.currentStartMonth)
                .should("have.value", this.data.currentStartMonth);
              maritalStatusPage
                .getCurrentRelationshipStartDayDropdown()
                .clear()
                .type(this.data.currentStartDay)
                .should("have.value", this.data.currentStartDay);
            }
            maritalStatusPage
              .getPreviousRelationshipRadio(this.data.previousMaritalStatus)
              .click()
              .then(function () {
                if (this.data.previousMaritalStatus == "Yes") {
                  maritalStatusPage
                    .getAddRelationshipButton()
                    .click()
                    .wait(2000);
                  maritalStatusPage
                    .getPreviousSpouseLastNameTBox()
                    .clear()
                    .type(this.data.previousSpouseLastName)
                    .should("have.value", this.data.previousSpouseLastName);
                  maritalStatusPage
                    .getPreviousSpouseFirstNameTBox()
                    .clear()
                    .type(this.data.previousSpouseFirstName)
                    .should("have.value", this.data.previousSpouseFirstName);
                  maritalStatusPage
                    .getPreviousRelationshipDateOfBirthYearDropdown()
                    .clear()
                    .type(this.data.prevSpouseDOBYear)
                    .should("have.value", this.data.prevSpouseDOBYear);
                  maritalStatusPage
                    .getPreviousRelationshipDateOfBirthMonthDropdown()
                    .clear()
                    .type(this.data.prevSpouseDOBMonth)
                    .should("have.value", this.data.prevSpouseDOBMonth);
                  maritalStatusPage
                    .getPreviousRelationshipDateOfBirthDayDropdown()
                    .clear()
                    .type(this.data.prevSpouseDOBDay)
                    .should("have.value", this.data.prevSpouseDOBDay);
                  maritalStatusPage
                    .getPreviousRelationshipTypeRadio(
                      this.data.prevRelationshipType
                    )
                    .click();
                  maritalStatusPage
                    .getPreviousRelationshipStartYearDropdown()
                    .clear()
                    .type(this.data.startYear)
                    .should("have.value", this.data.startYear);
                  maritalStatusPage
                    .getPreviousRelationshipStartMonthDropdown()
                    .clear()
                    .type(this.data.startMonth)
                    .should("have.value", this.data.startMonth);
                  maritalStatusPage
                    .getPreviousRelationshipStartDayDropdown()
                    .clear()
                    .type(this.data.startDay)
                    .should("have.value", this.data.startDay);
                  maritalStatusPage
                    .getPreviousRelationshipEndYearDropdown()
                    .clear()
                    .type(this.data.endYear)
                    .should("have.value", this.data.endYear);
                  maritalStatusPage
                    .getPreviousRelationshipEndMonthDropdown()
                    .clear()
                    .type(this.data.endMonth)
                    .should("have.value", this.data.endMonth);
                  maritalStatusPage
                    .getPreviousRelationshipEndDayDropdown()
                    .clear()
                    .type(this.data.endDay)
                    .should("have.value", this.data.endDay);
                  maritalStatusPage.getSaveRelationshipButton().click();
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
            contactInformationPage
              .getStreetNameTBox()
              .type(this.data.streetName);
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
            passportPage
              .getIssueYearDropDown()
              .clear()
              .type(this.data.issueYear);
            passportPage
              .getIssueMonthDropDown()
              .clear()
              .type(this.data.issueMonth);
            passportPage.getIssueDayDropDown().clear().type(this.data.issueDay);
            passportPage
              .getExpiryYearDropDown()
              .clear()
              .type(this.data.expiryYear);
            passportPage
              .getExpiryMonthDropDown()
              .clear()
              .type(this.data.expiryMonth);
            passportPage
              .getExpiryDayDropDown()
              .clear()
              .type(this.data.expiryDay);
          });
        passportPage.getNationalIDRadio().click();
        passportPage.getUSPRStatusRadio().click();
        passportPage.getSaveAndContinueButton().click();
        cy.url().should("include", "/visit-details").wait(2000);
        cy.log("Passport Form is successfully completed");
        visitDetailsPage.getVisaCategoryButton(this.data.visaCategory).click();
        if (this.data.visaCategory.includes("Visitor visa")) {
          visitDetailsPage.getVisitPurposeDropDown().click();
          visitDetailsPage
            .getVisitPurposeOption(this.data.visitPurpose)
            .click();
          if (this.data.visaCategory.includes("Other")) {
            visitDetailsPage
              .getOtherPurposeDescription()
              .clear()
              .type(this.data.visitOtherPurpose);
          }
          visitDetailsPage.getFundsTBox().clear().type(this.data.visitFunds);
        }
        visitDetailsPage
          .getFromYearDropDown()
          .clear()
          .type(this.data.visitFromYear);
        visitDetailsPage
          .getFromMonthDropDown()
          .clear()
          .type(this.data.visitFromMonth);
        visitDetailsPage
          .getFromDayDropDown()
          .clear()
          .type(this.data.visitFromDay);
        visitDetailsPage
          .getToYearDropDown()
          .clear()
          .type(this.data.visitToYear);
        visitDetailsPage
          .getToMonthDropDown()
          .clear()
          .type(this.data.visitToMonth);
        visitDetailsPage.getToDayDropDown().clear().type(this.data.visitToDay);
        visitDetailsPage
          .getAddLocationButton()
          .click()
          .then(function () {
            visitDetailsPage
              .getVisitDialogHeader()
              .should("have.text", this.data.visitDialogHeader);
            visitDetailsPage
              .getNameTBox()
              .clear()
              .type(this.data.visitLocationName);
            if (this.data.visaCategory.includes("Transit visa")) {
              visitDetailsPage.getRelationshipDropDown("Transit").click();

              visitDetailsPage
                .getSelectRelationshipOption(
                  `Transit-${this.data.visitLocationRelationship}`
                )
                .click();
            } else {
              visitDetailsPage.getRelationshipDropDown("").click();

              visitDetailsPage
                .getSelectRelationshipOption(
                  `-${this.data.visitLocationRelationship}`
                )
                .click();
            }
            visitDetailsPage
              .getAddress()
              .clear()
              .type(`${this.data.visitLocationAddress}`)
              .wait(1000);
            visitDetailsPage.getAddLocationDialogButton().click();
          });
        cy.wait(1000);
        visitDetailsPage.getSaveAndContinueButton().click();
        cy.url().should("include", "education-history").wait(2000);
        cy.log("Visit details Form successfully completed");
        educationHistoryPage
          .getEducationHistoryRadio(this.data.educationHistory)
          .click()
          .wait(2000)
          .then(function () {
            if (this.data.educationHistory === "Yes") {
              educationHistoryPage.getAddEducationButton().click();
              cy.wait(2000);
              educationHistoryPage
                .getEducationHistoryDialogHeader()
                .should("have.text", this.data.educationDialogHeader);
              educationHistoryPage
                .getFromYearDropDown()
                .clear()
                .type(this.data.educationFromYear);
              educationHistoryPage
                .getFromMonthDropDown()
                .clear()
                .type(this.data.educationFromMonth);
              if (this.data.educationOngoing) {
                educationHistoryPage.getOngoingCheckbox().click();
              } else {
                educationHistoryPage
                  .getToYearDropDown()
                  .clear()
                  .type(this.data.educationToYear);
                educationHistoryPage
                  .getToMonthDropDown()
                  .clear()
                  .type(this.data.educationToMonth);
              }
              educationHistoryPage
                .getInstituteTBox()
                .clear()
                .type(this.data.instituteName);
              educationHistoryPage
                .getCityTBox()
                .clear()
                .type(this.data.educationCity);
              educationHistoryPage
                .getCountryDropDown()
                .clear()
                .type(this.data.educationCountry);

              educationHistoryPage.getFieldDropDown().click();
              educationHistoryPage
                .getFieldStudyOption(this.data.educationField)
                .click({ force: true });
              if (this.data.educationCountry === "Canada") {
                educationHistoryPage
                  .getEducationProvinceDropdown()
                  .clear()
                  .type(this.data.educationProvince);
                //educationHistoryPage.getEducationProvince(this.data.educationProvince);
              } else if (
                this.data.educationCountry === "United States of America"
              ) {
                educationHistoryPage
                  .getEducationStateDropdown()
                  .clear()
                  .type(this.data.educationState);
              }
              educationHistoryPage.getAddEducationHistoryButton().click();

              educationHistoryPage
                .getEducationTableInstituteNameText()
                .should("have.text", this.data.instituteName);
              educationHistoryPage
                .getEducationTableCountryNameText()
                .should("have.text", this.data.educationCountry);
              educationHistoryPage
                .getEducationTableMajorText()
                .should("have.text", this.data.educationField);
            }
          });
        educationHistoryPage.getSaveAndContinueButton().click();
        cy.url().should("include", "employment-history");
        cy.log("Education History details Form is successfully completed");
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
            employmentHistoryPage
              .getToYearDropDown()
              .clear()
              .type(this.data.employmentToYear);
            employmentHistoryPage
              .getToMonthDropDown()
              .clear()
              .type(this.data.employmentToMonth);
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
                  this.data.employmentCountry.includes(
                    "United States of America"
                  )
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
        cy.log("Employment History details Form successfully completed");
        cy.url().should("include", "/background").wait(2000);
        backgroundInfoPage
          .getTuberculosisRadio(this.data.tuberculosisRadio)
          .click()
          .wait(2000)
          .then(function () {
            backgroundInfoPage
              .getDisorderRadio(this.data.disorderRadio)
              .click();
            if (
              this.data.tuberculosisRadio == "Yes" ||
              this.data.disorderRadio == "Yes"
            ) {
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
            if (
              this.data.remainedBeyondRadio == "Yes" ||
              this.data.refusedToLeaveRadio == "Yes"
            ) {
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
    summaryPage.getExpandAllButton().click();
    summaryPage.getConfirmButton().click();
    cy.url().should("include", "/documents");
    cy.log("Application form successfully reviewed");

    documentsPage.getExpandAllButton().click().wait(5000);
    cy.get('input[type="file"]').attachFile("canada-flag.jpeg", {
      timeout: 2000,
    });
    cy.wait(50000);
    //documentsPage.getDocumentNameText().should('contain', this.data.documentName)

    documentsPage.getSaveAndContinueButton().click();
    cy.url().should("include", "/additional-information");
    cy.log("Document is successfully uploaded");

    cy.url()
      .should("include", "/additional-information")
      .then(function () {
        if (this.data.iPRMSExists == "Y") {
          cy.wait(2000);
          additionalApplicationInfo
            .getIPRMSTBox()
            .clear()
            .type(this.data.iPRMSreceipt);
        }
        if (this.data.biometricsExists == "Y") {
          additionalApplicationInfo
            .getBiometricsTBox()
            .clear()
            .type(this.data.biometrics);
        }
        if (this.data.spcExits == "Y")
          additionalApplicationInfo
            .getSPCCodeTBox()
            .clear()
            .type(this.data.spcCode)
            .type("{downarrow}")
            .type("{enter}");
      });
    additionalApplicationInfo.getSaveAndContinueButton().click();
    cy.url().should("include", "/consent");
    cy.log("Additional application form is successfully completed");
    submissionPage.getAgreeCheckbox().click().wait(2000);
    //submissionPage.getSubmitApplicationButton().click().wait(20000);
  });
});
