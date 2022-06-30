class SignUpPage
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
        return cy.get("button[type='submit']")
    }

    getLoginLink()
    {
        return cy.get('.link-primary')
    }

    getConfirmEmailText()
    {
        return cy.get("p[class='page-subtitle'] strong")
    }

    getChangeEmailLink()
    {
        return cy.get('.page-link')
    }

    getPasswordTBox()
    {
        return cy.get('#password-input')
    }

    getSignUpButton()
    {
        return cy.get("button[type='submit']")
    }

    getVerificationCodeTBox()
    {
        return cy.get('#confirm-input')
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

export default SignUpPage
