class LoginPage
{
    getLogo()
    {
        return cy.get('.logo')
    }

    getTitle()
    {
        return cy.get('h3')
    }

    getEmailTBox()
    {
        return cy.get('#email-input')
    }

    getNextButton()
    {
        return cy.get('.btn.btn-before-login')
    }

    getSignUpLink()
    {
        return cy.get("a[href='/en/signup']")
    }

    getEmailConfirmText()
    {
        return cy.get('.page-subtitle')
    }

    getChangeAccountLink()
    {
        return cy.get('.page-link')
    }

    getPasswordTBox()
    {
        return cy.get('#password-input')
    }
    
    getForgotPasswordLink()
    {
        return cy.get('.forgot-password')
    }

    getLoginButton()
    {
        return cy.get("button[type='submit']")
    }
    
    getVerificationCodeTBox()
    {
        return cy.get('#mfa-code_id')
    }

    getConfirmCodeButton()
    {
        return cy.get("button[type='submit']")
    }

    getResendCodeLink()
    {
        return cy.get('.resend-code')
    }

    
}

export default LoginPage