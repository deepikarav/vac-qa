class SignInPage
{
    
    getLogo()
    {
        return cy.get("img[width='280']")
    }

    getTitle()
    {
        return cy.get('h1')
    }

    getSubtitle()
    {
        return cy.get('h3')
    }

    getUsernameTBox()
    {
        return cy.get("input[type='text']")
    }

    getPasswordTBox()
    {
        return cy.get("input[type='password']")
    }

    getContinueButton()
    {
        return cy.get("app-button[ng-reflect-label='Continue']")
    }
    
    getResetPasswordLink()
    {
        return cy.get("a[href='/en/reset-password']")
    }

    getVerificationCodeTBox()
    {
        return cy.get('#mfa-code_id')
    }

    getConfirmCodeButton()
    {
        return cy.get("button[type='submit']")
    }

    getShowPasswordIcon()
    {
        return cy.get("mat-icon[aria-label='click to show or hide']")
    }

}

export default SignInPage