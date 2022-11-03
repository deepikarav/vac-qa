class ResetPasswordPage
{
    
    getResetPasswordPageTitle()
    {
        return cy.get('.form-title')
    }

    getResetPasswordEmailAddressTBox()
    {
        return cy.get("input[type='email']")
    }

    getRequestPasswordResetButton()
    {
        return cy.get("#undefined")
    }
    
    getVerifyYourEmailPageTitle()
    {
        return cy.get('.form-title')
    }

    getVerificationCodeTBox()
    {
        return cy.get("input[placeholder='Enter the verification code']")
    }

    getNewPasswordTBox()
    {
        return cy.get("div[id='new-password-id'] div input[type='password']")
    }

    getConfirmPasswordTBox()
    {
        return cy.get("div[id='confirm-new-password-id'] div input[type='password']")
    }

    getUpdatePasswordButton()
    {
        return cy.get("#undefined")
    }

    getShowPasswordIcon()
    {
        return cy.get("mat-icon[aria-label='click to show or hide']")
    }

    getPasswordResetSuccessfulHeader()
    {
        return cy.get(".page-title")
    }

    getPasswordResetSuccessfullMessage()
    {
        return cy.get(".form-subtitle")
    }

    getBackToSignInLink()
    {
        return cy.get("a[href='/en/signin']")
    }
    
}

export default ResetPasswordPage