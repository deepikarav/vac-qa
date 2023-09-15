///<reference types="Cypress"/>

/*import LoginPage from "../support/pageObjects/LoginPage.js"
import HomePage from "../support/pageObjects/HomePage.js"
import EmploymentHistoryPage from "../support/pageObjects/EmploymentHistoryPage.js"
import Navigation from "../support/pageObjects/Navigation.js"

describe('Test Suite', function()
{
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const navigation = new Navigation()
    const employmentHistoryPage = new EmploymentHistoryPage()

    beforeEach(function()
    {

        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        
    })

    it('Employment History form fill test', function()
    {
        cy.visit(Cypress.env('url') + 'login')
        loginPage.getEmailTBox().type(this.data.loginEmail) 
        loginPage.getNextButton().click()
        loginPage.getPasswordTBox().type(this.data.loginPassword)
        loginPage.getLoginButton().click()
        {
            loginPage.getVerificationCodeTBox().should('be.visible').type(this.data.loginVerificationCode)
            loginPage.getConfirmCodeButton().click()
        }
        cy.url().should('include', '/home')
        cy.log("User successfully logged into VAC Portal")
        cy.wait(2000)
        homePage.getEditButton().click()
        cy.url().should('include', '/personal-details')*/

        import SignInPage from "../support/pageObjects/SignInPage.js";

        import TermsAndConditionsPage from "../support/pageObjects/TermsAndConditionsPage";
        
        import HomePage from "../support/pageObjects/HomePage.js";
        
        import Navigation from "../support/pageObjects/Navigation.js";

        import EmploymentHistoryPage from "../support/pageObjects/EmploymentHistoryPage.js";
        
        
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
        
          it("Visit Details form fill test", function () {
        
            cy.visit(Cypress.env("url") + "signin");
        
            signInPage.getUsernameTBox().type(this.data.signInUserName);
        
            signInPage.getPasswordTBox().type(this.data.signInPassword);
        
            signInPage.getContinueButton().click();
        
            signInPage.getVerificationCodeTBox().should("be.visible").wait(1000);

            cy.get("#mfa-code_id").find("input").clear().type("101010");
        
            signInPage.getSignInButton().click();
         
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
        
                cy.wait(2500);        
              });
  
            navigation.getNavbarEmploymentHistory().click()
            employmentHistoryPage.getAddEmploymentButton().click({force:true}).then (function()
        {
            employmentHistoryPage.getEmployerTBox().clear().type(this.data.employerName)
            employmentHistoryPage.getFromYearDropDown().clear().type(this.data.employmentFromYear)
            employmentHistoryPage.getFromMonthDropDown().clear().type(this.data.employmentFromMonth)
            employmentHistoryPage.getToYearDropDown().clear().type(this.data.employmentToYear)
            employmentHistoryPage.getToMonthDropDown().clear().type(this.data.employmentToMonth)
            employmentHistoryPage.getActivityOccupation().clear().type("tester")
            employmentHistoryPage.getCityOfOccupation().clear().type("Calgary")
            employmentHistoryPage.getCountryDropDown().clear().type(this.data.employmentCountry)
            
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
            employmentHistoryPage.getProvinceOfOccupation().clear().type("Alberta")
            employmentHistoryPage.getAddCurrentWork().click()
            employmentHistoryPage.getSaveAndContinueButton().click()
          
        cy.url().should('include','summary')
        cy.log("Employment History details Form successfully completed")
    })
          })
        })
    


