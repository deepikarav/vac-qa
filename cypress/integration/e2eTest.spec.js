import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import GeneralInformationPage from "../support/pageObjects/GeneralInformationPage.js"
import LanguageInformationPage from "../support/pageObjects/LanguageInformationPage.js"
import ContactInformationPage from "../support/pageObjects/ContactInformationPage"
import PassportPage from "../support/pageObjects/PassportPage.js"
import VisitDetailsPage from "../support/pageObjects/VisitDetailsPage.js"
import EducationHistoryPage from "../support/pageObjects/EducationHistoryPage.js"
import EmploymentHistoryPage from "../support/pageObjects/EmploymentHistoryPage.js"
import BackgroundInformationPage from "../support/pageObjects/BackgroundInformationPage.js"
import SummaryPage from "../support/pageObjects/SummaryPage.js"

describe('Test Suite', function()
{
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const generalInformationPage = new GeneralInformationPage()
    const languageInfoPage = new LanguageInformationPage()
    const contactInformationPage = new ContactInformationPage()
    const passportPage = new PassportPage()
    const visitDetailsPage = new VisitDetailsPage()
    const educationHistoryPage = new EducationHistoryPage()
    const employmentHistoryPage = new EmploymentHistoryPage()
    const backgroundInfoPage = new BackgroundInformationPage()
    const summaryPage = new SummaryPage()

    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })
    it('End to End Application Test ', function()
    {
        cy.visit(Cypress.env('url') + 'login')
        loginPage.getLogo().should('be.visible')
        loginPage.getTitle().should('have.text', this.data.loginPageTitleEn)
        loginPage.getEmailTBox().type(this.data.loginEmail)
        loginPage.getNextButton().click()
        loginPage.getPasswordTBox().type(this.data.loginPassword)
        loginPage.getLoginButton().click()
        {
            loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.loginVerificationCode)
            loginPage.getConfirmCodeButton().click()
        }
        homePage.getAddApplicationButton().should('be.visible')
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal")
        cy.wait(2000)
        homePage.getEditButton().should('be.visible').click()
        generalInformationPage.getHeader().should('have.text', this.data.generalInformationPageHeader)
        generalInformationPage.getLastNameTBox().clear({force:true}).first().type(this.data.lastName).should('have.value',this.data.lastName)
        generalInformationPage.getFirstNameTBox().clear({force:true}).first().type(this.data.firstName).should('have.value', this.data.firstName)
        generalInformationPage.getPastNameNoRadio().click()
        generalInformationPage.getGenderFemaleRadio().click()
        generalInformationPage.getDobYearTBox().clear({force:true}).first().type(this.data.year).should('have.value', this.data.year)
        generalInformationPage.getDobMonthTBox().clear({force:true}).first().type(this.data.month).should('have.value', this.data.month)
        generalInformationPage.getDobDayTBox().clear({force:true}).first().type(this.data.day).should('have.value', this.data.day)
        generalInformationPage.getCountryTBox().clear().type(this.data.birthCountry).should('have.value', this.data.birthCountry)
        generalInformationPage.getCityTBox().clear().type(this.data.birthCity).should('have.value', this.data.birthCity)
        generalInformationPage.getMaritalStatusTBox().type(this.data.relationshipStatus)
        generalInformationPage.getRelationshipSingleRadio().click()
        generalInformationPage.getPrevPartnerNoRadio().click()
        generalInformationPage.getSaveAndContinueButton().click()
        cy.url().should('include','languages')
        cy.log("General Information Form is successfully completed")
        languageInfoPage.getHeaderText().should('have.text', this.data.languagePageHeader )
        languageInfoPage.getNativeLanguageDropDown().clear().type(this.data.nativeLanguage).click({force:true})
        languageInfoPage.getCommunicationLanguageRadio().click()
        languageInfoPage.getPreferredLanguageRadio().click()
        languageInfoPage.getProficiencyTestRadio().click()
        languageInfoPage.getSaveAndContinueButton().click()
        cy.url().should('include','/contact-information')
        cy.log("Language Information Form is successfully completed")
        contactInformationPage.getHeader().should('have.text', this.data.contactInformationPageHeader )
        contactInformationPage.getPOTBox().clear().type(this.data.poBox).should('have.value', this.data.poBox)
        contactInformationPage.getApartmentUnitTBox().clear().type(this.data.aptUnit).should('have.value', this.data.aptUnit)
        contactInformationPage.getAddressTBox().clear().type(this.data.address).should('have.value', this.data.address)
        contactInformationPage.getCityTownTBox().clear().type(this.data.cityTown).should('have.value', this.data.cityTown)
        contactInformationPage.getCountryDropDown().type(this.data.country)
        contactInformationPage.getCountryDropDownInput().click()
        contactInformationPage.getProvinceTBox().clear().type(this.data.province).should('have.value', this.data.province)
        contactInformationPage.getPostalCodeTBox().clear().type(this.data.postalCode).should('have.value', this.data.postalCode)
        contactInformationPage.getDistrictTBox().clear().type(this.data.district).should('have.value', this.data.district)
        contactInformationPage.getMailingAddressRadio().click()
        contactInformationPage.getEmailAddressTBox().clear().type(this.data.emailAddress).should('have.value', this.data.emailAddress)
        contactInformationPage.getAddTelephoneButton().click()
        contactInformationPage.getPrimaryNumberRadio().click()
        contactInformationPage.getTelephoneCountry().click()
        contactInformationPage.getTelephoneType().click()
        contactInformationPage.getDialCodeTBox().clear().type(this.data.dialCode).should('have.value', this.data.dialCode)
        contactInformationPage.getTelephoneNumberTBox().clear().type(this.data.telephoneNumber).should('have.value', this.data.telephoneNumber)
        contactInformationPage.getExtensionTBox().clear().type(this.data.extension).should('have.value', this.data.extension)
        contactInformationPage.getAddNumberButton().should('be.enabled').click().then (function()
        {
            contactInformationPage.getTelephoneFromGrid().should('have.text',this.data.telephoneNumber)
            contactInformationPage.getSaveButton().should('be.enabled').click() 
        })
        cy.url().should('include','/passport')
        cy.log("Contact Information Form successfully completed")
        passportPage.getPassportHeader().should('have.text', this.data.passportPageHeader )
        passportPage.getPassportNumberTBox().clear().type(this.data.passportNumber)
        passportPage.getCountryDropDown().type('C')
        passportPage.getCountryIssueSelect().click()
        passportPage.getIssueYearDropDown().clear().type(this.data.issueYear)
        passportPage.getIssueMonthDropDown().clear().type(this.data.issueMonth)
        passportPage.getIssueDayDropDown().clear().type(this.data.issueDay)
        passportPage.getExpiryYearDropDown().clear().type(this.data.expiryYear)
        passportPage.getExpiryMonthDropDown().clear().type(this.data.expiryMonth)
        passportPage.getExpiryDayDropDown().clear().type(this.data.expiryDay)
        passportPage.getPassportTypeDropDown().click()
        passportPage.getDiplomaticTypeSelect().click()
        passportPage.getTaiwanRadio().click()
        passportPage.getIsraelRadio().click()
        passportPage.getNationalIDRadio().click()
        passportPage.getNationalIDDocumentNumberTBox().clear().type(this.data.nationalIDDocumentNumber)
        passportPage.getNationalIDCountryIssueDropDown().click()
        passportPage.getNationalIDCountrySelect().click()
        passportPage.getNationalIDIssueYearDropDown().clear().type(this.data.issueYear)
        passportPage.getNationalIDIssueMonthDropDown().clear().type(this.data.issueMonth)
        passportPage.getNationalIDCIssueDayDropDown().clear().type(this.data.issueDay)
        passportPage.getNationalIDExpiryYearDropDown().clear().type(this.data.expiryYear)
        passportPage.getNationalIDExpiryMonthDropDown().clear().type(this.data.expiryMonth)
        passportPage.getNationalIDExpiryDayDropDown().clear().type(this.data.expiryDay)
        passportPage.getUSPRStatusRadio().click()
        passportPage.getUSPRDocumentNumberTBox().type(this.data.usPRDocumentNumber)
        passportPage.getUSPRExpiryYearDropDown().type(this.data.expiryYear)
        passportPage.getUSPRExpiryMonthDropDown().type(this.data.expiryMonth)
        passportPage.getUSPRxpiryDayDropDown().type(this.data.expiryDay)
        passportPage.getSaveAndContinueButton().click()
        cy.url().should('include','/visit-details')
        cy.log("Passport Form is successfully completed")
        visitDetailsPage.getVisitDetailsHeader().should('have.text', this.data.visitDetailsPageHeader)
        visitDetailsPage.getVisitPurposeDropDown().click()
        cy.get("mat-option[role='option']").each(($e1, index, $list) =>{

                const visitPurpose = $e1.text()
                if (visitPurpose.includes('Tourism'))
                {
                    cy.wrap($e1).click()
                }
                else
                {
                    cy.log($e1.text())
                }
            })
        visitDetailsPage.getFromYearDropDown().clear().type(this.data.visitFromYear)
        visitDetailsPage.getFromMonthDropDown().clear().type(this.data.visitFromMonth)
        visitDetailsPage.getFromDayDropDown().clear().type(this.data.visitFromDay)
        visitDetailsPage.getToYearDropDown().clear().type(this.data.visitToYear)
        visitDetailsPage.getToMonthDropDown().clear().type(this.data.visitToMonth)
        visitDetailsPage.getToDayDropDown().clear().type(this.data.visitToDay)
        visitDetailsPage.getFundsTBox().clear().type(this.data.visitFunds)
        visitDetailsPage.getAddLocationButton().click().then (function()
        {
            cy.wait(2000)
            visitDetailsPage.getVisitDialogHeader().should('have.text', this.data.visitDialogHeader)
            visitDetailsPage.getNameTBox().clear().type(this.data.visitLocationName)
            visitDetailsPage.getRelationshipDropDown().click()
            visitDetailsPage.getSelectRelationshipDropDown().click()
            visitDetailsPage.getAddress().clear().type(this.data.visitLocationAddress)
            visitDetailsPage.getAddLocationDialogButton().click()
        })
        //visitDetailsPage.getVisitDetailsGridName().should('have.text', this.data.visitLocationName)
        //visitDetailsPage.getVisitDetailsGridRelationship().should('have.text', this.data.visitLocationRelationship)
        //visitDetailsPage.getVisitDetailsGridAddress().should('have.text', this.data.visitLocationAddress)
        visitDetailsPage.getSaveAndContinueButton().click()
        cy.url().should('include','education-history')
        cy.log("Visit details Form successfully completed")
        educationHistoryPage.getHeader().should('have.text', this.data.educationPageHeader )
        educationHistoryPage.getEducationHistoryYesRadio().click({force:true})
        educationHistoryPage.getAddEducationButton().click().then (function()
        {
            educationHistoryPage.getEducationHistoryDialogHeader().should('have.text', this.data.educationDialogHeader)
            educationHistoryPage.getFromYearDropDown().clear().type(this.data.educationFromYear)
            educationHistoryPage.getFromMonthDropDown().clear().type(this.data.educationFromMonth)
            educationHistoryPage.getToYearDropDown().clear().type(this.data.educationToYear)
            educationHistoryPage.getToMonthDropDown().clear().type(this.data.educationToMonth)
            educationHistoryPage.getInstituteTBox().clear().type(this.data.instituteName)
            educationHistoryPage.getCityTBox().clear().type(this.data.educationCity)
            educationHistoryPage.getCountryDropDown().clear().type(this.data.educationCountry)
            cy.get("mat-option[role='option']").each(($e1, index, $list) => {

                const countryName = $e1.text()
                if (countryName.includes('Canada'))
                {
                    cy.wrap($e1).click()
                }
                else 
                {
                    cy.log($e1.text())
                }
            })
            educationHistoryPage.getMajorDropDown().click()
            cy.get("mat-option[role='option']").each(($e1, index, $list) =>{

                const majorName = $e1.text()
                if (majorName.includes('Computer'))
                {
                    cy.wrap($e1).click()
                }
                else
                {
                    cy.log($e1.text())
                }
            })
            educationHistoryPage.getCompletedStatusRadio().click()
            educationHistoryPage.getSubmitButton().click()
        })
        educationHistoryPage.getEducationTableInstituteNameText().should('have.text', this.data.instituteName)
        educationHistoryPage.getEducationTableCountryNameText().should('have.text', this.data.educationCountry)
        educationHistoryPage.getEducationTableMajorText().should('have.text', this.data.majorName)
        educationHistoryPage.getSaveAndContinueButton().click()
        cy.url().should('include','employment-history')
        cy.log("Education History details Form is successfully completed")
        employmentHistoryPage.getHeader().should('have.text', this.data.employmentPageHeader)
        employmentHistoryPage.getEmploymentHistoryYesRadio().click({force:true})
        employmentHistoryPage.getAddEmploymentButton().click().then (function()
        {
            employmentHistoryPage.getEmploymentHistoryDialogHeader().should('have.text', this.data.employmentDialogHeader)
            employmentHistoryPage.getEmployerTBox().clear().type(this.data.employerName)
            employmentHistoryPage.getFromYearDropDown().clear().type(this.data.employmentFromYear)
            employmentHistoryPage.getFromMonthDropDown().clear().type(this.data.employmentFromMonth)
            employmentHistoryPage.getToYearDropDown().clear().type(this.data.employmentToYear)
            employmentHistoryPage.getToMonthDropDown().clear().type(this.data.employmentToMonth)
            employmentHistoryPage.getCountryDropDown().type(this.data.employmentCountry)
            cy.get("mat-option[role='option']").each(($e1, index, $list) => {

                const countryName = $e1.text()
                if (countryName.includes('Canada'))
                {
                    cy.wrap($e1).click()
                }
                else 
                {
                    cy.log($e1.text())
                }
            })
            employmentHistoryPage.getEmployerAddressTBox().clear().type(this.data.employmentAddress).then (function(){

                cy.get('.mat-option-text').each(($e1, index, $list) => {

                const addressText = $e1.text()

                if (addressText.includes('900-123 Slater St, Ottawa, ON, K1P 5H2'))
                {
                    cy.wrap($e1).click()
                }
                else
                {
                    cy.log($e1.text())
                }
                
                })
            })
            
            employmentHistoryPage.getJobDesciptionTBox().type(this.data.jobDescription)
            employmentHistoryPage.getJobTitleTBox().type(this.data.jobTitle)
            employmentHistoryPage.getSupervisorNameTBox().type(this.data.supervisorName)
            employmentHistoryPage.getSupervisorNumberTBox().type(this.data.supervisorNumber)
            employmentHistoryPage.getSubmitButton().click()
        })

        employmentHistoryPage.getEmploymentTableEmployerNameText().should('have.text', this.data.employerName)
        employmentHistoryPage.getEmploymentTableCountryNameText().should('have.text', this.data.employmentCountry)
        employmentHistoryPage.getEmploymentTableSupervisorNumberText().should('have.text', this.data.supervisorNumber)
        employmentHistoryPage.getSaveAndContinueButton().click()
        cy.url().should('include','background-information')
        cy.log("Employment History details Form successfully completed")
        backgroundInfoPage.getHeaderText().should('have.text', this.data.backgroundInfoPageHeader )
        backgroundInfoPage.getAgeGroupRadio().click().then(function(){
            
            backgroundInfoPage.getTuberulosisRadio().click()
            backgroundInfoPage.getDisorderRadio().click()
            backgroundInfoPage.getRemainedBeyondRadio().click()
            backgroundInfoPage.getRefusedToLeaveRadio().click()
            backgroundInfoPage.getPreviouslyAppliedRadio().click()
            backgroundInfoPage.getVisaStatusDetailsTBox().clear().type(this.data.visaStatusDetails)
            backgroundInfoPage.getOffenceRadio().click()
            backgroundInfoPage.getMilitaryServiceRadio().click()
            backgroundInfoPage.getServiceDetailsTBox().clear().type(this.data.serviceDetails)
            backgroundInfoPage.getPoliticalRadio().click()
            backgroundInfoPage.getWitnessedRadio().click()
            backgroundInfoPage.getSaveAndContinueButton().click()
        })
        cy.url().should('include','/summary')
        cy.log("Background Information Form is successfully completed")
        summaryPage.getHeaderText().should('have.text', this.data.summaryPageHeader)
        summaryPage.getExpandAllButton().click()
        summaryPage.getConfirmButton().click()
        cy.log("Application form successfully submitted")
    })

})
